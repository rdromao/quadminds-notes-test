import fetch from 'isomorphic-unfetch'
import { Card, CardBody, CardTitle, CardLink, Form, FormGroup, Label, Input } from 'reactstrap'

class NewNote extends React.Component {
    constructor(props) {
        super(props);
        this.state= {newNoteTitle: '', newNoteContent: ''}
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleContentChange = this.handleContentChange.bind(this)
        this.handleNewNoteSave = this.handleNewNoteSave.bind(this)
    }

    handleTitleChange(e) {
        this.setState({newNoteTitle: e.target.value});
    }

    handleContentChange(e) {
        this.setState({newNoteContent: e.target.value});
    }

    handleNewNoteSave(){
        fetch('http://localhost:3000/notes', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: this.state.newNoteTitle, content: this.state.newNoteContent})
        })
        this.setState({
            newNoteTitle: '',
            newNoteContent: ''
        });
    }

    render(){
        return (
            <Card>
                <CardBody>
                    <CardTitle style={{fontWeight: 700}}>Create new note</CardTitle>
                    <Form>
                    <FormGroup>
                        <Label for="newNoteTitle">Title</Label>
                        <Input type="text" name="newNoteTitle" id="newNoteTitle" onChange={this.handleTitleChange} value={this.state.newNoteTitle}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="newNoteTitle">Content</Label>
                        <Input type="textarea" name="newNoteContent" id="newNoteContent" onChange={this.handleContentChange} value={this.state.newNoteContent}/>
                    </FormGroup>
                    </Form>
                    <CardLink onClick={this.handleNewNoteSave} href="#">Save</CardLink>
                </CardBody>
            </Card>
        )
    }
}
  
export default NewNote