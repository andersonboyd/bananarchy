import React from 'react';
import { Figure } from 'react-bootstrap';

const Display = props => {
    return <div className="fig">
        <Figure>
            <Figure.Image
                width="150"
                height="150"
                id={props.id}
                src={props.src}
                alt={props.name}
            />
            <Figure.Caption>{props.desc}</Figure.Caption>
        </Figure>
    </div>
}

export default Display;