import './Card.css'

const Card = (props) =>{
    const classes = 'card ' + props.className; //空格很重要

    return <div className={classes}>{props.children}</div>;
}

export default Card;