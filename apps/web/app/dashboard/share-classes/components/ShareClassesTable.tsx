import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type ShareClass = {
  id: string;
  name: string;
  shareClass: string;
  perValue: number;
  pricePerShare: number | null;
  authorizedShares: number;
};

const mockShareClasses: ShareClass[] = [
  {
    id: "1",
    name: "EQ1",
    shareClass: "Common",
    perValue: 0,
    pricePerShare: null,
    authorizedShares: 1000000,
  },
];

const ShareClassesTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Share Class</TableHead>
          <TableHead>Per Value</TableHead>
          <TableHead className="text-right">Price Per Share</TableHead>
          <TableHead className="text-right">Authorized Shares</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockShareClasses.map(plan => (
          <TableRow key={plan.id}>
            <TableCell className="font-medium">{plan.name}</TableCell>
            <TableCell>{plan.shareClass}</TableCell>
            <TableCell>{plan.perValue}</TableCell>
            <TableCell className="text-right">
              {plan.pricePerShare || "--"}
            </TableCell>
            <TableCell className="text-right">
              <p className="text-sm">{plan.authorizedShares}</p>
              <p className="text-xs">{plan.authorizedShares} outstanding</p>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ShareClassesTable;
