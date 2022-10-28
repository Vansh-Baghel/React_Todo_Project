import classes from "./Card.module.css"

const Card = (props) => {
    return (
        <div className={classes.Card}>
        <div className={classes.in}> {props.children} </div>
        </div>
    )
}

export default Card;