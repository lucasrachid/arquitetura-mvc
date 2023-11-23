import React, { Component } from 'react';
import { View } from 'react-native';
import DespesaForm from './src/view/DespesaForm';
import ListaDespesas from './src/view/ListaDespesas';
import DespesaController from './src/controller/DespesaController';

const despesaController = new DespesaController();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      despesas: [],
    };
  }

  handleAdicionarDespesa = (descricao, valor, dataVencimento) => {
    despesaController.adicionarDespesa(descricao, valor, dataVencimento);
    this.setState({ despesas: despesaController.obterDespesas() });
  };

  render() {
    return (
      <View>
        <DespesaForm onAdicionarDespesa={this.handleAdicionarDespesa} />
        <ListaDespesas despesas={this.state.despesas} />
      </View>
    );
  }
}

export default App;
