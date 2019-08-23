import React, { Component } from 'react'
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        characters: [],
    }

    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] })
    }

    render(){
        const { characters } = this.state;
        return (
            <div className="container">
                <div className="App">
                    <Table characterData = {characters} removeCharacter = {this.removeCharacter} />
                    <Form handleSubmit={this.handleSubmit}  />
                </div>
            </div>
        )
    }
}

export default App;