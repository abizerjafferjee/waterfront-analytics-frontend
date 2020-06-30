import React from "react";

import Input from "../Input";

function ContactDetails({handleSubmit, nextStep, previousStep, handleChange, name, validName, email, validEmail, role, validRole,
                            company, validCompany}) {

    const nameHint = "Name cannot be empty"
    const emailHint = "Please enter a valid email"
    const companyHint = "Please enter your company name"
    const roleHint = "Please enter your role"

    return (
        <div>
            <div className="section-subtitle">Contact Details</div>
            <br></br>
            <Input
                id="contact-name"
                type="text"
                placeholder="Your full name"
                onChange={handleChange}
                value={name}
                label="Full Name"
                hint={validName === false ? nameHint:null}
            />
            <Input
                id="contact-email"
                type="email"
                placeholder="Your best email"
                onChange={handleChange}
                value={email}
                label="Email"
                hint={validEmail === false ? emailHint:null}
            />
            <Input
                id="contact-company"
                type="text"
                placeholder="Your company name"
                onChange={handleChange}
                value={company}
                label="Company"
                hint={validCompany === false ? companyHint:null}
            />
            <Input
                id="contact-role"
                type="text"
                placeholder="Your role"
                onChange={handleChange}
                value={role}
                label="Role"
                hint={validRole === false ? roleHint:null}
            />

            {/*&nbsp;*/}
            {
                handleSubmit &&
                <button className="btn btn-primary" onClick={handleSubmit}>Confirm</button>
            }
            {/*<button className="btn btn-primary" onClick={nextStep}>Next</button>*/}
        </div>
    )
}

export default ContactDetails