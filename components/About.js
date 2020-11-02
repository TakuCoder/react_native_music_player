import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView,TextInput} from 'react-native';
import axios from 'axios';
import {parseString} from 'react-native-xml2js';
const API_URL = 'https://api.themoviedb.org/3';

//https://api.themoviedb.org/3/movie/550?api_key=53de4458f25a1566019724d90a1138f5

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
      movies: [],
    };
  }

  componentDidMount() {
    fetch(
      'https://api.themoviedb.org/3/movie/550?api_key=53de4458f25a1566019724d90a1138f5',
    )
      .then((response) => response.json())

      .then((responseJson) => {
        this.setState({movies: responseJson});
      })
      .catch((error) => {
        console.log('Data fetching failed');
      });

    //     return fetch('https://facebook.github.io/react-native/movies.json')
    //     .then((response) => response.json())
    //     .then((responseJson)=>{

    //       this.setState({
    //         isLoading: false,
    //         dataSource: responseJson.movies,
    //       }),
    //       console.log(responseJson);
    //     }

    //   )
    //     .catch((error) =>
    //     {
    // console.log(error)

    // });
  }

  fetchMovies() {
    fetch(
      'https://api.themoviedb.org/3/movie/550?api_key=53de4458f25a1566019724d90a1138f5',
    )
      .then((response) => response.json())

      .then((responseJson) => {
        this.setState({movies: responseJson});
      })
      .catch((error) => {
        console.log('Data fetching failed');
      });
  }

  render() {
    let movies = this.state.dataSource.map((val, key) => {
      return (
        <View key={key} style={styles.item}>
          <Text>{val.title}</Text>
        </View>
      );
    });

    return (
      <View style={styles.MainContainer}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.TextViewStyle}>
            <Text style={styles.TextStyle1}> Learn About</Text>
            <Text style={styles.TextStyle2}> Revocation Radio </Text>
          </View>

          <View style={styles.TextViewStyle2}>
            <Text style={styles.TextStyle3}>
              {' '}
              Revocation Radio is the only station on terrestrial frequencies
              that broadcasts our specific mix of Christian Rock and Hip-Hop.
              Hip-Hop music is so prevalent and influential in today’s society
              and culture, that we believe it is imperative to broadcast a
              Christian alternative with life-breathing messages and
              unparalleled quality, not only in lyrics, but also in production.
            </Text>
          </View>

          <View style={styles.TextViewStyle2}>
            <Text style={styles.TextStyle3}>
              Revocation Radio is a new generation in broadcasting. Formed from
              a vision shared by each of our board members and staff, Revocation
              Radio aims to “Take Back the Airwaves.” With its 4 FM frequencies,
              Smartphone Apps and Interactive website, Revocation Radio wants to
              reach out and help the community. Revocation Radio wants to show
              that lyrics are not just words, they turn into actions.
            </Text>
          </View>

          <View style={styles.TextViewStyleRed}>
            <Text style={styles.TextStyle1}>The Revocation Radio</Text>
            <Text style={styles.TextStyle2}> Network </Text>
          </View>

        
          <View style={addItemStyles.wrapper}>
           
         
                <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                        <Text style={{ color:"#ffffff", fontSize: 39,justifyContent: 'flex-start',textAlign:'center'}}>
                        88.1 FM
                          </Text>
                          <Text style={{ color:"#ffffff",fontSize: 12,justifyContent: 'flex-start',textAlign:'center'}}>
                          WKRE
                          </Text>
                    </View>
                    <View style={{flex:1}}>
                    <Text style={{color:"#ffffff",fontSize: 17,justifyContent: 'flex-end',textAlign:'center',marginTop:10}}>
                    St. Clair County
                          </Text>
                          <Text style={{color:"#ffffff",fontSize: 17,justifyContent: 'flex-end',textAlign:'center'}}>
                    Trussville
                          </Text>
                         
                    </View>
                </View>
          

        </View>


        <View style={addItemStyles.wrapper}>
           
         
           <View style={{flexDirection:"row"}}>
               <View style={{flex:1}}>
                   <Text style={{ color:"#ffffff", fontSize: 39,justifyContent: 'flex-start',textAlign:'center'}}>
                   88.5 FM
                     </Text>
                     <Text style={{ color:"#ffffff",fontSize: 12,justifyContent: 'flex-start',textAlign:'center'}}>
                     WKUA
                     </Text>
               </View>
               <View style={{flex:1}}>
               <Text style={{color:"#ffffff",fontSize: 17,justifyContent: 'flex-end',textAlign:'center',marginTop:10}}>
               Fosters
                     </Text>
                     <Text style={{color:"#ffffff",fontSize: 17,justifyContent: 'flex-end',textAlign:'center'}}>
                     Tuscaloosa
                     </Text>
                    
               </View>
           </View>
     

   </View>

        <View style={addItemStyles.wrapper}>
           
         
                <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                        <Text style={{ color:"#ffffff", fontSize: 39,justifyContent: 'flex-start',textAlign:'center'}}>
                        89.7 FM
                          </Text>
                          <Text style={{ color:"#ffffff",fontSize: 12,justifyContent: 'flex-start',textAlign:'center'}}>
                          WJHO
                          </Text>
                    </View>
                    <View style={{flex:1}}>
                    <Text style={{color:"#ffffff",fontSize: 17,justifyContent: 'flex-end',textAlign:'center',marginTop:10}}>
                    Alexander City
                          </Text>
                          <Text style={{color:"#ffffff",fontSize: 17,justifyContent: 'flex-end',textAlign:'center'}}>
                    Pell City
                          </Text>
                         
                    </View>
                </View>
          

        </View>


        <View style={addItemStyles.wrapper}>
           
         
           <View style={{flexDirection:"row"}}>
               <View style={{flex:1}}>
                   <Text style={{ color:"#ffffff", fontSize: 39,justifyContent: 'flex-start',textAlign:'center'}}>
                   97.7 FM
                     </Text>
                     <Text style={{ color:"#ffffff",fontSize: 12,justifyContent: 'flex-start',textAlign:'center'}}>
                     WRYD
                     </Text>
               </View>
               <View style={{flex:1}}>
               <Text style={{color:"#ffffff",fontSize: 17,justifyContent: 'flex-end',textAlign:'center',marginTop:10}}>
               Birmingham
                     </Text>
                     <Text style={{color:"#ffffff",fontSize: 17,justifyContent: 'flex-end',textAlign:'center'}}>
               Hoover
                     </Text>
                    
               </View>
           </View>
     

   </View>
       

        </ScrollView>
      </View>
    );
  }

  // render() {

  //   const {movies} = this.state

  //   return (

  //   <View style={styles.container}>
  //   <Text>kkk</Text>
  //   {movies && movies.results && movies.results.length>0? (<FlatList

  //   data={movies.results}

  //   renderItem={({ item }) => <MyMovieItem item={item} />}

  //   keyExtractor={(item,key) => key}

  //   //onRefresh={this.onRefresh}

  //   //refreshing={this.state.refreshing}

  //   ></FlatList>) : null}

  //   </View>

  //   );

  //   }
}

