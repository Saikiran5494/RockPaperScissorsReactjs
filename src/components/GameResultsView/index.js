import {
  ResultsDiv,
  ButtonImage,
  Image,
  NameButtonContainer,
  Button,
} from './StyledComponents'

const GameResultsView = props => {
  const {yourChoice, opponentChoice, changeStatus, text} = props

  const playAgainClicked = () => {
    changeStatus()
  }

  return (
    <>
      <ResultsDiv>
        <NameButtonContainer>
          <p>YOU</p>
          <ButtonImage>
            <Image src={yourChoice[0].imageUrl} alt="your choice" />
          </ButtonImage>
        </NameButtonContainer>
        <NameButtonContainer>
          <p>OPPONENT</p>
          <ButtonImage>
            <Image src={opponentChoice.imageUrl} alt="opponent choice" />
          </ButtonImage>
        </NameButtonContainer>
      </ResultsDiv>
      <p>{text}</p>
      <Button type="button" onClick={playAgainClicked}>
        PLAY AGAIN
      </Button>
    </>
  )
}

export default GameResultsView
