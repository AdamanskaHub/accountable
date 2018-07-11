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


let hidden, visibilityChange;
let activeTab = true;
if (typeof document.hidden !== "undefined") {
  hidden = "hidden";
  visibilityChange = "visibilitychange";
}
else if (typeof document.mozHidden !== "undefined") {
  hidden = "mozHidden";
  visibilityChange = "mozvisibilitychange";
}
else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
}
else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}

function handleVisibilityChange() {
  if (document[hidden]) {
    //Not visible, Do whatever
    console.log("HIDDEN")
    //changeActiveTab()
    activeTab=false;
    console.log(activeTab)
  }
  else {
    //Visible
    console.log("VISIBLE")
    // changeActiveTab()
    activeTab=true;
    console.log(activeTab)
  }
}

if (typeof document.addEventListener === "undefined" ||
  typeof document[hidden] === "undefined") {
  //alert("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
}
else {
  document.addEventListener(visibilityChange, handleVisibilityChange, false);
}


class App extends Component {
  // not2 = () => toast("7 Kingdoms", { autoClose: 7000 });

  constructor() {
    super();
    this.showNotifications = this.showNotifications.bind(this);
    this.handleNot = this.handleNot.bind(this);

    this.updateDisplayedTime = this.updateDisplayedTime.bind(this);
    this.takeOutOneSec = this.takeOutOneSec.bind(this);
    this.getTimeRemaining = this.getTimeRemaining.bind(this);
    this.textChoice = this.textChoice.bind(this);
    this.gotNewNotification = this.gotNewNotification.bind(this);

    this.state = {
      seconds: 0,
      initialSeconds: 0,
      hours: "",
      minutes: "",
      activity: "",
      remainingMinutes: 0,
      remainingSeconds: 0,
      start: false,
      middle: false,
      closing: false,
      done: false,
      intro: [],
      dialog: [],
      wellDone: [],
      almostTimeUp: [],
      selected: "Welcome.",
    };
  }

  componentDidMount() {
    // Simulate API response
    const intro = [ //smile
      "Are you ready to give it your all?",
      "Glad to see you're ready to work.",
    ]
    this.setState({ intro })

    const dialog = [ //angry
      "You're giving it 100%? Give it 120%!",
      "Focus on a single task and let nothing stop you!",
    ]
    this.setState({ dialog })

    const wellDone = [ //smile
      "Alright! We're done!",
      "I hope you're proud of yourself.",
    ]
    this.setState({ wellDone })

    const almostTimeUp = [ //angry
      "Time is almost up. Last push!",
      "Almost done? Keep going!",
    ]
    this.setState({ almostTimeUp })


  }

  showNotifications() {
    if (this.n.supported()) this.n.show();
  }

  handleNot(event) {
    window.focus()
    this.n.close(event.target.tag);
  }

  // =============== P O P U P ==================

  gotNewNotification(text, img) { // empty is target webaddress
    Notifier.start("Hey you!", text, "", img);
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
    this.setState({ initialSeconds: seconds, start: true });
    this.textChoice("intro");
    console.log(activeTab)
    // After one second take out one second
    setTimeout(this.takeOutOneSec, 1000)
    
  }

  takeOutOneSec() {
    if (this.state.seconds === 0) { //  T I M E   I S   U P
      this.setState({ minutes: "", hours: "", closing: false, middle: false, start: false, done: true })
      this.textChoice("wellDone");
      return
    } else {
      this.setState({ seconds: this.state.seconds - 1 })
      // checking where we are in the time
      if (this.state.seconds === this.state.initialSeconds - 900 && this.state.seconds !== 900) {
        this.textChoice("dialog");// AAAAAAAAAAA_AAAAAAAAH !
        this.setState({ initialSeconds: this.state.seconds })
      }
      if (this.state.seconds === 900) {
        this.textChoice("almostTimeUp");
        this.setState({ closing: true, middle: false })
      }
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

  textChoice(choice) {
    let random = this.state[choice][Math.floor(Math.random() * this.state[choice].length)];
    this.setState({ selected: random })
    if (activeTab===false) {
      this.gotNewNotification(random, "https://www.fightersgeneration.com/np7/char/hayato-rs-bust.png")
    }
    
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
              <BubbleText>{this.state.selected}</BubbleText>
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
            {this.state.remainingMinutes > 9 ?
              this.state.remainingMinutes : '0' + this.state.remainingMinutes
            }:{
              this.state.remainingSeconds > 9 ?
                this.state.remainingSeconds : '0' + this.state.remainingSeconds}
          </div>

        </Content>
        {/* <ToastContainer /> */}
      </AppBox>
    );
  }
}

export default App;
