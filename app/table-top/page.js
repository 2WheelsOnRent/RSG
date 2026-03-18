import TableTopGrid from "../components/TableTopGrid";

export const metadata = {
  title: "Table Top Stone Finishes | Prem Marbles",
  description: "Choose your natural stone table top. Spider Green, Cherry Gold, Marine Black Fantasy, Red Flamingo and more.",
};

export default function TableTopPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <TableTopGrid />
    </div>
  );
}
