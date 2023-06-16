import Button from "@/components/Button";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Form from "@/components/Form";
import useCustomers from "@/hooks/useCustomers";

export default function Home() {
  const {
    customer,
    customers,
    showTable,
    newCustomer,
    saveCustomer,
    tableVisible,
    selectCustomer,
    deleteCustomer,
  } = useCustomers();

  return (
    <div
      className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
    `}
    >
      <Layout titulo="Cadastro de Usuários">
        {tableVisible ? (
          <>
            <div className="flex justify-end">
              <Button className="mb-4" color="green" onClick={newCustomer}>
                Novo Cliente
              </Button>
            </div>
            <Table
              customers={customers}
              selectedCustomer={selectCustomer}
              deletedCustomer={deleteCustomer}
            ></Table>
          </>
        ) : (
          <Form
            edit={saveCustomer}
            customer={customer}
            cancel={showTable}
          ></Form>
        )}
      </Layout>
    </div>
  );
}
