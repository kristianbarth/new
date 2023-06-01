/*
import './myTasks.scss'
import BaseLayout from '../../layouts/baseLayout/baseLayout';

const MyTasks = () => {
    return (
      <BaseLayout>
        
      </BaseLayout>
    )
}

export default MyTasks;
*/

import './myTasks.scss'
import { addPipelineIcon, forcastIcon, listPipelineIcon, pipelineIcon } from '../../assets/pipelineIcons'
import DropDown from '../../components/general/dropdown/dropdown'
import MyTasksSection from '../../components/myTasks/myTasksSection/myTasksSection'; 
import { useContext, useState } from 'react';
import PipelineLayout from '../../layouts/pipelineLayout/pipelineLayout'
import { MyTasksContext } from '../../context/myTasks/myTasksContext'; 

import { filterIcon, sortIcon, customizeIcon } from '../../assets/myTasksIcons';


const MyTasks = () => {
    const { tasksList, uniqueTasksStages } = useContext(MyTasksContext)
    const pipelineActionOptions = [{ icon: addPipelineIcon, value: 'new-pipeline', text: 'New pipeline' }]
    const pipelineOptions = ['Integration', 'Testing', ' Build', 'Deployment']

    return (
        <PipelineLayout>

            <div className="myTasks-wrapper">
                <div className="myTasks-page-title">
                    My Task
                </div>
                <div className='myTasks-page-comment'>
                    Created Yesterday
                </div>

                <div className="myTasks-page-header">

                    <div className="middle">


                    </div>
                    <div className="right">

                        <div className="myTasks-dropdown">
                            <DropDown
                                text='Filter'
                                pipelineOptions={pipelineOptions}
                                icon={filterIcon}
                                options={pipelineActionOptions} />
                            <DropDown
                                text='Sort'
                                pipelineOptions={pipelineOptions}
                                icon={sortIcon}
                                options={pipelineActionOptions} />
                            <DropDown
                                text='Customize'
                                pipelineOptions={pipelineOptions}
                                icon={customizeIcon}
                                options={pipelineActionOptions} />


                        </div>

                    </div>
                </div>
                <div className="myTasks-section">
                    {
                        uniqueTasksStages?.map((stage) => {
                            return <MyTasksSection myTasksTitle={stage} />
                        })
                    }
                </div>
                
            </div>
        </PipelineLayout>
    )
}

export default MyTasks

