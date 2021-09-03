import React from 'react';
import { Page, Text, View, Document, StyleSheet, Canvas } from '@react-pdf/renderer';
import { paintBellyBand } from './belly-band-painter'
import { BellyBand, BellyBandSpec, pointsPerMm } from './belly-band'
import { useBellyBands } from './redux/belly-band-redux'

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    width: '100%',
    height: '1024px'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  canvas: {
    width: 300,
    height: 300
  }
});

function paintFunc(painter: any, specs: BellyBandSpec[]): null {
  let x = 0;
  let y = 40;

  specs.forEach(spec => {
    paintBellyBand(painter, new BellyBand(spec), {x, y});  
    x += (spec.height + 10) * pointsPerMm;
  })

  return null
}

// Create Document Component
export const MyPdf = () => {
  const { bellyBands } = useBellyBands();

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
        <Canvas style={styles.canvas} paint={(painter) => paintFunc(painter, bellyBands)}>
        </Canvas>
      </Page>
    </Document>
  )
};
