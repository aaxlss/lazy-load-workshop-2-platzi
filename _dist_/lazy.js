
const isIntersecting = (entry) => {
    return entry.isIntersecting;
}

const action = (entry) => {
    const imgContainer = entry.target;
    const img = imgContainer.firstChild;
    const url = img.dataset.src;
    
    setTimeout(() => {
        imgContainer.className = 'p-4';
        img.src = url;
    }, 1000);
    
    observer.unobserve(imgContainer);
}

const observer = new IntersectionObserver((entries) =>{
    entries.filter(isIntersecting).forEach(action)
});

export const registerImage = (image) => {
    observer.observe(image)
}
