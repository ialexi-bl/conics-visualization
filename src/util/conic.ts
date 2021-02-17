import { CoefsMap, Conic, AbsoluteDimensions } from '@/types'

function getConicFunction(
  coefs: CoefsMap,
  xOrigin: number,
  yOrigin: number,
  wunit: number,
  hunit: number,
) {
  return (x: number, y: number) => {
    x = (x - xOrigin) * wunit
    y = (yOrigin - y) * hunit
    return (
      coefs.a11 * x * x +
      coefs.a12 * x * y * 2 +
      coefs.a22 * y * y +
      coefs.a13 * x +
      coefs.a23 * y +
      coefs.a33
    )
  }
}

export function getConicPath(
  coefs: CoefsMap,
  dims: AbsoluteDimensions,
): Path2D {
  const { xOrigin, yOrigin, resolution: cell } = dims

  const wunit = dims.spanHoriz / dims.canvasWidth
  const hunit = dims.spanVert / dims.canvasHeight
  const handlers = getHandlers(cell)

  const path = new Path2D()
  const f = getConicFunction(coefs, xOrigin, yOrigin, wunit, hunit)
  // left top, right top, left bottom, right borrom
  let lt, rt, lb, rb

  for (let y = 0; y < dims.canvasHeight; y += cell) {
    lt = f(0, y) >= 0
    lb = f(0, y + cell) >= 0
    for (let x = 0; x < dims.canvasWidth; x += cell) {
      rt = f(x + cell, y) >= 0
      rb = f(x + cell, y + cell) >= 0

      // @ts-ignore
      const handler = (lt << 3) | (rt << 2) | (rb << 1) | lb
      handlers[handler](x, y, path, f)

      lt = rt
      lb = rb
    }
  }
  return path
}

function getHandlers(cell: number) {
  function interpolateY(ax: number, ay: number, f: Conic) {
    const bx = ax
    const by = ay + cell
    const ac = f(ax, ay)
    return ay + ((by - ay) * -ac) / (f(bx, by) - ac)
  }
  function interpolateX(ax: number, ay: number, f: Conic) {
    const bx = ax + cell
    const by = ay
    const ac = f(ax, ay)
    return ax + ((bx - ax) * -ac) / (f(bx, by) - ac)
  }

  const handlers: Record<
    number,
    (x: number, y: number, path: Path2D, f: Conic) => void
  > = {
    0b0000: () => {
      /* Shape doesn't cross the square */
    },
    0b0001: (x, y, path, f) => {
      // left & bottom
      path.moveTo(x, interpolateY(x, y, f))
      path.lineTo(interpolateX(x, y + cell, f), y + cell)
    },
    0b0010: (x, y, path, f) => {
      // right & bottom
      path.moveTo(x + cell, interpolateY(x + cell, y, f))
      path.lineTo(interpolateX(x, y + cell, f), y + cell)
    },
    0b0011: (x, y, path, f) => {
      // left & right
      path.moveTo(x, interpolateY(x, y, f))
      path.lineTo(x + cell, interpolateY(x + cell, y, f))
    },
    0b0100: (x, y, path, f) => {
      // top & right
      path.moveTo(interpolateX(x, y, f), y)
      path.lineTo(x + cell, interpolateY(x + cell, y, f))
    },
    0b0110: (x, y, path, f) => {
      // top & bottom
      path.moveTo(interpolateX(x, y, f), y)
      path.lineTo(interpolateX(x, y + cell, f), y + cell)
    },
    0b0111: (x, y, path, f) => {
      // top & left
      path.moveTo(interpolateX(x, y, f), y)
      path.lineTo(x, interpolateY(x, y, f))
    },

    0b0101: (x, y, path, f) => {
      // top & left
      path.moveTo(interpolateX(x, y, f), y)
      path.lineTo(x, interpolateY(x, y, f))
      // right & bottom
      path.moveTo(x + cell, interpolateY(x + cell, y, f))
      path.lineTo(interpolateX(x, y + cell, f), y + cell)
    },
    0b1010: (x, y, path, f) => {
      // left & bottom
      path.moveTo(x, interpolateY(x, y, f))
      path.lineTo(interpolateX(x, y + cell, f), y + cell)
      // top & right
      path.moveTo(interpolateX(x, y, f), y)
      path.lineTo(x + cell, interpolateY(x + cell, y + cell, f))
    },
  }

  for (const i of [0b1000, 0b1001, 0b1011, 0b1100, 0b1101, 0b1110, 0b1111]) {
    handlers[i] = handlers[0b1111 - i]
  }

  return handlers
}
