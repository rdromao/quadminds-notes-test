import Layout from '../components/notesAppLayout'
import Note from '../components/note'
import NewNote from '../components/newNote.js'
import fetch from 'isomorphic-unfetch'
import { Container, CardColumns } from 'reactstrap'

const bodyStyle = {
  paddingTop: 32
}

class Index extends React.Component {
  static async getInitialProps() {
    const res = await fetch('http://localhost:3000/notes')
    const notes = await res.json()
    return { notes }
  }
  componentWillMount() {
    this.setState({
      notes: this.props.notes
    })
  }
  render(){
    return (
      <Layout>
        <Container style={bodyStyle}>
            <CardColumns>
              <NewNote />
              {this.props.notes.map((note) => (
                  <Note key={note.id} note={note} />
              ))}
            </CardColumns>
        </Container>
      </Layout>
    )
  }
}

export default Index