let block = document.querySelectorAll(".block")
block.forEach(item => item.count = 1)

block.forEach((itemActive, indexActive, block) => {

    itemActive.onclick = () => {
        if (itemActive.count == 1) {
            itemActive.style.backgroundColor = "#545"
        } else if (itemActive.count == -1) {
            itemActive.style.backgroundColor = "#6c5579"
        }
        itemActive.count *= -1
        block.forEach((item, index) => {
            if (item.count == -1 && index != indexActive) {
                item.style.backgroundColor = "#6c5579"
                item.count *= -1
            }
        })
    }
})