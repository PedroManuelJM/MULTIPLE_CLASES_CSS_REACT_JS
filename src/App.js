import React, { Component } from 'react';
import './App.css';
import { TemaData } from './dataLocal';
import github from './assets/img/github.png';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      listaTema: [], // arreglo para guardar la lista

    }
  }

  componentDidMount() {
    this.setState({
      listaTema: TemaData, // lista == dataLocal
    })
    console.log(TemaData) // mostrando por consola la dataLocal
  }

  dibujarTema(dataTema) {
    return (
      <table className="table table-striped table-hover overflow-auto">
      <thead className="thead-dark">
          <tr className="text-center">
              <th>ID</th>
              <th>TEMA</th>
              <th>CATEGORIA</th>
          </tr>
      </thead>
      <tbody>
          {dataTema.map(itemTema =>
              <tr key={itemTema.id} className="text-center">
                  <td>{itemTema.id}</td>
                  <td>{itemTema.tema}</td>
                  <td> <span className=
                        {` 
                                ${itemTema.categoria === "React" ? 'badge badge-pill badge-info' : ''}
                                ${itemTema.categoria === "Angular" ? 'badge badge-pill badge-danger' : ''}
                                ${itemTema.categoria === "MySQL" ? 'badge badge-pill badge-warning' : ''}
                                ${itemTema.categoria === "Seguridad Informática" ? 'badge badge-pill badge-dark' : ''}
                                ${itemTema.categoria === "JavaScript" ? 'badge badge-pill badge-success' : ''}
                                ${itemTema.categoria === "PHP" ? 'badge badge-pill badge-primary' : ''}
                        `}
                     >{itemTema.categoria}</span>
                 </td>
              </tr>
          )}
      </tbody>
  </table>
    )
  }

  render() {
    let contenidoTema = this.dibujarTema(this.state.listaTema);
    return (
      <>
      <div className="container">
        <div className="row">
              <div className="col-2 col-sm-2 col-md-2">

              </div>
              <div className="col-8 col-sm-8 col-md-8">
                <br></br>
                <h4 id="titulo" className="text-center"> MÚLTIPLE CLASES DE CSS EN REACT </h4>
                  <a href="https://github.com/PedroManuelJM" target="_blank">
                    <h6 className="float-right"> <img src={github} width="12%" /> PedroManuelJM</h6>
                  </a>
                  {contenidoTema}
              </div>

        </div>

      </div>
     
      </>
    );

  }
}