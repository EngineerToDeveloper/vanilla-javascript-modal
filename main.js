class Modal {
    constructor(modal, target) {
        this.isOpen = false;
        this.modal = modal;
        this.target = target;
        this.closeModal = modal.querySelectorAll('[data-close]');

        this.target.addEventListener("click", (e) => {
            if (this.isOpen) {
                return this.close();
            }
            return this.open();
        });
        this.closeModal.forEach(item => {
            item.addEventListener("click", (e) => {
                this.close();
            });
        });
    }
    
    open() {
        this.modal.classList.add('show-modal');
        setTimeout(() => {
            this.animateIn();
        }, 10);
    }
    close() {
        this.animateOut();
        setTimeout(() => {
            this.modal.classList.remove('show-modal');
        }, 250);
    }
    animateIn() {
        this.modal.classList.add('animate-modal');
    }
    animateOut() {
        this.modal.classList.remove('animate-modal');
    }
}

const modal = new Modal(
    document.querySelector('.modal'),
    document.querySelector('[data-toggle="modal"]')
)