import React from 'react';
import Button from '@material-ui/core/Button';

import Icon_Ticket from '../../resources/images/icons/ticket.png';

const MyButton = (props) => {
    return (
        <Button
            href={props.link}
            variant="contained"
            size="small"
            style=
            {{
                background: props.bck,
                color: props.color
            }}
        >
            <img
                src={Icon_Ticket}
                className="iconImage" 
                alt="button_icon"
            />
               {props.text}           
        </Button>
    );
};

export default MyButton;