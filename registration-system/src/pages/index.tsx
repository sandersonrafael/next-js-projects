import Layout from "../components/Layout";
import Table from "../components/Table";
import Customer from "../core/Customer";

export default function Home() {
  const customers = [
    new Customer("Ana", 34, "1"),
    new Customer("André", 24, "2"),
    new Customer("Felipe", 22, "3"),
    new Customer("Amanda", 25, "4"),
  ];

  const selectedCustomer = (customer: Customer) => {
    console.log(customer.name, "Editado");
  };

  const deletedCustomer = (customer: Customer) => {
    console.log(customer.name, "Excluído");
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
        <Table
          customers={customers}
          selectedCustomer={selectedCustomer}
          deletedCustomer={deletedCustomer}
        ></Table>
      </Layout>
    </div>
  );
}
