import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';



export default class PublicacionForm extends Component {

    state = {
        titulo: "",
        descripcion: ""
    }
    submitPublicacion = () => {
        this.props.onSubmit({
            titulo: this.state.titulo,
            descripcion: this.state.descripcion
        });
    };

    render() {
        return(
            <View>
                <TextInput 
                    style={styles.titulo}
                    onChangeText={titulo => this.setState({ titulo })}
                    value={this.state.titulo}
                />
                <TextInput 
                    style={styles.descripcion}
                    onChangeText={descripcion => this.setState({ descripcion })}
                    value={this.state.descripcion}
                />
                <Button title="Guardar" onPress={this.submitPublicacion}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titulo: {
        height: 40,
        borderColor: "#333",
        borderWidth: 1  
    },
    descripcion: {
        height: 200,
        borderColor: "#333",
        borderWidth: 1,
        textAlignVertical: "top"
    }
  });