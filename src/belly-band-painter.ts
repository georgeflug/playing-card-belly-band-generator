import { BellyBand, Rectangle } from './belly-band'

export type Offset = {
  x: number
  y: number
}

export function paintBellyBand(painter: any, bellyBand: BellyBand, offset: Offset): void {
  drawRectanglesVertically(painter, bellyBand.getRectangles(), offset);
}

function drawRectanglesVertically(painter: any, rectangles: Rectangle[], offset: Offset) {
  let startY = offset.y;
  for (let rect of rectangles) {
    painter.rect(offset.x, startY, rect.width, rect.height).stroke();
    startY += rect.height;
  }
}