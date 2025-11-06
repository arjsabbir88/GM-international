import { AppWindowIcon, CodeIcon } from "lucide-react";

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Checkbox } from "@radix-ui/react-checkbox";

// export function NativeSelectDemo() {
//   return (
//     <NativeSelect>
//       <NativeSelectOption value="">Select status</NativeSelectOption>
//       <NativeSelectOption value="todo">Todo</NativeSelectOption>
//       <NativeSelectOption value="in-progress">In Progress</NativeSelectOption>
//       <NativeSelectOption value="done">Done</NativeSelectOption>
//       <NativeSelectOption value="cancelled">Cancelled</NativeSelectOption>
//     </NativeSelect>
//   )
// }

export function TabsSection() {
  return (
    <div className="flex w-7xl mx-auto flex-col gap-6 my-10 transition-all duration-500 ease-in-out transform hover:scale-102 hover:shadow-2xl hover:-translate-y-2 border-2 rounded-2xl">
      <Tabs defaultValue="Courses" className="pb-4">
        <TabsList className="w-full mb-8 bg-[#CA23281A]">
          <TabsTrigger value="Courses">Courses</TabsTrigger>
          <TabsTrigger value="Scholarships">Scholarships</TabsTrigger>
          <TabsTrigger value="Universities">Universities</TabsTrigger>
        </TabsList>

        {/* course tabs */}
        <TabsContent value="Courses" className="flex gap-6 justify-around px-4">
          {/* first option */}
          <NativeSelect>
            <NativeSelectOption value="">
              Enter Course Subject e.g. Law
            </NativeSelectOption>
            <NativeSelectOption value="todo">
              Health & Medicine
            </NativeSelectOption>
            <NativeSelectOption value="todo">Business</NativeSelectOption>
            <NativeSelectOption value="todo">Engineering</NativeSelectOption>
            <NativeSelectOption value="todo">
              Language & calture
            </NativeSelectOption>
            <NativeSelectOption value="todo">
              Cpmputing & IT{" "}
            </NativeSelectOption>
            <NativeSelectOption value="todo">
              Teaching & Education
            </NativeSelectOption>
            <NativeSelectOption value="todo">Economics</NativeSelectOption>
            <NativeSelectOption value="todo">Art & Design</NativeSelectOption>
          </NativeSelect>

          {/* second option */}
          <NativeSelect>
            <NativeSelectOption value="">Select Study Level</NativeSelectOption>
            <NativeSelectOption value="todo">
              Health & Medicine
            </NativeSelectOption>
            <NativeSelectOption value="todo">Business</NativeSelectOption>
            <NativeSelectOption value="todo">Engineering</NativeSelectOption>
            <NativeSelectOption value="todo">
              Language & calture
            </NativeSelectOption>
            <NativeSelectOption value="todo">
              Cpmputing & IT{" "}
            </NativeSelectOption>
            <NativeSelectOption value="todo">
              Teaching & Education
            </NativeSelectOption>
            <NativeSelectOption value="todo">Economics</NativeSelectOption>
            <NativeSelectOption value="todo">Art & Design</NativeSelectOption>
          </NativeSelect>

          {/*third option  */}
          <NativeSelect>
            <NativeSelectOption value="">
              Select Study Destination
            </NativeSelectOption>
            <NativeSelectOption value="todo">
              Health & Medicine
            </NativeSelectOption>
            <NativeSelectOption value="todo">Business</NativeSelectOption>
            <NativeSelectOption value="todo">Engineering</NativeSelectOption>
            <NativeSelectOption value="todo">
              Language & calture
            </NativeSelectOption>
            <NativeSelectOption value="todo">
              Cpmputing & IT{" "}
            </NativeSelectOption>
            <NativeSelectOption value="todo">
              Teaching & Education
            </NativeSelectOption>
            <NativeSelectOption value="todo">Economics</NativeSelectOption>
            <NativeSelectOption value="todo">Art & Design</NativeSelectOption>
          </NativeSelect>
        </TabsContent>

        {/* second tabs */}
        <TabsContent value="Scholarships" className="flex gap-6 justify-around px-4">
          {/* first option */}
          <NativeSelect>
            <NativeSelectOption value="">Select Study level</NativeSelectOption>
            <NativeSelectOption value="todo">
              Health & Medicine
            </NativeSelectOption>
            <NativeSelectOption value="todo">Business</NativeSelectOption>
            <NativeSelectOption value="todo">Engineering</NativeSelectOption>
            <NativeSelectOption value="todo">
              Language & calture
            </NativeSelectOption>
            <NativeSelectOption value="todo">
              Cpmputing & IT{" "}
            </NativeSelectOption>
            <NativeSelectOption value="todo">
              Teaching & Education
            </NativeSelectOption>
            <NativeSelectOption value="todo">Economics</NativeSelectOption>
            <NativeSelectOption value="todo">Art & Design</NativeSelectOption>
          </NativeSelect>

          {/* second option */}
          <NativeSelect>
            <NativeSelectOption value="">
              Select Study Destination
            </NativeSelectOption>
            <NativeSelectOption value="todo">
              Health & Medicine
            </NativeSelectOption>
            <NativeSelectOption value="todo">Business</NativeSelectOption>
            <NativeSelectOption value="todo">Engineering</NativeSelectOption>
            <NativeSelectOption value="todo">
              Language & calture
            </NativeSelectOption>
            <NativeSelectOption value="todo">
              Cpmputing & IT{" "}
            </NativeSelectOption>
            <NativeSelectOption value="todo">
              Teaching & Education
            </NativeSelectOption>
            <NativeSelectOption value="todo">Economics</NativeSelectOption>
            <NativeSelectOption value="todo">Art & Design</NativeSelectOption>
          </NativeSelect>
        </TabsContent>

        {/* third tabs */}
        <TabsContent value="Universities" className="flex gap-6 justify-around px-4">
          {/* first option */}
          <NativeSelect>
            <NativeSelectOption value="">
              Search By University name
            </NativeSelectOption>
            <NativeSelectOption value="todo">
              Health & Medicine
            </NativeSelectOption>
            <NativeSelectOption value="todo">Business</NativeSelectOption>
            <NativeSelectOption value="todo">Engineering</NativeSelectOption>
            <NativeSelectOption value="todo">
              Language & calture
            </NativeSelectOption>
            <NativeSelectOption value="todo">
              Cpmputing & IT{" "}
            </NativeSelectOption>
            <NativeSelectOption value="todo">
              Teaching & Education
            </NativeSelectOption>
            <NativeSelectOption value="todo">Economics</NativeSelectOption>
            <NativeSelectOption value="todo">Art & Design</NativeSelectOption>
          </NativeSelect>

          {/* second option */}
          <NativeSelect>
            <NativeSelectOption value="">
              Select Study Destination
            </NativeSelectOption>
            <NativeSelectOption value="todo">
              Health & Medicine
            </NativeSelectOption>
            <NativeSelectOption value="todo">Business</NativeSelectOption>
            <NativeSelectOption value="todo">Engineering</NativeSelectOption>
            <NativeSelectOption value="todo">
              Language & calture
            </NativeSelectOption>
            <NativeSelectOption value="todo">
              Cpmputing & IT{" "}
            </NativeSelectOption>
            <NativeSelectOption value="todo">
              Teaching & Education
            </NativeSelectOption>
            <NativeSelectOption value="todo">Economics</NativeSelectOption>
            <NativeSelectOption value="todo">Art & Design</NativeSelectOption>
          </NativeSelect>
        </TabsContent>
      <div className="w-full text-center">
        <button className="bg-red-500 text-white font-bold rounded-xl hover:cursor-pointer px-4 py-2 hover:bg-red-800">Search</button>
      </div>
      </Tabs>
    </div>
  );
}
