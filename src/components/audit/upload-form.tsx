type Props = {
  onUpload: (text: string) => void;
};

export default function UploadForm({
  onUpload,
}: Props) {
  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const text = await file.text();

    onUpload(text);
  };

  return (
    <div className="mb-6">
      <input
        type="file"
        accept=".json"
        onChange={handleFileChange}
      />
    </div>
  );
}