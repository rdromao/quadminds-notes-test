import Layout from '../components/notesAppLayout'
import Note from '../components/note'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
    <div>
      {props.notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
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