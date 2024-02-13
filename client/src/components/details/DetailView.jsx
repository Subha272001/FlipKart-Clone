import {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import { getProductDetails } from '../../redux/actions/productAction';
import { Box, Typography, styled, Grid} from '@mui/material';
import ActionItem from './ActionItem';
import ProductDetails from './ProductDetails';

const Component = styled(Box)`
   background: #F2F2F2;
`
const Container = styled(Box)(({theme})=>({
  background: '#FFFFFF',
  display: 'flex',
  [theme.breakpoints.down('md')]:{
    margin:0
  }
}))
  

const RightContainer = styled(Box)`
   margin-top: 50px;
`

const DetailView = ()=>{

  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
  const dispatch = useDispatch();
  const { id } = useParams();
  const {loading, product} = useSelector(state => state.getProductDetails);

   useEffect(()=>{
     if( product && id !== product.id)
       dispatch(getProductDetails(id));
   },[dispatch,id,product,loading])

   return (
    <Box>
      {
        product && Object.keys(product).length &&
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product}/>
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12} >
          <ProductDetails product={product}/>

          </RightContainer>
             
        </Container>

      }
        
    </Box>
   )
}
export default DetailView;