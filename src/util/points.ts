export default function drawPoint(
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
  ctx.beginPath()
  ctx.fillStyle = color
  ctx.arc(
    dims.xOrigin + x * dims.xCoordScale,
    dims.yOrigin - y * dims.yCoordScale,
    radius,
    0,
    2 * Math.PI,
  )
  ctx.fill()
}
