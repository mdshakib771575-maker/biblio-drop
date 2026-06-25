"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaBuilding,
  FaCalendarAlt,
  FaHistory,
  FaHome,
  FaPlus,
  FaSignOutAlt,
  FaTicketAlt,
  FaUserCircle,
  FaUsers,
  FaUserShield,
  FaBook,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import Logo from "../Logo";
import DashboardHeading from "../DashboardHeading";
import { MdElectricCar, MdRateReview } from "react-icons/md";

const DashboardSidebar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const { data: session, isPending } = authClient.useSession();

  if (isPending) return <div>Loading...</div>;

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  const userImage = session?.user?.image;
  const userName =
    session?.user?.name && session.user.name !== ""
      ? session.user.name
      : "Guest";

  const role = session?.user?.role;

  const LibrarianMenu = [
    {
      key: "overview",
      label: "Overview",
      icon: FaUsers,
      href: "/dashboard/librarian",
    },
    {
      key: "addbook",
      label: "Add Book",
           icon: FaPlus,
      
      href: "/dashboard/librarian/add-book",
    },
    {
      key: "manageinventory",
      label: "Manage Inventory",
      icon: FaUsers,
      href: "/dashboard/librarian/manage-inventory",
    },
   
    {
      key: "managedeliveries",
      label: "Manage Deliveries",
          icon: FaBuilding,
  
      href: "/dashboard/librarian/manage-deliveries",
    },
  ];

  const UserMenu = [
    {
      key: "overview",
      label: "Overview",
      icon: FaUserCircle,
      href: "/dashboard/user",
    },
    {
      key: "deliveryhistory",
      label: "Delivery History",
      icon: MdElectricCar,
      href: "/dashboard/user/delivery-history",
    },
    {
      key: " myreadinglist",
      label: "My Reading List",
      icon:FaBook ,
      href: "/dashboard/user/my-redinglist",
    },
    {
      key: " myreviews",
      label: " My Reviews",
      icon: MdRateReview ,
      href: "/dashboard/user/my-reviews",
    },
  ];

  const adminMenu = [
    {
      key: "Overview",
      label: "Overview",
      icon: FaUserShield,
      href: "/dashboard/users",
    },
    {
      key: "aookapprovalqueue",
      label: "Book Approval Queue",
      icon: FaCalendarAlt,
      href: "/dashboard/events",
    },
    {
      key: "manageusers",
      label: "Manage Users ",
      icon: FaHistory,
      href: "/dashboard/transactions",
    },
    {
      key: "manageallbooks",
      label: "Manage All Books ",
      icon: FaHistory,
      href: "/dashboard/transactions",
    },
    {
      key: "viewalltransactions",
      label: "View All Transactions ",
      icon: FaHistory,
      href: "/dashboard/transactions",
    },
  ];

  const menuItems = role === "librarian" ? LibrarianMenu : role === "user"
      ? UserMenu : role === "admin" ? adminMenu : [];

  return (
    <>
  
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 p-3 rounded-lg bg-slate-900 text-white md:hidden"
      >
        <FaBars size={18} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50
          w-64 min-h-screen border-r
          transform transition-transform duration-300
          bg-slate-950
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:flex
        `}
      >
        <div className="flex-1 flex flex-col bg-slate-950/80 backdrop-blur-xl overflow-hidden">
          {/* Mobile Close Button */}
          <div className="flex justify-end p-4 md:hidden">
            <button onClick={() => setIsOpen(false)}>
              <FaTimes className="text-white text-xl" />
            </button>
          </div>

          {/* Brand */}
          <div className="px-6 py-5 border-b border-white/5"></div>

          {/* User Profile */}
        <div className="pl-6"><Logo></Logo></div>
          <div className="px-6 py-5 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-pink-500/60 shrink-0">
                {userImage ? (
                  <img
                    src={userImage}
                    alt={userName}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-700 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">
                      {userName?.charAt(0)?.toUpperCase() || "G"}
                    </span>
                  </div>
                )}
              </div>

              <div className="overflow-hidden">
                <p className="text-white text-sm font-bold truncate">
                  {userName}
                </p>

                <span
                  className={`text-[10px] font-bold uppercase tracking-wider ${
                    role === "admin"
                      ? "text-yellow-400"
                      : role === "librarian"
                      ? "text-indigo-400"
                      : "text-pink-400"
                  }`}
                >
                  {role}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-1">
            <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest px-3 pb-2">
              Navigation
            </p>

            {menuItems.map(({ key, label, icon: Icon, href }) => (
              <Link
                key={key}
                href={href}
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-400 hover:text-white hover:bg-white/5 transition-all"
              >
                <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-white/5">
                  <Icon size={18} />
                </span>

                <span>{label}</span>
              </Link>
            ))}
          </nav>

          {/* Bottom Links */}
          <div className="px-3 py-2 border-t border-white/5 space-y-1 mt-auto">
            <Link
              href="/"
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-400 hover:text-white hover:bg-white/5"
            >
              <span className="w-8 h-5 rounded-lg bg-white/5 flex items-center justify-center">
                <FaHome size={13} />
              </span>
              Back to Site
            </Link>

            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-semibold text-slate-400 hover:text-red-400 hover:bg-red-500/5"
            >
              <span className="w-8  rounded-lg bg-white/5 flex items-center justify-center">
                <FaSignOutAlt size={13} />
              </span>
              Sign Out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;