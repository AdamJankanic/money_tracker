import { NewRecord } from "./NewRecord";
import { Navigation } from "./Navigation";
import { Profile } from "./Profile";
import { Separator } from "@/components/ui/separator";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex justify-between ">
        <NewRecord />
        <Navigation />
        <Profile />
      </div>
      <Separator className="mt-4 bg-black" />
      <main>{children}</main>
    </>
  );
}
