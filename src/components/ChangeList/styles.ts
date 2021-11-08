import styled from '@emotion/styled'
export const Container = styled.div`
    width: 100%;
    height: 92.3vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const TitleWrapper = styled.div`
    width: 1500px;
    height: 45px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
`;
export const Title = styled.div`
    font-size: 25px;
    font-weight: 500;
`
export const Layer = styled(Title)`
    font-size: 20px;
    margin-bottom: 30px;
`
export const OutingListWrapper = styled.div`
    width: 1400px;
    height: 600px;
    display: flex;
`;
export const OutingListItem = styled.div`
    width: 350px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    border-right: 1px solid #E5E5E5;
`;
export const TotalPeople = styled(Layer)`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const studentInfo = styled(Layer)`
    margin-bottom: 15px;
    font-size: 18px;
`;
export const BtnContainer = styled.div`
    width: 200px;
    height: 30px;
    font-size: 16px;
    color: #767676;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const PageMoveBtn = styled.div`
    width: 25px;
    height: 25px;
    border: 1px solid #767676;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;