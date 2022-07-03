import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const endpoint = 'http://localhost:8000/api/product'
const CreateProducts = () => {

    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)

    const navigate = useNavigate()

    const store = async (evento)=>{
        evento.preventDefault();
        confirm('deseas agregar esto')
       await axios.post(endpoint,{
            description: description,
            price: price,
            stock:stock
        })
        navigate('/')
    }

  return (
    <div>
        <h3>Create a product</h3>
        <form onSubmit={store} action="">
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
            <button type='submit' className='btn btn-primary'>Store</button>

        </form>
    </div>
  )
}

export default CreateProducts