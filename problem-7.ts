{
  class Car {
    constructor(
      public name: string,
      public model: string,
      public year: number
    ) {}
    getCarAge(): string {
      let currentDate = new Date().getFullYear();
      return `${
        currentDate - this.year
      } (assuming current year is ${currentDate})`;
    }
  }
  const car = new Car("Honda", "Civic", 2018);
  //   console.log(car.getCarAge());
}
