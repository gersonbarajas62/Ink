import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import $ from 'jquery';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
require("babel-polyfill");

class Book extends Component{
  constructor (){
    super()

    this.state = {
      name: '',
      email: '',
      message: '',
      dropdownOpen: false,
      date: new Date(),
      datesToExclude: [new Date(2019, 4, 8), new Date(2019, 4, 9), new Date(2019, 4, 12), new Date(2019, 4, 16), new Date(2019, 4, 30), new Date(2019, 4, 26)],
      bodyPart: 'Body Part',
      studio: 'Studio',
    }
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.addDays = this.addDays.bind(this);
    this.getData = this.getData.bind(this);
  }

 /*
  componentDidMount () {
      this.getData ("/days")
  }
 */

  onChange = date => this.setState({ date })

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  getData(url) {
    $.ajax({
      url: url,
      method: 'GET',
      success: (results => {
        let currentDays = this.state.datesToExclude;
        currentDays.push(results)
        this.setState({
          datesToExclude: currentDays
        });
        console.log(results)
      }),
      error: (xhr, err) => {
        console.log('err', err);
      }
    });
  }
    /*
  }

    addDays (url= '', data= {}) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }
  */
  addDays () {
    let { date, datesToExclude } = this.state
    let currentDays = datesToExclude;
    currentDays.push(date);
    this.setState({
      datesToExclude: currentDays
    })
  }


  handleChange = e => {
    this.setState({[e.target.name]: e.target.value })
  }
    
  async handleSubmit(e) {
    e.preventDefault()
    this.addDays();
    alert("Confirmation email has been sent");
    const { name, email, message, date, bodyPart } = this.state
    const from = await axios.post('/api/form', {
      name,
      date: date.toDateString(),
      email,
      bodyPart,
      message
    });    
  }
  render(){
    return(
      <Form onSubmit={this.handleSubmit} style={{ width: '600px'}}>
         <DatePicker 
            placeholderText="Click to select a date" 
            onChange={this.onChange}
            selected={this.state.date}
            excludeDates={this.state.datesToExclude}
            dateFormat="MMMM d, yyyy"
            withPortal
         >
          <div style={{color: 'green'}}>
            <center>InkMe.co</center>
          </div>
        </DatePicker>
        <select
        name="studio"
        value={this.state.studio}
        onChange={this.handleChange}
        >
          <option value="Studio">Studio</option>
          <option value="studio onix">studio onix</option>
          <option value="north tattoo">north tattoo</option>
          <option value="daggamx">daggamx</option>
          <option value="nauyaca_mx">nauyaca_mx</option>
        </select>
        <FormGroup>
          <Label for='name'>Name:</Label>
          <Input
            type='name'
            name='name'
            onChange={this.handleChange} />
        </FormGroup>

        <FormGroup>
          <Label for='email'>Email:</Label>
          <Input
            type='email'
            name='email'
            onChange={this.handleChange} />
        </FormGroup>   
     <select
        name='bodyPart'
        value={this.state.bodyPart}
        onChange={this.handleChange}
        >   
            <option value='Body Part'>Body Part</option>
            <option value='Calf'>Calf</option>
            <option value='Chest'>Chest</option>
            <option value='Foot'>Foot</option>
            <option value='Fore Arm'>Fore Arm</option>
            <option value='Full Back'>Full Back</option>
            <option value='Full Sleeve'>Full Sleeve</option>
            <option value='Half Sleeve'>Half Sleeve</option>
            <option value='Leg'>Leg</option>
            <option value='Lower Back'>Lower Back</option>
            <option value='Ribs'>Ribs</option>
            <option value='Stomach'>Stomach</option>
            <option value='Upper Arm'>Upper Arm</option>
            <option value='Upper Back'>Upper Back</option>
            <option value='Lower Arm'>Lower Arm</option>
            <option value='Hip'>Hip</option>
            <option value='Wrist'>Wrist</option>
            <option value='Ankle'>Ankle</option>
            <option value='Other'>Other</option>
        </select>
        <FormGroup>
          <Label for='message'>Message:</Label>
          <Input
            type='textarea'
            name='message'
            onChange={this.handleChange} />
        </FormGroup>
        <Button>SUBMIT</Button>
      </Form>
    );
  }
}

export default Book;


