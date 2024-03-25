import { Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

function Product() {
  const { id } = useParams();
  const [producto, setProducto] = useState({})
  useEffect(() => {

    axios.get(`http://localhost:8000/api/bebidas/${id}/`)
      .then((response) => {
        setProducto(response.data);

      })
      .catch(e => {
        console.log(e);
      });

  }, []);
  return (
    <>
      <Text>Producto num {id}</Text>
      {
        producto ? (<ProductCard
          nombre={producto.nombre}
          sabor={producto.sabor}
          marca={producto.marca}
          calorias={producto.calorias}
        />
      ) : (
          <Text>Esperando producto</Text>
      )}
    </>
  );
}

export default Product;