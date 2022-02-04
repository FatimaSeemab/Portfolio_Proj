import Head from 'next/head'
// import '../styles/globals.css'
import Nav from "../Components/Nav"
import Main from "../Components/Main"
import AboutMe from "../Components/AboutMe"
import Skills from "../Components/Skills"
import Programming from "../Components/Programming"
import Goals from "../Components/Goals"
import PersonalProjects from "../Components/PersonalProjects"
// import  Certificates  from "../Components/Certificates"
import Projects from"../Components/Projects"
import Contact from "../Components/Contact"
export default function Home() {
  return (
    <div className="">
      <Head>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"> */}
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="../styles/globals.css" rel="stylesheet" />
      </Head>
        {/* <main> */}
          <Nav />
          <Main />
          <div className='bg-gray-600'><AboutMe /></div>
          <Skills />
          <Programming />
          <Goals />
          {/* <section id="#projects"> */}
          <PersonalProjects />
          <Projects />
          {/* </section> */}
          {/* <Certificates /> */}
          <Contact />
        {/* </main> */}
      
    </div>
  )
}
