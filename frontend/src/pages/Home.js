import React from 'react'
import background from "../pinkbg.jpg"

function Home() {
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
      {/* <div className="index-shop"><a href="/art">Shop All</a></div> */}
    </div></div>
  )
}

export default Home