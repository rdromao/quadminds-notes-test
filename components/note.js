import { Card, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'

const Note = (props) => (
    <Card>
        <CardBody>
            <CardTitle style={{fontWeight: 700}}>{props.note.title}</CardTitle>
            <CardText>{props.note.content}</CardText>
            <CardLink href="#">Delete</CardLink>
            <CardLink href="#">Edit</CardLink>
        </CardBody>
    </Card>
)
  
export default Note