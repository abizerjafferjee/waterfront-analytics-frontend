import React from 'react'
import classNames from "classnames";
import Image from "./Image";

function Teams({className, ...props}) {

    const sectionClass = classNames(
        className,
        'team-container'
    )

    return (
        <div className={sectionClass}>
            <div className="section-title">A team of analytics experts.</div>
            <table align="center">
                <tbody>
                    <tr>
                        <td>
                            <div className="member-image">
                                <Image
                                    src={require("../assets/images/team/abizer.jpg")}
                                    width={80}
                                    height={80}
                                    alt="Open"/>
                            </div>
                            <div className="member-details">
                                <div className="section-subtitle">
                                    Abizer Jafferjee <small className="section-text">Founder & CEO</small>
                                </div>
                                <p className="section-text">
                                    Abizer has been working with data for 5 years.
                                    He first built his analytics competency at P&G.
                                    He spent the last 3 years engineering and
                                    maintaining peta-byte-scale data pipelines and
                                    analytics solutions for major Financial Institutions.
                                </p>
                            </div>
                        </td>
                        <td>
                            <div className="member-image">
                            </div>
                            <div className="member-details">
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Teams