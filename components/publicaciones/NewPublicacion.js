import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import PublicacionForm from './PublicacionForm';
import {graphql } from 'react-apollo';
import gql from 'graphql-tag';

class NewPublicacion extends Component {

    state = {
        loading: false
    }

    nuevaPublicacion = ({ titulo, descripcion }) => {
        const {nuevaP, navigation} = this.props;
        this.setState({ loading: true });
        nuevaP({
            variables: {
                titulo,
                descripcion
            }
        }).then(() => {
            navigation.goBack();
        }).catch(error => {
            console.log(error);
            this.setState({ loading: false });
        });
    };

    render() {
        return(
            <View>
                {
                    this.state.loading ? (
                        <ActivityIndicator size="large"/>
                    ) : (
                        <PublicacionForm onSubmit={this.nuevaPublicacion} />
                    )
                }
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
    name: 'nuevaP',
    options: {
        refetchQueries: ["publicacionesQuery"]
    }
})(NewPublicacion);


