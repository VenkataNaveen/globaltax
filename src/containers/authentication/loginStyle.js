import Styled from 'styled-components';

const LoginWrapper =Styled.div`
 display:flex;
 flex-direction: column;
 .subtitle {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: baseline;
    margin: 25px 0px;

 }
 h4{
    margin:0;
 }
 .inputplac {
    width: 320px;
    height: 40px;
  }
`;

export { LoginWrapper };