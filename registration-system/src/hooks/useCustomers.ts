import Customer from "@/core/Customer";
import CustomerRepository from "@/core/CustomerRepository";
import CustomerCollection from "@/firebase/db/CustomerCollection";
import { useEffect, useState } from "react";
import useFormOrTable from "./useFormOrTable";

export default function useCustomers() {
  const repo: CustomerRepository = new CustomerCollection();

  const { formVisible, tableVisible, showTable, showForm } = useFormOrTable();

  const [customer, setCustomer] = useState<Customer>(Customer.empty());
  const [customers, setCustomers] = useState<Customer[]>([]);

  const getAll = () => {
    repo.getAll().then((customers) => {
      setCustomers(customers);
      showTable();
    });
  };

  // eslint-disable-next-line
  useEffect(getAll, []);

  const selectCustomer = (customer: Customer) => {
    setCustomer(customer);
    showForm();
  };

  const newCustomer = () => {
    setCustomer(Customer.empty());
    showForm();
  };

  const saveCustomer = async (customer: Customer) => {
    await repo.save(customer);
    getAll();
  };

  const deleteCustomer = async (customer: Customer) => {
    await repo.exclude(customer);
    getAll();
  };

  return {
    customer,
    customers,
    newCustomer,
    saveCustomer,
    deleteCustomer,
    selectCustomer,
    showTable,
    tableVisible,
    showForm,
    formVisible,
  };
}
