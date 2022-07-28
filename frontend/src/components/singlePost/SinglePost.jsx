import './singlepost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src={require("../../image/scarletnexus.jpg")} alt="postCover" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.                
            </h1>                          
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author: <b>HeRo3S</b></span>
                <div>
                    <span className='singlePostDate'>1 hour ago</span>
                    <div className="singlePostEditContainer">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash-can"></i>
                    </div> 
                </div>
            </div>
            <p className='singlePostContent'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, exercitationem recusandae quos voluptatem expedita quod, porro modi et doloremque accusamus molestias, deleniti tempora rem odit? Voluptas tempore incidunt nihil consequatur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, exercitationem recusandae quos voluptatem expedita quod, porro modi et doloremque accusamus molestias, deleniti tempora rem odit? Voluptas tempore incidunt nihil consequatur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, exercitationem recusandae quos voluptatem expedita quod, porro modi et doloremque accusamus molestias, deleniti tempora rem odit? Voluptas tempore incidunt nihil consequatur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, exercitationem recusandae quos voluptatem expedita quod, porro modi et doloremque accusamus molestias, deleniti tempora rem odit? Voluptas tempore incidunt nihil consequatur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, exercitationem recusandae quos voluptatem expedita quod, porro modi et doloremque accusamus molestias, deleniti tempora rem odit? Voluptas tempore incidunt nihil consequatur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, exercitationem recusandae quos voluptatem expedita quod, porro modi et doloremque accusamus molestias, deleniti tempora rem odit? Voluptas tempore incidunt nihil consequatur.
            </p>
        </div>
    </div>
  )
}
