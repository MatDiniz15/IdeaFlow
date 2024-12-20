// import { Image } from "react-native"

interface AuthContextType{
    taskList:Array<PropCard>,
    onOpen:void,
    handleEdit:Function,
    handleDelete:Function,
    filter:(t:string)=>void
}
type PropCard = {
    description: string,
    flag:PropFlag,
    item: number,
    timeLimit:string,
    title:string,
    // image:Image
}
type PropFlag = 'Importante'|'Estudo'|'Trabalho'