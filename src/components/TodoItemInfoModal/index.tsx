import {Image, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ITodoItem} from '../../../App';

export interface ITodoItemInfoModalProps {
  visible: boolean;
  item: ITodoItem;
  ediItem(item: ITodoItem): void;
  deleteItem(item: ITodoItem): void;
  toggleItemStatus(item: ITodoItem): void;
  closeModal(): void;
}
const TodoItemInfoModal: React.FC<ITodoItemInfoModalProps> = ({
  deleteItem,
  toggleItemStatus,
  ediItem,
  closeModal,
  visible,
  item,
}) => {

  const {title, description} = item;
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.infoWrapper}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <Pressable onPress={closeModal}>
              <Text style={styles.dismissBtn}>{}</Text>
            </Pressable>
          </View>

          <Text style={styles.descrption}>
            {description ?? 'No Description Was Provided....'}
          </Text>
          <View style={styles.optionsWrapper}>
            <Pressable
              onPress={() => {
                toggleItemStatus(item);
                closeModal();
              }}
              style={styles.option}
            >
              <Image
                source={require('../../assets/images/correct.png')}
                style={styles.optionImage}
              />
              <Text style={styles.optionTitle}>Toggle Status</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                ediItem(item);
                closeModal();
              }}
              style={styles.option}
            >
              <Image
                source={require('../../assets/images/pencil.png')}
                style={styles.optionImage}
              />
              <Text style={styles.optionTitle}>Edit Todo</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                deleteItem(item);
                closeModal();
              }}
              style={styles.option}
            >
              <Image
                source={require('../../assets/images/delete.png')}
                style={styles.optionImage}
              />
              <Text style={styles.optionTitle}>Delete Todo</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TodoItemInfoModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.3)',
    position: 'relative',
  },
  infoWrapper: {
    // height: 400,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  // header content
  header: {
    marginTop: 20,
    marginBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontWeight: '700',
    fontSize: 30,
    color: '#333',
  },
  dismissBtn: {
    color: '#50E3A4',
    fontSize: 16,
    fontWeight: '300',
  },
  descrption: {
    fontWeight: '400',
    fontSize: 18,
    textAlign: 'left',
    color: '#aaa',
    width: '100%',
    marginBottom: 30,
  },
  // options
  optionsWrapper: {
    marginTop: 20,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  option: {
    width: 120,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // borderColor: '#000',
    // borderWidth: 1,
  },
  optionImage: {
    height: 40,
    width: 40,
    marginBottom: 15,
  },
  optionTitle: {
    color: '#333',
    fontSize: 16,
    fontWeight: '500',
  },
});
