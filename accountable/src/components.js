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
    justify-content: space-around;
`;

export const Title = styled.h1`
    margin-bottom: 60px;
    text-align: center;
    font-family: Permanentmarker,Impact;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
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

export const Triangle = styled.div`
    width: 0;
    height: 0;
    border-left: 2px solid transparent;
    border-right: 11px solid transparent;
    margin-right: 15px;
    border-top: 13px solid #fff;
    box-shadow: -3px 3px 3px grey;
`;

export const BubbleText = styled.p`
    font-family: Caveat,cursive;
    font-size: 2em;
    margin: 0;
`;

export const QuestionBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 40vw;
    max-width: 500px;
`;

export const Question = styled.h3`
    margin: 0;
    font-family: Kalam;
    font-size: 1.2em;
`;

export const TextInput = styled.input`
    padding: 5px 10px;
    background-color: #fff;
    width: 100%;
    border: none;
    margin-bottom: 20px;
    font-family: Caveat,Arial;
    font-size: 1.5em;
`;

export const TimeInputs = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5em;
`;

export const Input = styled.input`
    padding: 0px 0px 0px 10px;
    margin-right: 5px;
    background-color: #fff;
    max-width: 60px;
    border: none;
    font-size: 1.5em;
    font-family: Caveat,Arial;
`;

export const Button = styled.button`
    margin-top: 20px;
    height: 40px;
    border: none;
    font-family: Permanentmarker;
    font-size: 1.6em;
    box-shadow: 3px 3px 3px grey;
`;

export const CountDown = styled.div`
    font-family: Kalam;
    text-align: center;
    font-size: 7em;
`;

export const Extra = styled.span`
    margin:0;
    margin-right: 20px;
    font-family: Kalam;
`;