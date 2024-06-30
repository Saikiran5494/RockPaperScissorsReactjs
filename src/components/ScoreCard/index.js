import {Component} from 'react'
import Popup from 'reactjs-popup'
import PlayingView from '../PlayingView'
import GameResultsView from '../GameResultsView'

import {
  BgContainer,
  Card,
  Heading,
  Score,
  Para,
  Button,
  ImageRules,
} from './StyledComponents'

class ScoreCard extends Component {
  state = {
    score: 0,
    showResultsView: false,
    text: '',
    opponentChoice: '',
    yourChoice: '',
  }

  displayPopUp = () => (
    <Popup trigger={<Button className="button"> RULES </Button>} modal nested>
      {close => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <ImageRules
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </div>
      )}
    </Popup>
  )

  changeActiveId = id => {
    const {choicesList} = this.props

    const randomNum = Math.random() * choicesList.length
    const opponentChoice = choicesList[Math.floor(randomNum)]
    const yourChoice = choicesList.filter(eachItem => eachItem.id === id)

    if (opponentChoice.id === yourChoice[0].id) {
      this.setState({text: 'IT IS DRAW'})
      this.setState(prevState => ({score: prevState.score}))
    } else if (
      yourChoice[0].id === 'ROCK' &&
      opponentChoice.id === 'SCISSORS'
    ) {
      this.setState({text: 'YOU WON'})
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (
      yourChoice[0].id === 'PAPER' &&
      opponentChoice.id === 'SCISSORS'
    ) {
      this.setState({text: 'YOU LOSE'})
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (yourChoice[0].id === 'ROCK' && opponentChoice.id === 'PAPER') {
      this.setState({text: 'YOU LOSE'})
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (
      yourChoice[0].id === 'SCISSORS' &&
      opponentChoice.id === 'ROCK'
    ) {
      this.setState({text: 'YOU LOSE'})
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (yourChoice[0].id === 'PAPER' && opponentChoice.id === 'ROCK') {
      this.setState({text: 'YOU WON'})
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (
      yourChoice[0].id === 'SCISSORS' &&
      opponentChoice.id === 'PAPER'
    ) {
      this.setState({text: 'YOU WON'})
      this.setState(prevState => ({score: prevState.score + 1}))
    }

    this.setState(prevState => ({
      showResultsView: !prevState.showResultsView,
    }))
    this.setState({opponentChoice, yourChoice})
  }

  changeStatus = () => {
    this.setState({showResultsView: false})
  }

  renderGameResultsView = () => {
    const {text, yourChoice, opponentChoice} = this.state

    return (
      <>
        <GameResultsView
          yourChoice={yourChoice}
          opponentChoice={opponentChoice}
          changeActiveId={this.changeActiveId}
          text={text}
          changeStatus={this.changeStatus}
        />
        {this.displayPopUp()}
      </>
    )
  }

  renderPlayingView = () => {
    const {choicesList} = this.props

    return (
      <>
        <PlayingView
          choicesList={choicesList}
          changeActiveId={this.changeActiveId}
        />
        {this.displayPopUp()}
      </>
    )
  }

  render() {
    const {showResultsView, score} = this.state
    return (
      <BgContainer>
        <Card>
          <div>
            <Heading>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
            </Heading>
          </div>
          <Score>
            <Para>Score</Para>
            <Para>{score}</Para>
          </Score>
        </Card>

        {showResultsView
          ? this.renderGameResultsView()
          : this.renderPlayingView()}
      </BgContainer>
    )
  }
}

export default ScoreCard
