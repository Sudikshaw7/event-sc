import AdminSidebar from "@/components/AdminSidebar";
import {
  Users, CalendarDays, HeartHandshake, Megaphone,
  TrendingUp, Plus, Bell, CheckSquare, ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Total Guests", value: "1,248", change: "+34 today", icon: Users, color: "text-saffron", bg: "bg-orange-50" },
  { label: "Events Scheduled", value: "24", change: "4 upcoming", icon: CalendarDays, color: "text-gold", bg: "bg-yellow-50" },
  { label: "Donations Received", value: "₹12.4L", change: "+₹45K today", icon: HeartHandshake, color: "text-green-600", bg: "bg-green-50" },
  { label: "Announcements", value: "8", change: "2 pinned", icon: Megaphone, color: "text-purple-600", bg: "bg-purple-50" },
];

const recentActivity = [
  { time: "10:23 AM", text: "New guest RSVP: Priya Sharma (Bhandara)", type: "guest" },
  { time: "09:45 AM", text: "Donation received: ₹5,100 from Anand Patel", type: "donation" },
  { time: "09:10 AM", text: "Announcement posted: Venue Change Notice", type: "announcement" },
  { time: "08:55 AM", text: "New guest RSVP: Krishnamurthy Family (5 persons)", type: "guest" },
  { time: "08:30 AM", text: "Calendar updated: Added Ekadashi Path on July 21", type: "calendar" },
  { time: "Yesterday", text: "Donation received: ₹21,000 from Ramesh Gupta", type: "donation" },
  { time: "Yesterday", text: "50 VIP Seva passes issued", type: "guest" },
  { time: "Yesterday", text: "Gita Pravachan live stream: 3,240 viewers", type: "announcement" },
];

const activityColor: Record<string, string> = {
  guest: "bg-saffron",
  donation: "bg-green-500",
  announcement: "bg-purple-500",
  calendar: "bg-gold",
};

const quickActions = [
  { label: "Add New Guest", icon: Plus, path: "/admin/guests", color: "bg-saffron hover:bg-orange-600 text-white" },
  { label: "Post Announcement", icon: Megaphone, path: "/announcements", color: "bg-brown hover:bg-brown/80 text-white border border-gold/30" },
  { label: "Schedule Event", icon: CalendarDays, path: "/calendar", color: "bg-white hover:bg-cream text-brown border border-gold" },
  { label: "Record Donation", icon: HeartHandshake, path: "/donation", color: "bg-green-600 hover:bg-green-700 text-white" },
];

