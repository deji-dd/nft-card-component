import "./App.css";
import { useState } from "react";
import Nft from "./Nft";
import Description from "./Description";
import Footer from "./Footer";

function App() {
  let [color, setColor] = useState([{ color: "white" }, { color: "white" }]);
  let [opacity, setOpacity] = useState({ opacity: 0 });

  return (
    <div className="card card-div">
      <div className="card-body">
        <Nft opacity={opacity} setOpacity={setOpacity} />
        <Description color={color} setColor={setColor} />
        <hr className="mt-4"></hr>
        <Footer color={color} setColor={setColor} />
      </div>
      <footer className="mt-4">
        <p className="my-0 mx-auto">Made with {"<3"} by Deji</p>
      </footer>
    </div>
  );
}

export default App;
