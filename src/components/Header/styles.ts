import styled from '@emotion/styled'
export const Container = styled.div`
    width: 100%;
    height: 72px;
    display: flex;
    justify-content: space-between;
    padding: 0 8%;
    box-sizing: border-box;
`;
export const RegisterContainer = styled(Container)`
    width: 904px;
    padding: 0;
`;
export const RegisterBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;
export const Register = styled.div`
    width: 84px;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    box-sizing: border-box;
    padding-top: 24px;
`;
export const LogoutBtn = styled(Register)`
    color: #ff0000;
`;
export const RegisterBotLine = styled.div`
    width: 52px;
    border: 2px solid black;
    display: none;
`