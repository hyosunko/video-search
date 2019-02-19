import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "black pink" };

  handleChange = e => {
    this.setState({ term: e.target.value });
  };

  handleSubmit = e => {
    const { term } = this.state;
    e.preventDefault();
    this.props.onTermSubmit(term);
  };

  render() {
    const { term } = this.state;
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label>Youtube Video Search</label>
            <input type="text" value={term} onChange={this.handleChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
