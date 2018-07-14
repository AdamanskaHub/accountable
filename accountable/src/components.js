import styled from 'styled-components';

export const MainBox = styled.div`
    height: 100%;
    width: 100%;
    background-color: #4C38AC;
    background: linear-gradient(to right bottom, #4C38AC, #BE58CF);
    position: absolute;
`;

export const AppBox = styled.div`
    display: flex;
    flex-direction: column;
    // @media (max-width : 700px) {
    //     padding: 0 10px;
    // }
`;

// export const CloudsBox = styled.div`
//     height: 100%;
//     width: 100%;
//     position: absolute;
// `;

// export const Cloud1 = styled.div`
//     top: 5%;
//     left: 20%; 
//     // max-width: 200px;
//     position: relative;
//     // background-image: url(${props => props.img});
//     `;

// export const Cloud2 = styled.img`
//     top: 10%;
//     left: 60%;
//     max-width: 250px;
//     position: relative;
// `;

// export const Cloud3 = styled.img`
//     top: 40%;
//     left: -10%;
//     position: relative;
// `;

// export const Cloud4 = styled.img`
//     top: 50%;
//     left: 30%;
//     position: relative;
// `;

// export const Cloud5 = styled.img`
//     top: 65%;
//     left: 20%;
//     position: relative;
// `;

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const Title = styled.h1`
    margin-bottom: 60px;
    text-align: center;
    font-family: Bangers,Impact;
    color: #D49AFF;
    letter-spacing: 0.05em;
    font-size: 3em;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 40vw;
`;

export const BossImage = styled.img`
max-height: 460px;
`;

export const BossBubble = styled.div`
    display: flex;
    background-color: #fff;
    // box-shadow: 3px 3px 3px grey;
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
    // box-shadow: -3px 3px 3px grey;
`;

export const BubbleText = styled.p`
    font-family: Rancho, Caveat,cursive;
    font-size: 2em;
    margin: 0;
    line-height: 0.8em;
`;

export const QuestionBlock = styled.div`
    width: 40vw;
    max-width: 500px;
`;

export const QuestionBG = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.3);
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

export const Question = styled.h3`
    margin: 0;
    font-family: Rancho, Kalam, Arial;
    font-size: 1.6em;
`;

export const TextInput = styled.input`
    padding: 5px 10px;
    background-color: rgba(128,116,174,0.2);
    border: none;
    border-bottom: 2px solid #4C38AC;
    margin-bottom: 20px;
    font-family: Rancho, Caveat,cursive;
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
    border: none;
    background-color:  rgba(128,116,174,0.2);
    border-bottom: 2px solid #4C38AC;
    max-width: 60px;
    font-size: 1.5em;
    font-family: Rancho, Caveat,cursive;
`;

export const Button = styled.button`
    margin-top: 20px;
    padding: 10px;
    border: none;
    border-radius: 8px;
    font-family: Bangers, Impact;
    font-size: 1.6em;
    background-color: #4F21AD;
    box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.4);
    color: #fff;
    &::before {
        transform: translate(-120%,-50%) translateZ(0)
    }
    

  &:hover{
    &::before {
        transform: translate(-45%,-34%) translateZ(0)
      }
  }
 
    
    // &:hover {
    //     background-color: #D49AFF; 
    //     box-shadow: none;
    // }
`;

export const DoIt = styled.h3`
    margin: 0;
    font-family: Rancho, Kalam, Arial;
    font-size: 2em;
    text-align: center;
    color: #fff;
`;


export const CountDown = styled.div`
    font-family: Rancho, Kalam, Arial;
    text-align: center;
    font-size: 10em;
    margin-top: -25px;
    color: #fff;
`;

export const Extra = styled.span`
    margin:0;
    margin-right: 20px;
    font-family: Rancho, Kalam, Arial;
`;