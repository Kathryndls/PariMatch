import { NavLink } from "react-router-dom";
import styled from "styled-components";
import AuthService from "../services/AuthService";


export const Header = ({currentUser, setCurrentUser}) => {
   const logout = () => {
      AuthService.logout();
      setCurrentUser(false);
   }

   if (currentUser) {
      return (
         <HeaderWrapper>
            <HeaderContainer className="navbar">
               <NavLink 
                  to={'/'}
                  className="navbar__item"
                  style={{margin: '0 20px'}}
               >Home</NavLink>
               <div 
                  onClick={logout}
                  className="navbar__item"
                  style={{margin: '0 20px', cursor: 'pointer'}}
               >Logout</div>
            </HeaderContainer>
         </HeaderWrapper>
         )
   }

   return (
      <HeaderWrapper>
         <HeaderContainer className="navbar">
            {currentUser 
            && 
               <NavLink 
                  to={'/'}
                  className="navbar__item"
                  style={{margin: '0 20px'}}
               >Home</NavLink>}

            <NavLink 
               to={'/login'}
               className="navbar__item"
               style={{margin: '0 20px'}}
            >LogIn</NavLink>

            <NavLink 
               to={'/signup'}
               className="navbar__item"
               style={{margin: '0 20px'}}
            >SignUp</NavLink>
         </HeaderContainer>
      </HeaderWrapper>
   )
}


const HeaderWrapper = styled.div`
   height: 80px;
`;

const HeaderContainer = styled.div`
   width: 80%;
   height: 100%;
   margin: 0 auto;
   display: flex;
   align-items: center;
   justify-content: center;
`;
