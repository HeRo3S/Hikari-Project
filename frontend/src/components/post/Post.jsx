import  './post.css'

export default function Post() {
  return (
    <div className='post'>
      <img src={require("../../image/scarletnexus.jpg")} alt="postCover" className="postImg" />
      <div className="postInfo">
        <div className="postCategoriesList">
          <span className="postCates">Music</span>
          <span className="postCates">Anime</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        <hr />
        <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et lorem dui. Etiam aliquet velit sit amet lectus luctus faucibus. Vestibulum elementum lacus id lectus malesuada aliquet. Sed finibus lacinia placerat. Nunc et nunc quis diam cursus convallis. Duis tempus lacus id iaculis imperdiet. Suspendisse in sapien egestas, tincidunt eros sit amet, ullamcorper augue. Praesent pulvinar porttitor lorem, vel dignissim quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin suscipit sollicitudin tincidunt. Phasellus euismod sed sapien eu commodo. Pellentesque faucibus malesuada magna, ac volutpat orci facilisis eget. Duis ornare ligula arcu, at convallis leo gravida sed. Proin dignissim semper enim at interdum. Maecenas varius fermentum facilisis. Suspendisse vel enim at libero laoreet pharetra.</p>
    </div>
  )
}
