// import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import countries from '../components/countries';
// var countries = require('country-list')();
// const countries = cl();

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '', country: 'AF' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onSelectChange(event) {
    console.log(event.target);
    this.setState({ country: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term, this.state.country);
    this.setState({ term: '' });
  }

  renderCountryList() {
    const countryNames = _.map(countries, 'Name');
    return _.map(countryNames, (c, i) => <option key={i}>{c}</option>);
  }

  render() {
    console.log(countries);
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <input
              placeholder="Get a five-day forecast for your cities"
              className="form-control"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputState" className="sr-only">
              State
            </label>
            <select
              id="inputState"
              className="form-control"
              value={this.state.country}
              onChange={this.onSelectChange}
            >
              {this.renderCountryList()}
            </select>
          </div>
          <div className="form-group col-md-4">
            <button type="submit" className="btn btn-secondary">
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
