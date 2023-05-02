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
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
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
}
function App(): JSX.Element {
  const [listItems, setListItems] = useState<ITodoItem[]>([
    {
      title: 'todo 1',
      id: '1',
      isDone: false,
    },
    {
      title: 'todo 2',
      id: '2',
      isDone: true,
    },
    {
      title: 'todo 3',
      id: '3',
      isDone: true,
    },
    {
      title: 'todo 4',
      id: '4',
      isDone: false,
    },
    {
      title: 'todo 5',
      id: '5',
      isDone: false,
    },
    {
      title: 'todo 6',
      id: '6',
      isDone: true,
    },
    {
      title: 'todo 7',
      id: '7',
      isDone: false,
    },
    {
      title: 'todo ',
      id: '8',
      isDone: false,
    },
    {
      title: 'todo 9',
      id: '9',
      isDone: false,
    },
  ]);
  const toggleTodoItemStatus = (id: string) => {
    setListItems(prev =>
      prev.map(item => ({
        ...item,
        isDone: item.id === id ? !item.isDone : item.isDone,
      })),
    );
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
              toggleTodoStatus={() => {
                toggleTodoItemStatus(item.id);
              }}
            />
          );
        }}
        keyExtractor={item => item.id}
      />
      {/* <TodoItem /> */}
      <AddButton />
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
