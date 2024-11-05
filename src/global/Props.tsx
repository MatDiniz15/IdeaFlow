interface AuthContextType{
    taskList:Array<PropCard>,
    onOpen:void,
    // handleEdit:Function,
    // handleDelete:Function,
}
type PropCard = {
    description: string,
    flag:PropFlag,
    item: number,
    timeLimit:string,
    title:string
}
type PropFlag = 'Important'|'Lecture notes'|'To-do lists'