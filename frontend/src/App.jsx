import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import { Login, Register } from './pages/Auth';
import { UserDashboard, MyTasks, ViewTaskDetails } from './pages/User';
import { CreateTask, Dashboard, ManageTasks, ManageUsers } from './pages/Admin';

import PrivateRoute from './routes/PrivateRoute.jsx'
function App() {

  return (
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
          <Route path='/user/user-dashboard' element={<UserDashboard />} />
          <Route path='/user/my-tasks' element={<MyTasks />} />
          <Route path='/user/task-details/:id' element={<ViewTaskDetails />} />
        </Route>
      </Routes>
    </Router >
  )
}

export default App
