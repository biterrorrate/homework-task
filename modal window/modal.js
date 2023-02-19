const openModal = document.querySelector('#openModalWindow');
const body = document.body;
const exampleOfMessage = createModal('Hello world!');

openModalWindow.addEventListener('click', e => {
    body.appendChild(exampleOfMessage);
})

function createModal(content) {
    const overlayElement = document.createElement('div')
    overlayElement.classList.add('overlay');

    overlayElement.addEventListener('click', e => {
        if(e.target == overlayElement){
        closeModal.click();
        }
    })

    const containerModal = document.createElement('div');
    containerModal.classList.add('modal-container');

    const contentModal = document.createElement('div');
    contentModal.classList.add('content');
    contentModal.innerHTML = content

    const closeModal = document.createElement('a');
    closeModal.classList.add('close');
    closeModal.textContent = 'x';
    closeModal.href = "#";

    closeModal.addEventListener('click', e => {
        e.preventDefault()
        body.removeChild(overlayElement);
    })

    overlayElement.appendChild(containerModal);
    containerModal.appendChild(contentModal);
    containerModal.appendChild(closeModal);

    return overlayElement;    
}


