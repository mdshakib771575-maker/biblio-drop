import DashboardHeading from '@/components/DashboardHeading';
import { Card } from '@heroui/react';
import React from 'react';
import { FaCalendarAlt, FaDollarSign, FaUsers } from 'react-icons/fa';

const AdminDashboardPage = () => {
     const stats = {
        totalEvents: 15,
        totalAttendees: 450,
        totalRevenue: 25000,
        totalSoldTickets: 780,
    };
    return (
      
            <div className="space-y-6 mt-2 mb-10">
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
                        <div className="p-6 flex flex-row items-center justify-between">
                            <div className="space-y-1">
                                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Users</span>
                                <h2 className="text-3xl font-extrabold text-white">{stats.totalAttendees}</h2>
                            </div>
                            <div className="p-3.5 bg-indigo-500/10 text-indigo-400 rounded-2xl border border-indigo-500/20"><FaUsers size={24} /></div>
                        </div>
                    </Card>

                    <Card className="glass border-white/5" radius="lg">
                        <div className="p-6 flex flex-row items-center justify-between">
                            <div className="space-y-1">
                                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Deliveries</span>
                                <h2 className="text-3xl font-extrabold text-white">{stats.totalAttendees}</h2>
                            </div>
                            <div className="p-3.5 bg-indigo-500/10 text-indigo-400 rounded-2xl border border-indigo-500/20"><FaUsers size={24} /></div>
                        </div>
                    </Card>

                      <Card className="glass border-white/5" radius="lg">
                        <div className="p-6 flex flex-row items-center justify-between">
                            <div className="space-y-1">
                                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Revenew</span>
                                <h2 className="text-3xl font-extrabold text-white">{stats.totalAttendees}</h2>
                            </div>
                            <div className="p-3.5 bg-green-500/10 text-green-400 rounded-2xl border border-green-500/20"><FaDollarSign size={24} /></div>
                        </div>
                    </Card>




                    {/* <Card className="glass border-white/5" radius="lg">
                        <div className="p-6 flex flex-row items-center justify-between">
                            <div className="space-y-1">
                                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Revenue</span>
                                <h2 className="text-3xl font-extrabold text-white">{`$${stats.totalRevenue.toFixed(2)}`}</h2>
                            </div>
                            <div className="p-3.5 bg-green-500/10 text-green-400 rounded-2xl border border-green-500/20"><FaDollarSign size={24} /></div>
                        </div>
                    </Card> */}

                    {/* <Card className="glass border-white/5" radius="lg">
                        <div className="p-6 flex flex-row items-center justify-between">
                            <div className="space-y-1">
                                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Deliveries</span>
                                <h2 className="text-3xl font-extrabold text-white">{`$${stats.totalRevenue.toFixed(2)}`}</h2>
                            </div>
                            <div className="p-3.5 bg-green-500/10 text-green-400 rounded-2xl border border-green-500/20"><FaDollarSign size={24} /></div>
                        </div>
                    </Card> */}
                </div>

         
        </div>
    );
};

export default AdminDashboardPage;