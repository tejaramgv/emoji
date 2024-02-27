// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {item, func} = props
  const shuf = () => func(item.id)

  return (
    <li className="emoji">
      <button onClick={shuf}>
        <img src={item.emojiUrl} alt={item.emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
