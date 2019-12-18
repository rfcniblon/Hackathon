import React from 'react';
import '../Resultat/Resultat.css';

class ResultatInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      console.log(this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <p>Entrée le code final pour vérification</p>
            <input type="text" className="input_result" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" className="bouton_result" value="Envoyer" />
        </form>
      );
    }
  }

export default ResultatInput;