import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import {graphql } from 'react-apollo';
import gql from 'graphql-tag';

import menuEstilos from '../../estilos/menu';


class Publicacion extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.state.params.titulo,
            ...menuEstilos        
        }; 
    };

    render() {
        //console.log(this.props);
        const {Publicacion, loading } = this.props;
        if(loading) return <ActivityIndicator size="large"/>;
        return (   
            <View>
                <Text>{this.props.Publicacion.descripcion}</Text>
            </View>
        );
    }
}
const publicacionQuery = gql `
    query Publicacion($id: ID!) {
        Publicacion(id: $id){
            id
            titulo
            descripcion
        }
    }
`;

export default graphql(publicacionQuery, {
    props: ({data}) => ({...data}),
    options: ({navigation}) => ({
        variables: {
            id: navigation.state.params.id
        }
    })
})(Publicacion);