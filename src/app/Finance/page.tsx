import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

import { PageLayout } from "@/myComponents/PageLayout";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 30,
      date: "2021-09-01",
      category: "food",
      color: "#3f51b5",
      note: "Dinner at Basilico",
    },

    {
      id: "14fae579",
      amount: 20,
      date: "2021-09-02",
      category: "cinema",
      color: "#795432",
      note: "Movie night with friends",
    },

    {
      id: "a1b2c3d4",
      amount: 50,
      date: "2021-09-03",
      category: "games",
      color: "#f44336",
      note: "Bought a new game",
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <PageLayout>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </PageLayout>
  );
}
