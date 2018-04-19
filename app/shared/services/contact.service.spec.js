describe('Contact Service', function() {
  var ContactService, $httpBackend;

  // Load our contactService module
  beforeEach(angular.mock.module('myApplication'));

  // Set our injected Contact Service (_Contact_) to our local Contact variable
  beforeEach(
    inject(function(_contactService_, _$injector_) {
      ContactService = _contactService_;
      $httpBackend = _$injector_.get('$httpBackend');

      contactListHandler = $httpBackend.when('GET', 'http://localhost:3000/contacts').respond({
        contacts: [
          {
            id: 1,
            fullName: 'Alessandro Magno',
            yearOfBirth: '1980',
          },
        ],
      });
    })
	);


  // A simple test to verify the Users service exists
  it('Contact service should exist', function() {
    expect(ContactService).toBeDefined();
  });

  it('Check if list of contact is empty', function() {
    expect(ContactService.contactList).toEqual(undefined);
	});
	
});
