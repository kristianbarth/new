import { SetStateAction } from "react"
import { MyTasks } from "../myTasks/myTasksCardTypes"

export type taskContextType = {
    tasksList: MyTasks[],
    setTasksList: React.Dispatch<SetStateAction<MyTasks[]>>
    uniqueTasksStages: string[] | undefined,
    setUniqueTasksStages: React.Dispatch<SetStateAction<string[] | undefined>>

} 