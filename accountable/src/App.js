import React, { Component } from 'react';
// import './App.css';
// import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppBox, Content, Title, BossBlock, BossImage, BubbleText, BossBubble, QuestionBlock, Question, Input, Button } from './components';

class App extends Component {
  // NOTIFYING
  notify = () => toast("Wow so easy !");
  not2 = () => toast("7 Kingdoms", { autoClose: 7000 });

  constructor() {
    super();
    this.setCountdown = this.setCountdown.bind(this);
    this.launch = this.launch.bind(this);
    // this.activityValue = document.getElementById("activity").value;
    // this.timeValue = document.getElementById("time").value;
    
    this.state = {
      time: 0,
      activity: "",
    };
  }



  setCountdown() {
    console.log("setCountdown", this.state.time);
  };

  handleChange(event) {
    this.setState({ time: event.target.value })
  }
  handleChangeActivity(event) {
    this.setState({ activity: event.target.value })
  }

  launch() {
    console.log("LAUNCH");
    console.log("time", this.state.time);
    console.log("activity", this.state.activity);
    this.setCountdown()
    this.notify()
    // this.setState({ activity: document.getElementById("activity").value })
    // this.setState({ time: document.getElementById("time").value })
  }

  componentDidMount() {
    
  }


  render() {
    return (
      <AppBox>
        <Title>Fucking do it now</Title>

        <Content>

          <BossBlock>
            <BossBubble>
              <BubbleText>Some bubble text screamed here!</BubbleText>
            </BossBubble>
            <BossImage
              src="https://www.fightersgeneration.com/np7/char/hayato-rs-bust.png" alt="Boss" 
              />

          </BossBlock>

          <QuestionBlock>
            <Question>I need to...</Question>
            <Input
              id="activity" type="text"
              value={this.state.activity}
              onChange={this.handleChangeActivity.bind(this)}>
            </Input>
            <Question>For the next</Question>
            <Input
              id="time" type="number"
              value={this.state.time}
              onChange={this.handleChange.bind(this)}>
            </Input>
            <Button
              // onClick={this.launch}
              onClick={this.not2} >
              Let's do it
              
            </Button>
          </QuestionBlock>

        </Content>
        <ToastContainer />
      </AppBox>
    );
  }
}

export default App;
