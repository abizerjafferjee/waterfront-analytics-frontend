import React from 'react'
import classNames from "classnames";

function Customers({className, ...props}) {

    const sectionClass = classNames(
        className
    )

    return (
        <div className={sectionClass}>
            <div className="row team-row">
                <div className="col-md-6 col-xs-12">
                    <div className="section-subtitle">You're a high-growth, venture-funded startup.</div>
                    <p className="section-text mt-3">
                        You need analytics to drive customer acquisition, product development,
                        and financial planning, and you're willing to listen to the data when it
                        tells you you're wrong.
                    </p>
                </div>
                <div className="col-md-6 col-xs-12">
                    <div className="section-subtitle">You're an ambitious SME staged for high-growth.</div>
                    <p className="section-text mt-3">
                        You've got useful data siloed across applications that could really
                        help your teams get ahead of the competition. You know how to get the
                        best out of your data but can't find right experts to set you up.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Customers