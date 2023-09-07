import React from 'react'
import "./Home.css"
export default function About() {
  return (
    <div>
       <div className="responsive-container-block big-container">
  <div className="responsive-container-block container">
    <div className="responsive-container-block">
      <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-6 wk-ipadp-12 content-one" >
        <div  className='d-flex about-content' style={{margin:"5rem 0"}}>
            <div className='about-image' style={{backgroundImage:"url('https://images.ctfassets.net/4cd45et68cgf/5r9OpZqpp8MKAtIqmlaNx6/0f3d994f2deb66c9a97693f580f76231/SquidGame101.jpg')",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",borderRadius:"1rem"}}></div>
            <p className="text-blk section-head about-text">
            Stories move us.<br/>
            They make us feel more emotion,<br/> see new perspectives,<br/>
            and bring us closer to each other.
            </p>
        </div>
        <div className='d-flex about-content' style={{margin:"5rem 0"}}>
            <p className="text-blk section-text" style={{width:"60%",display:"flex",textAlign:"center",marginRight:"5rem",alignItems:"center",justifyContent:"center",color:"white"}}>
                At Tedwatch, we want to entertain the world. Whatever your taste, and no matter where you live, we give you access to best-in-class TV series, documentaries, feature films and mobile games. Our members control what they want to watch, when they want it, in one simple subscription. We’re streaming in more than 30 languages and 190 countries, because great stories can come from anywhere and be loved everywhere. We are the world’s biggest fans of entertainment, and we’re always looking to help you find your next favorite story.
            </p>
            <div className='about-image' style={{ backgroundImage:"url('https://images.ctfassets.net/4cd45et68cgf/5AgYJu2sr8Huq6DDu3rE9D/1a1e281ca5054fb09646b0dcc9058b68/Careers-Image.jpg')",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",borderRadius:"1rem"}}></div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
