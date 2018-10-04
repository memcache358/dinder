import React, {Component} from 'react'
import {View, Text,Slider,Dimensions} from 'react-native'
import styles from '../../styles/styles'

export  class WeightCmp extends React.Component{

    constructor(props){
        super(props)
        this.state = {weight: 70, imperialWeight: 0, stonesWeight: 0}
       this.handleSlider = this.handleSlider.bind(this)
       this.convertMetricToImperial = this.convertMetricToImperial.bind(this)
       this.convertMetricToStones = this.convertMetricToStones.bind(this)
    }
    
     
    convertMetricToImperial(value){
        return Math.round(value * 2.20462262185 * 10) / 10
    }

    convertMetricToStones(value){
        return Math.round(value * 0.157473 * 10) / 10
    }
    handleSlider(value){
        this.setState({weight:value, imperialWeight: this.convertMetricToImperial(value), stonesWeight: this.convertMetricToStones(value)})
        
    }

    componentDidMount(){
        this.setState({imperialWeight: this.convertMetricToImperial(this.state.weight)})
        this.setState({stonesWeight: this.convertMetricToStones(this.state.weight)})
    }
    render(){
        return(
            <View>
                <Text style={{fontSize:15, paddingLeft:5}} >Weight: {this.state.weight} KG {this.state.imperialWeight} LB {this.state.stonesWeight} Stones</Text>
                <Slider
                    minimumValue={1}
                    maximumValue={299}
                    step={1}
                    height={30}
                    width={Dimensions.get('window').width}
                    value={this.state.weight}
                    onValueChange={this.handleSlider} />
                
               
            </View>
        )
    }   
}
export default WeightCmp
