import React from 'react'

import './main.css';
import Posts from '../components/Cards';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';



export default function Main() {
    var Posting=[
        {
          'title':"This heading1",
          "Post":"In non aute proident ut quis dolor esse est cupidatat excepteur fugiat amet exercitation ad. Voluptate mollit tempor cillum proident sunt laboris. Nulla duis tempor adipisicing velit non minim fugiat amet cupidatat dolore id fugiat non. Dolore deserunt magna ad nulla veniam eu. Deserunt dolore ex veniam nostrud eiusmod dolore labore adipisicing enim. Deserunt pariatur labore ex ad nisi aliquip consequat culpa enim commodo laboris Lorem."
        },
        {
          'title':"This heading2",
          "Post":"In non aute proident ut quis dolor esse est cupidatat excepteur fugiat amet exercitation ad. Voluptate mollit tempor cillum proident sunt laboris. Nulla duis tempor adipisicing velit non minim fugiat amet cupidatat dolore id fugiat non. Dolore deserunt magna ad nulla veniam eu. Deserunt dolore ex veniam nostrud eiusmod dolore labore adipisicing enim. Deserunt pariatur labore ex ad nisi aliquip consequat culpa enim commodo laboris Lorem."
        },
        {
          'title':"This heading3",
          "Post":"In non aute proident ut quis dolor esse est cupidatat excepteur fugiat amet exercitation ad. Voluptate mollit tempor cillum proident sunt laboris. Nulla duis tempor adipisicing velit non minim fugiat amet cupidatat dolore id fugiat non. Dolore deserunt magna ad nulla veniam eu. Deserunt dolore ex veniam nostrud eiusmod dolore labore adipisicing enim. Deserunt pariatur labore ex ad nisi aliquip consequat culpa enim commodo laboris Lorem."
        }
      ]
  return (
    <main className='background'>
    {/* <header>
      <a href = "" className=''>My blog</a>
     <Navbar/>
    </header> */}
 {/* <Posts/>
 <Posts/>
 <Posts/>
 <Postsda>
 <Posts/> */}
 <Hero/>
 {
  Posting.map((data,index)=>{
    return(
      <div>
      <Posts title={data.title} Post={data.Post}/>
      </div>
    )
  })
 }
  </main>
  )
}
