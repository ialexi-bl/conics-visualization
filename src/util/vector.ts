import drawPoint from './points'

const SQRT_3 = Math.sqrt(3)
const HEAD_SIDE = 20

export default function drawVector(
  ctx: CanvasRenderingContext2D,
  color: string,
  x: number,
  y: number,
  dims: {
    xOrigin: number
    yOrigin: number
    xCoordScale: number
    yCoordScale: number
  },
) {
  const xReal = dims.xOrigin + x * dims.xCoordScale
  const yReal = dims.yOrigin - y * dims.yCoordScale
  const offset = (HEAD_SIDE * SQRT_3) / 4
  const hypotenuse = Math.sqrt(x * x + y * y)
  const xHeadBase = xReal - HEAD_SIDE * (x / hypotenuse)
  const yHeadBase = yReal + HEAD_SIDE * (y / hypotenuse)

  ctx.strokeStyle = ctx.fillStyle = color

  ctx.beginPath()
  ctx.moveTo(dims.xOrigin, dims.yOrigin)
  ctx.lineTo(
    xReal - (offset * x) / hypotenuse,
    yReal + (offset * y) / hypotenuse,
  )
  ctx.stroke()

  // Drawing head
  ctx.beginPath()
  ctx.moveTo(xReal, yReal)
  ctx.lineTo(
    xReal + ((xHeadBase - xReal) * SQRT_3 - (yHeadBase - yReal)) / 2,
    yReal + (xHeadBase - xReal + (yHeadBase - yReal) * SQRT_3) / 2,
  )
  ctx.lineTo(
    xReal + ((xHeadBase - xReal) * SQRT_3 + (yHeadBase - yReal)) / 2,
    yReal + (-(xHeadBase - xReal) + (yHeadBase - yReal) * SQRT_3) / 2,
  )
  ctx.closePath
  ctx.fill()
}
export function drawVectorToPoint(
  ctx: CanvasRenderingContext2D,
  color: string,
  x: number,
  y: number,
  radius: number,
  dims: {
    xOrigin: number
    yOrigin: number
    xCoordScale: number
    yCoordScale: number
  },
) {
  const hypotenuse = Math.sqrt(x * x + y * y)
  drawVector(
    ctx,
    color,
    x - (radius / dims.xCoordScale) * (x / hypotenuse),
    y - (radius / dims.yCoordScale) * (y / hypotenuse),
    dims,
  )
  drawPoint(ctx, color, x, y, radius, dims)
}
