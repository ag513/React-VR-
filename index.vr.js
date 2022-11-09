import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  Box,
  Sphere,
  Cylinder
} from 'react-vr';


export default class WelcomeVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('world.jpg')}/>
        <Box
         dimWidth={0.35}
         dimDepth={0.35}
         dimHeight={0.40}
        // wireframe={true}
        texture={asset("chess-world.jpg")}
         style={
          {
            //color:'red',
            transform:[{translate:[0,0,-2]}, {rotateX:45}, {rotateY:45},{scale:[2,0.85,1.5]}]
          }
         }>
        </Box>
        <Sphere
          radius={0.1}
          widthSegments={90}
          heightSegments={90}
          texture={asset("chess-world.jpg")}
          style={
            {
              color:'white',
              transform:[{translate:[0.75,0,-2]}, {rotateX:45}, {rotateY:45},{scale:[2,2,2]}]
            }}
          />
          <Cylinder
             radiusTop={0.2}
             radiusBottom={0.2}
             dimHeight={0.3}
             segments={30}
             texture={asset("chess-world.jpg")}
             style={
              {
                color:'white',
                transform:[{translate:[0,0,-2]}, {rotateX:45}, {rotateY:45}]
              }
             }
          />
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeVR', () => WelcomeVR);
