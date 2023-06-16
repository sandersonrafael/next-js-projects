import Customer from "./Customer";

export default interface CustomerRepository {
  save(customer: Customer): Promise<Customer | undefined>;
  exclude(customer: Customer): Promise<void>;
  getAll(customer: Customer | void): Promise<Customer[]>;
}
