import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Button } from "react-native-paper";

export default class TextUs extends Component {
  render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 20, paddingTop: 60, color: "#4E4E4E" }}>
          Like the app? Want to help?
        </Text>

        <Text style={{ fontSize: 53, paddingTop: 10, color: "#4E4E4E" }}>
          Support Us
        </Text>

        <View style={addItemStyles.wrapper}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: 15,
                  justifyContent: "flex-start",
                  textAlign: "center",
                  marginTop:10,color:"#4E4E4E"
                }}
              >
                Support a little:
              </Text>
              <View style={styles.TextViewStyleRed}>
                <Text
                  style={{
                    alignItems: "center",
                    color: "#ffffff",
                    fontSize: 25,
                  }}
                >
                  $0.99
                </Text>
              </View>

              <Text
                style={{
                  color: "#ffffff",
                  fontSize: 15,
                  justifyContent: "flex-start",
                  textAlign: "center",marginTop:10,color:"#4E4E4E"
                }}
              >
                Support even more:
              </Text>
              <View style={styles.TextViewStyleRed}>
                <Text
                  style={{
                    alignItems: "center",
                    color: "#ffffff",
                    fontSize: 25,
                  }}
                >
                  $9.99
                </Text>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: 15,
                  justifyContent: "flex-start",
                  textAlign: "center",marginTop:10,color:"#4E4E4E"
                }}
              >
                Support more:
              </Text>
              <View style={styles.TextViewStyleRed}>
                <Text
                  style={{
                    alignItems: "center",
                    color: "#ffffff",
                    fontSize: 25,
                  }}
                >
                    $4.99
                </Text>
              </View>
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: 15,
                  justifyContent: "flex-start",
                  textAlign: "center",marginTop:10,color:"#4E4E4E"
                }}
              >
                Support a lot:
              </Text>
              <View style={styles.TextViewStyleRed}>
                <Text
                  style={{
                    alignItems: "center",
                    color: "#ffffff",
                    fontSize: 25,
                  }}
                >
                    $19.99
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={{ fontSize: 10, paddingTop: 10, color: "#4E4E4E" ,textAlign:'center'}}>
        These are voluntary donations, they do not add any functionality to the app, but they do help us operate Revocation Radio and develop more features for the app so we can continue to offer it for FREE.
        </Text>
        <Text style={{ fontSize: 32, paddingTop: 10, color: "#4E4E4E" }}>
          Support Us monthly
        </Text>
        <Text style={{ fontSize: 15, paddingTop: 10, color: "#4E4E4E" ,textAlign:'center',paddingLeft:10,paddingRight:10}}>
        As a ministry, we survive on monthly donations. We cannot do what we do without your help. If you would like to support us monthly, click below to send us a text and we will reply with instructions.
        </Text>

        <View style={styles.TextViewStyleRedd}>
                <Text
                  style={{
                    alignItems: "center",
                    color: "#ffffff",
                    fontSize: 25,
                  }}
                >
                   Support Monthly
                </Text>
              </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    paddingTop: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  TextViewStyle: {
    borderWidth: 1,

    borderColor: "#2B2A2A",
    width: "100%",

    backgroundColor: "#2B2A2A",
  },
  backgroundImage: {
    width: 300,
    height: 300,
    resizeMode: "cover",
  },
  TextViewStyleRed: {
    
    marginRight: 100,
    width: 200,
    height: 40,
    
    alignItems: "center",
    alignContent: "center",
    marginLeft: 1,
    marginTop: 0,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: "#830000",
    borderRadius: 30,
    borderWidth: 0,
    borderColor: "#fff",
  },

  TextViewStyleRedd: {
    

    width: 250,
    height: 40,
    
    alignItems: "center",
    alignContent: "center",
    marginLeft: 1,
    marginTop: 20,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: "#830000",
    borderRadius: 30,
    borderWidth: 0,
    borderColor: "#fff",
  },

  TextViewStyleGrey: {
    borderWidth: 1,
    marginTop: 10,
    borderColor: "#830000",
    width: "100%",

    backgroundColor: "#830000",
  },

  TextViewStyle2: {
    borderWidth: 0,
    paddingTop: 10,
    borderColor: "#2B2A2A",
    width: "100%",

    backgroundColor: "#ffffff",
  },

  TextStyle1: {
    fontSize: 17,
    textAlign: "center",
    color: "#FFFFFF",
    padding: 0,
  },

  TextStyle2: {
    fontSize: 29,
    textAlign: "center",
    color: "#FFFFFF",
    padding: 0,
  },
  TextStyle3: {
    fontSize: 12,
    paddingLeft: 40,
    paddingRight: 40,

    textAlign: "left",
    color: "#4E4E4E",
    padding: 0,
  },

  container: {
    flex: 1,

    justifyContent: "center",

    paddingTop: 1,

    backgroundColor: "#ecf0f1",

    padding: 8,
  },
  scrollView: {
    backgroundColor: "#ffffff",
    marginHorizontal: 0,
  },
});
const addItemStyles = StyleSheet.create({
  wrapper: {
    width: "100%",

  
  },
  inputLabels: {
    fontSize: 16,
    color: "#000000",
    marginBottom: 7,
  },
  inputField: {
    backgroundColor: "#EEEEEE",
    padding: 10,
    color: "#505050",
    height: 50,
  },
  inputWrapper: {
    paddingBottom: 20,
  },
  saveBtn: {
    backgroundColor: "#003E7D",
    alignItems: "center",
    padding: 12,
  },
  saveBtnText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
});
