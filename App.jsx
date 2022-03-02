import React from 'react';
import {Container, Header, Text, Input, Button} from './style'

export const Todo = () => {
  return (
      <div>
          <Container>
                <Header>
                    <Text>
                         TODO List
                    </Text>
                  <Input type="text" placeholder="Enter Something" />
                  <Button>Add</Button>
                </Header>
          </Container>
      </div>
  )
}
export default Todo;