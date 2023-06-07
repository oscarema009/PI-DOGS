import React, {useState, useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom'
import { postDog, getTemperament } from '../redux/actions';
import {useDispatch, useSelector} from "react-redux";
import './DogCreate.css'


export default function DogCreate () {


    const dispatch = useDispatch()
    
    const temperaments = useSelector((state) => state.temperaments)
    const history = useHistory();

    const [temperamentosElegidos, setTemperamentosElegidos] = useState([]);
    const [input, setInput] = useState({
          name: "",
          height_max: "",
          height_min: "",
          weight_max: "",
          weight_min: "",
          temperament: [],
          life_span: "",
          image: "",
    })
    
    const [error, setError] = useState()

    function handleInputChange(e) {
        
        setInput( {
              ...input,
              [e.target.name]: e.target.value,
            });
        setError(validation({
            ...input,
            [e.target.name]:e.target.value
        }));
        console.log(input)
      }
      
console.log(error)
      const handleSelect = (e) => {
        let index = e.target.selectedIndex;
        setTemperamentosElegidos((temps) => [...temps, e.target.options[index].text]);
        setInput({
          ...input,
          temperaments: [...input.temperament, e.target.value],
        });
      };

      function handleSubmit(e) {
        e.preventDefault();
        console.log(input)
        dispatch(postDog(input));
        alert("Your dog has been uploaded succesfuly");
        setInput({
          name: "",
          height_max: "",
          height_min: "",
          weight_max: "",
          weight_min: "",
          temperament: [],
          life_span: "",
          image: "",
        });
        history.push("/home");
      }

      useEffect(() => {
        dispatch(getTemperament())
    }, [dispatch])

     function validation(input){
        let error = {}
        if(!input.name){
            error.name = 'El nombre es requerido'
        }
        return error
     }
    return (
        <>
            <div className='containerCreate'>
               
                <h1>Create Your Dogs!</h1>
                <form onSubmit={(e)=> handleSubmit(e)}>
                    <div>
                        <label>Name:</label>
                        <input
                        type='Text'
                        value = {input.name}
                        name="name"
                        onChange={handleInputChange}
                        />
                    </div>

                    <div className='div'>
                        <label>Temperament</label>
                        <select className='btnHome' onChange={handleSelect}>
                            <option value="all">Temperament</option>
                            {temperaments?.map((t) => (
                            <option key={t.id} value={t.name}> {t.name} </option>))}
                        </select>
                        <input
                        type='Text'
                        value = {input.temperament}
                        name="temperaments"
                         
                        />
                        <ul>
                            <h3>Chosen temperaments: </h3>
                            <div >
                                {temperamentosElegidos?.map((el) => (
                                    <div key={el}>
                                        <p>{el}</p>
                                    </div>
                                ))}
                            </div>
                        </ul>
                    </div>
                

                    <div className='div'>
                        <label>Max weight</label>
                        <input
                        type='Text'
                        value = {input.weight_max} 
                        name="weight_max"
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className='div'>
                        <label>Mim weight</label>
                        <input
                        type='Text'
                        value = {input.weight_min} 
                        name="weight_min"
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className='div'>
                        <label>Maximum height</label>
                        <input
                        type='Text'
                        value = {input.height_max}
                        name="height_max"
                        onChange={handleInputChange} 
                        />
                    </div>
                    <div className='div'>
                        <label>Minimun height</label>
                        <input
                        type='Text'
                        value = {input.height_min}
                        name="height_min"
                        onChange={handleInputChange} 
                        />
                    </div>
                    <div className='div'>
                        <label>Life span</label>
                        <input
                        type='Text'
                        value = {input.life_span} 
                        name="life_span"
                        onChange={handleInputChange}
                        />
                    </div>
                    
                    <div className='div'>
                        <label>Image:</label>
                        <input
                        type='Text'
                        value = {input.image}
                        name="image"
                        onChange={handleInputChange}
                        />
                    </div>

                    <div >
                    <Link to= '/home'><button className='btn'><span>Return</span></button></Link>
                        <button className='btn' type="submit" >
                            <span>Create!!</span>
                        </button>
                    </div>
                    
                </form>
        </div>
        </>
    )
}

 
//{error.name && (
//    <p className='error'>{error.name}</p>
//)}