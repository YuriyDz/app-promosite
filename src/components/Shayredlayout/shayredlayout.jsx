import { Outlet } from "react-router-dom";
import { Header, Link } from './shayredlayout.js';
export const SharedLayout = ({user}) => {
  return (
    <>
    
      <Header className='Header'>
        
      
        <nav>
          <Link to="/">Home</Link>
         
          <Link  to="/chat">go to chat</Link>
    <Link to="/register">register</Link>
    <Link to="/login">login</Link>
        </nav>
        <p>Hello {user}!</p>
      </Header>
      
      <Outlet />
     
    </>
  );
};