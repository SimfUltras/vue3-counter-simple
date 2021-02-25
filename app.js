const App = {
    data(){  // для передачи js  в html, метод  
return {
    counter: 0,
    title: 'Counter'
}
    }
}

Vue.createApp(App).mount('#app') // принимает обьект для удобства вынесли в переменную

