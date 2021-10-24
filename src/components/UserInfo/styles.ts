import styled from '@emotion/styled'

export const Container = styled.div`
    width: 100%;
    height: 92.3vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const TeacherInfoWrapper = styled.div`
    width: 460px;
`
export const TeacherName = styled.h1`
    font-size: 80px;
    font-weight: 500;
    margin-bottom: 50px;
`;
export const TeacherStatus = styled.div`
    width: 270px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const TeacherInfo = styled.span`
    font-weight: 500;
    font-size: 24px;
`;
export const LogoutBtn = styled(TeacherInfo)`
    color: red;
`;