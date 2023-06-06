import React from 'react'
import { Link } from 'react-router-dom'


const postAction = [
  {
    id: 1,
    title: "The self awaraness",
    desc: "Develop your employability with UQ's careers and employability service, industry experiences, and internships.",
    img: "https://www.blibli.com/friends-backend/wp-content/uploads/2023/03/syarat-masuk-new-zealand-scaled.jpg"
  },
  {
    id: 2,
    title: "Motivate to Become Better",
    desc: "Develop your employability with UQ's careers and employability service, industry experiences, and internships.",
    img: "https://travel.mqcdn.com/mapquest/travel/wp-content/uploads/2020/06/GettyImages-1211212607.jpg"
  },
  {
    id: 3,
    title: "Hacker Wannabe",
    desc: "Develop your employability with UQ's careers and employability service, industry experiences, and internships.",
    img: "https://www.travelanddestinations.com/wp-content/uploads/2019/03/Switzerland-Landscapes.jpg"
  },
  {
    id: 4,
    title: "Man who Speak German to Horse",
    desc: "Develop your employability with UQ's careers and employability service, industry experiences, and internships.",
    img: "https://www.nationsonline.org/gallery/Switzerland/Sunrise-on-the-Matterhorn.jpg"
  }
]
const Home = () => {
  return (
    <div className='home'>
      <div className='posts'>
        {postAction.map(post => (
          <div className='post' key={post.id}>
             <div className='img'>
               <img src={post.img} alt='desc img'/>
             </div>
             <div className='content'>
              <Link className='link' to={`/post/${post.id  }`}>
              </Link>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
             </div>
          </div>


        ))}
      </div>
    </div>
  )
}

export default Home
