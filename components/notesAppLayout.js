import Header from './header'
import Head from 'next/head'

const layoutStyle = {
  fontFamily: 'sans-serif',
  color: '#343434'
}

const Layout = props => (
  <div style={layoutStyle}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      body { 
        margin: 0;
        font-family: sans-serif;
        color: #343434;
        background-color: #e4dfda;
      }
    `}</style>
    <Header />
    {props.children}
  </div>
)

export default Layout