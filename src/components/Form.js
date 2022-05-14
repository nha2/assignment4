import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state= {
            title:"User Registeration",
            fields:{
                firstName : "",
                emailAddress : "",
                password: ""
            },
            errors: {
                firstName : '',
                emailAddress : '',
                password: '',
            },
            response:""
        }
    }

    validate = (name,value)=>{
        switch (name) {
            case "firstName":
                if (!value) {
                    return "First name is Required";
                } else if(!value.match(/^[a-zA-Z]+$/g)){
                    return "Please enter valid first name";
                } else {
                    return "";
                }
            case "emailAddress":
                if (!value) {
                    return "Email is Required";
                    } else if (
                    !value.match(/^[a-z0-9]([a-z0-9_\-\.]*)@([a-z0-9_\-\.]*)(\.[a-z]{2,4}(\.[a-z]{2}){0,2})$/i)
                    ) {
                    return "Enter a valid email address";
                    } else {
                    return "";
                    }
            case "password":
                    if (!value) {
                        return "Password is Required";
                    } else if (value.length < 8 || value.length > 15) {
                         return "Please fill at least 8 character";
                    } else if (!value.match(/[a-z]/g)) {
                      return "Please enter at least lower character.";
                    } else if (!value.match(/[A-Z]/g)) {
                         return "Please enter at least upper character.";
                    } else if (!value.match(/[0-9]/g)) {
                        return "Please enter at least one digit.";
                    } else {
                      return "";
                    }
                    default: {
                        return "";
                    }
                }   
    }

    handleUserInput = event =>{
        this.setState({
            errors:{
               ...this.state.errors,
               [event.target.name]:this.validate(event.target.name, event.target.value)
            },
            fields:{
                ...this.state.fields,
                [event.target.name]: event.target.value
             }
        })
    }

    handleSubmit = event=>{
        const { fields } = this.state;
        event.preventDefault();
        let validationErrors = {};

        Object.keys(fields).forEach(name => {
            const error = this.validate(name, fields[name]);
            if (error && error.length > 0) {
                validationErrors[name] = error;
            }            
        });
        if (Object.keys(validationErrors).length > 0) {
            this.setState({ errors: validationErrors });
            return;
        }
        if (fields.firstName && fields.emailAddress && fields.password) {
            const data = {
            firstName: fields.firstName,
            email: fields.emailAddress,
            password: fields.password
            };
            console.log("----data----", data);
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            };
            fetch('http://localhost:3000/userRegistration', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ response: "user registered successfully" }));
        }
    }

    render() {

        const { fields, errors, title } = this.state;  
        return(
            <section>
                <h1>{title}</h1>
                <div className="master-login-section">
                   <form autoComplete="off" onSubmit={this.handleSubmit}>
                   <div className="master-form-group">
                        <input  type="text" name="firstName" value={fields.firstName}  placeholder="enter First Name" className={"master-input " + (errors.firstName ? 'master-input-error' : '')}
                        onChange={event => this.handleUserInput(event)}/>
                        <span className="text-danger">{errors.firstName}</span>
                   </div>
                   <div className="master-form-group">
                        <input  type="text" name="emailAddress" value={fields.emailAddress}  placeholder="enter emailAddress" className={"master-input " + (errors.emailAddress ? 'master-input-error' : '')}
                         onChange={event => this.handleUserInput(event)}/>
                        <span className="text-danger">{errors.emailAddress}</span>
                   </div>
                   <div className="master-form-group">
                        <input  type="password" name="password" value={fields.password}  placeholder="enter password" className={"master-input " + (errors.password ? 'master-input-error' : '')}
                         onChange={event => this.handleUserInput(event)}/>
                        <span className="text-danger">{errors.password}</span>
                   </div>
                   <div className="master-form-group master-center">
                           <button className="master-submit-btn">Register now</button>
                    </div>
                    </form>           
                </div>
            </section>
        )
    }

}
export default Form;