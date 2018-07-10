import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// https://www.npmjs.com/package/react-toastify
import ReactNotifications from 'react-browser-notifications';
import { AppBox, Content, Title, BossBlock, BossImage, BubbleText, BossBubble, QuestionBlock, Question, Input, Button } from './components';

class App extends Component {
  // not2 = () => toast("7 Kingdoms", { autoClose: 7000 });

  constructor() {
    super();
    this.updateDisplayedTime = this.updateDisplayedTime.bind(this);
    this.takeOutOneSec = this.takeOutOneSec.bind(this);
    this.getTimeRemaining = this.getTimeRemaining.bind(this);
    this.state = {
      // time: {},
      seconds: 0,
      hours: "",
      minutes: "",
      activity: "",
      remainingMinutes: 0,
      remainingSeconds: 0
    };
  }

  // Convert to seconds
  getTimeRemaining() {
    console.log("hours", this.state.hours)
    console.log("minutes", this.state.minutes)
    var minutesConverted = Math.floor(this.state.minutes * 60);
    var hoursConverted = Math.floor((this.state.hours * 60) * 60);
    var seconds = Math.floor(minutesConverted + hoursConverted);
    // seconds becomes all the seconds
    this.setState({ seconds: seconds }, () => {
      console.log("TOTAL", this.state.seconds)
    });
    // After one second take out one second
    setTimeout(this.takeOutOneSec, 1000)
  }

  takeOutOneSec() {
    if (this.state.seconds===0) {
      console.log("TIME UP")
      this.setState({ minutes: "" })
      this.setState({ hours: "" })
      return
    } else {
      this.setState({ seconds: this.state.seconds-1 })
      // take out, now update the displayed state
      this.updateDisplayedTime()
    }  
  }

  updateDisplayedTime() {
    console.log("TOTAL MOINS 1", this.state.seconds)
    let remainingMinutes = Math.floor(this.state.seconds / 60);
    let remainingSeconds = this.state.seconds % 60;
    this.setState({
      remainingMinutes,
      remainingSeconds
    });
    // It's set with updated time, now let's do it again
    setTimeout(this.takeOutOneSec, 1000)
  }


  handleChange(event) {
    this.setState({ hours: event.target.value }, () => {
      console.log(this.state.hours)
    });
  }
  handleChangeMin(event) {
    this.setState({ minutes: event.target.value }, () => {
      console.log(this.state.minutes)
    });
  }
  handleChangeActivity(event) {
    this.setState({ activity: event.target.value })
  }

  componentWillUnmount() {
    clearTimeout(this.setTimeoutId);
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
              id="hours" type="number"
              value={this.state.hours}
              onChange={this.handleChange.bind(this)}>
            </Input>
            <Input
              id="minutes" type="number"
              value={this.state.minutes}
              onChange={this.handleChangeMin.bind(this)}>
            </Input>
            <Button
              onClick={this.getTimeRemaining}
            // onClick={this.not2} 
            // onClick={this.showNotifications}
            >
              Let's do it
  
            </Button>
            {/* <Timer 
            remainingMinutes={this.state.time}/> */}
          </QuestionBlock>

          <p>countdown</p>
          {/* <p>{countDown}</p> */}

          <div className='font-weight-bold lead number-display'>
            {
              this.state.remainingMinutes > 9 ?
                this.state.remainingMinutes : '0' + this.state.remainingMinutes
            }:{
              this.state.remainingSeconds > 9 ?
                this.state.remainingSeconds : '0' + this.state.remainingSeconds
            }
          </div>

          {/* <button onClick={this.startTimer}>Start</button>
          m: {this.state.time.m} s: {this.state.time.s} */}

        </Content>
        <ToastContainer />
      </AppBox>
    );
  }
}

export default App;
