import React from 'react';
import {PropTypes} from 'prop-types';

import svgLogo from '../../logo.svg';
import './Login.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputEmail: '',
            ipputPassword: ''
        };

        this.doSetInputEmail = this.doSetInputEmail.bind(this);
        this.doSetInputPassword = this.doSetInputPassword.bind(this);
        this.doSubmit = this.doSubmit.bind(this);
    }

    doSetInputEmail(value) {
        this.setState({
            inputEmail: value
        });
    }

    doSetInputPassword(value) {
        this.setState({
            ipputPassword: value
        });
    }

    doSubmit() {

    }

    render() {
        return (
            <div className="page--login">
                <div className="page--login__panel">
                    <div className="logo">
                        <img className="logo-img" src={svgLogo} />
                    </div>
                    <div className="page--login__form">
                        <div className="input-field">
                            <label>E-main address</label>
                            <input type="text" onChange={(e) =>this.doSetInputEmail(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <label>Password</label>
                            <input type="password" onChange={(e) =>this.doSetInputPassword(e.target.value)} />
                        </div>
                        <div className="btn-group">
                            <button onClick={() => this.doSubmit()}>
                                <span>Sign in</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {};

Login.defaultProps = {};

export default Login;