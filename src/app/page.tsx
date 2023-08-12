"use client";

import { PageLayout } from "@/myComponents/PageLayout";
import { Chart } from "react-google-charts";

export const data = [
  ["Category", "Spent", "Color"],
  ["Food", 120, "#3f51b5"],
  ["House", 400, "#f44336"],
  ["Cinema", 40, "#009688"],
  ["Games", 60, "#9c27b0"],
  ["Shopping", 100, "#8bc34a"],
];

const slices = {
  0: { color: "#f44336" },
  1: { color: "#9c27b0" },
  2: { color: "#3f51b5" },
  3: { color: "#03a9f4" },
  4: { color: "#009688" },
  5: { color: "#8bc34a" },
  6: { color: "#ffeb3b" },
  7: { color: "#ff9800" },
  8: { color: "#795548" },
  9: { color: "#607d8b" },
};

type Slice = {
  [key: number]: {
    color: string;
  };
};

export default function HomePage() {
  //make sum of values in data starting from index 1
  let totalSpent = 0;
  for (let i = 1; i < data.length; i++) {
    const spent = data[i][1];
    totalSpent += Number(spent);
  }

  const colorObject = {} as Slice;

  // Start the loop from index 1 to skip the header row
  for (let i = 1; i < data.length; i++) {
    const colorName = data[i][2]; // Get the color name from the third column

    colorObject[i - 1] = { color: String(colorName) }; // Assign the color to the object
  }

  return (
    <PageLayout>
      <div className="flex justify-center">
        <div className="flex flex-col gap-4 items-center w-3/4 m-12 p-4 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <h2 className="font-semibold text-4xl">My expenses </h2>
          <Chart
            chartType="PieChart"
            data={data}
            options={{
              is3D: true,
              backgroundColor: "transparent",
              legend: {
                position: "bottom",
              },
              slices: colorObject,
            }}
            width={"100%"}
            height={"400px"}
          />

          <p className="text-2xl font-bold text-center mb-4">
            Total spending:{" "}
            <span className="text-blue-600 inline">{totalSpent}€</span>
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
