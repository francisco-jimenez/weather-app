import React from 'react'
import { Input } from 'semantic-ui-react'
import axios from 'axios'

export default class DataListForCityInput extends React.Component{


  render(){
          const renderCities = this.props.cities.map((city, i)=>{
                  return <option key ={i} value={city} />
          })

          return (
                  <datalist id='cities'>
                        { renderCities }
                  </datalist>
                )
  }
}
