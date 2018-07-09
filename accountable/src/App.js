import React, { Component } from 'react';
// import './App.css';
// import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// https://www.npmjs.com/package/react-toastify
import ReactNotifications from 'react-browser-notifications';
import { AppBox, Content, Title, BossBlock, BossImage, BubbleText, BossBubble, QuestionBlock, Question, Input, Button } from './components';
// import Timer from "./Timer";

class App extends Component {
  // not2 = () => toast("7 Kingdoms", { autoClose: 7000 });

  constructor() {
    super();
    this.setCountdown = this.setCountdown.bind(this);
    this.launch = this.launch.bind(this);
    // this.showNotifications = this.showNotifications.bind(this);
    // this.handleNotClick = this.handleNotClick.bind(this);
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.state = {
      time: {},
      seconds: null,
      activity: "",
    };
  }

  // showNotifications() {
  //   // If the Notifications API is supported by the browser
  //   if(this.n.supported()) {this.n.show()}else {console.log("oops")};
  // }
  // handleNotClick(event) {
  //   console.log("Notification Clicked")
  //   this.n.close(event.target.tag);
  // }

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
  }

  setCountdown() {
    console.log("setCountdown", this.state.time);

  };

  // ======= C O U N T D O W N =======

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
    if (this.timer == 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    
    // Check if we're at zero.
    if (seconds == 0) { 
      clearInterval(this.timer);
    }
  }


  render() {
    return (
      <AppBox>

        <ReactNotifications
          onRef={ref => (this.n = ref)} // Required
          title="Hey There!" // Required
          body="This is the body"
          icon=""
          tag="abcdef"
          timeout="2000"
          onClick={event => this.handleNotClick(event)}
        />

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
              onClick={this.launch}
              // onClick={this.not2} 
              // onClick={this.showNotifications}
              >
              Let's do it
              
            </Button>
            {/* <Timer 
            remainingMinutes={this.state.time}/> */}
          </QuestionBlock>

          <button onClick={this.startTimer}>Start</button>
        m: {this.state.time.m} s: {this.state.time.s}

        </Content>
        <ToastContainer />
      </AppBox>
    );
  }
}

export default App;
