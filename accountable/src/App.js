import React, { Component } from 'react';
import Notifier from "react-desktop-notification";
import CloudImg1 from "./img/cloud1.png";
import CloudImg2 from "./img/cloud2.png";
import CloudImg3 from "./img/cloud3.png";
import CloudImg4 from "./img/cloud4.png";
import CloudImg5 from "./img/cloud5.png";
import Wizard from "./img/bossywizard.png";
import { MainBox, AppBox, 
  CloudsBox, Cloud1, Cloud2, Cloud3, Cloud4, Cloud5, 
  Content, Title, Container,
  BossImage, BubbleText, BossBubble, Triangle, QuestionBlock,
  Question, TextInput, TimeInputs, Extra, Input, Button, CountDown, DoIt,
} from './components';


let hidden, visibilityChange;
let activeTab = true;
if (typeof document.hidden !== "undefined") {
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.mozHidden !== "undefined") {
  hidden = "mozHidden";
  visibilityChange = "mozvisibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}

function handleVisibilityChange() {
  if (document[hidden]) { //Not visible, Do whatever
    activeTab = false;
  } else { //Visible
    activeTab = true;
  }
}

if (typeof document.addEventListener === "undefined" ||
  typeof document[hidden] === "undefined") {
  //alert("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
} else {
  document.addEventListener(visibilityChange, handleVisibilityChange, false);
}


class App extends Component {

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
      countingDown: false,
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
    this.setState({ seconds: seconds }
      // , () => {console.log("TOTAL", this.state.seconds)}
    );
    this.setState({ initialSeconds: seconds, start: true, countingDown: true });
    this.textChoice("intro");
    // After one second take out one second
    setTimeout(this.takeOutOneSec, 1000)

  }

  takeOutOneSec() {
    if (this.state.seconds === 0) { //  T I M E   I S   U P
      this.setState({ minutes: "", hours: "", closing: false, middle: false, start: false, done: true, countingDown: false })
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
    if (activeTab === false) {
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
    this.setState({ minutes: event.target.value });
  }
  handleChangeActivity(event) {
    this.setState({ activity: event.target.value })
  }



  render() {
    return (
      <MainBox>
        {/* <CloudsBox>
          <Cloud1></Cloud1>
          {/* <Cloud2 src={CloudImg2} alt="cloud"/>
          <Cloud3 src={CloudImg3} alt="cloud"/>
          <Cloud4 src={CloudImg4} alt="cloud"/>
          <Cloud5 src={CloudImg5} alt="cloud"/> 
        </CloudsBox> */}
      <AppBox>
        
        <Title>Fucking do it now</Title>

        <Content>

          <Container>
            <BossBubble>
              <BubbleText>{this.state.selected}</BubbleText>
            </BossBubble>
            <Triangle></Triangle>
            <BossImage src={Wizard} alt="Wizard"
              //https://www.fightersgeneration.com/np7/char/hayato-rs-bust.png 
              />
          </Container>

          {!this.state.countingDown ?
            <QuestionBlock>
              <Question>I need to...</Question>
              <TextInput
                id="activity" type="text"
                value={this.state.activity}
                onChange={this.handleChangeActivity.bind(this)}>
              </TextInput>

              <Question>For the next</Question>
              <TimeInputs>
                <Input
                  id="hours" type="number"
                  value={this.state.hours}
                  onChange={this.handleChange.bind(this)}>
                </Input>
                <Extra>Hours</Extra>
                <Input
                  id="minutes" type="number"
                  value={this.state.minutes}
                  onChange={this.handleChangeMin.bind(this)}>
                </Input>
                <Extra>Minutes</Extra>
              </TimeInputs>
              <Button onClick={this.getTimeRemaining}>
                Let's do it
          </Button>
            </QuestionBlock>
            :
            <QuestionBlock>
              <DoIt>I need to {this.state.activity}</DoIt>
              <CountDown>
                {this.state.remainingMinutes > 9 ?
                  this.state.remainingMinutes : '0' + this.state.remainingMinutes
                }:{
                  this.state.remainingSeconds > 9 ?
                    this.state.remainingSeconds : '0' + this.state.remainingSeconds}
              </CountDown>
            </ QuestionBlock>
          }





        </Content>
      </AppBox>
      </MainBox>
    );
  }
}

export default App;
