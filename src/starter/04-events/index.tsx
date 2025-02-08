import React, { useState } from "react";
type Person = {
  name: string;
};
function Component() {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setText(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
    const text = formData.get('text') as string;
    const Person: Person = {name:data.text as string}
    console.log(text, Person);
    
  }

  return (
    <section>
      <h2>React & Typescript</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          className="form-input mb-1"
          value={text}
          name="text"
          onChange={handleTextChange}
        />
        <input
          type="email"
          className="form-input mb-1"
          value={email}
          name="email"
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Component;
