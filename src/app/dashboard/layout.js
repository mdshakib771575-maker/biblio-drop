
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

export default function DashBoardLayout({ children }) {
    return (
        <div className="flex h-screen bg-background">
            <div className="flex flex-1 overflow-hidden border">
                <DashboardSidebar></DashboardSidebar>
                
                <div className="flex flex-1 ">
                    <main className="p-5 ">

                        {children}
                    </main>
                </div>
            </div>
        </div>



    );
}
