import React, { Component } from 'react';
import Menu from './components/Menu/index'
import Lista from './components/Lista/index'
import Header from './components/Header/index'
import Jornada from './components/NovaJornada'
import axios from 'axios'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      respostaapi: [],
      menuapi: [],
      filtro: "",
      novajornada : true
    }
    this.novajornada = this.novajornada.bind(this);
    this.voltajornada = this.voltajornada.bind(this);
  }

  refresh(bu) {
    axios.get(`https://api-d1-test.herokuapp.com/api/journey/${bu}`)
      .then(resp => this.setState({ respostaapi: resp.data }))

      axios.get(`https://api-d1-test.herokuapp.com/api/filter`)
      .then(resp => this.setState({ menuapi: resp.data }))
  }

  componentDidMount() {
    this.refresh(this.state.filtro)
  }

  novajornada(){
    this.setState({novajornada : false})
  }
  voltajornada(){
    this.setState({novajornada :  true})
  }

  render() {

       

    return (

      this.state.novajornada ? 

      <article>

        <div className='header'>
          
          <Header onclick={this.novajornada}><input type="text" placeholder='Buscar'  onChange={e => this.refresh(e.target.value)} /> </Header>

        </div>
        <div className='page'>

          <Menu menu={this.state.menuapi}>teste</Menu>
          <Lista lista={this.state.respostaapi}></Lista>
        </div>
      </article>

      :

      <Jornada onclick={this.voltajornada}/>

    )
  }

}

export default App
