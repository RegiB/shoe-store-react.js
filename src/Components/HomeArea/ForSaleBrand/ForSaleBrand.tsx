import "./ForSaleBrand.css";

interface ForSaleBrandProps {
  image: string;
}

function ForSaleBrand(props: ForSaleBrandProps): JSX.Element {
  return (
    <div className="ForSaleBrand">
        <h3>המותגים  שלנו:</h3>
      <img src={props.image}></img>
    </div>
  );
}

export default ForSaleBrand;
