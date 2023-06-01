import { FC, useEffect, useState } from 'react'
import { createContext } from 'react';
import { projects } from '../../pages/pipeline/pipelineMockData'
import { tasks } from '../../pages/myTasks/myTasksMockData'
import { projectContextType } from '../../types/context/projectContextTypes';
import { childrenProps } from '../../types/general/generalTypes';

export const ProjectContext = createContext({
    setProjectsList: () => null,
    projectsList: [],
    setUniqueStages: () => null,
    uniqueStages: [],
    setTasksList: () => null,
    tasksList: [],
    setUniqueTasksStages: () => null,
    uniqueTasksStages: [],

} as projectContextType)

const ProjectProvider: FC<childrenProps> = ({ children }) => {
    const [projectsList, setProjectsList] = useState(projects);
    const [tasksList, setTasksList] = useState(tasks);
    const [uniqueStages, setUniqueStages] = useState<string[]>();
    const [uniqueTasksStages, setUniqueTasksStages] = useState<string[]>();

    useEffect(() => {
        const stages = Array.from(new Set((projectsList.map((project) => project.stage))));
        setUniqueStages(stages);
        const tasksstages = Array.from(new Set((tasksList.map((task) => task.stage))));
        setUniqueTasksStages(tasksstages);
    }, [projectsList, tasksList])

    const value = { projectsList, setProjectsList, uniqueStages, setUniqueStages, tasksList, setTasksList,uniqueTasksStages, setUniqueTasksStages};

    return (
        <ProjectContext.Provider value={value}>
            {children}
        </ProjectContext.Provider>
    )
}

export default ProjectProvider
