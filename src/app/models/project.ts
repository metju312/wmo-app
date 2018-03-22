import {Task} from "./task";
import {Role} from "./role";
import {Product} from "./product";

export class Project {
  id: String;
  name: String;
  description: String;
  size: String;
  tasks: Array<Task>;
  roles: Array<Role>;
  products: Array<Product>;

  constructor() {
  }
}
