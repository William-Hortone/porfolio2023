import images from "../../constants/images";
import "./cardImageOne.css";

const CardImage = () => {
  return (
    <div className="app__cardImageOne">
      <div className="app__cardImageOne-container">
        <span />
        <img src={images.wh} alt="person" className="img-anim" />
      </div>
    </div>
  );
};

export default CardImage;
