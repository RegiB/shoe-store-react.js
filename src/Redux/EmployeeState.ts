import EmployeeModel from "../Models/EmployeeModel";

export class EmployeeAppState {
  public employees: EmployeeModel[] = [];
}

// --------------------------------------------

export enum EmployeeActionType {
  EmployeeDownloaded = "EmployeeDownloaded",
  EmployeeAdded = "EmployeeAdded",
  EmployeeUpdated = "EmployeeUpdated",
  EmployeeDeleted = "EmployeeDeleted",
}

// --------------------------------------------

export interface EmployeeAction {
  type: EmployeeActionType;
  payload: any;
}

// --------------------------------------------

export function employeeDownloadedAction(
  employees: EmployeeModel[]
): EmployeeAction {
  return { type: EmployeeActionType.EmployeeDownloaded, payload: employees };
}
export function employeeAddedAction(employee: EmployeeModel): EmployeeAction {
  return { type: EmployeeActionType.EmployeeAdded, payload: employee };
}
export function employeeUpdatedAction(employee: EmployeeModel): EmployeeAction {
  return { type: EmployeeActionType.EmployeeUpdated, payload: employee };
}
export function employeeDeletedAction(id: number): EmployeeAction {
  return { type: EmployeeActionType.EmployeeDeleted, payload: id };
}

// --------------------------------------------

export function employeesReducer(
  currState: EmployeeAppState = new EmployeeAppState(),
  action: EmployeeAction
): EmployeeAppState {
  const newState = { ...currState };

  switch (action.type) {
    case EmployeeActionType.EmployeeDownloaded:
      newState.employees = action.payload;
      break;
    case EmployeeActionType.EmployeeAdded:
      newState.employees.push(action.payload);
      break;
    case EmployeeActionType.EmployeeUpdated:
      newState.employees = newState.employees.map((emp) =>
        emp.id === action.payload.id
          ? {
              ...emp,
              firstName: action.payload.firstName,
              lastName: action.payload.lastName,
              title: action.payload.title,
              city: action.payload.city,
              country: action.payload.country,
              birthDate: action.payload.birthDate,
              image: action.payload.image,
            }
          : emp
      );
      break;
    case EmployeeActionType.EmployeeDeleted:
      newState.employees = newState.employees.filter(
        (emp) => emp.id !== action.payload
      );
      break;
    default:
      break;
  }
  return newState;
}
