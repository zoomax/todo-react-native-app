import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

export interface ICustomTextInputProps {
  placeholder: string;
  onChange(text: string, name: string): void;
  inputStyle?: {[key: string]: any};
  name: string;
  autoFocus?: boolean;
  label?: string;
  required?: boolean;
  value?: string;
}
const CustomTextInput: React.FC<ICustomTextInputProps> = ({
  name,
  inputStyle,
  onChange,
  autoFocus,
  placeholder,
  label,
  value,
}: ICustomTextInputProps) => {
  return (
    <View style={styles.inputWrapper}>
      {label && <Text style={styles.label}> {label}</Text>}
      <TextInput
        onChangeText={text => onChange(text, name)}
        style={inputStyle ?? styles.input}
        placeholder={placeholder ?? ''}
        autoFocus={autoFocus ?? false}
        value={value ?? ''}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  input: {
    height: 60,
    paddingVertical: 5,
    paddingHorizontal: 15,
    color: '#50E3A4',
    borderColor: '#50E3A4',
    borderWidth: 2,
    borderRadius: 7,
    fontSize: 16,
    fontWeight: '500',
  },
  inputWrapper: {
    display: 'flex',
    marginBottom: 20,
  },
  label: {
    marginBottom: 10,
    color: '#000',
    fontSize: 16,
    fontWeight: '700',
  },
});
