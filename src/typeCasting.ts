
// THIS WILL BE A PROBLEM IN REACT !
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;

// So the "as" type casting alternative is better
const userInputElement = document.getElementById('user-input');

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi there!';
}