import * as React from "react";
import { StyleSheet, View } from "react-native";

import { Button, Input } from "react-native-elements";
import {AuthContext} from "../../App"

export default function AuthForm() {
  const [nom, setNom] = React.useState('');
  const [pwd, setPwd] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
     
      <Input
        placeholder="nom.prenom@gmail.com"
        label="Nom d'utilisateur"
        containerStyle={{ ...rawStyles.container }}
        inputContainerStyle={{ ...rawStyles.inputContainer }}
        inputStyle={{ ...rawStyles.input }}
        labelStyle={{ ...rawStyles.label }}
        value={nom}
        onChangeText={setNom}
      />
      <Input
        placeholder="****************"
        label="Mot de passe"
        containerStyle={{ ...rawStyles.container }}
        inputContainerStyle={{ ...rawStyles.inputContainer }}
        inputStyle={{ ...rawStyles.input }}
        labelStyle={{ ...rawStyles.label }}
        secureTextEntry={true}
        value={pwd}
        onChangeText={setPwd}
      />
      <Button
        title="Se connecter"
        buttonStyle={{ ...rawStyles.button }}
        titleStyle={{ ...rawStyles.buttonText }}
        onPress={() => signIn({ nom, pwd })}
      />
    </View>
  );
}

const rawStyles = {
  inputContainer: { borderColor: "#031772" },
  container: { marginBottom: 20 },
  input: { fontSize: 12 },
  label: { color: "#111215", fontSize: 14 },
  button: {
    backgroundColor: "#031772",
  },
  buttonText: { borderRadius: 4, fontSize: 12, paddingHorizontal: 50 },
};

const styles = StyleSheet.create({
  
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5e5e5",
    paddingHorizontal: 5,
    paddingVertical: 10,
  },

  label: {
    color: "#111215",
    fontSize: 14,
  },
});
