import '~src/assets/styles/globals.scss'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { SSRProvider } from 'react-bootstrap'
import { useEffect } from 'react'

config.autoAddCss = false

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: any) {
  useEffect(() => {
    if(document){
      document.body.setAttribute("class", 'dark');
    }
  }, [])
  return (
    <SSRProvider>
        <Component {...pageProps} />
    </SSRProvider>
  )
}

