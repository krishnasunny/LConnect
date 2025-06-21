import { DashboardLayout } from "@/components/Layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function AdminLawyers() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: lawyers, isLoading } = useQuery({
    queryKey: ["/api/admin/lawyers"],
  });

  const approveMutation = useMutation({
    mutationFn: async (lawyerId: number) => {
      await apiRequest("PUT", `/api/admin/lawyers/${lawyerId}/approve`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/lawyers"] });
      toast({
        title: "Lawyer approved",
        description: "The lawyer has been approved successfully",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to approve lawyer",
        variant: "destructive",
      });
    },
  });

  const handleApprove = (lawyerId: number) => {
    approveMutation.mutate(lawyerId);
  };

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="p-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-64 mb-4"></div>
            <div className="h-96 bg-gray-200 rounded"></div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Manage Lawyers</h1>
          <p className="text-gray-600">Review and approve lawyer applications</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>All Lawyers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialization</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {lawyers && lawyers.length > 0 ? (
                    lawyers.map((lawyer: any) => (
                      <tr key={lawyer.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{lawyer.fullName}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{lawyer.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {lawyer.specialization}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {lawyer.experience}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge variant={lawyer.isApproved ? "default" : "secondary"}>
                            {lawyer.isApproved ? "Approved" : "Pending"}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                          {!lawyer.isApproved ? (
                            <Button
                              size="sm"
                              onClick={() => handleApprove(lawyer.id)}
                              disabled={approveMutation.isPending}
                              className="bg-green-600 hover:bg-green-700 text-white"
                            >
                              {approveMutation.isPending ? "Approving..." : "Approve"}
                            </Button>
                          ) : (
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-red-600 hover:text-red-900"
                            >
                              Suspend
                            </Button>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                        No lawyers found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
