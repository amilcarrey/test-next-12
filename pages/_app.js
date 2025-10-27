import '../styles/globals.css'

// Import all external styles just on _app.js | _app.tsx
import '@turtleclub/earn-provider/styles.css'
import '@turtleclub/earn-widget/styles.css'

// Import this new Default Provider version without styles imported in it
import { TurtleDefaultProviderThin } from '@turtleclub/earn-provider/thin'

function MyApp({ Component, pageProps }) {
  return (
    <TurtleDefaultProviderThin>
      <Component {...pageProps} />
    </TurtleDefaultProviderThin>
  )
}

export default MyApp
