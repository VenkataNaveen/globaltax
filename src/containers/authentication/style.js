import Styled from 'styled-components';

const AuthenicateWrapper =Styled.div`
 display:flex;
 flex-direction: row;
 height: 100vh;
 background-color: rgba(236,238,249);
 .box {
    width: 50%;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
 }
 .auth-img {
    width: 100%;
    height: inherit;
 }
`;

export { AuthenicateWrapper };