"use client";

import {
  Bell,
  ChevronDown,
  Menu,
  MessageSquare,
  Search,
  Settings,
  Users,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "@/assets/logo.png";
import profile from "@/assets/profile.png";

import AnnouncementItem from "@/components/common/AnnouncementItem";
import ScheduleItem from "@/components/common/ScheduleItem";
import MetricCard from "@/components/common/MetricCard";
import StatCard from "@/components/common/StatCard";

// Sample data for charts
const employeeData = [
  { month: "Jan", employees: 200 },
  { month: "Feb", employees: 205 },
  { month: "Mar", employees: 210 },
  { month: "Apr", employees: 215 },
  { month: "May", employees: 220 },
  { month: "Jun", employees: 216 },
];

const talentRequestData = [
  { month: "Jan", requests: 10 },
  { month: "Feb", requests: 12 },
  { month: "Mar", requests: 15 },
  { month: "Apr", requests: 14 },
  { month: "May", requests: 16 },
  { month: "Jun", requests: 16 },
];

// Main dashboard component
const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleMenuItemClick = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b z-50 flex items-center px-4 gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
        <div className="flex-1 flex items-center">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Search"
          />
        </div>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <MessageSquare className="h-5 w-5" />
        </Button>
        <Image
          src={profile}
          alt="Profile"
          width={32}
          height={32}
          className="rounded-full"
        />
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 bg-white w-64 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-200 ease-in-out lg:translate-x-0 border-r z-50`}
      >
        <div className="p-6">
          <Link onClick={handleMenuItemClick} href="/">
            <Image
              src={logo}
              alt="Vasitum Logo"
              width={120}
              height={40}
              className="mb-8"
            />
          </Link>
          <nav className="space-y-6">
            <div>
              <h3 className="text-xs uppercase text-gray-500 font-semibold mb-3">
                Main Menu
              </h3>
              <div className="space-y-1">
                <Link
                  onClick={handleMenuItemClick}
                  href="#"
                  className="flex items-center space-x-3 text-blue-600 bg-blue-50 rounded-lg px-3 py-2"
                >
                  <Users className="h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
                {["Recruitment", "Schedule", "Employee", "Department"].map(
                  (item) => (
                    <Link
                      onClick={handleMenuItemClick}
                      key={item}
                      href="#"
                      className="flex items-center space-x-3 text-gray-600 hover:bg-gray-100 rounded-lg px-3 py-2"
                    >
                      <Users className="h-5 w-5" />
                      <span>{item}</span>
                    </Link>
                  )
                )}
              </div>
            </div>
            <div>
              <h3 className="text-xs uppercase text-gray-500 font-semibold mb-3">
                Other
              </h3>
              <div className="space-y-1">
                <Link
                  onClick={handleMenuItemClick}
                  href="#"
                  className="flex items-center space-x-3 text-gray-600 hover:bg-gray-100 rounded-lg px-3 py-2"
                >
                  <HelpCircle className="h-5 w-5" />
                  <span>Support</span>
                </Link>
                <Link
                  onClick={handleMenuItemClick}
                  href="#"
                  className="flex items-center space-x-3 text-gray-600 hover:bg-gray-100 rounded-lg px-3 py-2"
                >
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`lg:pl-64 pt-16 lg:pt-0`}>
        {/* Desktop Header */}
        <header className="hidden lg:flex h-16 items-center justify-between px-6 border-b bg-white">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input className="pl-10 w-[300px]" placeholder="Search" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg"
                alt="Profile"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="font-medium">Admirra John</span>
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </header>

        <main className="p-6">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

          {/* Stats Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
            <StatCard
              title="Available Position"
              count={24}
              subtitle="4 Urgently needed"
              className="bg-orange-50"
            />
            <StatCard
              title="Job Open"
              count={10}
              subtitle="4 Active hiring"
              className="bg-blue-50"
            />
            <StatCard
              title="New Employees"
              count={24}
              subtitle="4 Department"
              className="bg-purple-50"
            />
          </div>

          {/* Metrics */}
          <div className="grid gap-4 md:grid-cols-2 mb-6">
            <MetricCard
              title="Total Employees"
              value={216}
              subtext={{ men: 120, women: 96 }}
              trend="+2% Past month"
              data={employeeData}
              dataKey="employees"
            />
            <MetricCard
              title="Talent Request"
              value={16}
              subtext={{ men: 6, women: 10 }}
              trend="+5% Past month"
              data={talentRequestData}
              dataKey="requests"
            />
          </div>

          {/* Announcements */}
          <Card className="mb-6">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-semibold">Announcement</h2>
              <Button variant="ghost" size="sm">
                Today, 13 Sep 2021
              </Button>
            </div>
            <AnnouncementItem
              title="Outing schedule for every departement"
              time="5 Minutes ago"
            />
            <AnnouncementItem
              title="Meeting HR Department"
              time="Yesterday, 12:30 PM"
            />
            <AnnouncementItem
              title="IT Department need two more talents for UX/UI Designer position"
              time="Yesterday, 09:15 AM"
            />
            <div className="p-4 text-center">
              <Button variant="link" className="text-red-500">
                See All Announcement
              </Button>
            </div>
          </Card>

          {/* Recent Activity */}
          <Card className="mb-6 bg-[#1B204A] text-white">
            <div className="p-4">
              <h2 className="text-lg font-semibold">Recently Activity</h2>
              <p className="text-sm mt-1">10:40 AM, Fri 10 Sept 2021</p>
              <h3 className="text-lg font-semibold mt-4">
                You Posted a New Job
              </h3>
              <p className="text-sm mt-2">
                Kindly check the requirements and terms of work and make sure
                everything is right.
              </p>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-sm">Today you makes 12 Activity</p>
                <Button variant="secondary" size="sm">
                  See All Activity
                </Button>
              </div>
            </div>
          </Card>

          {/* Upcoming Schedule */}
          <Card>
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-semibold">Upcoming Schedule</h2>
              <Button variant="ghost" size="sm">
                Today, 13 Sep 2021
              </Button>
            </div>
            <ScheduleItem
              category="Priority"
              title="Review candidate applications"
              time="Today - 11:30 AM"
            />
            <ScheduleItem
              category="Other"
              title="Interview with candidates"
              time="Today - 10:30 AM"
            />
            <ScheduleItem
              category="Other"
              title="Short meeting with product designer from IT Departement"
              time="Today - 09:15 AM"
            />
            <div className="p-4 text-center">
              <Button variant="link" className="text-red-500">
                Create a New Schedule
              </Button>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
