import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { Icon, Button } from "react-native-elements";
import { API } from "../../utils/api"

class Hotel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputIsOpen: false,
      notificationIsActive: false,
      notificationMessage: "",
      notificationIcon: "",
      memo: "",
      urgences: [],
      lastTimeVisited: new Date(this.props.hotel.last_time_visited)
    }
  }

  componentDidMount(){
    API.get('urgences').then((response) => {
      let urgences = response.data
      urgences = urgences.filter(urgence => urgence.hotel_id === this.props.hotel._id)
      this.setState({
        urgences
      })
    })
    .catch(error => {
      handleNotification('urgencyLoadingError')
    });
  }

  handleToggle() {
    this.setState(prevState => ({
      ...prevState,
      inputIsOpen: !prevState.inputIsOpen,
      memo: ""
    }));
  }

  handleChange = text => {
    this.setState(prevState => ({
      ...prevState,
      memo: text
    }))
  }

  handleNotification(notificationType) {

    let notificationMessage = ""
    let notificationIcon = ""

    if (notificationType === 'memoSuccess') {
      notificationMessage = "Votre mémo a été enregistré."
      notificationIcon = "check"
    } else if (notificationType === 'memoEmpty') {
      notificationMessage = "Veuillez remplir le champ ci-dessus."
      notificationIcon = "times"
    } else if (notificationType === 'memoError') {
      notificationMessage = "Une erreur est survenue lors de l\'enregistrement de votre mémo. Veuillez vérifier l'état de votre connexion internet."
      notificationIcon = "times"
    } else if (notificationType === 'urgencyLoadingError') {
      notificationMessage = "Une erreur est survenue lors du chargement des urgences liées à cet hôtel. Veuillez vérifier l'état de votre connexion internet."
      notificationIcon = "times"
    }

    this.setState(prevState => ({
      ...prevState,
      notificationIsActive: true,
      notificationMessage: notificationMessage,
      notificationIcon: notificationIcon
    }));

    setTimeout(() => {
      this.setState(prevState => ({
        ...prevState,
        notificationIsActive: false,
        notificationMessage: ''
      }));
    }, 5000)
  }

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.memo !== '') {

      const hotelId = this.props.hotel._id
      const memo = { message: this.state.memo }

      API.post(`/hotels/add/${hotelId}/memo`, memo)
        .then((response) => {
          this.handleNotification('memoSuccess')
          this.setState(prevState => ({
            ...prevState,
            isSuccessful: true
          }));
          this.handleToggle()
        })
        .catch(error => {
          this.handleNotification('memoError')
          this.setState(prevState => ({
            ...prevState,
            isSuccessful: false
        }));
      });
    } else {
      this.handleNotification('memoEmpty')
    }
  };

  render() {

    const hotel = this.props.hotel
    const navigation = this.props.navigation

    return (
      <ScrollView style={styles.hotel}>
        <View style={styles.header}>
          <View style={styles.headerButtonContainer}>
            <Button
              onPress={navigation.goBack}
              buttonStyle={{ ...rawStyles.headerButton.btn }}
              icon={<Icon style={styles.headerIcon} name="angle-left" type="font-awesome-5" size={23} />}
            />
          </View>
          <Text style={styles.headerTitle}>{hotel.nom}</Text>
        </View>
        <Text style={styles.hotelTitle}>Informations sur l'hôtel</Text>
        <View style={styles.card}>
          <View style={styles.cardContainerFix}>
            <TouchableOpacity style={styles.cardText} onPress={() => Linking.openURL('google.navigation:q=100+101')} style={styles.cardItemLarge}>
              <Text style={styles.cardTitle}>Adresse</Text>
              <Text style={styles.cardText}>{hotel.adresse}</Text>
              <Text style={styles.cardText}>{hotel.cp} {hotel.ville}</Text>
            </TouchableOpacity>
            <View style={styles.cardItemSmall}>
              <Text style={styles.cardTitle}>Secteur</Text>
              <Text style={styles.cardText}>{hotel.cp}</Text>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardItemLarge}>
              <Text style={styles.cardTitle}>Note de la dernière visite</Text>
              <Text style={styles.cardText}>{hotel.note}</Text>
            </View>
            <View style={styles.cardItemSmall}>
              <Text style={styles.cardTitle}>Dernière visite</Text>
              <Text style={styles.cardText}>{hotel.last_time_visited !== null ? `${this.state.lastTimeVisited.getDate()}/${this.state.lastTimeVisited.getMonth() + 1}/${this.state.lastTimeVisited.getFullYear()}` : "--"}</Text>
            </View>
          </View>
        </View>
        { this.state.urgences.length !== 0 ?
        this.state.urgences.map( (urgence, id) =>
          <View key={id}>
            <Text style={styles.hotelTitle}>Urgence</Text>
            <View style={styles.card}>
              <Text style={styles.cardTitleUrgency}>Descriptif de l'urgence</Text>
              <Text style={styles.cardTextUrgency}>{urgence.detail}</Text>
            </View>
          </View>
          )
          : null
        }
        <View style={this.state.inputIsOpen ? styles.hotelContainerHidden : styles.hotelContainer}>
          <View style={styles.button}>
            <Button
              buttonStyle={{ ...rawStyles.button.btn }}
              titleStyle={{ ...rawStyles.button.title }}
              icon={<Icon style={styles.buttonIcon} name="plus" type="font-awesome-5" size={10} />}
              title="Ajouter un mémo"
              onPress={() => {
                this.handleToggle()
              }}
            />
          </View>
        </View>
        <View style={this.state.inputIsOpen ? styles.form : styles.hidden}>
          <TextInput
            style={styles.formInput}
            placeholder="Ajouter votre mémo..."
            numberOfLines={4}
            multiline={true}
            name="memo"
            value={this.state.memo}
            onChangeText={text => {
              this.handleChange(text)
            }}
          />
          <View style={styles.formButtons}>
            <View style={styles.formContainer}>
              <Button
                buttonStyle={{ ...rawStyles.formButtonFirstChild.btn }}
                titleStyle={{ ...rawStyles.formButtonFirstChild.title }}
                title="Annuler"
                onPress={() => {
                  this.handleToggle()
                }}
              />
            </View>
            <View style={styles.formContainer}>
              <Button
                buttonStyle={{ ...rawStyles.formButtonLastChild.btn }}
                titleStyle={{ ...rawStyles.formButtonLastChild.title }}
                title="Valider"
                onPress={() => {
                  this.handleSubmit(event)
                }}
              />
            </View>
          </View>
        </View>
        <View style={this.state.notificationIsActive ? styles.notification : styles.hidden}>
          <Icon
            style={this.state.notificationIcon === "check" ? styles.notificationIcon : styles.hidden}
            color="#222222"
            name="check"
            type="font-awesome-5"
            size={12}
          />
          <Icon
            style={this.state.notificationIcon === "times" ? styles.notificationIcon : styles.hidden}
            color="#222222"
            name="times"
            type="font-awesome-5"
            size={12}
          />
          <Text style={styles.notificationText}>{this.state.notificationMessage}</Text>
        </View>
      </ScrollView>
    )
  }
}

