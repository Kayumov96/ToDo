import React, {  useState } from 'react';
import { Container, Header, Text, Input, Savedinfo, Button, ToDoDiv } from './style';
import circle from './icon/circle.svg';

export const Todo = () => {

    localStorage.getItem('data')
    const [ value, setValue ] = useState( '' )
    const [ data, setData ] = useState([] )
    
    const AddData = () => {
        setData( prev => {
            const newData = [...prev, value ];
                localStorage.setItem( 'data', newData )
                return newData;
    })
    }
    const onDelete = ( id ) => {
        return setData( data.filter( ( item, i ) => ( i !== id )
        ) )
       
    };
    const onValueChange = ( e ) => {
       setValue( e.target.value )
        console.log(e.target.value)
    };


    return (
        <div>
            <Container>
                <Header>
                    <Text>TODO List</Text>
                    <Input type="text" onChange={ onValueChange } value={ value } />
                    <Button onClick={AddData}>Add</Button>
                </Header>
                <Savedinfo>
                    {
                        data.map( ( value, id ) => (
                            <ToDoDiv key={ id }>
                                { value }
                                <img src={circle} onClick={()=>onDelete(id)} className="delete" alt="Delete" />
                            </ToDoDiv>
                        ))
                    }
                </Savedinfo>
            </Container> 
       </div>
  )
}
export default Todo;
