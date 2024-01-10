export type CompanyCSVData = {
  domain: string;
};

export type CompanyEnrichData = {
  domain: string;
  company_name?: string;
  industry?: string;
  founded_at?: number | string;
  estimated_total_fund_raised?: number | null;
  primary_location?: string;
  linkedin_url?: string;
  twitter_url?: string;
  twitter_followers?: string;
  estimated_annual_revenue?: string;
  employee_size_range?: string;
  tags?: string | string[];
};
