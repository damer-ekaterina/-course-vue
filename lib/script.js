var app = new Vue({
  el: '#app',
  data: {
  	avatarDefault: 'avatars/default.jpg',
  	visible: true,
    users: [
		{'id': 0,
		'firstName': 'Алексей',
		'lastName': 'Юрьев',
		'patronymic': 'Данилович',
		'avatar': 'avatars/a_u_danilov.jpg'},
		{'id': 1,
		'firstName': 'Екатерина',
		'lastName': 'Алексеева',
		'patronymic': 'Владимировна',
		'avatar': null},
		{'id': 2,
		'firstName': 'Елизавета',
		'lastName': 'Полоскина',
		'patronymic': 'Григорьевна',
		'avatar': 'avatars/e_g_poloskina.jpg'},
		{'id': 3,
		'firstName': 'Екатерина',
		'lastName': 'Полоскина',
		'patronymic': 'Григорьевна',
		'avatar': null},
		{'id': 4,
		'firstName': 'Григорий',
		'lastName': 'Полоскин',
		'patronymic': 'Александрович',
		'avatar': 'avatars/g_a_poloskin.jpg'},
    ],
  },
  methods: {
  	toogleUsers: function() {
  		this.visible=!this.visible;
  	}
  },
  computed: {
    countUsers: function() {
    	return this.users.length;
    }
  }
})