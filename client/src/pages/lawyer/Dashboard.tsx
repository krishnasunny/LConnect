import { DashboardLayout } from "@/components/Layout/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { DollarSign, Calendar, Users, Star } from "lucide-react";

export default function LawyerDashboard() {
  const { data: stats, isLoading: statsLoading } = useQuery({
    queryKey: ["/api/lawyer/stats"],
  });

  const { data: consultations, isLoading: consultationsLoading } = useQuery({
    queryKey: ["/api/lawyer/consultations"],
  });

  if (statsLoading) {
    return (
      <DashboardLayout>
        <div className="p-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-64 mb-4"></div>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-32 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Lawyer Dashboard</h1>
          <p className="text-gray-600">Manage your practice and appointments</p>
        </div>
        
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">This Month</p>
                  <p className="text-2xl font-bold text-gray-800">${stats?.monthlyEarnings || 0}</p>
                </div>
                <DollarSign className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Appointments</p>
                  <p className="text-2xl font-bold text-gray-800">{stats?.appointments || 0}</p>
                </div>
                <Calendar className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Clients</p>
                  <p className="text-2xl font-bold text-gray-800">{stats?.activeClients || 0}</p>
                </div>
                <Users className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Rating</p>
                  <p className="text-2xl font-bold text-gray-800">{stats?.rating || "N/A"}</p>
                </div>
                <Star className="w-8 h-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Upcoming Appointments */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Appointments</h2>
            {consultationsLoading ? (
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-16 bg-gray-200 rounded animate-pulse"></div>
                ))}
              </div>
            ) : consultations && consultations.length > 0 ? (
              <div className="space-y-4">
                {consultations.map((consultation: any) => (
                  <div
                    key={consultation.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                  >
                    <div>
                      <h3 className="font-medium text-gray-800">{consultation.title}</h3>
                      <p className="text-sm text-gray-600">{consultation.description}</p>
                      <p className="text-xs text-gray-500">
                        {consultation.scheduledAt ? new Date(consultation.scheduledAt).toLocaleDateString() : "Not scheduled"}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                        Join Call
                      </Button>
                      <Button size="sm" variant="outline">
                        Reschedule
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No upcoming appointments</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
