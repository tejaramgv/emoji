// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {gamecount, funct} = props
  const play = () => funct()

  return (
    <>
      {gamecount === 12 ? (
        <div className="lose">
          <div>
            <h1>You Won</h1>
            <p>Best Score</p>
            <p>12/12</p>
            <button onClick={play}>Play Again</button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win or lose"
          />
        </div>
      ) : (
        <div className="lose">
          <div>
            <h1>You Lose</h1>
            <p>score: {gamecount}/12</p>
            <button onClick={play}>Play Again</button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="win or lose"
          />
        </div>
      )}
    </>
  )
}
export default WinOrLoseCard
