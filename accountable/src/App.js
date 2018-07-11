import React, { Component } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// https://www.npmjs.com/package/react-toastify
import Notifier from "react-desktop-notification"
import {
  AppBox, Content, Title, Container,
  BossImage, BubbleText, BossBubble, QuestionBlock,
  Question, Input, Button
} from './components';

class App extends Component {
  // not2 = () => toast("7 Kingdoms", { autoClose: 7000 });
  constructor() {
    super();
    this.showNotifications = this.showNotifications.bind(this);
    this.handleNot = this.handleNot.bind(this);

    this.updateDisplayedTime = this.updateDisplayedTime.bind(this);
    this.takeOutOneSec = this.takeOutOneSec.bind(this);
    this.getTimeRemaining = this.getTimeRemaining.bind(this);

    this.state = {
      seconds: 0,
      hours: "",
      minutes: "",
      activity: "",
      remainingMinutes: 0,
      remainingSeconds: 0,
      intro: []
    };
  }

  componentDidMount () {
    // Simulate API response
    const intro = [
      "Are you ready to give it your all?",
    ]
    this.setState({ intro })
  }

  showNotifications() {
    if (this.n.supported()) this.n.show();
  }

  handleNot(event) {
    window.focus()
    this.n.close(event.target.tag);
  }

  // =============== P O P U P ==================

  gotNewNotification(title, text, img) { // empty is target webaddress
    Notifier.start("Hey you!", "Get your shit together!", "", "https://www.fightersgeneration.com/np7/char/hayato-rs-bust.png");
  }



  // =============== C O U N T D OW N ==================

  getTimeRemaining() { // Convert to seconds
    // Preventing the weird shit when not defined
    if (this.state.hours === "") { this.setState({ hours: 0 }) }
    if (this.state.minutes === "") { this.setState({ minutes: 0 }) }
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
    if (this.state.seconds === 0) {
      console.log("TIME UP")
      this.setState({ minutes: "" })
      this.setState({ hours: "" })
      return
    } else {
      this.setState({ seconds: this.state.seconds - 1 })
      this.updateDisplayedTime()
    }
  }

  updateDisplayedTime() {
    // console.log("TOTAL MOINS 1", this.state.seconds)
    let remainingMinutes = Math.floor(this.state.seconds / 60);
    let remainingSeconds = this.state.seconds % 60;
    this.setState({
      remainingMinutes,
      remainingSeconds
    });
    // It's set with updated time, now let's do it again
    setTimeout(this.takeOutOneSec, 1000)
  }

  // =============== O N C H A N G E ==================

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


  render() {
    return (
      <AppBox>

        <Title>Fucking do it now</Title>

        <Content>

          <Container>
            <BossBubble>
              <BubbleText>{this.state.intro}</BubbleText>
            </BossBubble>
            <BossImage
              src="https://www.fightersgeneration.com/np7/char/hayato-rs-bust.png" alt="Boss"
            />
          </Container>

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
              onClick={this.getTimeRemaining}>
              Let's do it
            </Button>
          </QuestionBlock>

          <div>
            {
              this.state.remainingMinutes > 9 ?
                this.state.remainingMinutes : '0' + this.state.remainingMinutes
            }:{
              this.state.remainingSeconds > 9 ?
                this.state.remainingSeconds : '0' + this.state.remainingSeconds
            }
          </div>
          <button onClick={this.gotNewNotification}>
            Notify
          </button>

        </Content>
        {/* <ToastContainer /> */}
      </AppBox>
    );
  }
}

export default App;
