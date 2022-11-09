import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';



class Name extends React.Component{
  render(){
    return(
      <Text
        style={{
          backgroundColor: '#777879',
          fontSize: 0.8,
          fontWeight: '400',
          layoutOrigin: [0.5, 0.5],
          paddingLeft: 0.2,
          paddingRight: 0.2,
          textAlign: 'center',
          textAlignVertical: 'center',
          transform: [{translate: [0, 0, -3]}],
        }}>
        {this.props.text}
      </Text>
    )
  }
}

export default class WelcomeVR extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      txt:'Hello 0',
      imgSrc: 'chess-world.jpg'
    };
    this.i=0;
  }
  start(){
    if(this.i%2==0){
      this.setState({
        txt:'State 1',
        imgSrc: 'world.jpg'
      });
    } else{
      this.setState({
        txt:'State 2',
        imgSrc: "chess-world.jpg"
      });
    }
    this.i++;
  }
  render() {
    return (
      <View>
        <Pano source={asset(this.state.imgSrc)}/>
        <VrButton onClick={()=> this.start()}>
          <Name text="Ab"></Name>
          <Name text="GN"></Name>
          <Name text="AG"></Name>
        </VrButton>
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeVR', () => WelcomeVR);
