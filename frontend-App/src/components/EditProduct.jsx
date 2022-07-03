import {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
// const endpoint = 'http://localhost:8000/api'
const endpoint = 'http://localhost:8000/api/product/'


const EditProduct = () => {
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const nativate = useNavigate()
  const {id} = useParams();


  const update =async (evento)=>{
    evento.preventDefault();
    await axios.put(`${endpoint}${id}`,{
      description: description,
      price:price,
      stock: stock
    })

    nativate('/')
      
  }

  useEffect(()=>{
    const getProductById = async()=>{
     const respuesta = await axios.get(`${endpoint}${id}`)
     setDescription(respuesta.data.description)
     setPrice(respuesta.data.price)
     setStock(respuesta.data.stock)
    }
    getProductById()
  },[])

  return (
    <div>
        <h3>Edit a product</h3>
        <form onSubmit={update} action="">
            <div className="mb-3">
                <label htmlFor="" className='form-label'>Description</label>
                <input type="text"
                    value={description}
                    onChange={(evento)=> setDescription(evento.target.value)}
                    className="form-control"
                />

            </div>
            <div className="mb-3">
                <label htmlFor="" className='form-label'>price</label>
                <input type="number"
                    value={price}
                    onChange={(evento)=> setPrice(evento.target.value)}
                    className="form-control"
                />
                
            </div>
            <div className="mb-3">
                <label htmlFor="" className='form-label'>stock</label>
                <input type="number"
                    value={stock}
                    onChange={(evento)=> setStock(evento.target.value)}
                    className="form-control"
                />
                
            </div>
            <button type='submit' className='btn btn-primary'>Update</button>

        </form>
    </div>
  )
}

export default EditProduct