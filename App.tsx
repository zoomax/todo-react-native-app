/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import TodoItem from './src/components/TodoItem';
import AddButton from './src/components/AddButton';
import Header from './src/components/Header';
import FormModal from './src/components/FormModal';
import {uid} from './src/Utils/uid';
import TodoItemInfoModal from './src/components/TodoItemInfoModal';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
}

export interface ITodoItem {
  title: string;
  id: string;
  isDone: boolean;
  description?: string;
}

function App(): JSX.Element {
  const [listItems, setListItems] = useState<ITodoItem[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const showErrorAlert = (message: string, title: string) =>
    Alert.alert(title, message, [
      {text: 'Dismiss', onPress: () => console.log('OK Pressed')},
    ]);
  const showSuccessAlert = () =>
    Alert.alert('success', 'todo item was created successfully......', [
      {text: 'Dismiss', onPress: () => setShowForm(false)},
    ]);
  const addTodoItem = (item: Partial<ITodoItem>) => {
    if (item.title) {
      setListItems(prev => {
        return [
          ...prev,
          {
            ...item,
            isDone: false,
            description: item.description ?? '',
            id: uid(),
            title: item.title ?? '',
          },
        ];
      });
      showSuccessAlert();
    } else {
      showErrorAlert('Title Field is required', 'Error');
    }
  };
  const toggleTodoItemStatus = ({id}: ITodoItem) => {
    setListItems(prev =>
      prev.map(item => ({
        ...item,
        isDone: item.id === id ? !item.isDone : item.isDone,
      })),
    );
  };
  const deleteTodoItem = ({id}: ITodoItem) => {
    setListItems(prev => prev.filter(item => id !== item.id));
  };
  const editTodoItem = ({id}: ITodoItem) => {
    // setListItems(prev =>
    //   prev.map(item => ({
    //     ...item,
    //     isDone: item.id === id ? !item.isDone : item.isDone,
    //   })),
    // );
    console.log(`todo item with id ${id} is updated successfully`);
  };
  return (
    <SafeAreaView
      style={{
        position: 'relative',
        flex: 1,
      }}
    >
      <Header />
      <FlatList
        data={listItems}
        renderItem={({item}) => {
          return (
            <TodoItem
              todo={item}
              toggleItemStatus={toggleTodoItemStatus}
              editItem={editTodoItem}
              deleteItem={deleteTodoItem}
            />
          );
        }}
        keyExtractor={item => item.id}
      />
      {/* <TodoItem /> */}
      <AddButton onPress={() => setShowForm(true)} />
      <FormModal
        addTodo={(todo: Partial<ITodoItem>) => {
          console.log('item added ..... ');
          addTodoItem(todo);
        }}
        isVisible={showForm}
        closeModal={() => {
          setShowForm(prev => !prev);
        }}
      />
      {/* <TodoItemInfoModal
        visible={true}
        ediItem={(item: ITodoItem) => {}}
        deleteItem={(item: ITodoItem) => {}}
        toggleItemStatus={(item: ITodoItem) => {}}
        item={{
          id: 'sdfghjk',
          title: 'Wash dished',
          // description: 'use soap and sponge',
          isDone: false,
        }}
        closeModal={() => {}}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
