import React from 'react';
import { Page, Text, View, Document, StyleSheet, Canvas } from '@react-pdf/renderer';
import { paintBellyBands } from './belly-band-painter'
import { useBellyBands } from './redux/belly-band-redux'
import { getBoundedTexts } from './belly-band-layout-calculator'
import { Font } from '@react-pdf/renderer'

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

const hyphenationCallback = (word: string): string[] => {
  // disable hyphenation
  return [word];
}

Font.registerHyphenationCallback(hyphenationCallback);

// Create Document Component
export const MyPdf = () => {
  const { bellyBands } = useBellyBands();

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Canvas style={styles.canvas} paint={(painter) => paintBellyBands(painter, bellyBands)}>
        </Canvas>
        { getBoundedTexts(bellyBands).map(boundedText => (
          <View key={Math.random()} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'absolute', ...boundedText.bound }}>
            <Text style={{ transform: boundedText.rotate ? 'rotate(0)' : 'rotate(-90)', fontSize: boundedText.textSize }}>{boundedText.text}</Text>          
          </View>
        ))
        }
      </Page>
    </Document>
  )
};
