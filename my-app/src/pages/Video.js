import React from 'react'
import ReactPlayer from 'react-player'
const video = () => {
  return (
    <div className='videoplayer'>
        <div>
         <center><i> <h1>Müzik Arası</h1></i></center>  
        </div>
    <div >
        <ReactPlayer url="https://www.youtube.com/watch?v=ZMEFZpQABBg&ab_channel=AMEANLTD"></ReactPlayer>
    </div>
    </div>
  )
}

export default video