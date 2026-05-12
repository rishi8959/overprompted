type Props = {
  audits: any[];
};

export default function History({
  audits,
}: Props) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">
        Previous Audits
      </h2>

      {audits.map((audit) => (
        <div
          key={audit.id}
          className="border p-4 rounded mb-2"
        >
          <p>{audit.upload_name}</p>

          <p>
            Savings: $
            {audit.total_savings}
          </p>
        </div>
      ))}
    </div>
  );
}