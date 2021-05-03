import React from 'react';
import './estilos/BadgeForm.css';


class BadgeForm extends React.Component {
    // state = { 
    //     firstname: "",
    //     lastname: "",
    //     email: "",
    //     jobTitle: "",
    //     twitter: ""
    // };
    // props.onChange = (event) => {
    //     // console.log({
    //     //     name: event.target.name,
    //     //     value: event.target.value
    //     this.setState({
    //             [event.target.name]: event.target.value
    //         }
    //     )       
    // }
    handleClick = (event) => {
        console.log('button activated')
    }
    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log('formulario enviado')
    //     console.log(this.state)
    // }
    render() {
        return (
        <div className="form-container">
            <h2 className="title-form">{this.props.title}</h2>
            <form onSubmit={this.props.onSubmit}>
                <div>
                    <label for="firstName">First Name</label>
                    <input type="text" className="input" onChange={this.props.onChange} placeholder="your first name" name="firstName" value={this.props.formValues.firstName}></input>
                </div>
                <div>
                    <label for="lastName">Last Name</label>
                    <input type="text" className="input" onChange={this.props.onChange} placeholder="your last Name" name="lastName" value={this.props.formValues.lastName}></input>
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type="email" className="input" onChange={this.props.onChange} placeholder="your email" name="email" value={this.props.formValues.email}></input>
                </div>
                <div>
                    <label for="jobTitle">Job</label>
                    <input type="text" className="input" onChange={this.props.onChange} placeholder="your job" name="jobTitle" value={this.props.formValues.jobTitle}></input>
                </div>
                <div>
                    <label for="jobTitle">Twitter</label>
                    <input type="text" className="input" onChange={this.props.onChange} placeholder="your Twitter" name="twitter" value={this.props.formValues.twitter}></input>
                </div>
                <button type="submit" className="form-button" onClick={this.handleClick}>Save</button>
                {this.props.error && (
                    <p>Error en el servidor</p>
                )}
            </form>
        </div>
        );
    }
}

export default BadgeForm;