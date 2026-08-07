type GateProps = {
    type: "AND" | "OR" | "NOT" | "XOR" | "NAND";
};

export default function Gate({ type }: GateProps) {
  return (
    <div>
      {type} Gate
    </div>
  );
}