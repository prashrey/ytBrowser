//import React, { Component } from 'react';
import React from 'react';

//functional Component
//const SearchBar = () => {
//    return <input />;
//};

//Component class
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
    }
    render() {
        //return <input onChange={this.onInputChange} />;
        return (
            <div className="search-bar">
                <input
                    value={this.state.term} 
                    onChange={(ev) => this.onInputChange(ev.target.value)} />                
                <button 
                    type="submit"
                    className="btn btn-default"
                    onClick={() => this.searchText()} >
                    <span className="glyphicon glyphicon-search">Search</span>
                </button>
            </div>
        );
    }
    onInputChange(e) {        
        this.setState({ term: e });
    }
    searchText() {
        this.props.onSearchTermChanged(this.state.term);
    }
}
export default SearchBar