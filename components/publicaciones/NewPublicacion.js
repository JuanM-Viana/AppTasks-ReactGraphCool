import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PublicacionForm from './PublicacionForm';
import {graphql } from 'react-apollo';
import gql from 'graphql-tag';

class NewPublicacion extends Component {

    nuevaPublicacion = ({ titulo, descripcion }) => {
        this.props
        .nuevaP({
            variables: {
                titulo,
                descripcion
            }
        }).then(() => {

        }).catch(error => {
            console.log(error);
        });
    };

    render() {
        return(
            <View>
                <PublicacionForm onSubmit={this.nuevaPublicacion} />
            </View>
        );
    }
}

const newPublicacion = gql `
    mutation nuevaP($titulo: String!, $descripcion: String!) {
        createPublicacion(titulo: $titulo, descripcion: $descripcion) {
            id
        }
    }
`

export default graphql (newPublicacion, {
    name: 'nuevaP'
})(NewPublicacion);


