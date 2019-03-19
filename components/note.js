const noteStyle = {
    backgroundColor: '#fff',
    color: '#343434',
    boxShadow: '0px 4px 16px #aaa',
    padding: 16
}

const titleStyle = {
    marginTop: 4
}

const Note = (props) => (
    <div style={noteStyle}>
      <h2 style={titleStyle}>{props.note.title}</h2>
      <div>{props.note.content}</div>
    </div>
  )
  
export default Note