import PageDashboard from "./dashboard/page";
import OfficeCard from "./office-card";

export default function Home() {
  return (
    <>

      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 gap-8">
        {/* <PageDashboard /> */}
        <h1 className="text-4xl font-bold text-blue-600">Deskly!</h1>

        <OfficeCard />
      </main>
    </>
  );
}
