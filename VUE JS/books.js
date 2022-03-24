 //Name: Mar Brent Supan
 //Section: WD-201   

    
    const books = Vue.createApp({
        data(){
        return{
            showBooks: true,
            btitle: 'The Ledger',
            bauthor: 'Mar Brent Supan',
            year: 2008
        }
    },
    method:{
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }
});
    
books.mount('#books')