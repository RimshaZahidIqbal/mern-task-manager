import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import { Login, Register } from './pages/Auth';
import { UserDashboard, MyTasks, ViewTaskDetails } from './pages/User';
import { CreateTask, Dashboard, ManageTasks, ManageUsers } from './pages/Admin';
import PrivateRoute from './routes/PrivateRoute.jsx'
import UserProvider from './context/userContext.jsx';
function App() {

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {/* Admin Routes */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />} >
            <Route path='/admin/dashboard' element={<Dashboard />} />
            <Route path='/admin/tasks' element={<ManageTasks />} />
            <Route path='/admin/create-task' element={<CreateTask />} />
            <Route path='/admin/users' element={<ManageUsers />} />
          </Route>
          <Route element={<PrivateRoute allowedRoles={["user"]} />} >
            <Route path='/user/userdashboard' element={<UserDashboard />} />
            <Route path='/user/my-tasks' element={<MyTasks />} />
            <Route path='/user/task-details/:id' element={<ViewTaskDetails />} />
          </Route>
        </Routes>
      </Router >
      <ToastContainer position="top-right" />

    </UserProvider>
  )
}

export default App
