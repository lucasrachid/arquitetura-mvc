import React from 'react';
import { View, Text } from 'react-native';

const ListaDespesas = ({ despesas }) => {
    return (
        <View>
            <Text>Lista de Despesas:</Text>
            {despesas.map((despesa, index) => (
                <View key={index}>
                    <Text>Descrição: {despesa.descricao}</Text>
                    <Text>Valor: R$ {despesa.valor}</Text>
                    <Text>Data de Vencimento: {despesa.dataVencimento}</Text>
                </View>
            ))}
        </View>
    );
};

export default ListaDespesas;
