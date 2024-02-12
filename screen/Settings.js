import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const RadioButton = ({ label, value, checked, onRadioButtonPress }) => {
  return (
    <TouchableOpacity 
        style={{ 
            flexDirection: 'row', 
            alignItems: 'center',
            padding : 20
        }} 
        onPress={() => onRadioButtonPress(value)}>
        <View 
            style={{ 
                height: 24, 
                width: 24, 
                borderRadius: 12, 
                borderWidth: 2, 
                borderColor: 'black', 
                alignItems: 'center', 
                justifyContent: 'center',
            }}>
            {checked ? <View style={{ height: 12, width: 12, borderRadius: 6, backgroundColor: 'black' }} /> : null}
        </View>
        <Text 
            style={{ 
                marginLeft: 6,
                fontSize : 24 
            }}>
                {label}
        </Text>
    </TouchableOpacity>
  );
}; 


export var Checked

const Settings = () => {
   
    const [checked, setChecked] = useState('light');
    Checked = checked

  const handleRadioButtonPress = (value) => {
    setChecked(value);
};
    
  return (
    <View 
        style = {{
            paddingVertical : 20,
            
            
            }}>
      <RadioButton label="Light" value="light" checked={checked === 'light'} onRadioButtonPress={handleRadioButtonPress} />
      <RadioButton label="Dark" value="dark" checked={checked === 'dark'} onRadioButtonPress={handleRadioButtonPress} />
      <RadioButton label="Bright" value="bright" checked={checked === 'bright'} onRadioButtonPress={handleRadioButtonPress} />
      
    </View>
  );
};

export default Settings;

