import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export interface IAddButtonProps {
  onPress(): void;
}
const AddButton: React.FC<IAddButtonProps> = ({onPress}: IAddButtonProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backfaceVisibility: 'visible',
        }}
        source={require('../../assets/images/white_bg.jpg')}
        blurRadius={10}
      >
        <View
          style={{
            height: 70,
            width: 70,
            borderRadius: 70 / 2,
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
          // this view is to overcome android ripple effect from over flowing the button
        >
          <Pressable
            style={styles.button}
            android_ripple={{
              color: '#46BE8B',
            }}
            onPress={() => {
              console.log('add button got pressed....!');
              onPress();
            }}
          >
            <Text style={styles.button_text}>+</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 50,
    right: 0,
    height: 90,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffffff9',
    borderRadius: 60,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: '#50E3A4',
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    lineHeight: 70,
  },
  button_text: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: '400',
    lineHeight: 70,
  },
});
