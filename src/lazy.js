
const isIntersecting = (entry) => {
    return entry.isIntersecting;
}

const action = (entry) => {
    const imgContainer = entry.target;
    const img = imgContainer.firstChild;
    const url = img.dataset.src;
    img.src = url;
    
    observer.unobserve(imgContainer);
}

const observer = new IntersectionObserver((entries) =>{
    entries.filter(isIntersecting).forEach(action)
});

export const registerImage = (image) => {
    observer.observe(image)
}
