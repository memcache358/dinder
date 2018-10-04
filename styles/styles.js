import {StyleSheet,Dimensions} from 'react-native'

export const PRIMARY_1 = "#dcedff"
export const PRIMARY_2 = "#94b0da"
export const PRIMARY_3 = "#8f91a2"

export const CONTRAST_1 = "#505a5b"
export const CONTRAST_2 = "#343f3e"

const styles = StyleSheet.create(
    {
        container:{
            backgroundColor: PRIMARY_1,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          
        },
        slider:{
            fontSize:20
        },
        scrollContainer:{
            flexGrow:1,
            justifyContent: 'space-between'
        },
        buttonGroupContainer:{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 50,
            backgroundColor: '#ecf0f1',
        },
        box:{
           
            width: Dimensions.get('window').width,
            alignItems: 'center',
            justifyContent: 'center',
          
        },
        titleBox:{
            backgroundColor: PRIMARY_2,
            flex:1
        },
        caloriesLeftBox:{
            backgroundColor: CONTRAST_1,
            flex:2
        },
        dateBox:{
            backgroundColor: PRIMARY_3,
           flex:4
        }
        
        
    }
)

export default styles