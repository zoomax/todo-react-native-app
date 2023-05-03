import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {ITodoItem} from '../../../App';

export interface IModalFormProps {
  isVisible: boolean;
  addTodo: (todo: ITodoItem) => void;
  closeModal(): void;
}

const FormModal: React.FC<IModalFormProps> = ({
  isVisible,
  addTodo,
  closeModal,
}: IModalFormProps) => {
  return (
    <Modal transparent={true} visible={false} animationType="slide">
      <View style={styles.container}>
        <View style={styles.formWrapper}>
          <View style={styles.header}>
            <Text style={styles.headerContent}>Add new Todo</Text>
            <Pressable
              onPress={() => {
                console.log('modal got dismissed .....');
              }}
            >
              <Text
                style={{
                  color: '#50E3A4',
                }}
              >
                {' '}
                Dismiss{' '}
              </Text>
            </Pressable>
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}> Title</Text>
            <TextInput style={styles.input} placeholder="Todo Title ...." />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}> Discription </Text>
            <TextInput
              style={styles.input}
              placeholder="Todo Description ...."
            />
          </View>
          <View style={styles.inputWrapper}>
            <Pressable
              onPress={() => {
                console.log('todo was added successfully......');
              }}
              style={styles.btn}
            >
              <Text
                style={{
                  color: '#fff',
                  fontWeight: '600',
                  fontSize: 18,
                }}
              >
                Add Todo
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FormModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    flex: 1,
    position: 'relative',
  },
  formWrapper: {
    height: 400,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingVertical: 25,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },

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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerContent: {
    fontWeight: '700',
    color: '#50E3A4',
    fontSize: 25,
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
  btn: {
    backgroundColor: '#50E3A4',
    height: 60,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 60,
    marginTop: 20,
  },
});
