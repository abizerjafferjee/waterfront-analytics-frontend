import React from "react";

export function suggestionBox(suggestions, eventHandler) {
    let suggestionButtons = []

    let i = 0
    for (i=0; i < suggestions.length; i++ ) {
        const id = suggestions[i].id
        const name = suggestions[i].name
        suggestionButtons.push(
            <button
                className="btn btn-primary btn-sm m-1"
                key={id}
                id={id}
                name={name}
                onClick={eventHandler}>
                {name}
            </button>
        )
    }

    return suggestionButtons
}
