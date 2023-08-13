import React, { useState } from 'react';
import axios from 'axios';
import './Forms.css'
function Forms() {
  const [formData, setFormData] = useState({
    sepal_length: '',
    sepal_width: '',
    petal_length: '',
    petal_width: ''
  });
  const [prediction, setPrediction] = useState('');
  const [isLoading, setIsLoading] = useState(false);
 

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (event) => {

    event.preventDefault();
    setIsLoading(true);

    axios.post('http://127.0.0.1:8000/predict/', formData)
      .then(response => {
        console.log(response.data)
        setIsLoading(false);
        setPrediction(response.data.predicted_class);
      })
      .catch(error => {
        setIsLoading(false);
        console.log(error);
      });

  };

  return (
    <div className='Home__wrapper'>
      <div className='Prediction__wrapper'>
        <div className='Prediction__header'>
          Fill out the Form data to get prediction
        </div>
        <form className='forms__wrapper' onSubmit={handleSubmit}>
          <label>
            Sepal Length:
            <input type="text" name="sepal_length" value={formData.sepal_length} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Sepal Width:
            <input type="text" name="sepal_width" value={formData.sepal_width} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Petal Length:
            <input type="text" name="petal_length" value={formData.petal_length} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Petal Width:
            <input type="text" name="petal_width" value={formData.petal_width} onChange={handleInputChange} />
          </label>
          <br />
          <button type="submit">Predict</button>
        </form>

      {isLoading ? <p>loading...</p> : null}
      {prediction && <p className='prediction__result'>Prediction: {prediction}</p>}
      

      </div>

    </div>
  );
}

export default Forms;
