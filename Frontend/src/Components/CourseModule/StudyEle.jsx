import "./StudyEle.css";

const StudyEle = (props) =>{
    return (
        <div className="cards">
            <img className="cardsPic" src={props.image} alt="img" />
            <div className="cardsTitel">
                <p>{props.titel}</p>
            </div>
        </div>
    );
}

export default StudyEle;