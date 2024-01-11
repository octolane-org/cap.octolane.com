import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type EquityPlan = {
  id: string;
  name: string;
  status: string;
  boardApproval: string;
  shareSize: number;
  shareRetireSize: number;
  termOfPlan: string;
  ownership: number;
};

const mockEquityPlans: EquityPlan[] = [
  {
    id: "1",
    name: "EQ1",
    status: "Outstanding",
    boardApproval: "Jan 23, 2024",
    shareSize: 1000,
    shareRetireSize: 100,
    termOfPlan: "10 years",
    ownership: 100,
  },
  {
    id: "2",
    name: "EQ2",
    status: "Outstanding",
    boardApproval: "Jan 23, 2024",
    shareSize: 1000,
    shareRetireSize: 100,
    termOfPlan: "10 years",
    ownership: 100,
  },
  {
    id: "3",
    name: "EQ3",
    status: "Outstanding",
    boardApproval: "Jan 23, 2024",
    shareSize: 1000,
    shareRetireSize: 100,
    termOfPlan: "10 years",
    ownership: 100,
  },
];

const EquityPlansTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Board Approval</TableHead>
          <TableHead className="text-right">Plan Size</TableHead>
          <TableHead className="text-right">Term of Plan</TableHead>
          <TableHead className="text-right">Ownership</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockEquityPlans.map(plan => (
          <TableRow key={plan.id}>
            <TableCell className="font-medium">{plan.name}</TableCell>
            <TableCell>{plan.status}</TableCell>
            <TableCell>{plan.boardApproval}</TableCell>
            <TableCell className="text-right">
              <p className="text-sm">{plan.shareSize} shares</p>
              <p className="text-xs">
                {plan.shareSize - plan.shareRetireSize} available
              </p>
            </TableCell>
            <TableCell className="text-right">{plan.termOfPlan}</TableCell>
            <TableCell className="text-right">{plan.ownership}%</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default EquityPlansTable;
