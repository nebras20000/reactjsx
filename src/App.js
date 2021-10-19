import logo from './logo.svg';
import './App.css';
import './style.css'
import img1 from "./images/download.jpg"

function App() {
  return (
    <>
    <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
      <h1 className="title_red">Your name here</h1>
      <br />
      <img src={img1} />
      <br />
      <img src="/images/download2.jpg" />
    </div>
    <video width={320} height={240} controls>
      <source src="myVideo.mp4" type="video/mp4" />
    </video>
  </>
  );
}

export default App;
