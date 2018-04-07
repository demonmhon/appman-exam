import React from 'react';
import { PropTypes } from 'prop-types';
import axios from 'axios';

import svgLogo from '../../logo.svg';
import './Login.scss';
import Axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputEmail: '',
            ipputPassword: '',
            isSubmitting: false,
            error: ''
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
        this.setState({
            isSubmitting: true,
            error: ''
        }, () => {
            const config = {
                url: 'http://localhost:3000/api/login',
                method: 'post',
                data: {
                    email: this.state.inputEmail,
                    password: this.state.ipputPassword
                }
            };
            const request = axios
                .request(config)
                .then(response => {
                    this.setState({
                        isSubmitting: false
                    });
                    const status = response.status;
                    const data = response.data;
                    if (status === 200) {
                        alert('Login Successed');
                    }
                })
                .catch(error => {
                    this.setState({
                        isSubmitting: false
                    });
                    const response = error.response;
                    const status = response.status;
                    const data = response.data;
                    if (status === 401) {
                        this.setState({
                            error: data.msg
                                ? data.msg
                                : 'Something wrong with login process'
                        });
                    } else {
                        this.setState({
                            error: data.msg
                                ? data.msg
                                : 'Something wrong with login process'
                        });
                    }
                });
        });
    }

    render() {
        const {isSubmitting} = this.state;
        const formCssClass = ['page--login__form'];
        if (isSubmitting) {
            formCssClass.push('loading');
        }

        return (
            <div className="page--login">
                <div className="page--login__panel">
                    <form
                        className={formCssClass.join(' ')}
                        onSubmit={e => {
                            e.preventDefault();
                            this.doSubmit(e);
                        }}
                    >
                        <div className="logo">
                            <img className="logo-img" src={svgLogo} />
                        </div>
                        <div className="input-field">
                            <label>E-main address</label>
                            <input
                                type="text"
                                disabled={isSubmitting}
                                onChange={e =>
                                    this.doSetInputEmail(e.target.value)
                                }
                            />
                        </div>
                        <div className="input-field">
                            <label>Password</label>
                            <input
                                type="password"
                                disabled={isSubmitting}
                                onChange={e =>
                                    this.doSetInputPassword(e.target.value)
                                }
                            />
                        </div>
                        {this.state.error ? (
                            <div className="error-message">
                                <span>{this.state.error}</span>
                            </div>
                        ) : null}
                        <div className="btn-group">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                onClick={() => {
                                    this.doSubmit();
                                }}
                            >
                                <span>Sign in</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
