const person = {
  greeting(){
      return 'Hello';
  }
}

const friend = {
  greeting(){
      console.log(super);
      return super.greeting() + ' Friend'
  }
}

Object.setPrototypeOf(friend, person)

const relative = Object.create(friend);

relative.greeting();