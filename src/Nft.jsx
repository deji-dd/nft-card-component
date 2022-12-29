import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import image from "./image.jpg";

function Nft(props) {
  return (
    <div className="nft-div">
      <img alt="nft" className="nft-img" width="100%" src={image}></img>
      <div
        className="view-div"
        style={props.opacity}
        onMouseEnter={() => {
          props.setOpacity({
            opacity: 0.4,
          });
        }}
        onMouseLeave={() => {
          props.setOpacity({ opacity: 0 });
        }}
      >
        <button className="view-img">
          <RemoveRedEyeIcon
            style={{ color: "hsl(0, 0%, 100%)", fontSize: "3rem" }}
          />
        </button>
      </div>
    </div>
  );
}

export default Nft;
