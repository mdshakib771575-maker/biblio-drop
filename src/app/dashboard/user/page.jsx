"use client"
import DashboardHeading from '@/components/DashboardHeading';
import { Button, Card, Chip, Table } from '@heroui/react';
import React from 'react';
import { CiDeliveryTruck } from 'react-icons/ci';
import { FaCalendarAlt, FaCrown, FaDollarSign, FaUsers } from 'react-icons/fa';
import { IoMdBook } from 'react-icons/io';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts";


const Paidata = [
    { name: "Pending", value: 7 },
    { name: "Dispatched", value: 10 },
    { name: "Delivered", value: 25 },
];
const COLORS = ["#ef4444", "#8b5cf6", "#10b981"];


const chartData = [
  { month: "Jan", books: 2 },
  { month: "Feb", books: 4 },
  { month: "Mar", books: 6 },
  { month: "Apr", books: 3 },
];
const UserDashboardHomePage = () => {
    const stats = {
        totalEvents: 15,
        totalAttendees: 450,
        totalRevenue: 25000,
        totalSoldTickets: 780,
    };

    const isPremium = true;

    return (
        <div>
            <div className="space-y-6 mt-2 mb-10">
                <DashboardHeading title="Overview" description="Dashboard User Overview"></DashboardHeading>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                    <Card className="glass border-white/5" radius="lg">
                        <div className="p-6 flex flex-row items-center justify-between">
                            <div className="space-y-1">
                                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider"> Total Books Read</span>
                                <h2 className="text-3xl font-extrabold">10</h2>
                            </div>
                            <div className="p-3.5 bg-pink-500/10 text-pink-400 rounded-2xl border border-pink-500/20"><IoMdBook size={24} /></div>
                        </div>
                    </Card>
                    <Card className="glass border-white/5" radius="lg">
                        <div className="p-6 flex flex-row items-center justify-between">
                            <div className="space-y-1">
                                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">  Pending Deliveries</span>
                                <h2 className="text-3xl font-extrabold text-white">{stats.totalAttendees}</h2>
                            </div>
                            <div className="p-3.5 bg-indigo-500/10 text-indigo-400 rounded-2xl border border-indigo-500/20"><CiDeliveryTruck size={24} /></div>
                        </div>
                    </Card>
                    <Card className="glass border-white/5" radius="lg">
                        <div className="p-6 flex flex-row items-center justify-between">
                            <div className="space-y-1">
                                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">  Total Fees Spent</span>
                                <h2 className="text-3xl font-extrabold text-white">{`$${stats.totalRevenue.toFixed(2)}`}</h2>
                            </div>
                            <div className="p-3.5 bg-green-500/10 text-green-400 rounded-2xl border border-green-500/20"><FaDollarSign size={24} /></div>
                        </div>
                    </Card>
                </div>

                {/* {!isPremium && (
                    <Card className="border border-yellow-500/20 bg-gradient-to-r from-yellow-500/5 via-amber-600/5 to-transparent relative overflow-hidden" radius="lg">
                        <div className="p-8 flex flex-col md:flex-row items-center justify-between gap-6 z-10">
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2"><FaCrown className="text-yellow-400" /> Unlock Unlimited Event Creation</h3>
                                <p className="text-slate-400 text-xs max-w-xl leading-relaxed">Standard organizer accounts are limited to <strong>3 events</strong>. Upgrade to our Premium Package for <strong>$49.00</strong> to host unlimited events.</p>
                            </div>
                            <Button className="bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold h-11 px-6 shadow-lg shadow-yellow-500/10 shrink-0" radius="lg">
                                Upgrade to Premium
                            </Button>
                        </div>
                    </Card>
                )} */}
            </div>

            {/* Rechart */}
            <div className=' mb-12'>
                <div className='mt-10 h-[300px] w-[80%]  rounded-xl  '>
                    <div className='text-2xl font-bold mb-5'>Book Reding Chirts</div>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={chartData}>
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="books" fill="#6d28d9" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

               
            </div>

            <div className='mt-10'>
                {/* <Table>
                    <Table.ResizableContainer>
                        <Table.Content aria-label="Table with resizable columns" className="min-w-[700px]">
                            <Table.Header>
                                <Table.Column isRowHeader defaultWidth="1fr" id="name" minWidth={160}>
                                    Name
                                    <Table.ColumnResizer />
                                </Table.Column>
                                <Table.Column defaultWidth="1fr" id="role" minWidth={220}>
                                    Role
                                    <Table.ColumnResizer />
                                </Table.Column>
                               
                                <Table.Column defaultWidth="1fr" id="email" minWidth={200}>
                                    Email
                                </Table.Column>
                                 <Table.Column defaultWidth="1fr" id="status" minWidth={100}>
                                    Status
                                    <Table.ColumnResizer />
                                </Table.Column>
                            </Table.Header>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>Kate Moore</Table.Cell>
                                    <Table.Cell>CEO</Table.Cell>
                                    <Table.Cell>kate@acme.com</Table.Cell>
                                    <Table.Cell>
                                        <Chip color="success" size="sm" variant="soft">
                                            Active
                                        </Chip>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>John Smith</Table.Cell>
                                    <Table.Cell>CTO</Table.Cell>
                                    <Table.Cell>john@acme.com</Table.Cell>
                                    <Table.Cell>
                                        <Chip color="success" size="sm" variant="soft">
                                            Active
                                        </Chip>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Sara Johnson</Table.Cell>
                                    <Table.Cell>CMO</Table.Cell>
                                    <Table.Cell>sara@acme.com</Table.Cell>
                                    <Table.Cell>
                                        <Chip color="warning" size="sm" variant="soft">
                                            On Leave
                                        </Chip>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Michael Brown</Table.Cell>
                                    <Table.Cell>CFO</Table.Cell>
                                    <Table.Cell>michael@acme.com</Table.Cell>
                                    <Table.Cell>
                                        <Chip color="success" size="sm" variant="soft">
                                            Active
                                        </Chip>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Emily Davis</Table.Cell>
                                    <Table.Cell>Product Manager</Table.Cell>
                                    <Table.Cell>emily@acme.com</Table.Cell>
                                    <Table.Cell>
                                        <Chip color="danger" size="sm" variant="soft">
                                            Inactive
                                        </Chip>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table.Content>
                    </Table.ResizableContainer>
                </Table> */}
            </div>

        </div >
    )
};

export default UserDashboardHomePage;