import { FC, useContext, useEffect, useState } from 'react';
import './myTasksSection.scss';
import { MyTasksSectionType } from '../../../types/myTasks/myTasksTypes';
import MyTasksCard from './myTasksCard/myTasksCard';
import { profile } from '../../../assets/Icons'
import { MyTasksContext } from '../../../context/myTasks/myTasksContext';

const MyTasksSection: FC<MyTasksSectionType> = ({ myTasksTitle }) => {
    const { tasksList } = useContext(MyTasksContext)

    return (
        <div className='my-tasks-container'>
            <div className="my-tasks-header-title">
                {myTasksTitle}
            </div>

            <div className="my-tasks">
                {tasksList.map(({ title, id, term, label_1, label_2, stage }) => {
                    return (
                        stage === myTasksTitle &&
                        <MyTasksCard
                            id={id}
                            key={id}
                            title={title}
                            avatar={profile}
                            label_1={label_1}
                            label_2={label_2}
                            term={term}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default MyTasksSection
