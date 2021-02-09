import React from 'react';
import { useRef, useEffect, useState } from 'react';
import './Switch.css';

function Switch(){
  const [checked, setChecked] = useState(true)
  const referencia = useRef(null)

  function handleChange(event){
    console.log(referencia.current.checked)
    setChecked(referencia.current.checked)
    if (referencia.current.checked) {
      document.body.classList.remove('is-light-mode')
      document.body.classList.add('is-dark-mode')
    } else {
      document.body.classList.remove('is-dark-mode')
      document.body.classList.add('is-light-mode')
    }
  }

useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setChecked(true)
    }
},[])

/* 316 */

  return(
    <div className="dark-mode" >
      <p className="dark-mode-title">Dark Mode</p>
      <input ref={referencia} onChange={handleChange} type="checkbox" checked={checked} className="checkbox" id="checkbox" />
      <label className="switch" htmlFor="checkbox">
      </label>
    </div>
  )
}

export default Switch