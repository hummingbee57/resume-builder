import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Personal_Details_Form() {
return (
    <Card className="w-full">
        <CardHeader>
            <CardTitle>Personal Details</CardTitle>
            <CardDescription>Enter your personal details</CardDescription>
        </CardHeader>
        <CardContent>
            <form>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Name" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="last name">Last Name</Label>
                        <Input id="last name" placeholder="Your Last Name" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="Your Email" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="number">Phone</Label>
                        <Input id="number" placeholder="Your Phone Number" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="website">Website</Label>
                        <Input id="website" placeholder="Website URL" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="linkedin">Linkedin</Label>
                        <Input id="linkedin" placeholder="Linkedin URL" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="github">Github</Label>
                        <Input id="github" placeholder="Github URL" />
                    </div>
                </div>
            </form>
        </CardContent>
        <CardFooter className="flex justify-center">
            <Button>Next</Button>
        </CardFooter>
    </Card>
)
}
