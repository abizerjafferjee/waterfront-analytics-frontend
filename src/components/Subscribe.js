import React, {useState} from 'react'
import Input from './Input'

function Subscribe() {

    const [email, setEmail] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event)
        console.log(email)
        console.log("now submitting")
    }

    return (
        <div className="container-fluid section-container subscribe-container">
            <div className="section-content card" style={{width:'400px'}}>
                <div className="card-header subscribe-title">Subscribe to News Letter</div>
                <div className="card-body">


                    <form onSubmit={handleSubmit} className="subscribe-form">
                        <Input
                            id="newsletter"
                            type="email"
                            placeholder="Your best email"
                            onChange={function(e) {
                                setEmail(e.target.value)
                            }}>
                            {/*<label>*/}
                                <button className="input-button btn-primary" type="submit">submit</button>
                            {/*</label>*/}
                        </Input>

                    </form>
                    <hr></hr>
                    <div className="card-text subscribe-text">
                        Analytics is changing companies like yours so quickly.
                        Receive one article a week about how we are helping companies achieve their goals.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe