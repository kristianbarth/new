import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ModalsProvider from './context/modalsContext'
import ChatProvider from './context/chat/chatContext';
import ProfileProvider from './context/profile/profileContext';
import ProjectProvider from './context/project/projectContext';
import MyTasksProvider from './context/myTasks/myTasksContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ModalsProvider>
    <ChatProvider>
      <ProjectProvider>
        <ProfileProvider>
          <MyTasksProvider>
            <Router>
              <App />
            </Router>
          </MyTasksProvider>
        </ProfileProvider>
      </ProjectProvider>
    </ChatProvider>
  </ModalsProvider>
);
