function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane Doe", "John Smith"];

user.forEach(name => {
  console.log(greeter(name));
});