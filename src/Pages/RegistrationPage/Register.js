import './style.css';
import { useState } from 'react';
import axios from 'axios';

const useForm = (Validation) => {

    const [values, setValues] = useState({
        name: '',
        surname: '',
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const handleValuesChange = e => {

        const { name, value } = e.target

        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        setErrors(Validation(values))
    }

    return { values, handleValuesChange, handleSubmit, errors }
}

function Validation(values) {

    let errors = {}

    if (!values.name.trim()) {
        errors.name = "First Name cannot be empty"
    }

    if (!values.surname) {
        errors.surname = "Last Name cannot be empty"
    }

    if (!values.email) {
        errors.email = "Email cannot be empty"
    } else if (values.email.indexOf('@') === -1) {
        errors.email = "Email needs to contain a '@'."
    }

    if (!values.password || values.password.indexOf(" ") !== -1) {
        errors.password = "Password cannot be empty or include empty spaces"
    } else if (values.password.length < 6) {
        errors.password = "Password needs minimum of 6 characters"
    }

    return errors
}



function Register() {

    const { values, handleValuesChange, handleSubmit, errors } = useForm(Validation)

  return (
    <div className="app">
      <div className="main-content-cnt">
        <div className="main-text">
          <h1>1888 Project</h1>
          <h6>Develop a personal finance web app.</h6>
        </div>
    <div className="form-cnt">
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className={`form-control ${errors.name ? 'error' : ''}`}>
                    <input
                        type="text"
                        placeholder="Full Name"
                        name="name"
                        value={values.name.trim()}
                        onChange={handleValuesChange}
                    ></input>
                    <small className="error-message">{errors.name && errors.name}</small>
                </div>
                <div className={`form-control ${errors.surname ? 'error' : ''}`}>
                    <input
                        type="text"
                        placeholder="User Name"
                        name="surname"
                        value={values.surname.trim()}
                        onChange={handleValuesChange}
                    ></input>
                    <small className="error-message">{errors.surname && errors.surname}</small>
                </div>
                <div className={`form-control ${errors.email ? 'error' : ''}`}>
                    <input
                        type="text"
                        placeholder="Email Address"
                        name="email"
                        value={values.email.trim()}
                        onChange={handleValuesChange}
                    ></input>
                    <small className="error-message">{errors.email && errors.email}</small>
                </div>
                <div className={`form-control ${errors.password ? 'error' : ''}`}>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={values.password.trim()}
                        onChange={handleValuesChange}
                    ></input>
                    <small className="error-message">{errors.password && errors.password}</small>
                </div>
                <div className="submit-cnt">                    <button type="submit" >Register</button></div>
                <div className="terms-text"><small>Already have an account<br/><a href="#link">Login</a></small></div>
            </form>
        </div>
    </div>
      </div>
    </div>
  );
  
}

export default Register;