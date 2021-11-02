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
    font-size: 24px;
    margin-bottom: 16px;
`;

export const ACBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
`;

export const AddButton = styled.input`
    width: 95%;
    background-color: ${COLOR.orange};
    color: white;
    border-radius: 10px;
    height: 40px;
    border: none;
    cursor: pointer;
    margin: 0 auto;
    margin-top: 24px;
    font-size: 16px;
`;

export const ErrorMessage = styled.div`
    width: 100%;
    color: red;
    text-align: center;
    bottom: 0;
    transform: translateY(100%);
    font-size: 16px;
`;

export const ACColumn = styled.div`
    height: 25px;
    margin: 10px 0 10px 30px;
    display: flex;
    align-items: center;
`;

export const ACTitle = styled.div`
    font-size: 16px;
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


export const ACListBox = styled.div`
    padding-top: 50px;
    width: 200%;
    height: 100%;
`;

export const ACListHeader = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 35% 20% 10% 10% 25%;
`;

export const ACListBody = styled.div`
    overflow: scroll;
`;

export const ACListHead = styled.div`
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${COLOR.grey};
`;

export const ACList = styled.div`
    width: 100%;
    height: 80%;
    border: 1px solid ${COLOR.grey};
    border-radius: 10px;
    overflow: auto;
    display: grid;
    grid-template-rows: repeat(10, 1fr);
`;

export const ACListCells = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ACListColumns = styled.div`
    height: 30px;
    border: 1px solid ${COLOR.grey};
    display: grid;
    grid-template-columns: 35% 20% 10% 10% 25%;
`;