import './index.css'

const ThumbNailItem = props => {
  const {imagesList, updateScoreIfCorrect} = props
  const {id, imageUrl, thumbnailUrl} = imagesList

  const checkImageUrl = () => {
    updateScoreIfCorrect(imageUrl)
  }

  return (
    <li className="list">
      <button
        onClick={checkImageUrl}
        className="thumbnail-button"
        type="button"
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default ThumbNailItem
