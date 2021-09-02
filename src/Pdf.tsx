import React from 'react';
import { Page, Text, View, Document, StyleSheet, Canvas } from '@react-pdf/renderer';
import { paintBellyBand } from './belly-band-painter'
import { BellyBand, BellyBandSpec } from './belly-band'
import { useWidth } from './redux/width-redux'
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

function paintFunc(painter: any, spec: BellyBandSpec): null {
  paintBellyBand(painter, new BellyBand({
    width: spec.width,
    height: spec.height,
    depth: spec.depth,
  }), {
    x: -100,
    y: 72,
  });
  return null;
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
        <Canvas style={styles.canvas} paint={(painter) => paintFunc(painter, bellyBands[0])}>
        </Canvas>
      </Page>
    </Document>
  )
};
