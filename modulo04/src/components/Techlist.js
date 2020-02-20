import React, { Component } from 'react';
import TechItem from './TechItem'

class TechList extends Component {
  state ={
    newTech: '',
    techs: []
  };

  handleInputChange = e => {
    this.setState( {newTech : e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState( {techs: [...this.state.techs, this.state.newTech],
                   newTech: ''});
    console.log(this.state.newTech);
  }

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech )})
  }

  //Assim que o component aparece em tela
  componentDidMount(){
    const techs = localStorage.getItem('techs');

    if (techs) {
      this.setState({ techs: JSON.parse(techs)});
    }

  }

  //Sempre que houver alteracoes nas props ou estado // prevProps
  componentDidUpdate(_, prevState){
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }

  //Sempre que deixa de Existir
  componentWillUnmount(){

  }

  render() {    
    return ( 
      <>
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
          <TechItem 
            key={tech} 
            tech={tech} 
            onDelete={ () => this.handleDelete(tech) }
          ></TechItem>
          ))}          
        </ul>
        <input 
          type="text"
          onChange={this.handleInputChange} 
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
      </>
    );
  }
}

export default TechList;