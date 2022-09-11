import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            fullName: "",
            username: "",
            email: "",
            password: ""
        };
        this.fullNameHandler = this.fullNameHandler.bind(this)
        this.usernameHandler = this.usernameHandler.bind(this)
        this.emailHandler = this.emailHandler.bind(this)
        this.passwordHandler = this.passwordHandler.bind(this)
        this.onsubmit = this.onsubmit.bind(this)
    };

    fullNameHandler(event) {
        this.setState({
            fullName: event.target.value
        })
    }
    usernameHandler(event) {
        this.setState({
            username: event.target.value
        })
    }
    emailHandler(event) {
        this.setState({
            email: event.target.value
        })
    }
    passwordHandler(event) {
        this.setState({
            password: event.target.value
        })
    }
    onsubmit(event) {
        event.preventDefault();

        const registered = {
            fullName : this.state.fullName,
            username : this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:4000/app/signup',registered)
        .then(res =>console.log(res.data))
        .catch()
    }

    render() {
        return (

            <div className='container'>
                <div className="form-div">
                    <form onsubmit={this.onsubmit}>
                        <input
                            autoFocus
                            type="text"
                            placeholder='Enter full Name...'
                            value={this.state.fullName}
                            className='form-control form-group mt-3'
                            name='Full Name'
                            onChange={this.fullNameHandler}
                        />
                        <input
                            type="text"
                            placeholder='Enter Your Username '
                            value={this.state.username}
                            className='form-control form group mt-3'
                            name='username'
                            onChange={this.usernameHandler}
                        />
                        <input
                            type="email"
                            placeholder='Enter Your Email..'
                            value={this.state.email}
                            className='form-control form-group mt-3'
                            name='email'
                            onChange={this.emailHandler}
                        />
                        <input
                            type="password"
                            placeholder='Enter Your Password...'
                            value={this.state.password}
                            className='form-control form-group mt-3'
                            name='password'
                            onChange={this.passwordHandler}
                        />
                        <input
                            type="submit"
                            className='btn btn-danger btn-block mt-3'
                            value='Submit'
                        />
                    </form>
                </div>
            </div>
        )
    }

}

export default App