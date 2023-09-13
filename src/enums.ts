enum Gender {
    Male ='Male',
    FEMALE ='Female',
    OTHER = 'Other'
}

type Person = {
    name:string,
    age: number,
    gender:Gender
}

const person:Person ={
    name: "chrystopher",
    age: 27,
    gender: Gender.Male
}

function displayPersonInfo(person:Person): void {

    console.log(`${person.name}, ${person.age}, ${person.gender}`);
    

}
 displayPersonInfo(person)