const donationBreakdown = [
  { label: "Anna Seva", pct: 38, color: "bg-saffron" },
  { label: "Yagna Seva", pct: 28, color: "bg-red-500" },
  { label: "Deepa Seva", pct: 20, color: "bg-yellow-500" },
  { label: "Vastra Seva", pct: 14, color: "bg-purple-500" },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen flex bg-cream">
      <AdminSidebar />

      <div className="flex-1 min-w-0 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white border-b border-gold/40 px-6 py-4 flex items-center justify-between sticky top-0 z-20">
          <div>
            <h1 className="font-serif text-2xl text-brown">Dashboard</h1>
            <p className="text-xs font-sans text-brown/50">Chaturmas 2024 — Admin Overview</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-brown/60 hover:text-saffron transition-colors">
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-saffron rounded-full" />
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gold">
              <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" alt="admin" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="flex-1 p-6 md:p-8 overflow-auto">
          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-white border border-gold/40 p-5 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2.5 ${stat.bg}`}>
                      <Icon size={22} className={stat.color} />
                    </div>
                    <TrendingUp size={14} className="text-green-500" />
                  </div>
                  <div className="font-serif text-3xl text-brown mb-1">{stat.value}</div>
                  <div className="text-xs font-sans font-semibold text-brown/60 uppercase tracking-wider">{stat.label}</div>
                  <div className="text-xs font-sans text-green-600 mt-1">{stat.change}</div>
                </div>
              );
            })}
          </div>

          {/* Split View */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* Recent Activity */}
            <div className="bg-white border border-gold/40">
              <div className="px-6 py-4 border-b border-gold/30 flex items-center justify-between">
                <h2 className="font-serif text-lg text-brown">Recent Activity</h2>
                <span className="text-xs font-sans text-brown/40 uppercase tracking-wider">Live</span>
              </div>
              <div className="divide-y divide-gold/20 max-h-96 overflow-y-auto">
                {recentActivity.map((item, i) => (
                  <div key={i} className="px-6 py-3.5 flex items-start gap-3 hover:bg-cream/60 transition-colors">
                    <span className={`w-2 h-2 rounded-full shrink-0 mt-1.5 ${activityColor[item.type]}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-sans text-brown leading-relaxed">{item.text}</p>
                    </div>
                    <span className="text-xs font-sans text-brown/40 shrink-0">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions + Donation Breakdown */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-white border border-gold/40">
                <div className="px-6 py-4 border-b border-gold/30">
                  <h2 className="font-serif text-lg text-brown">Quick Actions</h2>
                </div>
                <div className="p-5 grid grid-cols-2 gap-3">
                  {quickActions.map((action) => {
                    const Icon = action.icon;
                    return (
                      <Link
                        key={action.label}
                        to={action.path}
                        className={`flex items-center gap-2.5 px-4 py-3 text-sm font-sans font-semibold transition-colors duration-150 ${action.color}`}
                      >
                        <Icon size={15} />
                        {action.label}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Donation Breakdown */}
              <div className="bg-white border border-gold/40">
                <div className="px-6 py-4 border-b border-gold/30 flex items-center justify-between">
                  <h2 className="font-serif text-lg text-brown">Donation Breakdown</h2>
                  <Link to="/donation" className="text-xs font-sans text-saffron flex items-center gap-1 hover:underline">
                    View all <ArrowRight size={12} />
                  </Link>
                </div>
                <div className="p-5 space-y-4">
                  {donationBreakdown.map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-xs font-sans text-brown/70 mb-1.5">
                        <span>{item.label}</span>
                        <span className="font-semibold">{item.pct}%</span>
                      </div>
                      <div className="h-2.5 bg-cream rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${item.color}`}
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Events Mini */}
          <div className="bg-white border border-gold/40">
            <div className="px-6 py-4 border-b border-gold/30 flex items-center justify-between">
              <h2 className="font-serif text-lg text-brown">Upcoming Events</h2>
              <Link to="/calendar" className="text-xs font-sans text-saffron flex items-center gap-1 hover:underline">
                Full calendar <ArrowRight size={12} />
              </Link>
            </div>
            <div className="divide-y divide-gold/20">
              {[
                { date: "Jul 17", title: "Pravesh Mahotsav", type: "Mahotsav", guests: "500+" },
                { date: "Jul 21", title: "Ekadashi Path", type: "Path", guests: "200" },
                { date: "Jul 24", title: "Gita Pravachan — Ch 5", type: "Pravachan", guests: "350" },
                { date: "Aug 19", title: "Purnima Bhandara", type: "Bhandara", guests: "2000+" },
              ].map((ev, i) => (
                <div key={i} className="px-6 py-4 flex items-center gap-4 hover:bg-cream/50">
                  <div className="w-12 h-12 bg-saffron/10 border border-saffron/30 flex flex-col items-center justify-center shrink-0">
                    <span className="font-serif text-lg text-saffron leading-none">{ev.date.split(" ")[1]}</span>
                    <span className="font-sans text-xs text-saffron/70">{ev.date.split(" ")[0]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-sans text-sm font-semibold text-brown">{ev.title}</div>
                    <div className="font-sans text-xs text-brown/50">{ev.type}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-sans text-brown/50">Expected</div>
                    <div className="font-sans text-sm font-semibold text-brown">{ev.guests}</div>
                  </div>
                  <CheckSquare size={16} className="text-gold/60 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}