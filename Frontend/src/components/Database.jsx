import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Database.css'
function Database() {
  const [data, setData]= useState('');
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/predictions/')
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  },[])
  return (
    <div className='Home__wrapper'>
      <div className="tbl-header">
        <table cellPadding="0" cellSpacing="0" border="0">
          <thead>
            <tr>
              <th>Sepal Length</th>
              <th>Sepal Width</th>
              <th>Petal Length</th>
              <th>Petal Width</th>
              <th>Predicted</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">
        <table cellPadding="0" cellSpacing="0" border="0" >
          <tbody>
            {data && data.map((data) => {
              return (
                <tr key={data.id}>
                  <td>{data.sepal_length}</td>
                  <td>{data.sepal_width}</td>
                  <td>{data.petal_width}</td>
                  <td>{data.petal_width}</td>
                  <td>{data.predicted_class}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Database