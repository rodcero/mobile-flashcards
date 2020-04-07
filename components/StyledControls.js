import styled from 'styled-components/native'
import colors from '../constants/Colors'

export const Button = styled.TouchableOpacity`
  padding: 10px;
  margin: 10px 0;
  align-items: center;
  border-radius: 5px;
  background-color: ${colors.primary};
  font-size: 34px;
`

export const Input = styled.TextInput`
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid ${colors.primary};
  padding: 10px;
`