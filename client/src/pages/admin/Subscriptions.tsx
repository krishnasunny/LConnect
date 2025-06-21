import { DashboardLayout } from "@/components/Layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const subscriptionPlans = [
  {
    id: 1,
    name: "Basic",
    price: "$29/month",
    features: ["Up to 5 consultations", "Email support", "Basic legal documents"],
    status: "active",
    subscribers: 142,
  },
  {
    id: 2,
    name: "Professional",
    price: "$79/month",
    features: ["Unlimited consultations", "Priority support", "Advanced legal documents", "Video calls"],
    status: "active",
    subscribers: 89,
  },
  {
    id: 3,
    name: "Enterprise",
    price: "$199/month",
    features: ["Everything in Professional", "Dedicated lawyer", "Custom legal solutions", "24/7 support"],
    status: "active",
    subscribers: 23,
  },
];

export default function AdminSubscriptions() {
  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Subscription Management</h1>
          <p className="text-gray-600">Manage pricing plans and subscriptions</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {subscriptionPlans.map((plan) => (
            <Card key={plan.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <p className="text-2xl font-bold text-accent-green mt-2">{plan.price}</p>
                  </div>
                  <Badge variant={plan.status === "active" ? "default" : "secondary"}>
                    {plan.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600">
                      • {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-sm text-gray-500 mb-4">
                  {plan.subscribers} subscribers
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    Edit
                  </Button>
                  <Button size="sm" variant="destructive">
                    Disable
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Subscriptions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Next Billing</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                      No subscription data available
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
