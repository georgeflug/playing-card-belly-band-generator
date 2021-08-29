const pointsPerInch = 72;
const mmPerInch = 24.4;
const pointsPerMm = pointsPerInch / mmPerInch;

type Rectangle = {
  width: number
  height: number
}

export function paintBellyBand(painter: any): void {
  const widthMm = 40;
  const heightMm = 60;
  const depthMm = 8;

  const widthPoints = widthMm * pointsPerMm;
  const heightPoints = heightMm * pointsPerMm;
  const depthPoints = depthMm * pointsPerMm;
  
  drawRectanglesVertically(painter, [
    {
      width: heightPoints,
      height: widthPoints * 0.75,
    },
    {
      width: heightPoints,
      height: depthPoints,
    },
    {
      width: heightPoints,
      height: widthPoints,
    },
    {
      width: heightPoints,
      height: depthPoints,
    },
    {
      width: heightPoints,
      height: widthPoints * 0.75,
    },
  ]);
}

function drawRectanglesVertically(painter: any, rectangles: Rectangle[]) {
  let startY = 0;
  for (let rect of rectangles) {
    painter.rect(0, startY, rect.width, rect.height).stroke();
    startY += rect.height;
  }
}