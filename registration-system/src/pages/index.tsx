import Button from "@/components/Button";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Customer from "../core/Customer";
import Form from "@/components/Form";
import { useEffect, useState } from "react";
import CustomerRepository from "@/core/CustomerRepository";
import CustomerCollection from "@/firebase/db/CustomerCollection";

export default function Home() {
  const repo: CustomerRepository = new CustomerCollection();

  const [visible, setVisible] = useState<"table" | "form">("table");
  const [customer, setCustomer] = useState<Customer>(Customer.empty());
  const [customers, setCustomers] = useState<Customer[]>([]);

  const getAll = () => {
    repo.getAll().then((customers) => {
      setCustomers(customers);
      setVisible("table");
    });
  };

  // eslint-disable-next-line
  useEffect(getAll, []);

  const selectedCustomer = (customer: Customer) => {
    setCustomer(customer);
    setVisible("form");
  };

  const newCustomer = () => {
    setCustomer(Customer.empty());
    setVisible("form");
  };

  const saveCustomer = async (customer: Customer) => {
    await repo.save(customer);
    getAll();
  };

  const deletedCustomer = async (customer: Customer) => {
    await repo.exclude(customer);
    getAll();
  };

  return (
    <div
      className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
    `}
    >
      <Layout titulo="Cadastro de Usuários">
        {visible === "table" ? (
          <>
            <div className="flex justify-end">
              <Button className="mb-4" color="green" onClick={newCustomer}>
                Novo Cliente
              </Button>
            </div>
            <Table
              customers={customers}
              selectedCustomer={selectedCustomer}
              deletedCustomer={deletedCustomer}
            ></Table>
          </>
        ) : (
          <Form
            edit={saveCustomer}
            customer={customer}
            cancel={() => setVisible("table")}
          ></Form>
        )}
      </Layout>
    </div>
  );
}
