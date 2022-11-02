// let block = document.querySelectorAll(".block")
// block.forEach(item => item.count = 1)
//
// block.forEach((itemActive, indexActive, block) => {
//
//     itemActive.onclick = () => {
//         if (itemActive.count == 1) {
//             itemActive.style.backgroundColor = "#545"
//         } else if (itemActive.count == -1) {
//             itemActive.style.backgroundColor = "#6c5579"
//         }
//         itemActive.count *= -1
//         block.forEach((item, index) => {
//             if (item.count == -1 && index != indexActive) {
//                 item.style.backgroundColor = "#6c5579"
//                 item.count *= -1
//             }
//         })
//     }
// })

// Смотри, несмотря на то, что технически это работает, я не зря тебе сказал использовать переключение классов, а не прямое добавление стилей.
// Во-первых, ты применяешь только цвет. Если я скажу тебе, скажем, добавить по клику box-shadow, hover-эффект и анимацию, что ты будешь делать?
// Во-вторых, обрати внимание. Я накинул hover на красные элементы, наведи на них мышкой. А потом нажми, нажми обратно, и посмотри на них снова, поводи мышкой, посмотри стили.
// Правильнее было бы сделать вот так:

// Переменную для массива лучше называть множественно, по схеме items => item,
// чтобы потом ты или кто-то другой могли понять, когда ты имеешь в виду массив, а когда forEach-элемент
let blocks = document.querySelectorAll('.block')


blocks.forEach((block) => {
    //обходимся одним переданным параметром, больше нам тут и не уперлось по сути, и вешаем обработчик клика на каждый элемент
    block.onclick = () => {
        //проверяем, если у элемента есть активный класс - удаляем его
        if (block.classList.contains('activeBlock')){
            block.classList.remove('activeBlock')
        } else {
            //если нет - мы делаем ещё один forEach, и удаляем этот класс со всех элементов
            blocks.forEach((block) => {
                block.classList.remove('activeBlock')
            })
            //после чего вешаем его на тот, на который мы кликали
            block.classList.add('activeBlock')
        }
    }
})

//В общем и целом справилась, за изобретательность хвалю, но этот вариант будет чище и отрабатывать в большинстве ситуаций правильно, а так же он более масштабируем. И все приколы с фоном продолжают работать после кликов
//почитай про свойства classList, если не поняла
//ты умничка, люблю тебя
