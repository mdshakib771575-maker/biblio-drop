"use client"
import DashboardHeading from '@/components/DashboardHeading';
import { Card } from '@heroui/react';
import React from 'react';
import { FaCalendarAlt, FaDollarSign, FaUsers } from 'react-icons/fa';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const AdminDashboardPage = () => {
     const stats = {
        totalEvents: 15,
        totalAttendees: 450,
        totalRevenue: 25000,
        totalSoldTickets: 780,
    };
    const data = [
    { name: "Fiction", value: 35 },
    { name: "Academic", value: 25 },
    { name: "Sci-Fi", value: 18 },
    { name: "History", value: 12 },
    { name: "Novel", value: 10 },
  ];
  const COLORS = [
  "#3B82F6", // Blue
  "#10B981", // Emerald
  "#F59E0B", // Amber
  "#EF4444", // Red
  "#8B5CF6", // Violet
];

    return (
        <>
      
            <div className="space-y-6 mt-2 ">
                <DashboardHeading title="Overview" description="Dashboard Overview"></DashboardHeading>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 ">
                    <Card className="glass border-white/5" radius="lg">
                        <div className="p-6 flex flex-row items-center justify-between">
                            <div className="space-y-1">
                                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider"> Total Books</span>
                                <h2 className="text-3xl font-extrabold">10</h2>
                            </div>
                            <div className="p-3.5 bg-pink-500/10 text-pink-400 rounded-2xl border border-pink-500/20"><FaCalendarAlt size={24} /></div>
                        </div>
                    </Card>

                    <Card className="glass border-white/5" radius="lg">
                        <div className="p-6 flex flex-row  items-center justify-between">
                            <div className="space-y-1">
                                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Users</span>
                                <h2 className="text-3xl font-extrabold text-white">{stats.totalAttendees}</h2>
                            </div>
                            <div className="p-3.5 bg-indigo-500/10 text-indigo-400 rounded-2xl border border-indigo-500/20"><FaUsers size={24} /></div>
                        </div>
                    </Card>

                    <Card className="glass border-white/5" radius="lg">
                        <div className="p-6 flex flex-row gap-3 items-center justify-between">
                            <div className="space-y-1">
                                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Deliveries</span>
                                <h2 className="text-3xl font-extrabold text-white">{stats.totalAttendees}</h2>
                            </div>
                            <div className="p-3.5 bg-indigo-500/10 text-indigo-400 rounded-2xl border border-indigo-500/20"><FaUsers size={24} /></div>
                        </div>
                    </Card>

                      <Card className="glass border-white/5" radius="lg">
                        <div className="p-6 flex flex-row gap-5 items-center justify-between">
                            <div className="space-y-1">
                                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Revenew</span>
                                <h2 className="text-3xl font-extrabold text-white">{stats.totalAttendees}</h2>
                            </div>
                            <div className="p-3.5 bg-green-500/10 text-green-400 rounded-2xl border border-green-500/20"><FaDollarSign size={24} /></div>
                        </div>
                    </Card>
                </div>
         
        </div>
           <div className="h-[350px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={110}
            innerRadius={60}
            dataKey="value"
            nameKey="name"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
        </>
    );
};

export default AdminDashboardPage;