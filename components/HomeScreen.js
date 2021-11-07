import * as React from 'react';
import { Image, } from 'react-native';

import ScreenTemplate from './ScreenTemplate';
import {styles} from './stylesheet.js';

const HomeScreen = ({ navigation }) => {
  return (

    <ScreenTemplate
        title={"Homework Planner"}
        midStyle={styles.middleBody} >
      <Image style={{width: '95%', height: '95%', resizeMode: 'stretch'}}
        source={require('../assets/HWPlannerImage.jpg')} />
    </ScreenTemplate>

  )
}

export default HomeScreen
