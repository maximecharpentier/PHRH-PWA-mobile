import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Input } from "react-native-elements";
import { AuthContext } from "../../App"

export default function AuthForm() {

  const [nom, setNom] = React.useState('');
  const [pwd, setPwd] = React.useState('');
  const { signIn } = React.useContext(AuthContext);

  return (
    <View style={styles.login}>
      <Text style={styles.loginTitle}>Connexion</Text>
      <Text style={styles.loginSubtitle}>Pour continuer, connectez-vous.</Text>
      <Input
        placeholder="Salarié 1"
        label="Nom d'utilisateur"
        containerStyle={{ ...rawStyles.container }}
        inputContainerStyle={{ ...rawStyles.inputContainer }}
        inputStyle={{ ...rawStyles.input }}
        labelStyle={{ ...rawStyles.label }}
        value={nom}
        onChangeText={setNom}
        placeholderTextColor="#E0E0E0"
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
        placeholderTextColor="#E0E0E0"
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Se connecter"
          buttonStyle={{ ...rawStyles.button }}
          titleStyle={{ ...rawStyles.buttonText }}
          onPress={() => signIn({ nom, pwd })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFF",
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 54
  },
  loginTitle: {
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 27,
    textAlign: "center",
    color: "#111215",
    marginBottom: 8,
    marginTop: 50
  },
  loginSubtitle: {
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 64,
    color: "#111215",
    textAlign: "center"
  },
  buttonContainer: {
    width: 176,
    marginLeft: "auto",
    marginRight: "auto"
  }
});

const rawStyles = {
  inputContainer: {
    borderColor: "#031772",
    borderBottomWidth: 1
  },
  container: {
    marginBottom: 32
  },
  input: {
    fontSize: 12,
    fontWeight: "500",
    color: "#757575"
  },
  label: {
    color: "#111215",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 21
  },
  button: {
    backgroundColor: "#031772",
    borderRadius: 4
  },
  buttonText: {
    color: "#FFF",
    fontSize: 12,
    paddingTop: 4,
    paddingBottom: 4
  }
};
