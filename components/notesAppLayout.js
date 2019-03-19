import Head from 'next/head'
import { Navbar, NavbarBrand } from 'reactstrap'

const layoutStyle = {
  fontFamily: '"Nunito Sans", sans-serif',
  color: '#343434'
}

const Layout = props => (
  <div style={layoutStyle}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Baloo+Thambi|Chivo|Nunito+Sans" rel="stylesheet" />
    </Head>
    <Navbar>
        <NavbarBrand href="/">Quadminds Notes Test</NavbarBrand>
    </Navbar>
    {props.children}
  </div>
)

export default Layout