import styled from "@emotion/styled";
import { COLOR } from '../../style/index';

export const Container = styled.div`
    height: 90vh;
    display: flex;
    margin: 0 140px;
`;

export const ACContainer = styled.div`
    width: 1440px;
    height: 800px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
    grid-template-rows: 40% 60%;
`;

export const Title = styled.div`
    font-size: 28px;
    margin-bottom: 16px;
`;

export const ACBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
`;

export const AddButton = styled.input`
    width: 100%;
    background-color: ${COLOR.orange};
    color: white;
    border-radius: 10px;
    height: 50px;
    border: none;
    cursor: pointer;
    margin-top: 32px;
`;

export const ErrorMessage = styled.div`
    width: 100%;
    color: red;
    text-align: center;
    position: absolute;
    bottom: 0;
    transform: translateY(200%);
`;

export const ACColumn = styled.div`
    height: 30px;
    margin: 12px 0 12px 50px;
    display: flex;
    align-items: center;
    /* &:nth-child(2) {
        margin-bottom: 24px;
    } */
`;

export const ACTitle = styled.div`
    font-size: 20px;
    width: 70px;
    margin-right: 50px;
    display: flex;
    align-self: center;
`;

export const AbsentsBox = styled.div`

`;

export const DateBox = styled.div`

`;

export const TypeBox = styled.div`

`;

export const NoteBox = styled.div`
    width: 100%;
`;

export const NoteInput = styled.input`
    width: 95%;
    height: 40px;
    border: none;
    border-bottom: 1px solid ${COLOR.black};
    outline: none;
    font-size: 18px;
    text-align: center;
`;

//------------------------------------

export const ACList = styled.div`

`;