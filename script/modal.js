const modal = document.querySelector(".modal");
    const trigger = document.querySelectorAll(".trigger");
    const closeButton = document.querySelector(".close-button");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.forEach(element => 
        element.addEventListener("click", toggleModal)
    );
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);