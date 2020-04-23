import React, { useState} from 'react';
import { Button, Text, View, SafeAreaView} from 'react-native';



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
      title= "Vote!!!"
      />
      <Button
      onPress= {  () => {
        settotalVotos(totalVotos - totalVotos)
      }}
      title= "Zerar votos!!!"
      /> 
    </View>
  )
}

export default function MostraVotos() {
  return ( 
    <SafeAreaView>
      <Votos />
    </SafeAreaView>
  )
}
