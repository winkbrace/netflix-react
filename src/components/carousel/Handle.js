import './Handle.css';
import caretRight from "../../assets/img/caret-right.svg";

function Handle(props) {
    let classes = [
        'handle',
        props.type + 'Handle',
        props.shouldShow ? '' : 'hidden',
    ];

    return (
        <span className={classes.join(' ')}
              onClick={props.onHandleClick}>
            <img src={caretRight} alt="previous"/>
        </span>
    );
}

export default Handle;