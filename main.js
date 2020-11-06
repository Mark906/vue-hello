var app = new Vue({
    el: '#root', // div "radice" di vue
    data: { // contenitore di tutte le informazioni necessarie
        messaggio: 'Il primo esercizio con Vue.',
        immagine: "https://technoblitz.it/wp-content/uploads/2018/06/immagini-4k.jpg",
        mongolfiera: "https://technoblitz.it/wp-content/uploads/2018/06/immagini-4k.jpg",
        faro: "https://www.addlance.com/blog/wp-content/uploads/2019/04/immagini-da-scaricare.jpg",
        tigre: "https://www.arthemisia.it/wp-content/uploads/2016/04/vittoriano-ligabue-500x500.jpg"
    },
    methods: {

        cambiaImmagine() {

            if (this.immagine == this.mongolfiera)
            {
                this.immagine = this.faro
            }

            else if (this.immagine == this.faro)
            {
                this.immagine = this.tigre
            }

            else {
                this.immagine = this.mongolfiera
            }

        }

    }
});
