import React, {Component} from 'react'
import {StyleSheet,WebView} from 'react-native'
import styles from '../../styles/styles'
import {Content, List,ListItem,Body,Title,Button,Icon,Container, Header, DatePicker, Text } from 'native-base';
import axios from 'axios'

export default class HomeScreen extends Component{

    constructor(props){
        super(props)
        this.state = {
            
            chosenDate: new Date(), 
            recipes:[],
            recipeTitles:[]
        
        }
        this.getList = this.getList.bind(this)
       }

        async getList(){
            axios.get('http://www.recipepuppy.com/api/', {
                params: {
                i: 'onions,garlic',
                q:'omelet',
                p:3
                }
            })
            .then((response)=> {
            this.setState({recipes: response})
            this.setState({recipeTitles: response.data.results.title})
                //this.state.recipes.data.results.map(element =>{console.log(element.title)})
            }
            )
            .catch(function (error) {
                console.log(error);
                
            }
            );
      }
       
      async componentDidMount(){
           this.getList()
      }

    render() {
        if(this.state.recipes && this.state.recipes.data && this.state.recipes.data.results)
            return(
                    <Container>
                        {
                            //console.log(this.state.recipes.data)
                            // this.state.recipes.data.results.map(
                            //     (recipe) => {
                            //         console.log(recipe)
                            //     }
                            // )
                        }
                        { this.state.recipes.data.results.map(
                            (recipe) => 
                                {
                                    return (
                                        <Text>{recipe.title}</Text>
                                    )
                                }
                            )

                            
                        }

                        {/* <Content>
                            <List dataArray={this.state.recipeTitles}
                                renderRow={(item) =>
                                <ListItem>
                                    <Text>{item}</Text>
                                </ListItem>
                                }>
                            </List>
                        </Content> */}
                        <Text>Loaded</Text>

                        <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}}
      />
                    </Container>
            )
        else
        return(
            <Container>
                <Text>Loading...</Text>
            </Container>
        )
    }
}