const styles = StyleSheet.create(
  {
  MainContainer: {
    paddingTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  TextViewStyle: {
    borderWidth: 1,

    borderColor: '#2B2A2A',
    width: '100%',

    backgroundColor: '#2B2A2A',
  },
  TextViewStyleRed: {
    borderWidth: 1,
    marginTop: 10,
    borderColor: '#830000',
    width: '100%',

    backgroundColor: '#830000',
  },



  TextViewStyleGrey: {
    borderWidth: 1,
    marginTop: 10,
    borderColor: '#830000',
    width: '100%',

    backgroundColor: '#830000',
  },


  TextViewStyle2: {
    borderWidth: 0,
    paddingTop: 10,
    borderColor: '#2B2A2A',
    width: '100%',

    backgroundColor: '#ffffff',
  },

  TextStyle1: {
    fontSize: 17,
    textAlign: 'center',
    color: '#FFFFFF',
    padding: 0,
  },

  TextStyle2: {
    fontSize: 29,
    textAlign: 'center',
    color: '#FFFFFF',
    padding: 0,
  },
  TextStyle3: {
    fontSize: 12,
    paddingLeft: 40,
    paddingRight: 40,

    textAlign: 'left',
    color: '#4E4E4E',
    padding: 0,
  },

  container: {
    flex: 1,

    justifyContent: 'center',

    paddingTop: 1,

    backgroundColor: '#ecf0f1',

    padding: 8,
  },
  scrollView: {
    backgroundColor: '#ffffff',
    marginHorizontal: 0,
  },
});
const addItemStyles = StyleSheet.create({
  wrapper: {
    marginTop:20,
      padding: 5,
      backgroundColor: '#484848'
  },
  inputLabels: {
      fontSize: 16,
      color: '#000000',
      marginBottom: 7,
  },
  inputField: {
      backgroundColor: '#EEEEEE',
      padding: 10,
      color: '#505050',
      height: 50
  },
  inputWrapper: {
      paddingBottom: 20,
  },
  saveBtn: {
      backgroundColor: '#003E7D',
      alignItems: 'center',
      padding: 12,
  },
  saveBtnText: {
      color: '#FFFFFF',
      fontSize: 18,
  }


});
