    function teste(){
        console.log(this);
    }

    class ControleRemoto {
        constructor(tv) {
             this.tv = tv; 
             this.volume = 0;
             teste();
        }
        //método instancia
        aumentarVolume() {
            this.volume += 2;
        }
        //método instancia
        diminuirVolume(){
            this.volume -= 2;
        }

        //Método de estatico
        static trocaPilha() { // metodo estatico nao  tem acesso aos dados da instancia
            console.log('Ok, vou trocar.')
        }
    }

    const controle1 = new ControleRemoto('LG');
    controle1.aumentarVolume();
    controle1.aumentarVolume();
    controle1.aumentarVolume();
    ControleRemoto.trocaPilha();
    console.log(controle1);
