"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { motion, spring } from "framer-motion";
import {
  LaptopIcon,
  PartyPopperIcon,
  TicketIcon,
  UserIcon,
} from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import MonthActivity from "./month-activity";

export default function Employees() {
  const totalEmployees = 100;
  const employeesPresents = 80;
  const percentageOfEmployees = (employeesPresents / totalEmployees) * 100;

  const MotionCard = motion(Card);
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        <MotionCard
          whileHover={{ scale: 1.05 }}
          transition={{ type: spring, stiffness: 300 }}
          className="transition-all"
        >
          <CardHeader>
            <CardTitle>تعداد کارمندان</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UserIcon />
              <div className="font-bold text-4xl">{totalEmployees}</div>
            </div>
            <div>
              <Button size="xs" asChild>
                <Link href="/"> مشاهده همه</Link>
              </Button>
            </div>
          </CardContent>
        </MotionCard>
        <MotionCard
          whileHover={{ scale: 1.05 }}
          transition={{ type: spring, stiffness: 300 }}
          className="transition-all"
        >
          <CardHeader>
            <CardTitle>کارمندان فعال</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UserIcon />
              <div className="font-bold text-4xl">{employeesPresents}</div>
            </div>
            <div>
              <Button size="xs" asChild>
                <Link href="/"> مشاهده همه</Link>
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <TicketIcon className="text-primary" />
            <p className="text-xs text-primary">{`${percentageOfEmployees} درصد کارمندان فعال هستند`}</p>
          </CardFooter>
        </MotionCard>
        <MotionCard
          whileHover={{ scale: 1.05 }}
          transition={{ type: spring, stiffness: 300 }}
          className="border border-primary transition-all"
        >
          <CardHeader>
            <CardTitle>کارمند برتر ماه</CardTitle>
          </CardHeader>
          <CardContent className="flex-col  items-center">
            <div className="flex gap-2 items-center">
              <Avatar>
                <AvatarFallback className="bg-secondary h-10 w-10"></AvatarFallback>
              </Avatar>
              <div className="font-bold text-xl">علی احمدی</div>
            </div>
          </CardContent>
          <CardFooter className="flex gap-2 items-center text-xs">
            <PartyPopperIcon size={20} className="text-primary" />
            <p className="text-primary">تبریک علی جان</p>
          </CardFooter>
        </MotionCard>
      </div>
      <Card className="my-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LaptopIcon />
            <span className="text-lg">آمار فعالیت ماهانه</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <MonthActivity />
        </CardContent>
      </Card>
    </>
  );
}
