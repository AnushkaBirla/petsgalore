import './App.css';
import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  TextField,
  Button,
  Select,
  MenuItem
} from "@material-ui/core";
// import "./styles.css";

  // form requiring zip code, animal, breed, max age
// submit disabled until all fields filled
// fields are validated
// animal and breed are both dropdown
// breed options changes based on animal choice
// animal and breeds lists are fetched from the server

// example backend response for map between animal and breeds
const animalToBreed = {
  dog: ["german shepherd", "golden doodle", "havaneese", "pug", "husky"],
  cat: ["persian", "rag doll", "shorthair", "burmese"],
  bird: ["crow", "parrot", "eagle", "hawk"]
};

//deal w console log errors w the dropdown updating b4 adding valdiation
const animalToMaxAge = {
  dog: 14,
  cat: 15,
  bird: 20
}

// example backend response for animal list
const animalList = ["bird", "cat", "dog"];

function isValidUSZip(sZip) {
  return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(sZip) || sZip === ""
}

function isValidAge(age) {
  return /^\d+$/.test(age) || age === ""
}

function App() {
  // states
  // zip code error
  // max age error

  // const classes = useStyles();
  const [animal, setAnimal] = React.useState("cat");
  const [currentBreeds, setCurrentBreeds] = React.useState(["Default"]);
  const [zip, setZip] = React.useState("");
  const [age, setAge] = React.useState("");

  
  const [zipcodeError, setZipcodeError] = React.useState(false);
  const [maxAgeError, setMaxAgeError] = React.useState(false);

  const handleAnimalChange = (event) => {
    setAnimal(event.target.value);
  };

  React.useEffect(() => {
    setCurrentBreeds(animalToBreed[animal]);
  }, [animal]);

  const handleBreedChange = (event) => {};

  const handleZipCodeChange = (event) => {
    // var numberPattern = /^\d+$/
    // if (numberPattern.test(event.target.value)) {
    //   setZip(event.target.value);
    // }
    setZip(event.target.value);
  };

  const handleAgeChange = (event) => {
    console.log(animal)
    setAge(event.target.value)
  }

  React.useEffect(() => {
    setZipcodeError(!isValidUSZip(zip));
  }, [zip]);

  React.useEffect(() => {
    setMaxAgeError(!isValidAge(age));
  }, [age]);


  const handleSubmitForm = () => {
    //setZipcodeError(!isValidUSZip(zip));
  };

  return (
    <>
      <div>
        <form noValidate autoComplete="off">
          <TextField
            error={zipcodeError}
            helperText={zipcodeError ? "Invalid ZIP code" : ""}
            id="standard-error-helper-text"
            label="Zipcode"
            onChange={handleZipCodeChange}
          />
          <br></br>
          <TextField
            error={maxAgeError}
            helperText={maxAgeError ? "Invalid pet age" : ""}
            id="standard-error-helper-text"
            label="Max pet age"
            onChange={handleAgeChange}
          />
        </form>
        {/* <FormControl>
          <InputLabel htmlFor="my-input">Max Age</InputLabel>
          <Input id="my-isnput" aria-describedby="my-helper-text" />
        </FormControl> */}
      </div>
      <br></br>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Animal</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={animal}
          onChange={handleAnimalChange}
        >
          {animalList.map((animal) => (
            <MenuItem value={10}>{animal}</MenuItem>
          ))}
        </Select>
        <br></br>
        <InputLabel id="demo-simple-select-label">Breed</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={animal}
          onChange={handleBreedChange}
        >
          {currentBreeds.map((breed) => (
            <MenuItem value={10}>{breed}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <br></br>
      <br></br>
      <br></br>
      <Button variant="contained" onClick={handleSubmitForm}>
        Submit
      </Button>
    </>
  );
}


export default App;

// export default function App() {
//   return (
//     <div className="App">
//       <InputForm />
//     </div>
//   );
// }
