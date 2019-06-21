import React from 'react'
// import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

// const Container = styled.div`
//   border: 1px solid lightgrey;
//   border-radius: 2px;
//   padding: 8px;
//   margin-bottom: 8px;
//   transition: background-color 0.2s ease;
//   background-color: ${props =>
//     props.isDragDisabled
//       ? 'lightgrey'
//       : props.isDragging
//         ? 'lightgreen'
//         : 'white'};
// `

const Container = props => {
  const customStyle = {
    border: '1px solid lightgrey',
    borderRadius: '2px',
    padding: '8px',
    marginBottom: '8px',
    transition: 'background-color 0.2s ease',
    backgroundColor: props.isDragDisabled
      ? 'lightgrey'
      : props.isDragging
      ? 'lightgreen'
      : 'white'
  }

  return (
    <div {...props} ref={props.innerRef} style={customStyle}>
      {props.children}
    </div>
  )
}

export default class Task extends React.Component {
  render() {
    const isDragDisabled = this.props.task.id === 'task-1'
    return (
      <Draggable
        draggableId={this.props.task.id}
        index={this.props.index}
        isDragDisabled={isDragDisabled}
      >
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            innerRef={provided.innerRef}
            isDragging={snapshot.isDragging}
            isDragDisabled={isDragDisabled}
          >
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    )
  }
}
