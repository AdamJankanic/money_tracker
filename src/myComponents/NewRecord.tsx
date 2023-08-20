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
import { useDispatch } from "react-redux";
import { addRecord } from "../app/Slices/Records";

export function NewRecord() {
  const dispatch = useDispatch();

  const [dateValue, setDateValue] = React.useState<Date>();
  const [amountValue, setAmountValue] = React.useState<number>();
  const [categoryValue, setCategoryValue] = React.useState<string>();
  const [noteValue, setNoteValue] = React.useState<string>();

  function handleCategoryChange(category: string) {
    setCategoryValue(category);
    console.log(categoryValue);
  }

  function handleDateChange(date: Date) {
    console.log(dateValue);
    setDateValue(date);
  }

  function addNewRecord() {
    // if (!dateValue || !amountValue || !categoryValue || !noteValue) {
    //   alert("Please fill all fields");
    //   return;
    // }
    // console.log("nieco");
    // console.log(dateValue, amountValue, categoryValue, noteValue);

    dispatch(
      addRecord({
        id: "a2b3c4s5",
        amount: 10,
        date: "2023-08-03",
        category: "food",
        color: "#3f51b5",
        note: "Fast food time",
      })
    );
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
              required
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
            <ComboBox onCategoryChange={handleCategoryChange}></ComboBox>
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
          <Button type="submit" onClick={addNewRecord}>
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
