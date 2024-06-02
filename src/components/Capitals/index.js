import './index.css'
import {Component} from 'react'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeCapitalId: countryAndCapitalsList[0].id}

  onChangeCountry = event =>
    this.setState({activeCapitalId: event.target.value})

  getCountry = () => {
    const {activeCapitalId} = this.state
    const filteredCountry = countryAndCapitalsList.find(
      each => each.id === activeCapitalId,
    )
    return filteredCountry.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry(activeCapitalId)
    console.log(country)

    return (
      <div className="bg-container">
        <div className="capital-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="menu-container">
            <select
              className="menu"
              value={activeCapitalId}
              onChange={this.onChangeCountry}
            >
              {countryAndCapitalsList.map(each => (
                <option className="country" key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="description">is capital of which country?</p>
          </div>
          <h1 className="capital">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
