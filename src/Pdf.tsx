import React from 'react';
import { Page, Text, View, Document, StyleSheet, Canvas } from '@react-pdf/renderer';
import { paintBellyBand } from './belly-band-painter'
import { BellyBand } from './belly-band'
import { useWidth } from './redux/width-redux'

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

function paintFunc(painter: any, width: number, availableHeight: number): null {
  paintBellyBand(painter, new BellyBand({
    width,
    height: 80,
    depth: 8,
  }), {
    x: -100,
    y: 72,
  });
  return null;
}

// Create Document Component
export const MyPdf = () => {
  const {width} = useWidth();

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
        <Canvas style={styles.canvas} paint={(painter) => paintFunc(painter, width, 0)}>
        </Canvas>
      </Page>
    </Document>
  )
};
