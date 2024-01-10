import type { ENRICHMENT_TYPE } from "@/constants/enrich.constants";

import type { ValueOf } from "./common.type";

export type EnrichmentType = ValueOf<typeof ENRICHMENT_TYPE>;
