import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
   const refContainer = useRef(null)
   const divContainer = useRef(null)

   useEffect(() => {
    console.log(refContainer.current)
    refContainer.current.focus()

  })

  const handleSubmit = (e) => {
    e.preventDefault()
    divContainer.current.innerText = 'always here'
    divContainer.current.className = 'colorDIv'
    const colorText = document.querySelector('.colorDIv')
    colorText.style.color = 'blue'
    console.log(refContainer)
    console.log(divContainer)
  }


  return (
    <>
        <form className='form' onSubmit={handleSubmit}>
          <input type="text" ref={refContainer}/>
          <button type="submit">submit</button>
        </form>

        <div ref={divContainer}>Hello World</div>
    </>
  );
};

export default UseRefBasics;
