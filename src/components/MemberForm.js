import React, { Component } from 'react';
 
class MemberForm extends Component {
 
    constructor() {
        super();
        this.state = {
            name: '',
            country: '',
            birthdate: '',
            bike: '',
            email: '',
            additional_info: ''
        };
    }
 
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
 
    render() {
        return(
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <p>
                    <label>Name:</label>
                    <input
                        type="text"
                        onChange={this.handleChange} value={this.state.name}/>
                    </p>
                    <p>
                    <label>Country:</label>
                    <input
                        type="text"
                        onChange={this.handleChange} value={this.state.country}/>
                    </p>
                    <p>
                    <label>Birthday:</label>
                    <input
                        type="text"
                        onChange={this.handleChange} value={this.state.birthdate}/>
                    </p>
                    <p>
                    <label>Bike:</label>
                    <input
                        type="text"
                        onChange={this.handleChange} value={this.state.bike}/>
                    </p>
                    <p>
                    <label>Info:</label>
                    <input
                        type="text"
                        onChange={this.handleChange} value={this.state.additional_info}/>
                    </p>
        
                    <input type="submit" />
                </form>
                {/* {this.state.text} */}
            </div>
        );
    }
};
 
export default MemberForm;