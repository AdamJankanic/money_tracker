import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Profile() {
  return (
    <div className="flex items-center gap-8 ">
      <p className="font-semibold text-lg">Jack</p>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
