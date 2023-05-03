import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ITodoItem} from '../../../App';
import TodoItemInfoModal from '../TodoItemInfoModal';

export interface ITodoItemProps {
  todo: ITodoItem;
  toggleItemStatus(todo: ITodoItem): void;
  editItem(todo: ITodoItem): void;
  deleteItem(todo: ITodoItem): void;
}
const TodoItem: React.FC<ITodoItemProps> = ({
  todo,
  toggleItemStatus,
  deleteItem,
  editItem,
}) => {
  const [infoModalVisiblity, setInfoModalVisiblty] = useState<boolean>(false);
  const showInfoModal = () => {
    setInfoModalVisiblty(true);
  };
  const closeModal = () => {
    setInfoModalVisiblty(false);
  };
  return (
    <>
      <Pressable
        style={styles.todo}
        android_ripple={{color: '#cccccc33'}}
        onPress={showInfoModal}
      >
        <Text style={todo.isDone ? styles.title_active : styles.title}>
          {todo.title}
        </Text>
        <View style={todo.isDone ? styles.radio_active : styles.radio}>
          <View style={todo.isDone ? styles.radio_indecator_active : {}} />
        </View>
      </Pressable>
      <TodoItemInfoModal
        item={todo}
        visible={infoModalVisiblity}
        deleteItem={deleteItem}
        ediItem={editItem}
        toggleItemStatus={toggleItemStatus}
        closeModal={closeModal}
      />
    </>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  todo: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: 100,
    // borderBottomWidth: 3,
    // borderBottomColor: '#F7F8FB',
  },
  title_active: {
    color: '#DFE1E6',
    fontSize: 20,
  },
  title: {
    fontSize: 20,
    color: '#81848C',
  },
  radio: {
    borderColor: '#81848C',
    height: 28,
    width: 28,
    borderWidth: 2,
    borderRadius: 28 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radio_active: {
    borderColor: '#50E3A4',
    height: 28,
    width: 28,
    borderWidth: 2,
    borderRadius: 28 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radio_indecator_active: {
    height: 16,
    width: 16,
    borderRadius: 16 / 2,
    backgroundColor: '#50E3A4',
  },
});
