import { RelativeDimensions } from '@/types'

export default function drawGrid(
  ctx: CanvasRenderingContext2D,
  dimensions: Omit<RelativeDimensions, 'resolutionRatio'>,
) {
  const {
    xOriginRatio,
    yOriginRatio,
    spanHoriz,
    spanVert,
    canvasWidth,
    canvasHeight,
    unitsSize,
  } = dimensions
  const xOrigin = xOriginRatio * canvasWidth
  const yOrigin = yOriginRatio * canvasHeight

  ctx.beginPath()
  ctx.strokeStyle = '#373737'
  ctx.fillStyle = '#777'
  ctx.font = `${unitsSize}px sans-serif`

  // Drawing axes
  ctx.lineWidth = 3
  ctx.moveTo(xOrigin, 0)
  ctx.lineTo(xOrigin, canvasHeight)
  ctx.moveTo(0, yOrigin)
  ctx.lineTo(canvasWidth, yOrigin)
  ctx.stroke()
  ctx.fillText('0', xOrigin - unitsSize, yOrigin + unitsSize)

  const cellWidth = canvasWidth / spanHoriz
  const cellHeight = canvasHeight / spanVert

  // Drawing grid lines
  ctx.beginPath()
  ctx.lineWidth = 1

  for (
    let x = xOrigin + cellWidth, i = 1;
    x < canvasWidth;
    x += cellWidth, i++
  ) {
    ctx.moveTo(x, 0)
    ctx.lineTo(x, canvasHeight)
    ctx.fillText(i + '', x - unitsSize, yOrigin + unitsSize)
  }
  for (let x = xOrigin - cellWidth, i = -1; x > 0; x -= cellWidth, i--) {
    ctx.moveTo(x, 0)
    ctx.lineTo(x, canvasHeight)
    ctx.fillText(i + '', x - unitsSize, yOrigin + unitsSize)
  }
  for (
    let y = yOrigin + cellHeight, i = -1;
    y < canvasHeight;
    y += cellHeight, i--
  ) {
    ctx.moveTo(0, y)
    ctx.lineTo(canvasWidth, y)
    ctx.fillText(i + '', xOrigin - 1.2 * unitsSize, y + unitsSize)
  }
  for (let y = yOrigin - cellHeight, i = 1; y > 0; y -= cellHeight, i++) {
    ctx.moveTo(0, y)
    ctx.lineTo(canvasWidth, y)
    ctx.fillText(i + '', xOrigin - unitsSize, y + unitsSize)
  }

  ctx.stroke()
}
