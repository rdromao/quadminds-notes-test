import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'

const Note = (props) => (
    <Card>
        <CardBody>
            <CardTitle>{props.note.title}</CardTitle>
            <CardText>{props.note.content}</CardText>
            <Button>Button</Button>
        </CardBody>
    </Card>
)
  
export default Note