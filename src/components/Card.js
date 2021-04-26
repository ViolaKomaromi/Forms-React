

const Card = (props) => {
    const {cardObject} = props;

    return (
        <div className="Card1">
            <p>{cardObject.cardTitle} </p>

            <img style={{ width: "60%", height: "50%" }} src={cardObject.img} alt="" />
        </div>
    );
}
export default Card;

