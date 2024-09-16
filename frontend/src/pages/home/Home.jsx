import Header from './header/Header'
import Popular from './popular/Popular'
import Location from './location/Location'
import About from './about/About'
import Offers from './offers/Offers'
import './home.css'
import { TrackPageVisit } from '../../components/trackPageVisit/TrackPageVisit'
import { TrackTimeOnPage } from '../../components/trackTimeOnPage/TrackTimeOnPage'

function Home() {
  return (
    <div>
        <TrackTimeOnPage/>
        <TrackPageVisit/>
        <Header/>
        <Location/>
        <Popular/>
        <Offers/>
        <About/>
    </div>
  )
}

export default Home