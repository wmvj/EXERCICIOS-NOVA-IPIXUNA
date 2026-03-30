console.log(typeof Array, typeof new Array, typeof []);

let alunos = ["Luan", "Marilia", "Bruno", "Martiniano"];

alunos.pop();
console.log(alunos);
alunos.push("Daniel")
console.log(alunos);
alunos.shift(); 
console.log(alunos);
alunos.unshift("Luan");
console.log(alunos);
alunos.splice(2, 0, "Michelangelo");
console.log(alunos);
alunos.splice(2, 1);
console.log(alunos);
const alunos2  = alunos.slice(2)
console.log(alunos2);
console.log(alunos)
const alunos3  = alunos.slice(1,3)
console.log(alunos3);

