import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import WhyDifferent from './components/WhyDifferent'
import MeetJoe from './components/MeetJoe'
import IsThisRight from './components/IsThisRight'
import Investment from './components/Investment'
import GroupClassesTeaser from './components/GroupClassesTeaser'
import Footer from './components/Footer'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import GroupClasses from './pages/GroupClasses'
import About from './pages/About'

function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <WhyDifferent />
        <MeetJoe />
        <IsThisRight />
        <GroupClassesTeaser />
        <Investment />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/group-classes" element={<GroupClasses />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
