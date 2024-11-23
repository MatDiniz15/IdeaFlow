import React, { forwardRef, Fragment, LegacyRef } from "react";

import {View, Text, TextInput, TextInputProps, TouchableOpacity, TextStyle, StyleProp} from "react-native";
import { style } from "./style";
import { themas } from "../../global/themes";

import { MaterialIcons, FontAwesome, Octicons } from '@expo/vector-icons';

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> | 
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> | 
                     React.ComponentType<React.ComponentProps<typeof Octicons >>;

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRigth?: IconComponent, 
    iconLeftName?: string,
    iconRigthName?: string,
    title?: string, 
    onIconLeftPress?: () => void,
    onIconRigthPress?: () => void,
    height?: number,
    labelStyle?:StyleProp<TextStyle>

}

export const Input = forwardRef((Props:Props, ref: LegacyRef<TextInput> | null)=> {

    const {IconLeft, IconRigth, iconLeftName, iconRigthName, title, onIconLeftPress, onIconRigthPress, labelStyle,height, ...rest } = Props

    const calculateSizeWidth = () => {
        if(IconLeft && IconRigth){
            return '80%'
        } else if(IconLeft || IconRigth){
            return '90%'
        }else{
            return "100%"
        }
    }

    const calculateSizePaddingLeft = () => {
        if(IconLeft && IconRigth){
            return 0
        } else if(IconLeft || IconRigth){
            return 10
        }else{
            return 20
        }
    }

    return (
        <Fragment>
        {title&&<Text style={[style.titleInput,labelStyle]}>{title}</Text>}
        <View style={[style.BoxInput, {paddingLeft:calculateSizePaddingLeft(), height:height||40, padding:5}]}>
            {IconLeft && iconLeftName && (
                <TouchableOpacity onPress={onIconLeftPress} style={style.Button}>
                    <IconLeft name={iconLeftName as any} size={20} color={themas.colors.gray} style={style.Icon} /> 
                </TouchableOpacity>
            )}
            <TextInput 
                style={[
                    style.input,{width:calculateSizeWidth(),height:'100%'} 
                ]}
               {...rest}
            />
            {IconRigth && iconRigthName && (
                <TouchableOpacity onPress={onIconRigthPress} style={style.Button}>
                    <IconRigth name={iconRigthName as any} size={20} color={themas.colors.gray} style={style.Icon} /> 
                </TouchableOpacity>
            )}
        </View>
        </Fragment>

    )
})