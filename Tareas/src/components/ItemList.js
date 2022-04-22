import Item from './Item'
import ListGroup from 'react-bootstrap/ListGroup'
import { memo } from 'react';

const ItemList = ({products}) => {

  return (
   <div className="container-flex">
     <ListGroup onClick={() => console.log('Hice click en ItemList')}>
  <ListGroup.Item> {products.map(prod => <Item key={prod.id} {...prod}/>)}</ListGroup.Item>
</ListGroup>
  
   </div>
  
  )
}

export default memo(ItemList);
