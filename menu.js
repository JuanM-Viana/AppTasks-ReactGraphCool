import React from 'react';
import { StyleSheet,  View, Text, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Publicacion from './components/publicaciones/Publicacion';
import Publicaciones from './components/publicaciones/Publicaciones';
import NewPublicacion from './components/publicaciones/NewPublicacion';
import menuEstilos from './estilos/menu';

class Inicio extends React.Component {
    static navigationOptions = {
      title: "Incio",    
      ...menuEstilos   
    };
  
    goToPublicacion = () => {
      this.props.navigation.navigate('Publicacion');
    };

    newPublicacion = () => {
        this.props.navigation.navigate('NewPublicacion');
    };
  
    render() {
      return (      
          <View style={styles.container}>
            <Publicaciones {...this.props}/>
            <TouchableHighlight onPress={this.newPublicacion} style={styles.estNuevaPublicacion}>
                <Text style={styles.nuevaPublicacionText}>Nuevo Registro +</Text>
            </TouchableHighlight>
          </View>
      );
    }
  }
  

export default StackNavigator ({
    Incio: {
      screen: Inicio
    },
  
    Publicacion: {
      screen: Publicacion
    },

    NewPublicacion: {
      screen: NewPublicacion
    }
  
  });

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between"
    },
    estNuevaPublicacion: {
        backgroundColor: "#4D9264",
        padding: 20
    },
    nuevaPublicacionText: {
        fontSize: 18,
        textAlign: "center"
    }
  });