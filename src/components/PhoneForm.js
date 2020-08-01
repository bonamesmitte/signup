import React, { Component } from 'react';


class PhoneForm extends Component{

    state = {
      name: '',
      password: '',
      age:'',
      gender:''
    }
  
    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    handleSubmit =(e) => {
        e.preventDefault();
        this.props.onCreate(this.state);

        // this.props.onCreate({
        //     name: this.state.name,
        //     phone: this.state.phone
        // })

    }
  
    render(){
      return(
        <form onSubmit={this.handleSubmit} >
          <input 
          name="name" 
          placeholder="User Name" 
          onChange ={this.handleChange} 
          value={this.state.name} 
          />
          <input 
          name="password" 
          placeholder="Password" 
          onChange ={this.handleChange} 
          value={this.state.password} 
          />
           <input 
          name="age" 
          placeholder="Age" 
          onChange ={this.handleChange} 
          value={this.state.age} 
          />
           <input 
          name="gender" 
          placeholder="Gender" 
          onChange ={this.handleChange} 
          value={this.state.gender} 
          />
          <button type="submit">register</button>
          <div>
            {this.state.name} {this.state.password} {this.state.age} {this.state.gender} 
          </div>
        </form>
      )
    }
  }

export default PhoneForm;