import React from "react"
import Input from "../Input";

function ProjectSpecifications({nextStep, previousStep, handleChange, value}) {
    return (
        <div>
            <div className="section-subtitle">Do you have project specifications ready?</div>
            <br></br>

            <div className="form-check">
                <Input
                    className="form-check-input"
                    name="contact-project-specifications"
                    value="no"
                    type="radio"
                    checked={value === "no"}
                    onChange={handleChange}
                />
                <label className="form-check-label">
                I have a rough idea of what I want to build.
                </label>
            </div>
            <br></br>
            <div className="form-check">
                <Input
                    className="form-check-input"
                    name="contact-project-specifications"
                    value="uncertain"
                    type="radio"
                    checked={value === "uncertain"}
                    onChange={handleChange}
                />
                <label className="form-check-label">
                    I have a clear idea of what I want to build, but I do not have written specifications.
                </label>
            </div>
            <br></br>
            <div className="form-check">

                <Input
                    className="form-check-input"
                    name="contact-project-specifications"
                    value="yes"
                    type="radio"
                    checked={value === "yes"}
                    onChange={handleChange}
                />

                <label className="form-check-label">
                    I have clear written specifications.
                </label>
            </div>
            <br></br>
            <button className="btn btn-light" onClick={previousStep}>Previous</button>
            &nbsp;
            <button className="btn btn-primary" onClick={nextStep}>Next</button>
        </div>
    )
}

export default ProjectSpecifications

