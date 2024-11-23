// src/components/TitleText.tsx
import React, { forwardRef } from 'react'
import { TextProps, Text } from 'react-native'
import { style } from './styles'

type Props = TextProps & {
  title?: string
}

export const TitleText = forwardRef<Text, Props>(({ title, ...rest }, ref) => {
  return title ? (
    <Text ref={ref} style={style.titulo} {...rest}>
      {title}
    </Text>
  ) : null
})

export const SubTitle = forwardRef<Text, Props>(({ title, ...rest }, ref) => {
  return title ? (
    <Text ref={ref} style={style.subTitulo} {...rest}>
      {title}
    </Text>
  ) : null
})

export default TitleText // Exportação padrão
