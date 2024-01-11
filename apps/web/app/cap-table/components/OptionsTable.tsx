import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { formatCurrency } from "@/lib/utils/common";

type OptionCapTable = {
  id: string;
  certificateName: string;
  stakeholderName: string;
  shareClassName: string;
  issuedOn: string;
  fullyDiluted: number;
  ownership: number;
  pricePerShare: number | null;
  excercisePrice: number;
};

const mockOptionsData: OptionCapTable[] = [
  {
    id: "1",
    certificateName: "OPT-1",
    stakeholderName: "John Doe",
    shareClassName: "Common",
    issuedOn: "1/1/2020",
    fullyDiluted: 1000,
    ownership: 100,
    pricePerShare: 1,
    excercisePrice: 100,
  },
  {
    id: "2",
    certificateName: "OPT-1",
    stakeholderName: "Jane Doe",
    shareClassName: "Common",
    issuedOn: "1/1/2020",
    fullyDiluted: 1000,
    ownership: 100,
    pricePerShare: 1,
    excercisePrice: 1500,
  },
];

const EquityPlansTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Certificate</TableHead>
          <TableHead>Stakeholder</TableHead>
          <TableHead>Share Class</TableHead>
          <TableHead className="text-right">Issued On</TableHead>
          <TableHead className="text-right">Fully Diluted</TableHead>
          <TableHead className="text-right">Ownership</TableHead>
          <TableHead className="text-right">Price/Share</TableHead>
          <TableHead className="text-right">Excercise Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockOptionsData.map(plan => (
          <TableRow key={plan.id}>
            <TableCell className="font-medium">
              {plan.certificateName}
            </TableCell>
            <TableCell>{plan.stakeholderName}</TableCell>
            <TableCell>{plan.shareClassName}</TableCell>
            <TableCell className="text-right">{plan.issuedOn}</TableCell>
            <TableCell className="text-right">{plan.fullyDiluted}</TableCell>
            <TableCell className="text-right">{plan.ownership}%</TableCell>
            <TableCell className="text-right">
              {plan.pricePerShare ? formatCurrency(plan.pricePerShare) : "--"}
            </TableCell>
            <TableCell className="text-right">
              {formatCurrency(plan.excercisePrice)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default EquityPlansTable;
