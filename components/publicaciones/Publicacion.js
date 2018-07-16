import React, { Component } from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
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
            <View style={styles.container}>
                <Text>style={styles.bodyText}> {this.props.Publicacion.descripcion}</Text>
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

const styles = StyleSheet.create({
    container:{
        padding: 20
    },
    bodyText: {
        fontSize: 17
    }
  });