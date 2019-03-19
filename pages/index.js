import Layout from '../components/notesAppLayout'
import Note from '../components/note'
import fetch from 'isomorphic-unfetch'
import { Container, Row } from 'reactstrap'

const notesContainerStyle = {
  backgroundColor: 'none',
  marginTop: 32
}

const Index = (props) => (
  <Layout>
    <Container style={notesContainerStyle}>
      <Row>
        {props.notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </Row>
    </Container>
    <style jsx global>{`
      body { 
        margin: 0;
        font-family: "Nunito Sans", sans-serif;
        color: #343434;
        background-color: #e4dfda;
      }
    `}</style>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('http://localhost:3000/notes')
  const data = await res.json()

  return {
    notes: data
  }
}

export default Index