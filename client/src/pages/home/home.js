import React, { Component } from 'react';
// import API from '../../utils/API'
import "./home.css"

class Home extends Component {
    state = {
        email: '',
        password: '',
        success: '',
    }

    // handleInputChange = event => {
    //     let value = event.target.value;
    //     const name = event.target.name;

    //     if(name === "password") {
    //         value = value.substring(0, 15);
    //     }

    //     this.setState({
    //         [name]: value
    //     });
    // };

    // handleFormSubmit = event => {
    //     event.preventDefault();

    //     const { email, password } = this.state
    //     const data = { email, password }
    //     API.signIn(data).then(res => {
    //       console.log(res.data)
    //       if(!res.data) {
    //         alert("Your email and password do not match")
           
    //         // get information
    //         // use the api route to pass data
    //     } else {
    //        localStorage.setItem('user', this.state.email)
    //         console.log(localStorage)

    //         this.props.history.push("/profile")
    //     }
    //     })
    // }

    render() {
        return(         
            
          <div>
           <h1> upcoming</h1>
          <li>log in</li> 
          <li>ordre</li>
          <li>on hand</li>
          <li>out of stock</li>
          <li>back order</li>


      </div>
        )
    }
}


export default Home;