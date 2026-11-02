import Announcement from './components/Announcement'
import Header from './components/Header'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Collection from './components/Collection'
import Offer from './components/Offer'
import Why from './components/Why'
import Visit from './components/Visit'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Announcement />
      <Header />
      <main>
        <Hero />
        <Intro />
        <Collection />
        <Offer />
        <Why />
        <Visit />
      </main>
      <Footer />
    </>
  )
}

export default App

