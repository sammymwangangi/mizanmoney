import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='h-full scroll-smooth bg-white'>
      <Head>
        
      </Head>
      <body className="flex h-full flex-col font-['Poppins']">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}