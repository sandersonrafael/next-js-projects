interface ButtonProps {
  className?: string;
  color?: "green" | "blue" | "gray";
  children: any;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const color = props.color ?? "gray";

  return (
    <button
      onClick={props.onClick}
      className={`
        bg-gradient-to-r from-${color}-400 to-${color}-700
        text-white px-4 py-3 rounded-lg
        ${props.className}
      `}
    >
      {props.children}
    </button>
  );
}
