import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className='sidebarAvatar' src={require('../../image/violet.jpg')} alt="sidebar avatar" />
        <p className='sidebarDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec bibendum nibh. Nulla consequat magna sed nibh pretium pretium. Nam feugiat porttitor sollicitudin.</p>
      </div>
      <div className="sidebarItem">
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Anime</li>
          <li className="sidebarListItem">Visual Novel</li>
          <li className="sidebarListItem">Game</li>
          <li className="sidebarListItem">Manga</li>
          <li className="sidebarListItem">Self promotoion</li>
          <li className="sidebarListItem">Others</li>
        </ul>
      </div>
    </div>
  )
}
