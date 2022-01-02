import styled from '@emotion/styled'

export const BtnContainer = styled.div`
    width: 350px;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ClubState = styled(BtnContainer)`
    height: 170px;
    width: 100%;
    justify-content: space-around;
    padding-bottom: 30px;
    border-bottom: 1px solid black;
    span{
        
        font-size: 18px;
        font-weight: 400;
        line-height: 40px;
        text-align: center;
        width: 100%;
        
    }
`
export const ClassName = styled.h1`
    text-align: center;
    width: 100%;
    font-size: 28px;
`;
export const ClubLocationWrapper = styled.div`
    width: 100%;
    height: 340px;
    display: flex;
`;
export const Location = styled(ClubState)`
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    padding: 40px 0;
    border:none;
    span{
color: gray;
:hover{
            cursor: pointer;
        }
    }
    
`;
export const BtnWrapper = styled.div`
    width: 80%;
    height:40px;
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
`;
export const BtnItem = styled(BtnWrapper)`
    width: 33.3%;
    height: 100%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
        background-color: #ff6e04;
        color:white;
        cursor: pointer;
    }
`