function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
    if (modal) {
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
            if (e.target.id == modalID || e.target.className == 'botao2' || e.target.className == 'botao1') {
                modal.classList.remove('mostrar');
                localStorage.fechaModal = modalID;
            }
        });
    }
}