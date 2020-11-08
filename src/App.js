import React from "react";
import "./styles.css";

export default function App() {
  const [fullName, setName] = React.useState({
    firstName: '',
    lastName: ''
  });

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setName(prevState => ({
      ...prevState,
      [name]: value
  }));
  }
  return (
    <div className="App">
      <input name="firstName" onChange={(e) => handleOnChange(e)} />
      <input name="lastName" onChange={(e) => handleOnChange(e)} />
      <p>{fullName.firstName}</p>
      <p>{fullName.lastName}</p>
    </div>
  );
}
