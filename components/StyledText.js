import styled from 'styled-components/native'
import colors from '../constants/Colors'

export const MonoText = styled.Text`
${props => console.log("styled", props)}
font-family: 'space-mono';
color: ${props => props.color || colors.primary};
font-size: ${props => `${props.size || 14}px`}
`
