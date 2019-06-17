import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    async onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 01e4529b399b6189956b12e2b02fd105bab67e7f4144ccbade58a6d79b5dc14c'
            }
        });

        console.log(response.data.results);
    }

    render() {
        return (
            <div style={{ margin: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}

export default App;