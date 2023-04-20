function extractNameAndStreet(person) {
    const { name, address: { street } } = person;
    return { name, street };
  }

  

//   const person = {
//     name: "mithun",
//     age: 21,
//     address: {
//       street: "B8, Block B Insdustrial Area.",
//       city: "Sector 62, Nodia",
//       state: "Uttar Pradesh",
//     },
//   };
  
//   const { name, street } = extractNameAndStreet(person);
//   console.log(name); // "mithun"
//   console.log(street); // "B8, Block B Insdustrial Area."
  