import { BellyBandSpec } from './belly-band'

const pointsPerInch = 72;
const mmPerInch = 24.4;
const pointsPerMm = pointsPerInch / mmPerInch;

export type BoundingBox = {
  left: number
  top: number
  width: number
  height: number
}

export type Line = {
  startX: number
  startY: number
  endX: number
  endY: number
}

export type BoundedText = {
  text: string
  textSize: number
  rotate: boolean
  bound: BoundingBox
}

const overlapPercentage = 0.25;
const endWidth = 0.5 + overlapPercentage;

export function getRectangles(specs: BellyBandSpec[]): BoundingBox[] {
  const rectangles: BoundingBox[] = [];
  let x = 40;
  let y = 40;

  for (let spec of specs) {
    const widthPoints = spec.width * pointsPerMm;
    const heightPoints = spec.height * pointsPerMm;
    const depthPoints = spec.depth * pointsPerMm;

    rectangles.push(
      {
        left: x,
        top: y,
        width: heightPoints,
        height: widthPoints * endWidth,
      },
      {
        left: x,
        top: y + widthPoints * endWidth,
        width: heightPoints,
        height: depthPoints,
      },
      {
        left: x,
        top: y + widthPoints * endWidth + depthPoints,
        width: heightPoints,
        height: widthPoints,
      },
      {
        left: x,
        top: y + widthPoints + widthPoints * endWidth + depthPoints,
        width: heightPoints,
        height: depthPoints,
      },
      {
        left: x,
        top: y + widthPoints + widthPoints * endWidth + depthPoints * 2,
        width: heightPoints,
        height: widthPoints * endWidth,
      },
    );

    x += (spec.height + 10) * pointsPerMm;
  }

  return rectangles;
}

export function getCutLines(specs: BellyBandSpec[]): Line[] {
  const lines: Line[] = [];
  let x = 40;
  let y = 40;

  for (let spec of specs) {
    const widthPoints = spec.width * pointsPerMm;
    const heightPoints = spec.height * pointsPerMm;
    const depthPoints = spec.depth * pointsPerMm;

    lines.push({
      startX: x,
      startY: y + widthPoints * overlapPercentage,
      endX: x + heightPoints / 2,
      endY: y + widthPoints * overlapPercentage,
    }, {
      startX: x + heightPoints / 2,
      startY: y + widthPoints + widthPoints * endWidth + depthPoints * 2 + widthPoints * 0.5,
      endX: x + heightPoints,
      endY: y + widthPoints + widthPoints * endWidth + depthPoints * 2 + widthPoints * 0.5,
    })

    x += (spec.height + 10) * pointsPerMm;
  }

  return lines;
}

export function getBoundedTexts(specs: BellyBandSpec[]): BoundedText[] {
  const boundedTexts: BoundedText[] = [];
  let x = 40;
  let y = 40;

  for (let spec of specs) {
    const widthPoints = spec.width * pointsPerMm;
    const heightPoints = spec.height * pointsPerMm;
    const depthPoints = spec.depth * pointsPerMm;

    boundedTexts.push(
      {
        text: spec.text,
        textSize: spec.textSize,
        rotate: spec.rotate,
        bound: {
          left: x,
          top: y + widthPoints * endWidth + depthPoints,
          width: heightPoints,
          height: widthPoints,
        },
      }
    );

    x += (spec.height + 10) * pointsPerMm;
  }

  return boundedTexts;
}