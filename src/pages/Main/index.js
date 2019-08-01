import React, { useState, useReducer, useEffect } from 'react';
import { Modal, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import AsyncStorage from '@react-native-community/async-storage';

import DeleteIcon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  TodoList,
  TodoItem,
  TodoText,
  CheckBoxButton,
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalBody,
  HeaderTitle,
  ModalDescription,
  ModalButton,
} from './styles';

export default function Main() {
  // states
  const [input, setInput] = useState('');
  const [modalItem, setModalItem] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  // create uid for todo items
  function uid() {
    const now = Date.now()
      .toString()
      .replace('.', '');
    return `${now}${Math.random()
      .toString(16)
      .substr(2)}`;
  }

  // reducer for todo list state manipulation
  const [todos, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'load':
        return action.data;

      case 'add':
        return [
          ...state,
          {
            id: uid(),
            title: action.name,
            check: false,
          },
        ];

      case 'check':
        return state.map(todo =>
          todo.id === action.id ? { ...todo, check: !todo.check } : todo
        );

      case 'remove':
        return state.filter(todo => todo.id !== action.id);

      default:
        return state;
    }
  }, []);

  // load data from AsyncStorage
  useEffect(() => {
    async function fetchData() {
      const storageUsers = await AsyncStorage.getItem('todos');

      if (storageUsers) {
        dispatch({
          type: 'load',
          data: JSON.parse(storageUsers),
        });
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // handle button clicks
  function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: 'add',
      name: input,
    });

    setInput('');
    Keyboard.dismiss();
  }

  function handleCheckItem(id) {
    dispatch({
      type: 'check',
      id,
    });
  }

  function handleDeleteItem(id) {
    dispatch({
      type: 'remove',
      id,
    });

    setModalVisible(false);
  }

  function onLongPressButton(item) {
    setModalItem({ id: item.id, title: item.title });
    setModalVisible(true);
  }

  return (
    <Container>
      <Modal
        transparent
        visible={modalVisible}
        animationIn="slideInLeft"
        animationOut="slideOutRight"
        onRequestClose={() => setModalVisible(false)}
      >
        <ModalContainer>
          <ModalContent>
            <ModalHeader>
              <HeaderTitle>Delete this action?</HeaderTitle>
            </ModalHeader>

            <ModalBody>
              <ModalDescription>{modalItem.title}</ModalDescription>
              <ModalButton onPress={() => handleDeleteItem(modalItem.id)}>
                <DeleteIcon name="trash-o" size={20} color="#FFF" />
              </ModalButton>
            </ModalBody>
          </ModalContent>
        </ModalContainer>
      </Modal>

      <TodoList
        data={todos}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'flex-end',
        }}
        renderItem={({ item }) => (
          <TodoItem
            key={item.title}
            onLongPress={() => onLongPressButton(item)}
          >
            <TodoText>{item.title}</TodoText>
            <CheckBoxButton onPress={() => handleCheckItem(item.id)}>
              {item.check ? (
                <Icon name="check-box" size={26} color="#000" />
              ) : (
                <Icon name="check-box-outline-blank" size={26} color="#000" />
              )}
            </CheckBoxButton>
          </TodoItem>
        )}
      />

      <Form>
        <Input
          value={input}
          onChangeText={text => setInput(text)}
          autoCorrect={false}
          autoCapitaliza="none"
          placeholder="Add a todo action ..."
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
        />

        <SubmitButton onPress={handleSubmit}>
          <Icon name="add" size={20} color="#FFF" />
        </SubmitButton>
      </Form>
    </Container>
  );
}

Main.navigationOptions = {
  title: 'TODO LIST',
};
