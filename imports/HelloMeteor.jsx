
import React from 'react'
import CityInput from '../imports/CityInput.jsx'
//this imports the React library

export default class HelloMeteor extends React.Component{
  constructor(){
    super();
    var city = {
                  name : ''
                }
    state = {
                city : city
            }
    this.getCity = this.getCity.bind(this);
  }
//this declares the class HelloMeteor and at the same time it exports it
  getCity(){

  }
  render(){
  //this is the render function inside of which
  //we have what that needs to be displayed from this component
          return(
          <div>
                  <CityInput getCity={this.getCity}></CityInput>
          </div>
          )
  }
}
