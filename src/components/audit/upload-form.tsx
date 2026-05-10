type Props = {
  onFileRead: (text: string) => void;
};

export default function UploadForm({ onFileRead }: Props) {
  const handleFile = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const text = await file.text();

    onFileRead(text);
  };

  return (
    <input
      type="file"
      accept=".json"
      onChange={handleFile}
    />
  );
}