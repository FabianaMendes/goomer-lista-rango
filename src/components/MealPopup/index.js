import React from 'react';

export default function MealPopup(props) {
    return (props.trigger) ? (

        <div onClick={() => props.setTrigger(false)}>
            <h1>Pop up</h1>
        </div>

        ) : "";
}