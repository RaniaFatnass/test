let pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];

  const getAge = (pet) => {
    new Date().getFullYear() - pet.bornOn;

};

let petsWithAge=pets.forEach((pet)=>{
    alert(getAge(pet));
});

let dogs=pets.filter((pet)=>{
    alert( pet.type=="dog");
});
let jasper=pets.find((pet)=>{
  pet.name=="jasper" 
});
alert (`Jasper is ${jasper.age} years old `);
