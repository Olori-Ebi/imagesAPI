function main(){
    
    document.addEventListener('DOMContentLoaded', () => {
        const url = 'https://swapi.dev/api/people';
        return fetch(url).then((response) => response.json()).then(data => {
            let container = document.querySelector('.container');
            const { results } = data
            const images = ['image1.jpg','image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpeg', 'image6.jpg', 'image7.jpg', 'image8.png', 'image9.jpg', 'image10.jpg']
            results.forEach((element, index) => {
                
                let image_container = document.createElement("div");
                image_container.classList.add("image__container");

               let output= `
                    <div class="trigger">
                        <img src="./img/${images[index]}" alt="" class="img" />
                        <div class="card__container">
                            <span class="card__name" id="trigger${index}">${element.name}</span>
                        </div>
                    </div>
               
               <div class="modal" id="modal${index}">
                    <div class="modal-content">
                        <span class="close-button" id=close-button${index}>&times;</span>
                        <div class="modal__container">
                            <img src="./img/${images[index]}" />
                            <header>
                               <h3>Character Details</h3>
                            </header>
                            <div class="details">
                                <h4>Name: </h4>
                                <h4 class="height">${element.name}</h4>
                            </div>
                            <div class="details">
                                <h4>Gender: </h4>
                                <h4 class="height">${element.gender}</h4>
                            </div>
                            <div class="details">
                                <h4>Height: </h4>
                                <h4 class="height">${element.height}</h4>
                            </div>
                        </div>
                    </div>
                
               `
               image_container.innerHTML = output;
                container.appendChild(image_container);

                let trigger = document.getElementById(`trigger${index}`); 
                let modal = document.getElementById(`modal${index}`);
                const closeButton = document.getElementById(`close-button${index}`);
                
                closeButton.addEventListener("click", (event)=>{
                    modal.classList.toggle("show-modal")
                    event.stopPropagation();
                });

                trigger.addEventListener("click", ()=>{
                    modal.classList.toggle("show-modal")});

            });
             
        }).catch(err => console.log('error',err)); 
    })
    
}
main()

const modal = document.querySelector(".modal");

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }
    window.addEventListener("click", windowOnClick);