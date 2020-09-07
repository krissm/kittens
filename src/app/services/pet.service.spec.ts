import { PetService } from './pet.service';
import { Person, PetsByOwnerGender } from '..';
import { of } from 'rxjs';

describe('PetService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: PetService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new PetService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return Persons', () => {
    const input: Person[] = [
      {"name":"Bob","gender":"Male","age":23,"pets":[{"name":"Garfield","type":"Cat"},{"name":"Fido","type":"Dog"}]},
      {"name":"Jennifer","gender":"Female","age":18,"pets":[{"name":"Garfield","type":"Cat"}]},{"name":"Steve","gender":"Male","age":45,"pets":null},
      {"name":"Fred","gender":"Male","age":40,"pets":[{"name":"Tom","type":"Cat"},{"name":"Max","type":"Cat"},{"name":"Sam","type":"Dog"},
      {"name":"Jim","type":"Cat"}]},{"name":"Samantha","gender":"Female","age":40,"pets":[{"name":"Tabby","type":"Cat"}]},
      {"name":"Alice","gender":"Female","age":64,"pets":[{"name":"Simba","type":"Cat"},{"name":"Nemo","type":"Fish"}]}
    ];
    const expected: PetsByOwnerGender[] = [
      { gender: 'Male', cats: [ { name: 'Garfield', type: 'Cat' }, { name: 'Jim', type: 'Cat' }, { name: 'Max', type: 'Cat' }, { name: 'Tom', type: 'Cat' } ] },
      { gender: 'Female', cats: [ { name: 'Garfield', type: 'Cat' }, { name: 'Simba', type: 'Cat' }, { name: 'Tabby', type: 'Cat' } ] }
    ];

    httpClientSpy.get.and.returnValue(of(input));

    service.getCatsAlphabeticallyByOwnersGender().subscribe(
      people => expect(people).toEqual(expected, 'expected people'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
