import React, {Component} from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pass: ""
        }
    }

    onPasswordChange(e) {
        this.setState({
            pass: e.target.value
        })
    }

    render() {
        const {pass} = this.state;
        const {login, lengthErr, logErr} = this.props;

        let renderLogErr, renderLengthErr;

        logErr ? renderLogErr = <span className="login-error">Wrong Password!</span> : null;

        lengthErr ? renderLengthErr = <span className="login-error">Password must be long than 5 symbols</span> : null;

        return (
            <div className="login-container">
                <div className="login">
                    <h2 className="uk-modal-title uk-text-center">Authorization</h2>
                    <div className="uk-margin-top uk-text-lead">Password:</div>
                    <input
                        type="password"
                        name=""
                        id=""
                        className="uk-input uk-margin-top"
                        placeholder="Password"
                        value={pass}
                        onChange={(e) => this.onPasswordChange(e)}/>
                    {renderLogErr}
                    {renderLengthErr}
                    <button
                        className="uk-button uk-button-primary uk-margin-top"
                        type="button"
                        onClick={() => login(pass)}>Login
                    </button>
                </div>
            </div>
        )
    }
}
