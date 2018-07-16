import React, { Component } from 'react'
import { Text, View } from 'react-native';
import {graphql } from 'react-apollo';
import gql from 'graphql-tag';

import menuEstilos from '../../estilos/menu';


class Publicacion extends Component {
    static navigationOptions = {
        title: "Publicación",
        ...menuEstilos        
    }; 

    render() {
        //console.log(this.props);
        const {Publicacion,loading } = this.props;
        if(loading) return null;
        return (   
            <View>
                <Text>{this.props.Publicacion.id}</Text>
                <Text>{this.props.Publicacion.titulo}</Text>
            </View>
        );
    }
}
const publicacionQuery = gql `
    query Publicacion($id: ID!) {
        Publicacion(id: $id){
            id
            titulo
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