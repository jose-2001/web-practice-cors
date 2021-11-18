class UserView {



    //State
    constructor(user) {
        this.user = user;
        this.block = null;
        //Object.seal(this);
    }


    //Metodos
    render = (container) => {
        //String -> HTML DOM
        let div = document.createElement("div");
        let html = `<div class="card w-50 card-margin">
        <div class="card-body">
          <h5 class="card-title">${this.user.name}</h5>
          <p class="card-text">Age: ${this.user.age}.</p>
          <a id="${this.user.id}" href="#" class="btn btn-danger">Bloquear</a>
        </div>
      </div>`;
        div.innerHTML = html;
        let card = div.firstChild;
        if(this.user.blocked===true){
            card.classList.add("text-white");
            card.classList.add("bg-secondary");
        }
        container.appendChild(card);

        let blockBtn=document.getElementById(this.user.id);
        blockBtn.addEventListener("click", (e)=>{
            e.preventDefault();
            alert("¿Bloquear "+this.user.name+"?");
        })
    }

    /*
    block = ()=>{
        alert("Bloquear a "+this.user.name);
    }
    */



}