import * as React from 'react';
import { Text, View, Button, SectionList, ScrollView, } from 'react-native';

import styles, {textstyles , liststyles} from './stylesheet.js';
import Lists from './ListsAbout.js';

const Item = ({ title }) => (
  <View style={liststyles.listBox}>
    <Text style={liststyles.listText}> {title} </Text>
  </View>
);

const AboutScreen = ({ navigation }) => {
  return (

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>

          <View style={textstyles.title}>
              <Text style={textstyles.titleText}
                    adjustsFontSizeToFit={true}
                    numberOfLines={1}
                    >
                About Homework Planner
              </Text>
          </View>

          <View style={liststyles.listBody}>
            <View style={liststyles.listBody}>
              <Lists />
            </View>
          </View>


        </View>
      </ScrollView>

  )
}

export default AboutScreen
