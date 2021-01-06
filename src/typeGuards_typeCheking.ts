
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Type Guards
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// if typeof
// if 'someParamOrMethod' in MyObject
// if instance of  --->  this does not work with interfaces!!!

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
}

printEmployeeInformation({ name: 'Manu', startDate: new Date() });

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  /////////////////////////////////////////////////////////////////////
  // instanceof is vanilla JS, does not work with interfaces :(
  /////////////////////////////////////////////////////////////////////

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);
