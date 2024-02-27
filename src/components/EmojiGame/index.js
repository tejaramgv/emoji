import {useState} from 'react'
import EmojiCard from '../EmojiCard'
import './index.css'
import WinOrLoseCard from '../WinOrLoseCard'
import NavBar from '../NavBar'

const EmojiGame = props => {
  const {emojisList} = props
  const [list, setList] = useState(emojisList)
  const [clicked, setClicked] = useState([])
  const [out, setOut] = useState({res: false})
  const [result, setRes] = useState({count: 0, top: 0})

  const handleCardClick = id => {
    if (clicked.some(each => each === id)) {
      setOut({res: true})
    } else {
      setClicked([...clicked, id])
      console.log(clicked)
      setRes({
        ...result,
        count: result.count + 1,
        top: result.top <= result.count ? result.count + 1 : result.top,
      })

      const shuffledEmojisList = [...emojisList].sort(() => Math.random() - 0.5)
      setList(shuffledEmojisList)
    }
  }
  const playAgain = () => {
    setOut({res: false})
    setRes({...result, count: 0})
    setClicked([])
  }
  return (
    <>
      <NavBar score={result.count} top={result.top} />
      <div className="box">
        <ul className="container">
          {!out.res && result.count !== 12 ? (
            list.map(each => (
              <EmojiCard key={each.id} item={each} func={handleCardClick} />
            ))
          ) : (
            <WinOrLoseCard gamecount={result.count} funct={playAgain} />
          )}
        </ul>
      </div>
    </>
  )
}
export default EmojiGame
