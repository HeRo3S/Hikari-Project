import './topbar.css'

export default function TopBar() {
  return (
    <div className='top'>

        <div className='topLeft'>
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-twitter"></i>
            <i className="topIcon fa-brands fa-twitch"></i>
        </div>

        <div className='topCenter'>
            <ul className="topList">
                <li className='topListItem'>Home</li>
                <li className='topListItem'>Category</li>
                <li className='topListItem'>Contents</li>
                <li className='topListItem'>About</li>
                <li className='topListItem'>Write</li>
                <li className='topListItem'>Logout</li>
            </ul>
        </div>

        <div className='topRight'>
            <img className='topAvatar' src={require('../image/violet.jpg')} alt="Avatar" />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>

    </div>
  ) 
}
