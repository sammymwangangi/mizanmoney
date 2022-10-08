import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='h-full scroll-smooth bg-white'>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins&display=optional" 
          rel="stylesheet"
        />
      </Head>
      <body className="flex h-full flex-col font-['Poppins']">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}