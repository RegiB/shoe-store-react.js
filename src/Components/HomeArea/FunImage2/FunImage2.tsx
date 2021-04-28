import "./FunImage2.css";

interface FunImage2Props {
	imgsrc:string;
}

function FunImage2(props: FunImage2Props): JSX.Element {
    return (
        <div className="FunImage2">
			<img src={props.imgsrc}></img>
        </div>
    );
}

export default FunImage2;
