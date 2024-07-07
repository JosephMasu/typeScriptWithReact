import React, { useState } from "react";
function Component() {
  const [text, setText] = useState('');
  const [email, setemail] = useState('');
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
   console.log(e.target.value);
   setemail(e.target.value);
    
  }
  return (
    <section>
      <h2>React & Typescript</h2>
      <form className="form">
        <input 
          type="text" 
          className="form-input mb-1" 
          value={text} 
          onChange={(e)=>e.target.value}
        />
        <input 
          type="email" 
          className="form-input mb-1" 
          value={email} 
          onChange={handleChange}
        />
      </form>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </section>
  );
}
export default Component;
