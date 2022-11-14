import React from 'react'
import background from "../pinkbg.jpg"
import { useState } from 'react'

function Home({ queryPoemAP1, poemApi }) {
 
  // console.log(poemApi)
  let poemData = poemApi.map((poem, i) => (
    <div key={i}>
    <p className='poem-title'>{poem.title}</p>
    <p className='poem-content'>{poem.content}</p>
    </div>
  ))
  return (
    <div style={{backgroundImage: `url(${background})`, height: '100vh'}}> 
    <img className="heart-gif" src={"/img/heart_icon_gif.gif"} />
    
    <div className="">
      <a href="/art">
        {" "}
        <div className="index-shop">Shop Art</div>
      </a>
      <a href="/fiber">
        <div className="index-shop">Shop Fiber Art</div>
      </a>
      <a href="/jewelry">
        <div className="index-shop">Shop Jewelry</div>
      </a>
      
    <div className='poem-div'>
    <div className='poem' onClick={queryPoemAP1}>Give Me A Poem</div>
    {poemData[2]}
    </div>
      {/* <div className="index-shop"><a href="/art">Shop All</a></div> */}
    </div></div>
  )
}

export default Home