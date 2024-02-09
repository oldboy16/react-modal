
import React, { useRef, useState } from 'react';
import './App.css';

// function App() {
//   const [mode,setMode] = useState()
//   const inpRef = useRef()
//   function fn(){
//     inpRef.current.style.border = '2px solid red'
//     console.log(inpRef.current.value);
//     inpRef.current.value = '' 
//   }
//   return (
//     <div className="App">
//       <h1>App</h1>
//       <input ref={inpRef} type="text" />
//       <button onClick={fn}>click</button>
//     </div>
//   );
// }


function App(){
  const btnRef = useRef()
  function open(){
    btnRef.current.style.display = 'block'
  }
  function close(){
    btnRef.current.style.display = 'none'
  }
  return(
    <div className="App">
      <button onClick={open}>open modal</button>
      <div className="modal__header" ref={btnRef}>
      <div className="modal__app">
        <div className="modal">
        <h2 className='title'>Modal</h2>
        <i onClick={close} class="bi bi-x-lg x"></i>
        </div>
        <hr />
        <p className='text'>...</p>
        <hr />
        <div className="btn">
          <button onClick={close}>close</button>
          <button>save</button>
        </div>
      </div>
      </div>
    </div>
  )
}
export default App;
