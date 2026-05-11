type Props = {
  severity: "low" | "medium" | "high";
};

export default function SeverityBadge({
  severity,
}: Props) {
  const colors = {
    low: "bg-gray-200 text-black",
    medium: "bg-yellow-200 text-black",
    high: "bg-red-500 text-white",
  };

  return (
    <span
      className={`px-2 py-1 rounded text-sm ${colors[severity]}`}
    >
      {severity}
    </span>
  );
}