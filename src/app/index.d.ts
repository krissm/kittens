export interface Person {
  age: number;
  gender: string;
  name: string;
  pets: Pet[];
}

export interface Pet {
  name: string;
  type: string;
}

export interface PetsByOwnerGender {
  gender: string;
  cats: Pet[];
}
