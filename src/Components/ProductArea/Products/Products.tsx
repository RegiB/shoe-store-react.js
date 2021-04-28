import Shoes from "../Shoes/Shoes";
import "./Products.css";
import adidas1 from "../../../Assets/Images/shoeImages/adidas1.jpg";
import adidas2 from "../../../Assets/Images/shoeImages/adidas2.jpg";
import nike1 from "../../../Assets/Images/shoeImages/nike1.png";
import nike2 from "../../../Assets/Images/shoeImages/nike2.jpg";
import asics1 from "../../../Assets/Images/shoeImages/asics1.jpg";
import asics2 from "../../../Assets/Images/shoeImages/asics2.jpg";
import puma1 from "../../../Assets/Images/shoeImages/puma1.jpg";
import reebok1 from "../../../Assets/Images/shoeImages/reebok1.jpg";
import converse1 from "../../../Assets/Images/shoeImages/converse1.jpg";
import converse2 from "../../../Assets/Images/shoeImages/converse2.jpg";
import skechers1 from "../../../Assets/Images/shoeImages/skechers1.jpg";
function Products(): JSX.Element {
  return (
    <div className="Products">
      <Shoes
        header="נעלי אדידס"
        model="אדידס"
        size={39}
        price={780}
        image={adidas1}
      />
      <Shoes
        header="נעלי נייקי"
        model="נייקי"
        size={40}
        price={750}
        image={nike1}
      />
      <Shoes
        header="נעלי פומה"
        model="פומה"
        size={42}
        price={540}
        image={puma1}
      />
      <Shoes
        header="נעלי ריבוק"
        model="ריבוק"
        size={36}
        price={350}
        image={reebok1}
      />
      <Shoes
        header="נעלי קונברס"
        model="קונברס"
        size={42}
        price={400}
        image={converse1}
      />
      <Shoes
        header="נעלי קונברס"
        model="קונברס"
        size={37}
        price={250}
        image={converse2}
      />
      <Shoes
        header="נעלי אדידס"
        model="אדידס"
        size={43}
        price={560}
        image={adidas2}
      />
      <Shoes
        header="נעלי אסיקס"
        model="אסיקס"
        size={41}
        price={300}
        image={asics1}
      />
      <Shoes
        header="נעלי נייקי"
        model="נייקי"
        size={40}
        price={750}
        image={nike2}
      />
      <Shoes
        header="נעלי סקצ'רס"
        model="סקצ'רס"
        size={48}
        price={650}
        image={skechers1}
      />
      <Shoes
        header="נעלי אסיקס"
        model="אסיקס"
        size={41}
        price={300}
        image={asics2}
      />
      <Shoes
        header="נעלי נייקי"
        model="נייקי"
        size={40}
        price={750}
        image={nike2}
      />
    </div>
  );
}

export default Products;
