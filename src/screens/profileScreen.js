import React from 'react'
import {View} from 'react-native'
import styles from '../../styles/styles'

import WeightCmp from '../cmp/cmp.weight'


import { Container, Header, Content, Accordion } from "native-base";

const dataArray = [
    { title: "Edit User Name", content:    "random info" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
  ];

export default class ProfileScreen extends React.Component{
    render(){
        return(
                <Container>

                     <Container>
        <Header />
        <Content padder>
          <Accordion dataArray={dataArray} icon="add" expandedIcon="remove" />
        </Content>
      </Container>
      
                    
                    <WeightCmp/>
                </Container>
        )
    }
}

