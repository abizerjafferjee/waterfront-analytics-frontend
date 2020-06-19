import React from 'react'
import classNames from 'classnames'
import ScrollableAnchor from 'react-scrollable-anchor'

import ContactForm from './ContactForm'

function ContactSection({className}) {

    const classes = classNames(
        className,
        'contact-form-container'
    )

    return (
        <ScrollableAnchor id={'contactUs'}>
            <div className={classes}>
                <div className="section-title">Let's talk shop.</div>
                <div className="row justify-content-center mt-5">
                    <div className="col-xs-12 col-md-5 p-0 m-0">
                        <div className="card contact-form">
                            <div className="card-body p-3">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </ScrollableAnchor>
    )
}

export default ContactSection