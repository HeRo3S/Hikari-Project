import './header.css'

export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className='headerTitlesLg'>光</span>  
        <span className='headerTitlesSm'>Welcome to Hikari</span>  
      </div> 
      <img className='headerImage' src={require('../image/scarletnexus.jpg')} alt="background" />
    </div>
  )
}
