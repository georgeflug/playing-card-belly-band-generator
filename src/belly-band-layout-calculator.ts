import { getTextOfJSDocComment } from 'typescript'
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

export type BoundedText = {
  text: string
  textSize: number
  bound: BoundingBox
}

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
        height: widthPoints * 0.75,
      },
      {
        left: x,
        top: y + widthPoints * 0.75,
        width: heightPoints,
        height: depthPoints,
      },
      {
        left: x,
        top: y + widthPoints * 0.75 + depthPoints,
        width: heightPoints,
        height: widthPoints,
      },
      {
        left: x,
        top: y + widthPoints * 1.75 + depthPoints,
        width: heightPoints,
        height: depthPoints,
      },
      {
        left: x,
        top: y + widthPoints * 1.75 + depthPoints * 2,
        width: heightPoints,
        height: widthPoints * 0.75,
      },
    );

    x += (spec.height + 10) * pointsPerMm;
  }

  return rectangles;
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
        bound: {
          left: x,
          top: y + widthPoints * 0.75 + depthPoints,
          width: heightPoints,
          height: widthPoints,
        },
      }
    );

    x += (spec.height + 10) * pointsPerMm;
  }

  return boundedTexts;
}