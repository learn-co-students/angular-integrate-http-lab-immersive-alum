describe('$http', function () {
	var UserService, $httpBackend;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		UserService = $injector.get('UserService');
		$httpBackend = $injector.get('$httpBackend');

		$httpBackend
			.when('GET', 'http://0.0.0.0:8882/rest/user')
			.respond({
				first_name: 'Bill',
				last_name: 'Gates',
				email: 'bill@microsoft.com'
			});

		$httpBackend
			.when('POST', 'http://0.0.0.0:8882/rest/user')
			.respond({
				status: 'success'
			});
	}));

	it('should make a GET request to /rest/user', function (done) {
		$httpBackend.expectGET('http://0.0.0.0:8882/rest/user');

		UserService
			.getUser()
			.then(function (res) {
				if (res.data.first_name === 'Bill') {
					done();
				}
			});

		$httpBackend.flush();
	});

	it('should make a POST request to /rest/user', function (done) {
		$httpBackend.expectPOST('http://0.0.0.0:8882/rest/user');

		UserService
			.updateUser()
			.then(function (res) {
				if (res.data.status === 'success') {
					done();
				}
			});

		$httpBackend.flush();
	});
});
