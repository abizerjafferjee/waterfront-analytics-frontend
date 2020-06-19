import React from 'react'
import classNames from "classnames";
import Image from "./Image";

function Services({className}) {

    const sectionClass = classNames(
        className,
        'services-container'
    )
    const width = 64
    const height = 64


    return (
        <div className={sectionClass}>
            <div className="section-title">Analytics services that scale.</div>
            {/*<div className="row my-5 service-row-container">*/}
            {/*    <div className="col-6 service-col-img">*/}
            {/*        <Image*/}
            {/*            src={require("../assets/images/services/database.svg")}*/}
            {/*            width={500}*/}
            {/*            height={500}*/}
            {/*            alt="Open" />*/}
            {/*    </div>*/}
            {/*    <div className="col-6 service-col-desc">*/}
            {/*        <div className="section-subtitle">ETL & Warehousing</div>*/}
            {/*        <p className="section-text mt-3">*/}
            {/*            The first step for any modern analytics endeavor is building a data warehouse.*/}
            {/*            This warehouse will be the foundation of your entire analytics stack.</p>*/}
            {/*        <p className="section-text mt-3">*/}
            {/*            We'll help you select your data warehouse and ETL technologies, configure them*/}
            {/*            for you, and optimize the performance of your environment. We'll also build*/}
            {/*            custom ETL pipelines when necessary, although we always use off-the-shelf*/}
            {/*            solutions where available.*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="row my-5 service-row-container">*/}
            {/*    <div className="col-6 service-col-desc">*/}
            {/*        <div className="section-subtitle">You're a high-growth, venture-funded startup.</div>*/}
            {/*        <p className="section-text mt-3">*/}
            {/*            You need analytics to drive customer acquisition, product development,*/}
            {/*            and financial planning, and you're willing to listen to the data when it*/}
            {/*            tells you you're wrong.*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*    <div className="col-6 service-col-img">*/}
            {/*        <Image*/}
            {/*            src={require("../assets/images/services/data-model.svg")}*/}
            {/*            width={500}*/}
            {/*            height={500}*/}
            {/*            alt="Open" />*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="row my-5 image-label service-row">
                <div className="col-md-2 col-xs-12">
                    <Image
                        src={require("../assets/images/services/database.svg")}
                        width={width}
                        height={height}
                        alt="Open" />
                    <div className="text-center mt-2">ETL & Warehousing</div>
                </div>
                <div className="col-md-2 col-xs-12">
                    <Image
                        src={require("../assets/images/services/data-model.svg")}
                        width={width}
                        height={height}
                        alt="Open" />
                    <div className="text-center mt-2">Data Modeling</div>
                </div>
                <div className="col-md-2 col-xs-12">
                    <Image
                        src={require("../assets/images/services/kpi-measurements.svg")}
                        width={width}
                        height={height}
                        alt="Open" />
                    <div className="text-center mt-2">KPI Measurement</div>
                </div>
                <div className="col-md-2 col-xs-12">
                    <Image
                        src={require("../assets/images/services/event-tracking.svg")}
                        width={width}
                        height={height}
                        alt="Open" />
                    <div className="text-center mt-2">Event Tracking</div>
                </div>
                <div className="col-md-2 col-xs-12">
                    <Image
                        src={require("../assets/images/services/data-science.svg")}
                        width={width}
                        height={height}
                        alt="Open" />
                    <div className="text-center mt-2">Data Science</div>
                </div>
                <div className="col-md-2 col-xs-12">
                    <Image
                        src={require("../assets/images/services/strategy.svg")}
                        width={width}
                        height={height}
                        alt="Open" />
                    <div className="text-center mt-2">Strategy & Training</div>
                </div>
            </div>
        </div>
    )
}

export default Services