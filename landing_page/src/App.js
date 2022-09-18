import React,{ useState } from "react";
import "./App.css";
import FormInput from "./components/Signup.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Signin from './components/Signin.js';


const App = () => {
  const [values, setValues] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "User name",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "User name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "firstname",
      type: "text",
      placeholder: "First name",
      errorMessage:
        "Firstname should be 3-16 characters and shouldn't include any special character!",
      label: "First name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "lastname",
      type: "text",
      placeholder: "Last name",
      errorMessage:
        "Lastname should be 1-12 characters and shouldn't include any special character!",
      label: "Last name",
      pattern: "^[A-Za-z0-9]{1,12}$",
      required: true,
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 6-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];



  const create = (e) =>{
    // add entity - POST
    e.preventDefault();

    // creates entity
    fetch("http://localhost:8000", {
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "accept": "application/json"
      },
      "body": JSON.stringify({
        username: this.target.value,
        password: this.target.value
      })
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err);
    });
  }




  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

 

  return (
    <div className="App">
      <Card style={{ width: '20rem', marginLeft:'38%' }}>
        <form onSubmit={handleSubmit}>
          <Card.Header style={{
            textAlign: 'center',
            color: '#ffffff', 
            fontSize:'24px', 
            fontWeight:'600'
           }}>
            Register
          </Card.Header>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange} 
            />
          ))}
          <button onSubmit={create}>Sign Up</button>
        </form>
        <a href="signin.js" className="signin" onClick={{ Signin }}>Already have an account? SignIn</a>
      </Card>
    </div>
  );
};

export default App;