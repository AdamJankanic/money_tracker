"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ComboBox } from "./ComboBox";
import { DatePicker } from "./DatePicker";

import * as React from "react";
import { da } from "date-fns/locale";
export function NewRecord() {
  const [dateValue, setDateValue] = React.useState<Date>();
  const [amountValue, setAmountValue] = React.useState<number>();
  const [noteValue, setNoteValue] = React.useState<string>();

  function handleDateChange(date: Date) {
    console.log(dateValue);
    setDateValue(date);
  }

  function nieco() {
    console.log("nieco");
    console.log(dateValue, amountValue, noteValue);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          className="bg-white text-black border border-black border-2 py-2 px-4 transition-colors duration-300 hover:text-white hover:bg-black font-semibold"
        >
          New Record +
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Record</DialogTitle>
          <DialogDescription>
            Add a new record of your spendings. Choose a category a press add
            button to confirm.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Date
            </Label>
            <DatePicker onDateChange={handleDateChange}></DatePicker>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amount" className="text-right">
              Amount
            </Label>
            <Input
              id="amount"
              placeholder="80"
              type="number"
              className="col-span-3"
              onChange={(e) => {
                setAmountValue(parseInt(e.target.value));
              }}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">
              Category
            </Label>
            <ComboBox></ComboBox>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="note" className="text-right">
              Note
            </Label>
            <Input
              id="note"
              placeholder="Note about spending"
              className="col-span-3"
              onChange={(e) => {
                setNoteValue(e.target.value);
              }}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={nieco}>
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
