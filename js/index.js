window.addEventListener('keydown', showImages) // Додаємо слухач подій на вікно щоб при натисканні будь якої клавіші спрацовувала функція

function showImages() { 
    const images = document.querySelectorAll('img')

    const io = new IntersectionObserver((entries,observer)=>{
        entries.forEach((entry)=> {
            if(entry.isIntersecting) {
                const image = entry.target
                const imgUrl = image.dataset.lazy
                image.src = imgUrl
                image.classList.add('show')

                observer.unobserve(image)
            } 
        })
    }) // Імпортуємо IntersectionObserver та передаэм кожному зображенню src

    images.forEach(image=>io.observe(image))
}