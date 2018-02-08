import React from 'react'
import { Input } from 'semantic-ui-react'
import axios from 'axios'
import DataListForCityInput from '../imports/DataListForCityInput'

export default class CityInput extends React.Component{

//AIzaSyAd0vaqIdb5B13TV_pAJJuDh01Bc6MKMRo
//https://maps.googleapis.com/maps/api/place/autocomplete/xml?input=Amoeba&types=establishment&location=37.76999,-122.44696&radius=500&key=YOUR_API_KEY
//locality
constructor(){
  super();
  this.state = {
    cities : []
  }

}


autoCompleteCity(event){
  var searchString = event.target.value;
  if(searchString.length > 2) {
      var apiCall  =  `https://maps.googleapis.com/maps/api/place/autocomplete/json?`
          apiCall += `input=${searchString}&`
          apiCall += `types=(cities)&`
          //apiCall += `offset=4&`
          //apiCall += `location=37.76999,-122.44696 &`
          apiCall += `key=AIzaSyAd0vaqIdb5B13TV_pAJJuDh01Bc6MKMRo`

      var that = this
     axios.get(apiCall)
     .then(function (response) {
       let cityNames = [];
       for (let city of response.data.predictions) {
         cityNames.push(city.description);
       }
       that.setState({cities : cityNames})
     })
     .catch(function (error) {
          debugger;
     });
   }
}

render() {

    return(
      <div>
          <Input list ='cities' loading icon='user' onChange = {this.autoCompleteCity.bind(this)} iconPosition='left' placeholder='Search city' />
          <DataListForCityInput cities={this.state.cities}></DataListForCityInput>
      </div>
    )
}

}
