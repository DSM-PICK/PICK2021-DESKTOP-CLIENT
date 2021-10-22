import styled from "@emotion/styled";
import { COLOR } from '../../style/index';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
`;

export const ManageScheduleContainer = styled.div`
    width: 1440px;
    height: 800px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    span {
        width: 380px;
    }
`;

export const DownloadSchedule = styled.input`
    text-decoration: none;
    border: 1px solid ${COLOR.orange};
    outline: none;
    width: 130px;
    height: 40px;
    background-color: #FFFFFF;
    color: ${COLOR.orange};
    border-radius: 5px;
    cursor: pointer;
    margin: 8px auto;
`;

export const EditSchedule = styled.input`
    text-decoration: none;
    outline: none;
    width: 130px;
    height: 40px;
    background-color: ${COLOR.orange};
    color: ${COLOR.white};
    border-radius: 5px;
    cursor: pointer;
    border: none;
    margin: 8px auto;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    position: relative;
    top: 100%;
    transform: translateY(-130%);
    width: 130px;
`;

export const PageTitle = styled.div`
    font-size: 28px;
    font-weight: 500

`;