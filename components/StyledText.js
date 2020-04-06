import styled from 'styled-components/native'
import colors from '../constants/Colors'

export const MonoText = styled.Text`
font-family: 'space-mono';
color: ${props => props.color || colors.primary};
font-weight: 700;
`
