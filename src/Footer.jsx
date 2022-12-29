import avatar from "./avatar.png";

function Footer(props) {
  return (
    <div>
      <img
        src={avatar}
        alt="avatar"
        className="avatar-img rounded-circle me-3"
        width="10%"
      ></img>
      <p className="my-0 avatar-p">
        Creation of{" "}
        <button
          style={props.color[1]}
          onMouseEnter={() => {
            props.setColor([
              { color: "white" },
              { color: "hsl(178, 100%, 50%)" },
            ]);
          }}
          onMouseLeave={() => {
            props.setColor([{ color: "white" }, { color: "white" }]);
          }}
        >
          Jules Wyvern
        </button>
      </p>
    </div>
  );
}

export default Footer;
