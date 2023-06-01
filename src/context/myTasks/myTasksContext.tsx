import { FC, useEffect, useState } from 'react'
import { createContext } from 'react';
import { projects } from '../../pages/pipeline/pipelineMockData'
import { tasks } from '../../pages/myTasks/myTasksMockData'
import { taskContextType } from '../../types/context/myTasksContextTypes'; 
import { childrenProps } from '../../types/general/generalTypes';

export const MyTasksContext = createContext({
    setTasksList: () => null,
    tasksList: [],
    setUniqueTasksStages: () => null,
    uniqueTasksStages: [],

} as taskContextType)

const MyTasksProvider: FC<childrenProps> = ({ children }) => {
    const [tasksList, setTasksList] = useState(tasks);
    const [uniqueTasksStages, setUniqueTasksStages] = useState<string[]>();

    useEffect(() => {
        
        const tasksStages = Array.from(new Set((tasksList.map((task) => task.stage))));
        setUniqueTasksStages(tasksStages);
    }, [tasksList])

    const value = { tasksList, setTasksList,uniqueTasksStages, setUniqueTasksStages};

    return (
        <MyTasksContext.Provider value={value}>
            {children}
        </MyTasksContext.Provider>
    )
}

export default MyTasksProvider
