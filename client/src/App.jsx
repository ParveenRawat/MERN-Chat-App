import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectRoute from "./components/auth/ProtectRoute";
import { Suspense } from "react";
import LayoutLoader from "./components/layout/Loaders.jsx";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

const AdminLogin = lazy(() => import("./pages/admin/AdminLogin.jsx"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard.jsx"));
const UserManagement = lazy(() => import("./pages/admin/UserManagement.jsx"));
const ChatManagement = lazy(() => import("./pages/admin/ChatManagement.jsx"));
const MessageManagement = lazy(
  () => import("./pages/admin/MessageManagement.jsx"),
);

let user = true;

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader />}>
        <Routes>
          <Route element={<ProtectRoute user={user} />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/chat/:chatId" element={<Chat />}></Route>
            <Route path="/groups" element={<Groups />}></Route>
          </Route>
          <Route
            path="/Login"
            element={
              <ProtectRoute user={!user} redirect="/">
                <Login />
              </ProtectRoute>
            }
          ></Route>

          <Route path="/admin" element={<AdminLogin />}></Route>
          <Route path="/admin/dashboard" element={<Dashboard />}></Route>
          <Route path="/admin/users" element={<UserManagement />}></Route>
          <Route path="/admin/messages" element={<MessageManagement />}></Route>
          <Route path="/admin/chats" element={<ChatManagement />}></Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
