import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class DespesaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            descricao: '',
            valor: '',
            dataVencimento: '',
        };
    }

    handleDescricaoChange = (text) => {
        this.setState({ descricao: text });
    };

    handleValorChange = (text) => {
        this.setState({ valor: text });
    };

    handleDataVencimentoChange = (text) => {
        this.setState({ dataVencimento: text });
    };

    handleAdicionarDespesa = () => {
        const { descricao, valor, dataVencimento } = this.state;
        this.props.onAdicionarDespesa(descricao, valor, dataVencimento);
        this.setState({ descricao: '', valor: '', dataVencimento: '' });
    };

    render() {
        return (
            <View>
                <Text>Descrição:</Text>
                <TextInput
                    value={this.state.descricao}
                    onChangeText={this.handleDescricaoChange}
                />
                <Text>Valor:</Text>
                <TextInput
                    value={this.state.valor}
                    onChangeText={this.handleValorChange}
                />
                <Text>Data de Vencimento:</Text>
                <TextInput
                    value={this.state.dataVencimento}
                    onChangeText={this.handleDataVencimentoChange}
                />
                <Button title="Adicionar Despesa" onPress={this.handleAdicionarDespesa} />
            </View>
        );
    }
}

export default DespesaForm;
