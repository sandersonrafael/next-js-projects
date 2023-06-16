import { useState } from "react";

export default function useFormOrTable() {
  const [visible, setVisible] = useState<"table" | "form">("table");

  const showTable = () => setVisible("table");
  const showForm = () => setVisible("form");

  return {
    formVisible: visible === "form",
    tableVisible: visible === "table",
    showTable,
    showForm,
  };
}
