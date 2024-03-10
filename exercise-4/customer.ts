export class Customer {
  private firstName: string;
  private lastName: string;
  private age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  public greeter() {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
  }

  // Method to get the age
  public GetAge() {
    console.log(`Age of ${this.firstName} ${this.lastName} is ${this.age}`);
    return this.age;
  }
}
