import { BellyBandSpec } from './belly-band'
import { getCutLines, getRectangles } from './belly-band-layout-calculator'
import { Painter } from './Painter'

export function paintBellyBands(painter: Painter, bellyBands: BellyBandSpec[]): null {
  for (let rect of getRectangles(bellyBands)) {
    painter.rect(rect.left, rect.top, rect.width, rect.height).stroke();
  }
  for (let line of getCutLines(bellyBands)) {
    painter.moveTo(line.startX, line.startY).lineTo(line.endX, line.endY).dash(5).stroke();
  }
  return null;
}
