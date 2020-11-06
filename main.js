var app = new Vue({
    el: '#root', // div "radice" di vue
    data: { // contenitore di tutte le informazioni necessarie
        messaggio: 'Il primo esercizio con Vue.',
        immagine: "https://technoblitz.it/wp-content/uploads/2018/06/immagini-4k.jpg",
    },
    methods: {

        cambiaImmagine() {

            if (this.immagine == "https://technoblitz.it/wp-content/uploads/2018/06/immagini-4k.jpg")
            {
                this.immagine = "https://www.addlance.com/blog/wp-content/uploads/2019/04/immagini-da-scaricare.jpg"
            }

            else if (this.immagine == "https://www.addlance.com/blog/wp-content/uploads/2019/04/immagini-da-scaricare.jpg")
            {
                this.immagine = "https://www.arthemisia.it/wp-content/uploads/2016/04/vittoriano-ligabue-500x500.jpg"
            }

            else {
                this.immagine = "https://technoblitz.it/wp-content/uploads/2018/06/immagini-4k.jpg"
            }

        }

    }
});
