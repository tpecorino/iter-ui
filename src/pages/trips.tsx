import type { NextPage } from "next";
import Navigation from "../components/Navigation";
import TripsTable from "../components/trips/TripsTable";

const Trips: NextPage = () => {
  return (
    <>
      <div className="min-h-full">
        <Navigation />
        <div className="py-10">
          <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl tracking-tight font-bold leading-tight text-gray-900">
                Dashboard
              </h1>
            </div>
          </header>
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <TripsTable />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Trips;
