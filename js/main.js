let app = new Vue({
	el: "#app",
	data: {
		message: 'Hello World'
	}
});

let app2 = new Vue({
	el: "#app2",
	data: {
		message: `You loaded this page on ${new Date()}`
	}
});

let app3 = new Vue({
	el: "#app3",
	data: {
		seen: true
	}
});

let app4 = new Vue({
	el: "#app4",
	data: {
		todos: [
			{ text: 'Learn JS' },
			{ text: 'Learn Vue' },
			{ text: 'Build some stuff' }
		]
	}
});

let app5 = new Vue({
	el: "#app5",
	data: {
		message: 'Hello World!'
	},
	methods: {
		reverseMessage: function() {
			this.message = this.message.split('').reverse().join('');
		}
	}
});

let app6 = new Vue({
	el: "#app6",
	data: {
		message: "Hello Worldo!"
	}
});