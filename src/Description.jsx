import ethereum from "./ethereum.svg";
import clock from "./clock.svg";

function Description(props) {
  return (
    <div>
      <div className="mt-3">
        <button>
          <h4
            style={props.color[0]}
            onMouseEnter={() => {
              props.setColor([
                { color: "hsl(178, 100%, 50%)" },
                { color: "white" },
              ]);
            }}
            onMouseLeave={() => {
              props.setColor([{ color: "white" }, { color: "white" }]);
            }}
          >
            Equilibrium #3429
          </h4>
        </button>
        <p className="mt-3">
          Our Equilibrium collection promotes balance and calm.
        </p>
      </div>
      <div className="row justify-content-between mt-4">
        <div className="col-5">
          <img alt="ethereum" className="icon me-2" src={ethereum}></img>
          <p className="my-0 ethereum-p mx-0">0.041 ETH</p>
        </div>
        <div className="col-5 clock-div">
          <img alt="clock" className="icon me-1" src={clock}></img>
          <p className="my-0 mx-0 clock-p">3 days left</p>
        </div>
      </div>
    </div>
  );
}

export default Description;
