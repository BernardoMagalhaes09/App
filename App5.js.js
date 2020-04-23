import React, { useState} from 'react';
import { Button, Text, View, SafeAreaView, TextInput, Alert, StyleSheet} from 'react-native';

function Render(){
  const [textoDigitado, setTextoDigitado] = useState('');
  const [textoPostado, setTextoPostado] = useState('')
  
  return(
  <View style={styles.container}>
      <Text style={styles.titulo} >Digite o maior numero de caracteres em 5 segundos:</Text>
      <TextInput style ={{
        height: 100, 
        width: 300,
        borderColor: 'gray', 
        borderWidth: 3, 
        margin: 5}}
        placeholder="  Digite aqui!"
        multiline={true}
        onChangeText={texto => setTextoDigitado(texto)}
        maxLength={140}
        value = {textoDigitado}
        />
      <Button
      onPress={() => {
        if (textoDigitado.length < 1){
          Alert.alert("Caracteres minimos de 50")
        }else{
        setTextoPostado(textoDigitado),
        Alert.alert("Pensamento Postado")
        setTextoDigitado('')
        }
      }}
      title="Postar" color="#1e90ff" />
    
      <Text style={styles.titulo}>Mural: </Text>
      <Text style={styles.fonteBase}>{textoPostado}</Text>
    </View>

  )
}



export default function App() {
  return(
    <Render/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fonteBase: {
    fontFamily: 'Roboto',
    fontSize:  20
},
titulo: {
    fontFamily: 'Roboto',
    fontSize: 22,
    fontWeight: 'bold'

},
negrito: {
  fontFamily: 'Roboto',
  fontSize: 20,
  fontWeight: 'bold'

}
});


function Votos() {
  const [totalVotos, settotalVotos] = useState(0)

  return (
    <View>
      <Text>
        O total de votos é: {totalVotos}
      </Text>
      <Button
      onPress= {  () => {
        settotalVotos(totalVotos + 1)
      }}
      title= "Vote!!"
      />
      <Button
      onPress= {  () => {
        settotalVotos(totalVotos - totalVotos)
      }}
      title= "Zerar votos!!"
      /> 
    </View>
  )
}

/*export default function MostraVotos() {
  return ( 
    <SafeAreaView>
      <Votos />
    </SafeAreaView>
  )
}*/

class Contador extends Component {
  render() {
    return (
      <TextInput 
        {...this.props}
      />
    );
  }
}

class Jogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: '', 
      tempo: 10, 
      play: false
    }
    this.contador;
  }
  componentDidMount(){
    this.contador = setInterval(() => {
      this.incrementaContadador()},1000
    );
    this.setState({play: true});
  }

  incrementaContadador(){
      this.setState((()=>({tempo: state.tempo - 1})))
    if(this.state.tempo === 0 ){
      this.setState({play: false})
      this.componentWillUnmount()
    }
  }
 
  componentWillUnmount(){
    clearInterval(this.contador); 
    Alert.alert(`                   ------Parabéns------\n               A sua pontuação é ${this.state.texto.length}`)
  }

  render(){
      return (
        <View>
          <Text style={styles.sectionTitle} > </Text>
          <Text style={styles.sectionDescription}>Tempo: {this.state.tempo}</Text>
          <
