import React from 'react'
import {Card,Button} from 'react-bootstrap'
const MovieCard = ({ movie: {  image, name, description } }) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <div className='movie'>
  <Card.Img variant="top" src={image} width="120"/>
  <Card.Body>
    <Card.Title >{name}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
    <Button variant="primary">Trailer</Button>
  </Card.Body>
  </div>
</Card>
        </div>
    )
}

export default MovieCard
