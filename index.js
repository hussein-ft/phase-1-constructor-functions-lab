function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
  }
  
  function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
  }
  
  function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
  }
  
  // Example usage:
  const myScooter = new Scooter(2022, "red", "Vespa");
  console.log(myScooter);
  
  const driver = new Driver("Alice", 30, "5 years");
  console.log(driver);
  
  const location = new PickupLocation("123 Main St", "New York");
  console.log(location);
  