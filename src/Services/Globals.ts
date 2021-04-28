// Global settings which are the same for development and production:
class Globals {}

// Global settings which are suitable only for development:
class DevelopmentGlobals extends Globals {
  public urls = {
    employees: "http://localhost:3030/api/employees/",
    employeeImages: "http://localhost:3030/api/employees/images/",
    contactUs:"http://localhost:3030/api/contact-us/",
    register:"http://localhost:3030/api/auth/register/",
    login:"http://localhost:3030/api/auth/login/"
  };
}

// Global settings which are suitable only for production:
class ProductionGlobals extends Globals {
  public urls = {
    employees: "http://localhost:3030/api/employees/",
    employeeImages: "http://localhost:3030/api/employees/images/",
    contactUs:"http://localhost:3030/api/contact-us/",
    register:"http://localhost:3030/api/auth/register/",
    login:"http://localhost:3030/api/auth/login/"
  };
}

// Creating the correct object
const globals =
  process.env.NODE_ENV === "development"
    ? new DevelopmentGlobals()
    : new ProductionGlobals();
export default globals;
