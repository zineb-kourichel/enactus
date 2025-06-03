import React from 'react'
import '../custom.scss'

function Quote() {
  return (
    <div
      className="Quote"
      style={{
        backgroundImage: "url('/images/quoteback.jpg')" }}>
        <img src='/images/quote-icon.png' alt='quote icon ' height="50" width="60" />
        <p>
        Being part of Enactus has been a transformative journey, equipping me with essential skills such as leadership, project management, and public speaking, which have helped me confidently address juries and audiences. Managing a project at a young age was both challenging and rewarding, fostering personal and professional growth. Moreover, Enactus provided a supportive environment filled with inspiring individuals who constantly motivate me. This experience has shaped me into a confident and socially conscious leader, ready to drive meaningful change.
        </p>
        <h1>Maryam</h1>
        <h2>Etudiante,Vice Team Leader <br/> Enactus FSBM</h2>
     

    </div>
  )
}

export default Quote;