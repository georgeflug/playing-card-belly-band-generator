import { BellyBand, Rectangle } from './belly-band'

export function paintBellyBand(painter: any, bellyBand: BellyBand): void {
  drawRectanglesVertically(painter, bellyBand.getRectangles());
}

function drawRectanglesVertically(painter: any, rectangles: Rectangle[]) {
  let startY = 0;
  for (let rect of rectangles) {
    painter.rect(0, startY, rect.width, rect.height).stroke();
    startY += rect.height;
  }
}