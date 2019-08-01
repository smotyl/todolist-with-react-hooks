import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-top: 20px;
  border-top-width: 1px;
  border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;

export const SubmitButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background: #fe4b6a;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
`;

export const TodoList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-bottom: 20px;
`;

export const TodoItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  background: rgba(190, 190, 190, 0.1);
  margin: 7px 0;
  padding: 7px 0;
  border-radius: 4px;
`;

export const TodoText = styled.Text`
  color: #000;
  font-size: 21px;
  flex-wrap: wrap;
  flex: 0.8;
`;

export const CheckBoxButton = styled.TouchableOpacity``;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.3);
`;

export const ModalContent = styled.View`
  border-radius: 4px;
  border: solid 1px #fe4b6a;
`;

export const ModalHeader = styled.View`
  background: #fe4b6a;
  align-items: center;
  padding: 5px;
`;

export const HeaderTitle = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const ModalBody = styled.View`
  background: #fff;
  border-radius: 4px;

  max-width: 250px;

  justify-content: center;
  align-items: center;
`;

export const ModalButton = styled.TouchableOpacity`
  height: 35px;
  width: 35px;

  justify-content: center;
  align-items: center;
  background: #fe4b6a;
  border-radius: 4px;

  margin-bottom: 10px;
`;

export const ModalDescription = styled.Text`
  color: #999;
  padding: 10px;
`;
