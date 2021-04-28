class EmployeeModel {
  public id: number;
  public firstName: string;
  public lastName: string;
  public title: string;
  public city: string;
  public country: string;
  public birthDate: Date;
  public imageName: string;
  public image: FileList; // purpose: for adding an employee 
}

export default EmployeeModel;
