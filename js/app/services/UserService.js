function UserService($http) {
	this.getUser = () => {
		return $http.get('http://0.0.0.0:8882/rest/user')
	}
	this.updateUser = (info) => {
		return $http.post('http://0.0.0.0:8882/rest/user', info)
	}
}

angular
	.module('app')
	.service('UserService', UserService);
