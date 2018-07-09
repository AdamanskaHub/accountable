import styled from 'styled-components';

export const AppBox = styled.div`
    height: 100%;
    background-color: #ccc;
    display: flex;
    flex-direction: column;
    // @media (max-width : 700px) {
    //     padding: 0 10px;
    // }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Title = styled.h1`
    margin-bottom: 60px;
    text-align: center;
`;

export const BossBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BossImage = styled.img`
`;

export const BossBubble = styled.div`
    display: flex;
    background-color: #fff;
    box-shadow: 3px 3px 3px grey;
    padding: 10px;
    border-radius: 10px;
`;

export const BubbleText = styled.p`
`;

export const QuestionBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Question = styled.h3`
`;

export const Input = styled.input`
    padding: 10px;
    background-color: #fff;
`;

export const Button = styled.button`
    
`;