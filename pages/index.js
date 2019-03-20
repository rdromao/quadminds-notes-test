import Layout from '../components/notesAppLayout'
import Note from '../components/note'
import NewNote from '../components/newNote.js'
import fetch from 'isomorphic-unfetch'
import { Container, CardColumns, Spinner } from 'reactstrap'

const bodyStyle = {
  paddingTop: 32
}

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {notes: [], loadingNotes: true}
        this.getNotesList = this.getNotesList.bind(this)
    }
  componentWillMount() {
    this.getNotesList()
  }
  async getNotesList() {
    this.setState({ loadingNotes: true })
    const res = await fetch('http://localhost:3000/notes')
    const notes = await res.json()
    this.setState({ notes: notes })
    this.setState({ loadingNotes: false })
  }
  render(){
    return (
      <Layout>
        <Container style={bodyStyle}>
            <CardColumns>
              <NewNote getNotesList={this.getNotesList}/>
              {this.state.loadingNotes ? <Spinner type="grow" color="dark" />:
                this.state.notes.map((note) => (
                    <Note key={note.id} note={note} />
                ))
              }
            </CardColumns>
        </Container>
      </Layout>
    )
  }
}

export default Index