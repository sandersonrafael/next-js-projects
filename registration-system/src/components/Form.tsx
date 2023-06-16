import { useState } from "react";
import Input from "./Input";
import Customer from "@/core/Customer";
import Button from "./Button";

interface FormProps {
  customer: Customer;
  cancel?: () => void;
  edit?: (customer: Customer) => void;
}

export default function Form(props: FormProps) {
  const id = props.customer?.id;
  const [name, setName] = useState(props.customer?.name ?? "");
  const [age, setAge] = useState(props.customer?.age ?? 0);

  return (
    <div>
      {id ? (
        <Input text="Código" value={id} readOnly className="mb-4" />
      ) : (
        false
      )}
      <Input text="Nome" value={name} changedValue={setName} className="mb-4" />
      <Input text="Idade" value={age} changedValue={setAge} type="number" />
      <div className="flex justify-end mt-7 mb-1">
        <Button
          color="blue"
          className="mr-2"
          onClick={() => props.edit?.(new Customer(name, +age, id))}
        >
          {id ? "Alterar" : "Salvar"}
        </Button>
        <Button onClick={props.cancel}>Cancelar</Button>
      </div>
    </div>
  );
}
