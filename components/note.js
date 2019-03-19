import { Col } from 'reactstrap'

const noteStyle = {
    backgroundColor: '#fff',
    color: '#343434',
    boxShadow: '0px 4px 16px #aaa',
    padding: 16,
    margin: 8,
    borderRadius: 4
}

const titleStyle = {
    marginTop: 4,
    marginBottom: 24
}

const Note = (props) => (
    <Col md="4">
        <div style={noteStyle}>
            <h3 style={titleStyle}>{props.note.title}</h3>
            <div>{props.note.content}</div>
        </div>
    </Col>
)
  
export default Note