import Customer from "../core/Customer";
import * as Icon from "./Icons";

interface TableProps {
  customers: Customer[];
  selectedCustomer?: (customer: Customer) => void;
  deletedCustomer?: (customer: Customer) => void;
}

export default function Table(props: TableProps) {
  const showActions = props.deletedCustomer && props.selectedCustomer;

  const renderTHead = () => (
    <tr>
      <th className="text-left px-4 py-3">Código</th>
      <th className="text-left px-4 py-3">Nome</th>
      <th className="text-left px-4 py-3">Idade</th>
      {showActions ? <th className="px-4 py-3">Ações</th> : false}
    </tr>
  );

  const renderActions = (customer: Customer) => (
    <td className="flex justify-center">
      {props.selectedCustomer ? (
        <button
          onClick={() => props.selectedCustomer?.(customer)}
          className="
            flex justify-center items-center
            text-green-600 rounded-full p-2 m1
            hover:bg-purple-50
          "
        >
          {Icon.Edit}
        </button>
      ) : (
        false
      )}
      {props.deletedCustomer ? (
        <button
          onClick={() => props.deletedCustomer?.(customer)}
          className="
            flex justify-center items-center
            text-red-500 rounded-full p-2 m1
            hover:bg-purple-50
          "
        >
          {Icon.Delete}
        </button>
      ) : (
        false
      )}
    </td>
  );

  const renderData = () =>
    props.customers?.map((customer, i) => (
      <tr
        key={customer.id}
        className={i % 2 !== 0 ? "bg-blue-300" : "bg-blue-200"}
      >
        <td className="text-left px-4 py-2">{customer.id}</td>
        <td className="text-left px-4 py-2">{customer.name}</td>
        <td className="text-left px-4 py-2">{customer.age}</td>
        {showActions ? renderActions(customer) : false}
      </tr>
    ));

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className="
          bg-gradient-to-r
          text-gray-100
      "
      >
        {renderTHead()}
      </thead>
      <tbody>{renderData()}</tbody>
    </table>
  );
}
