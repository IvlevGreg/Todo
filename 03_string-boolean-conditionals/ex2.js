let name = 'Григорий';
let surname = 'иВлеВ';


let name2 = name[0].toUpperCase() + name.substr(1, name.length).toLowerCase();
let surname2 = surname[0].toUpperCase() + surname.substr(1, surname.length).toLowerCase();
console.log (name2)
console.log (surname2)
console.log (name===name2 ? 'Имя осталось без изменений' : 'Имя было преобразовано')
console.log (surname===surname2 ? 'Фамилия осталась без изменений' : 'Фамилия была преобразована')