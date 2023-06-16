import Button from "@/components/Button";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Customer from "../core/Customer";
import Form from "@/components/Form";
import { useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState<"table" | "form">("table");
  const [customer, setCustomer] = useState<Customer>(Customer.empty());

  const customers = [
    new Customer("Ana", 34, "1"),
    new Customer("André", 24, "2"),
    new Customer("Felipe", 22, "3"),
    new Customer("Amanda", 25, "4"),
  ];

  const selectedCustomer = (customer: Customer) => {
    setCustomer(customer);
    setVisible("form");
  };

  const newCustomer = () => {
    setCustomer(Customer.empty());
    setVisible("form");
  };

  const deletedCustomer = (customer: Customer) => {
    console.log(customer.name, "Excluído");
  };

  const saveCustomer = (customer: Customer) => {
    console.log(customer);
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
