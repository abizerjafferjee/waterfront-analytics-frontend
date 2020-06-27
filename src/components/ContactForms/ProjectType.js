import React from "react";

import Input from "../Input";

function ProjectType({nextStep, previousStep, handleChange, value}) {
    return (
        <div>
            <div className="section-subtitle">What type of project are you hiring for?</div>
            <br></br>
            <div className="form-check">
                <Input
                    className="form-check-input"
                    name="contact-project-type"
                    value="new"
                    type="radio"
                    checked={value === "new"}
                    onChange={handleChange}
                />
                <label className="form-check-label">
                    New idea or project.
                </label>
            </div>
            <br></br>
            <div className="form-check">
                <Input
                    className="form-check-input"
                    name="contact-project-type"
                    value="existing"
                    type="radio"
                    checked={value === "existing"}
                    onChange={handleChange}
                />
                <label className="form-check-label">
                    Existing project that needs more resources.
                </label>
            </div>
            <br></br>
            <div className="form-check">
                <Input
                    className="form-check-input"
                    name="contact-project-type"
                    value="ongoing"
                    type="radio"
                    checked={value === "ongoing"}
                    onChange={handleChange}
                />
                <label className="form-check-label">
                    Ongoing assistance or consultation.
                </label>
            </div>
            <br></br>
            <div className="form-check">
                <Input
                    className="form-check-input"
                    name="contact-project-type"
                    value="learn"
                    type="radio"
                    checked={value === "learn"}
                    onChange={handleChange}
                />
                <label className="form-check-label">
                    None of the above, just looking to learn about Waterfront Analytics.
                </label>
            </div>
            <br></br>
            <button className="btn btn-light" onClick={previousStep}>Previous</button>
            &nbsp;
            <button className="btn btn-primary" onClick={nextStep}>Next</button>
        </div>
    )
}

export default ProjectType