export default Hotel;

const styles = StyleSheet.create({
  hotel: {
    backgroundColor: "#FAFAFA",
    paddingBottom: 40
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderColor: "#E0E0E0"
  },
  headerButtonContainer: {
    position: "absolute",
    left: "16px"
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24
  },
  hotelTitle: {
    color: "#031772",
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 27,
    padding: 16
  },
  card: {
    padding: 16,
    backgroundColor: "#FFF",
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    marginBottom: 8
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 16
  },
  cardContainerFix: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 34
  },
  cardContainerLastChild: {
    flex: 1,
    flexDirection: "row",
  },
  cardItemLarge: {
    flex: 7
  },
  cardItemSmall: {
    flex: 3
  },
  cardTitle: {
    marginBottom: 4,
    fontSize: 12,
    lineHeight: 18,
    color: "#828282"
  },
  cardText: {
    fontSize: 14,
    lineHeight: 21,
    color: "#000",
    fontWeight: "500"
  },
  cardTitleUrgency: {
    marginBottom: 8,
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 21,
    color: "#000"
  },
  cardTextUrgency: {
    marginBottom: 8,
    fontSize: 12,
    lineHeight: 18,
    color: "#111215"
  },
  hotelContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 16,
    marginRight: 16
  },
  hotelContainerHidden: {
    display: "none"
  },
  hidden: {
    display: "none"
  },
  form: {
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
  },
  formInput: {
    backgroundColor: "#F3F3F3",
    borderRadius: 2,
    fontSize: 12,
    lineHeight: 18,
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 8,
    color: "#9D9D9D",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2
  },
  formButtons: {
    flex: 1,
    flexDirection: "row",
    marginTop: 24
  },
  formContainer: {
    flex: 1
  },
  notification: {
    flex: 1,
    backgroundColor: "#222222",
    borderRadius: 4,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginLeft: -112,
    marginRight: "auto",
    flexDirection: "row",
    alignItems: "center",
    position: "fixed",
    bottom: 88,
    left: "50%",
    width: 224
  },
  notificationIcon: {
    backgroundColor: "#FFF",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#FFF",
    width: 16
  },
  notificationText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "500",
    paddingLeft: 8
  }
})

const rawStyles = {
  button: {
    btn: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingRight: 8,
      paddingLeft: 12,
      paddingTop: 8,
      paddingBottom: 8,
      backgroundColor: "#EFF2FB",
      borderRadius: 4
    },
    title: {
      fontSize: 12,
      fontWeight: "500",
      color: "#000",
      paddingLeft: 12,
      paddingTop: 0
    }
  },
  headerButton: {
    btn: {
      backgroundColor: "transparent",
      paddingTop: 0,
      paddingBottom: 0
    }
  },
  formButtonFirstChild: {
    title: {
      fontSize: 12,
      fontWeight: "500",
      color: "#111215"
    },
    btn: {
      width: "96%",
      backgroundColor: "#EFF2FB"
    },
  },
  formButtonLastChild: {
    title: {
      fontSize: 12,
      fontWeight: "500",
      color: "#FFF"
    },
    btn: {
      width: "96%",
      alignSelf: "flex-end",
      backgroundColor: "#031772"
    },
  }
}