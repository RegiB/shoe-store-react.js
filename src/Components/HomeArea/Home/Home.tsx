import Youtube from "../Youtube/Youtube";
import "./Home.css";
import Sale from "../Sale/Sale";
import ForSaleBrand from "../ForSaleBrand/ForSaleBrand";
import shoebrands2 from "../../../Assets/Images/shoeBrands/sbnb.jpg";
import RandomImg from "../RandomImg/RandomImg";
import RandomImg2 from "../RandomImg2/RandomImg2";
import FunImage from "../FunImage/FunImage";
import FunImage2 from "../FunImage2/FunImage2";
import staticImg2 from "../../../Assets/Images/funImages/1.jpg";
import Contact from "../Contact/Contact";

function Home(): JSX.Element {
  return (
    <div className="Home">
      <Sale />
      <Youtube />
      <ForSaleBrand image={shoebrands2} />
     <div className="MainContainer">
      <div className="ImgContainer">
        <RandomImg2 />
      </div>
      <div className="ImgContainer">
        <FunImage2 imgsrc={staticImg2} />
      </div>
      <div className="ImgContainer2">
        <RandomImg />
      </div>
      <div className="ImgContainer2">
        <Contact/>
      </div>

     </div>
    </div>
  );
}

export default Home;
