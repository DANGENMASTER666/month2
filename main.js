const name = prompt('введите ваше имя')
alert(`ку   ${name}`)


let g = [121,344,666]
let a = [121,344,666,73]

if (g.length < a.length) {
    alert("больше")
} else if (g.length > a.length) {
    alert("меньше")
}else  {
    alert("ты приемный")    
}

const svetofor = prompt('выбери цвет : красный, желтый, зеленый');

switch (svetofor) {
    case "красный" :
        alert('СТОЙ!')
        break;
    case "желтый" :
        alert('ЖДИ')
        break;
    case "зеленый" :
        alert('ЫДЫ ОТСЮДА')
        break;
    default:
        alert('вали от сюда!!!!')
}
