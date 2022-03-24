 //Name: Mar Brent Supan
 //Section: WD-201   

const ListRendering = {
    data(){
        return {
            todos:[
                {text: 'Clean the house'},
                {text: 'Prepare breakfast'},
                {text: 'Attend WCSERVER class'}
            ]
        }
    }
}

Vue.createApp(ListRendering).mount('#list-rendering')