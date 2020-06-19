import React from "react";
import ReactTags from 'react-tag-autocomplete'

import {suggestionBox} from '../Helpers'

const KeyCodes = {
    comma: 188,
    enter: 13
}

const delimiters = [KeyCodes.comma, KeyCodes.enter]

function ProjectTechnology({handleSubmit, nextStep, previousStep, handleAddition, handleDelete, tags, suggestions}) {

    function buttonClick(event) {
        event.preventDefault()
        const {id, name} = event.target
        handleAddition(
            {id:id, name:name}
        )
    }

    return (
        <div>
            <div className="section-subtitle">What technology will this project use?</div>

            <br></br>
            <ReactTags
                tags={tags}
                suggestions={suggestions}
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                delimiters={delimiters}
            />
            <br></br>
            <div className="suggestion-box">
                {suggestionBox(suggestions, buttonClick)}
            </div>
            <br></br>
            <button className="btn btn-light" onClick={previousStep}>Previous</button>
            &nbsp;
            {
                handleSubmit &&
                <button className="btn btn-primary" onClick={handleSubmit}>Confirm</button>
            }

        </div>
    )
}

export default ProjectTechnology