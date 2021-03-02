var demo1 = new Vue({
	el: '#demo-1',
	data: {
		counter: 0
	}
})

var demo2 = new Vue({
	el:'#demo-2',
	data: {
		name: 'Vue.js'
	},
	methods: {
		greet: function(event){
			alert('Hello ' + this.name + '!')
			if(event){
				alert(event.target.tagName)
			}
		}
	}
})
