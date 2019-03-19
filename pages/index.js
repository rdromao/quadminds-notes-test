import Layout from '../components/notesAppLayout'
import Note from '../components/note'
import fetch from 'isomorphic-unfetch'
import { Container, CardColumns } from 'reactstrap'

const Index = (props) => (
  <Layout>
    <Container>
        <CardColumns>
            {props.notes.map((note) => (
                <Note key={note.id} note={note} />
            ))}
        </CardColumns>
    </Container>
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