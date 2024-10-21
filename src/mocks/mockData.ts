
const animals = [
    { id: 1, nome: 'Leão', especie: 'Felino' },
    { id: 2, nome: 'Tigre', especie: 'Felino' },
    { id: 3, nome: 'Elefante', especie: 'Mamífero' },
    { id: 4, nome: 'Girafa', especie: 'Mamífero' },
    { id: 5, nome: 'Zebra', especie: 'Mamífero' },
    { id: 6, nome: 'Canguru', especie: 'Mamífero' },
    { id: 7, nome: 'Pinguim', especie: 'Aves' },
    { id: 8, nome: 'Águia', especie: 'Aves' },
    { id: 9, nome: 'Tubarão', especie: 'Peixe' },
    { id: 10, nome: 'Golfinho', especie: 'Mamífero' },
    
  ];
  
  
  for (let i = 11; i <= 100; i++) {
    animals.push({ id: i, nome: `Animal ${i}`, especie: `Espécie ${i}` });
  }
  
  export default animals;
  