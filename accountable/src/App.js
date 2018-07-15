import React, { Component } from 'react';
import Notifier from "react-desktop-notification";
import CloudImg1 from "./img/cloud1.png";
import CloudImg2 from "./img/cloud2.png";
import CloudImg3 from "./img/cloud3.png";
import CloudImg4 from "./img/cloud4.png";
import CloudImg5 from "./img/cloud5.png";
import Wizard from "./img/bossywizard.png";
import Bear from "./img/bear.png";
import WizardSmile from "./img/bossywizard-smirk.png";
import BearSmile from "./img/bearh.png";
import AnimatedWizard from "./img/bossywizard.gif";
// "https://raw.githubusercontent.com/AdamanskaHub/accountable/master/accountable/src/img/bossywizard.png"
import {
  MainBox, AppBox,
  BearChoice, WizardChoice, Choice,
  CloudsBox, Cloud1, Cloud2, Cloud3, Cloud4, Cloud5,
  Content, Title, Container,
  BossImage, BubbleText, BossBubble, Triangle, QuestionBlock, QuestionBG,
  Flip3d, Flipper, FrontButton, BackButton, BackText,
  Question, TextInput, TimeInputs, Extra, Input, CountDown, DoIt,
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
    this.bearChosen = this.bearChosen.bind(this);
    this.wizardChosen = this.wizardChosen.bind(this);
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
      selected: "I hope you're ready to act.",
      countingDown: false,
      wizardChosen: true,
      smile: false,
    };
  }

  componentDidMount() {
    // Simulate API response
    const intro = [ //smile
      "Are you ready to give it your all?",
      "Glad to see you're ready to work.",
      "Less talk more action.",
      "Now it's just about doing it.",
    ]
    this.setState({ intro })
    const bearIntro = [ //smile
      "I'll be with you.",
      "We are going to smash this task.",
      "The first step is taken, keep going!",
      "Go for it, it's the hardest part.",
    ]
    this.setState({ bearIntro })

    const dialog = [ //angry
      "You're giving it 100%? Give it 120%!",
      "Focus on a single task and let nothing stop you!",
      "Just keep at it.",
      "Don't be discouraged and stay focused.",
      "It's not going to do itself.",
      "That's the one thing you got to finish now.",
      "You know what you should do, so do it.",
      "Don't think, just act.",
      "If it's hard, take it from the top, deconstruct.",
      "Encountering a defeat is not being defeated.",
      "As my witch friend says 'Hustle'.",
      "You know you'll be glad once it's done.",
      "Show me your determination.",
      "You're being stopped by obstacles in your mind.",
    ]
    this.setState({ dialog })
    const bearDialog = [ //angry
      "If you feel overwhelmed, start with something small.",
      "Just focus and keep at it.",
      "You have the will to stay on task.",
      "It's not easy but you'll be proud of yourself later.",
      "You're strong enough to keep at it.",
      "Nothing can stop you, believe in yourself.",
      "What's important is to keep doing it.",
      "Show me your grit.",
      "We both know you have it in you.",
      "You'll feel great once it's done.",
      "My bear friend would say 'Ganbare!'",
      "Fighting!",
      "Have confidence in yourself.",
      "You might find it hard now, but don't stop.",
    ]
    this.setState({ bearDialog })

    const wellDone = [ //smile
      "Alright! We're done!",
      "I hope you're proud of yourself.",
      "See you soon I hope.",
      "Ready for round 2 ?",
    ]
    this.setState({ wellDone })
    const greatJob = [ //smile
      "I'm proud of you",
      "You did great.",
      "You've improved as a person.",
      "You deserve a little break now.",
    ]
    this.setState({ greatJob })

    const almostTimeUp = [ //angry
      "Time is almost up. Last push!",
      "Almost done? Keep going!",
      "Now is not the time to give up!",
      "You almost made it. Keep pushing.",
    ]
    this.setState({ almostTimeUp })
    const almostBearTimeUp = [ //angry
      "We're almost there.",
      "Just a little bit more.",
      "I can see the finish line.",
      "You did great so far.",
    ]
    this.setState({ almostBearTimeUp })
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
    Notifier.start("Hey!", text, "", img);
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
    if (this.state.wizardChosen) {
    this.textChoice("intro"); } else {
      this.textChoice("bearIntro");
    }
    // After one second take out one second
    setTimeout(this.takeOutOneSec, 1000)

  }

  takeOutOneSec() {
    if (this.state.seconds === 0) { //  T I M E   I S   U P
      this.setState({ minutes: "", hours: "", closing: false, middle: false, start: false, done: true, countingDown: false, smile: false })
      if (this.state.wizardChosen) {
        this.textChoice("wellDone");
      } else {
        this.textChoice("greatJob");
      }
      
      return
    } else {
      this.setState({ seconds: this.state.seconds - 1 })
      // checking where we are in the time
      if (this.state.seconds === this.state.initialSeconds - 900 && this.state.seconds !== 900) {
        if (this.state.wizardChosen) {
        this.textChoice("dialog");} else {
          this.textChoice("bearDialog");
        }
        this.setState({ initialSeconds: this.state.seconds })
      }
      if (this.state.seconds === 900) {
        if (this.state.wizardChosen) {
        this.textChoice("almostTimeUp");} else {
          this.textChoice("almostBearTimeUp");
        }
        this.setState({ closing: true, middle: false, smile: true })
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
    if (activeTab === false && this.wizardChosen) {
      this.gotNewNotification(random, "https://raw.githubusercontent.com/AdamanskaHub/accountable/master/accountable/src/img/wizardhead.png")
    } 
    if (activeTab === false && !this.wizardChosen) {
      this.gotNewNotification(random, "https://raw.githubusercontent.com/AdamanskaHub/accountable/master/accountable/src/img/bearhead.png")
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

  // =============== C H A R A C T E R =====================

  bearChosen() {
    this.setState({ wizardChosen: false }, () => {console.log("wizard", this.state.wizardChosen)})
  }

  wizardChosen() {
    this.setState({ wizardChosen: true })
  }



  render() {
    return (
      <MainBox>
        <CloudsBox>
          <Cloud1 img={CloudImg1} ></Cloud1>
          <Cloud2 img={CloudImg2} ></Cloud2>
          <Cloud3 img={CloudImg3} ></Cloud3>
          <Cloud4 img={CloudImg4} ></Cloud4>
          {/* <Cloud5 img={CloudImg5} ></Cloud5> */}
        </CloudsBox>
        <AppBox>

          <Title>Fucking do it now</Title>
          <Choice>With
            <WizardChoice onClick={this.wizardChosen}> the bossy wizard </WizardChoice>
            or
            <BearChoice onClick={this.bearChosen}> the cute satanistic bear</BearChoice>
          </Choice>

          <Content>

            <Container>
              <BossBubble>
                <BubbleText>{this.state.selected}</BubbleText>
              </BossBubble>
              <Triangle></Triangle>
              {this.state.wizardChosen && this.state.smile ?
              <BossImage src={ WizardSmile } alt="Wizard" />:null}
              {this.state.wizardChosen && !this.state.smile ?
              <BossImage src={ Wizard } alt="Wizard" />:null
              }
              {!this.state.wizardChosen && this.state.smile ?
              <BossImage src={ BearSmile } alt="Bear" />:null
              } {!this.state.wizardChosen && !this.state.smile ?
              <BossImage src={ Bear } alt="Bear" />:null
              }
            </Container>

            {!this.state.countingDown ?
              <QuestionBlock>
                <QuestionBG>
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

                <Flip3d onClick={this.getTimeRemaining}>
                  <Flipper>
                    <FrontButton>Time to hustle</FrontButton>
                    <BackButton>
                      <BackText>Let's do it</BackText></BackButton>
                  </Flipper>
                </Flip3d>

                </QuestionBG>
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
