import React from "react";
import "../Form/style.css";

const Form = props => {
    return (
        <div className="form-box">
            <h3>{props.title}</h3>
            <form method="post">
                <div className="form-group">
                    <p>{props.info}</p>
                    <label htmlFor="email">Email address:</label>
                    <input
                        value={props.email}
                        name="email"
                        type="email"
                        placeholder="Enter your email here"
                        onChange={props.handleChange}
                    ></input>
                </div>
            </form>
        </div>
    )
}

export default Form;