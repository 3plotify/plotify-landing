import { Html, Head, Main, NextScript } from 'next/document'
import Facebook from '../src/components/meta/facebook'
import SEO from '../src/components/meta/seo'
import Twitter from '../src/components/meta/twitter'

export default function Document() {
  return (
    <Html className='dark'>
      <Head>
        <SEO/>
        <Twitter/>
        <Facebook/>
      </Head>
      <body className='bg-background-light dark:bg-background-dark'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}