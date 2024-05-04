import Hero from "../components/Hero"
import Newcollection from "../components/Newcollection"
import Newleetter from "../components/Newleetter"
import Offer from "../components/Offer"
import Popular from "../components/Popular"


function Home() {
  return (
  <>
  <Hero />
  <Popular />
  <Offer />
  <Newcollection />
  <Newleetter />

  </>

  )
}

export default Home