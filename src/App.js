import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate, Outlet } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {

  var user_id = sessionStorage.getItem("user_id");

  const ProtectedRoute = ({
    isAllowed,
    redirectPath = '/',
    children,
  }) => {
    if (!isAllowed) {
      return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
  };

  return (
    <div className=''>

    {/* <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/create-user' element={<Register/>}/>
        <Route path='/dashboard' element={ <Dashboard/>}/>
        <Route path='/show-all-users' element={<ShowUsers/>}/>
        <Route path='/user-edit/:id' element={<UserEdit/>}/>
        <Route path='/create-user-role' element={<CreateRole/>}/>
        <Route path='/show-user-roles' element={<ShowRoles/>}/>
        <Route path='/client' element={<Client/>}/>
        <Route path='/client-list' element={<ClientList/>}/>
        <Route path='/client-edit/:id' element={<ClientEdit/>}/>
        <Route path='/call-list' element={<CallList/>}/>
        <Route path='/report-call-logs' element={<CallLogsReport/>}/>
      </Routes>
    </Router> */}
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route element={<ProtectedRoute isAllowed={!!user_id} />}>

          {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/create-user' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/show-all-users' element={<ShowUsers />} />
          <Route path='/user-edit/:id' element={<UserEdit />} />
          <Route path='/create-user-role' element={<CreateRole />} />
          <Route path='/show-user-roles' element={<ShowRoles />} />
          <Route path='/client' element={<Client />} />
          <Route path='/client-list' element={<ClientList />} />
          <Route path='/client-edit/:id' element={<ClientEdit />} />
          <Route path='/call-list' element={<CallList />} />
          <Route path='/report-call-logs' element={<CallLogsReport />} />
          <Route path='/logout' element={<Logout />} /> */}
        </Route>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
