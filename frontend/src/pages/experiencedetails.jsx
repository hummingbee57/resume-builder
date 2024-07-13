import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Educational_Details_Form() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Educational Details</CardTitle>
        <CardDescription>Enter your educational details</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">10th</Label>
              <Input id="name" placeholder="Name" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button>Next</Button>
      </CardFooter>
    </Card>
  );
}
