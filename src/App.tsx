import { PDFViewer } from '@react-pdf/renderer'
import './App.css';
import { MyPdf } from './Pdf'
import { useWidth } from './width-redux'

function App() {
  const {width, setWidth} = useWidth();

  function handleWidthChange(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    setWidth(event.target.value);
  }

  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <div>
        <label>Width</label>
        <input type="text" value={width} onChange={handleWidthChange}></input>

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
