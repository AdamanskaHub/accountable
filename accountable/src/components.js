import styled, {keyframes} from 'styled-components';

export const MainBox = styled.div`
    min-height: 100%;
    width: 100%;
    background-color: #4C38AC;
    background: linear-gradient(to right bottom, #4C38AC, #BE58CF);
    position: absolute;
`;

export const AppBox = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 666;
    position: relative;
`;

export const CloudsBox = styled.div`
height: 100%;
width: 100vw;
position: absolute;
`;

export const Cloud1 = styled.div`
top: 5%;
right: 20%;
/* max-width: 650px; */
min-width: 480px;
height: 60px;
position: absolute;
background-repeat: no-repeat;
z-index: 11
    background-image: url(${props => props.img});
    `;

export const Cloud2 = styled.div`
top: 25%;
    left: -10%;
    width: 300px;
    height: 40px;
    position: absolute;
    z-index: 12;
    background-repeat: no-repeat;
    background-image: url(${props => props.img});
`;

export const Cloud3 = styled.div`
top: 45%;
left: 0%;
width: 110px;
height: 100px;
position: absolute;
z-index: 13;
background-repeat: no-repeat;
    background-image: url(${props => props.img});
`;

export const Cloud4 = styled.div`
top: 30%;
right: 0;
height: 100px;
width: 250px;
position: absolute;
z-index: 14;
background-repeat: no-repeat;
    background-image: url(${props => props.img});
`;

export const Cloud5 = styled.div`
top: 40%;
    right: 20%;
    width: 244px;
    position: absolute;
    background-repeat: no-repeat;
    height: 100px;
    background-image: url(${props => props.img});
`;

// =========== C O N T E N T ==========

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    @media (max-width : 700px) {
        justify-content: center;
        flex-direction: column-reverse;
        -webkit-box-pack: space-around;
        -ms-flex-pack: space-around;
        align-items: center;
    }
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
    @media (max-width : 700px) {
        width: 60vw;
        align-items: center;
    }
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
    @media (max-width : 700px) {
        margin-left:30px;
    }
    
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
    margin-bottom: 30px;
    @media (max-width : 700px) {
        width: 60vw;
    }
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

// ========== F L I P ============

export const Flip3d = styled.div`
    margin-top: 20px;
    cursor: pointer;
    -webkit-letter-spacing: 2px;
    -moz-letter-spacing: 2px;
    -ms-letter-spacing: 2px;
    letter-spacing: 2px;
    height: 45px;
    -webkit-perspective: 1000;
    -ms-perspective: 1000;
    -webkit-perspective: 1000;
    -moz-perspective: 1000;
    -ms-perspective: 1000;
    perspective: 1000; 
`;

export const Flipper = styled.div`
    transition: all .5s ease-in-out;
    -webkit-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d;

    position: relative;

    transform-origin: 100% 22.5px;

    &:hover {
        transform: rotateX(90deg);
    }
`;

export const FrontButton = styled.div`
    transform: translateZ(22.5px);
    height: 45px;
    border: none;
    border-radius: 2px;
    font-family: Bangers, Impact;
    font-size: 1.6em;
    background-color: #4F21AD;
    color:#fff;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BackButton = styled.div`
    -webkit-transform: rotateX(90deg) translateZ(22.5px);
    -ms-transform: rotateX(90deg) translateZ(22.5px); 
    transform: rotateX(90deg) translateZ(22.5px);
    height: 45px;
    border: none;
    border-radius: 2px;
    font-family: Bangers, Impact;
    font-size: 1.6em;
    background-color: #4F21AD;
    color:#fff;
    display: flex;
    align-items: center;
    justify-content: center;   
`;

export const BackText = styled.span`
    -webkit-transform: rotateX(90deg) translateZ(22.5px);
    -ms-transform: rotateX(90deg) translateZ(22.5px); 
    transform: rotateX(180deg) ;
`;
