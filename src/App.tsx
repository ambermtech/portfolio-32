import Header from './components/Header'
import Hero from './components/Hero'
import Work from './components/Work'
import Experience from './components/Experience'
import TechStack from './components/TechStack'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      {/* <div className="page-stripe" aria-hidden="true" /> */}
      <Header />
      <main>
        <Hero />
        <Work />
        <Experience />
        <TechStack />
      </main>
      <Footer />
    </>
  )
}
