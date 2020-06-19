import React from "react";

import Input from "../Input";

function ProjectStart({nextStep, previousStep, handleChange, value}) {
    return (
        <div>
            <div className="section-subtitle">When do you need to start this project?</div>
            <br></br>
            <div className="form-check">
                <Input
                    className="form-check-input"
                    name="contact-project-start"
                    value="immediately"
                    type="radio"
                    checked={value === "immediately"}
                    onChange={handleChange}
                />
                <label className="form-check-label">
                    Immediately.
                </label>
            </div>
            <br></br>
            <div className="form-check">
                <Input
                    className="form-check-input"
                    name="contact-project-start"
                    value="within 2 weeks"
                    type="radio"
                    checked={value === "within 2 weeks"}
                    onChange={handleChange}
                />
                <label className="form-check-label">
                    Within 2 weeks.
                </label>
            </div>
            <br></br>
            <div className="form-check">
                <Input
                    className="form-check-input"
                    name="contact-project-start"
                    value="more than 2 weeks"
                    type="radio"
                    checked={value === "more than 2 weeks"}
                    onChange={handleChange}
                />
                <label className="form-check-label">
                    More than 2 weeks from now.
                </label>
            </div>
            <br></br>
            <div className="form-check">
                <Input
                    className="form-check-input"
                    name="contact-project-start"
                    value="decide later"
                    type="radio"
                    checked={value === "decide later"}
                    onChange={handleChange}
                />
                <label className="form-check-label">
                    I'll decide later.
                </label>
            </div>
            <br></br>
            <button className="btn btn-light" onClick={previousStep}>Previous</button>
            &nbsp;
            <button className="btn btn-primary" onClick={nextStep}>Next</button>
        </div>
    )
}

export default ProjectStart