import { DragEvent, FC, ReactNode, useContext, useEffect, useState } from 'react';
import './myTasksCard.scss'
import { MyTasksCardProps } from '../../../../types/myTasks/myTasksCardTypes'; 
import { MyTasksContext } from '../../../../context/myTasks/myTasksContext'; 
import { forwardIcon } from '../../../../assets/pipelineIcons'

const MyTasksCard: FC<MyTasksCardProps> = ({ id, title, term, label_1, label_2, avatar }) => {

    const { tasksList, setTasksList } = useContext(MyTasksContext)

    return (
        <div className='task-card'
            id={`${id}`}
            draggable={true}
        >
            <div className="task-info">
                <div className="title">
                    {title}
                </div>
                <div className="term">
                    {term}
                </div>
                <div className="label_1">
                    {label_1}
                </div>
                <div className="label_2">
                    {label_2}
                </div>
                
            </div>
            <div className="task-actions">
                <div>
                    {avatar as ReactNode}
                </div>
                <div className="forward-icon">
                    
                </div>
            </div>
        </div>
    )
}

export default MyTasksCard
