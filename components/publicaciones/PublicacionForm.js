import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { Form, Item, Input, Label } from 'native-base';



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
            <Form>
                <Item floatingLabel>
                    <Label>
                        Titulo
                    </Label>
                    <Input 
                        onChangeText={titulo => this.setState({ titulo })}
                        value={this.state.titulo}
                    />                
                </Item>
                <Item floatingLabel>
                    <Label>
                        Descripcion
                    </Label>
                    <Input 
                        multiline
                        style={styles.descripcion}
                        onChangeText={descripcion => this.setState({ descripcion })}
                        value={this.state.descripcion}
                    />                
                </Item>
                <Button title="Guardar" onPress={this.submitPublicacion}/>
            </Form>
        )
    }
}

const styles = StyleSheet.create({
    descripcion: {
        height: 200,
        textAlignVertical: "top"
    }
  });