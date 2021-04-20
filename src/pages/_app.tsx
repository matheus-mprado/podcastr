import { Header } from '../components/Header'
import { Player } from '../components/Player'
import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Player />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
