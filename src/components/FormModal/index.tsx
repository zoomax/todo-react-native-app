import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {ITodoItem} from '../../../App';
import CustomTextInput from '../TextInput';

export interface IModalFormProps {
  isVisible: boolean;
  addTodo: (todo: Partial<ITodoItem>) => void;
  closeModal(): void;
}

const FormModal: React.FC<IModalFormProps> = ({
  isVisible,
  addTodo,
  closeModal,
}: IModalFormProps) => {
  const [payload, setPayload] = useState<Partial<ITodoItem>>({});
  const onInputTextChange = (text: string, name: string) => {
    setPayload(prev => ({...prev, [name]: text}));
  };
  return (
    <Modal transparent={true} visible={isVisible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.formWrapper}>
          <View style={styles.header}>
            <Text style={styles.headerContent}>Add new Todo</Text>
            <Pressable
              onPress={() => {
                console.log('modal got dismissed .....');
                closeModal();
              }}
            >
              <Text
                style={{
                  color: '#50E3A4',
                }}
              >
                Dismiss
              </Text>
            </Pressable>
          </View>
          <CustomTextInput
            name={'title'}
            placeholder={'add Todo Title ....'}
            onChange={onInputTextChange}
            required={true}
            value={payload.title}
            label="Title"
          />
          <CustomTextInput
            name={'description'}
            placeholder="Todo Description ...."
            onChange={onInputTextChange}
            required={true}
            value={payload.description}
            label="Description"
          />
          <View style={styles.inputWrapper}>
            <Pressable
              onPress={() => {
                console.log('todo was added successfully......');
                if (payload.title) {
                  addTodo(payload);
                  setPayload({});
                }
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
