import styled from "@emotion/styled";
import { COLOR } from '../../style/index';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
`;

export const MSContainer = styled.div`
    width: 1440px;
    height: 800px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    span {
        width: 380px;
        height: 80vh;
        position: relative;
    }
`;

export const DownloadSchedule = styled.input`
    border: 1px solid ${COLOR.orange};
    outline: none;
    width: 130px;
    height: 40px;
    background-color: #FFFFFF;
    color: ${COLOR.orange};
    border-radius: 5px;
    cursor: pointer;
    margin: 8px 0;
    transform: translateX(100%);
`;

export const EditSchedule = styled.input`
    outline: none;
    width: 100%;
    height: 40px;
    background-color: ${COLOR.orange};
    color: ${COLOR.white};
    border-radius: 5px;
    cursor: pointer;
    border: none;
    transform: translateX(100%);
`;

export const ButtonContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    position: absolute;
    bottom: 0;
    width: 130px;
`;

export const PageTitle = styled.div`
    font-size: 28px;
    font-weight: 500;
`;

