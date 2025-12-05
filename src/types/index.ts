export interface Incident {
  id: number;
  ir_number: string;
  date: string;
  issue_type: string;
  description: string;
  impact: string;
  root_cause: string;
}

export interface ValidationLevel {
  level: number;
  name: string;
  description: string;
  prevents: string;
  accuracy: string;
}

export interface Benefit {
  id: number;
  title: string;
  subtitle: string;
  description: string;
}

export interface TeamMember {
  name: string;
  title: string;
  organization: string;
  role: string;
}
