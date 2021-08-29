import React from 'react';
import { Page, Text, View, Document, StyleSheet, Canvas } from '@react-pdf/renderer';
import { paintBellyBand } from './belly-band-painter'

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

function paintFunc(painter: any, availableWidth: number, availableHeight: number): null {
  // see examples @ http://pdfkit.org/demo/browser.html
  // painter
  //   .moveTo(100, 150)
  //   .lineTo(100, 250)
  //   .lineTo(200, 250)
  //   .fill('#FF3300');
  paintBellyBand(painter);
  return null;
}

// Create Document Component
export const MyPdf = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
      <Canvas style={styles.canvas} paint={paintFunc}>
      </Canvas>
    </Page>
  </Document>
);
