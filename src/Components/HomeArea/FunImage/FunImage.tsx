import "./FunImage.css";

interface FunImageProps {
	imgsrc:string;
}

function FunImage(props: FunImageProps): JSX.Element {
    return (
        <div className="FunImage">
			<img src={props.imgsrc}></img>
        </div>
    );
}

export default FunImage;
