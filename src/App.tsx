import { PDFViewer } from '@react-pdf/renderer'
import './App.css';
import { MyPdf } from './Pdf'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <div>
        <label>Width</label>
        <input type="text"></input>

        <label>Height</label>
        <input type="text"></input>

        <label>Depth</label>
        <input type="text"></input>
      </div>
      <div>
        <PDFViewer width="100%" height="1024px">
          <MyPdf />
        </PDFViewer>
      </div>
      {/* </header> */}
    </div>
  );
}

export default App;
