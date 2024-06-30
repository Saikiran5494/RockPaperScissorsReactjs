import {ImageButtonContainer, ButtonImage, Image} from './styledComponents'

const PlayingView = props => {
  const {choicesList, changeActiveId} = props

  return (
    <ImageButtonContainer>
      {choicesList.map(eachItem => {
        const {id} = eachItem

        const buttonIconClicked = () => {
          changeActiveId(id)
        }

        return (
          <ButtonImage
            data-testid={eachItem.dataTestid}
            onClick={buttonIconClicked}
            key={eachItem.id}
          >
            <Image src={eachItem.imageUrl} alt={eachItem.id} />
          </ButtonImage>
        )
      })}
    </ImageButtonContainer>
  )
}

export default PlayingView
