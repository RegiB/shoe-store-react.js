import "./Youtube.css";

function Youtube(): JSX.Element {
  return (
    <div className="Youtube">
      <embed
        width="1200"
        height="500"
        src="https://www.youtube.com/embed/lky2P_aw6nc"
        title="YouTube video player"
      ></embed>
    </div>
  );
}

export default Youtube;
