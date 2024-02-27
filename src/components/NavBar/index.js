import './index.css'

const NavBar = props => {
  const {score, top} = props

  return (
    <div className="header">
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
      />
      <div className="score">
        <p>Score: {score}</p>
        <p>Top Score: {top}</p>
      </div>
    </div>
  )
}
export default NavBar
