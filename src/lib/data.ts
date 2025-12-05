// Project Data for Batch Mix-Up Detection JIG Presentation

export const projectInfo = {
  title: "Batch Mix-Up Detection JIG",
  subtitle: "Objective: Prevent batch and line mix-ups via Automatic QR Scanning JIG",
  developer: "P. Lakshmana Sai Kaushik",
  role: "QA Supervisor — Molbio Diagnostics Limited",
  duration: "October 2025 – December 2025",
  status: "✅ Testing Complete — Ready for Handover",
  oneLiner: "Automated in-house jig that eliminates batch and line mix-ups — delivering 100% verified accuracy with zero additional cost"
};

export const incidentsData = [
  {
    id: 1,
    ir_number: "IR25/III/QA/063",
    date: "September 2025",
    issue_type: "Cross-line mix-up",
    description: "Line-C materials stored in Line-A",
    impact: "Wrong batch allocation",
    root_cause: "Manual inspection inconsistency"
  },
  {
    id: 2,
    ir_number: "IR25/III/QA/069",
    date: "September 2025",
    issue_type: "Missing QR label",
    description: "Cartridge found without QR label",
    impact: "Unable to trace batch",
    root_cause: "No validation for missing QR"
  },
  {
    id: 3,
    ir_number: "IR25/III/QA/068",
    date: "September 2025",
    issue_type: "Wrong batch & mould mismatch",
    description: "Cross-batch mixing S13 with S14 QR",
    impact: "Product quality compromised",
    root_cause: "No batch range validation"
  },
  {
    id: 4,
    ir_number: "IR25/III/QC/071",
    date: "October 2025",
    issue_type: "Wrong batch",
    description: "13 out of 200 units from another line in QC",
    impact: "Batch contamination",
    root_cause: "No cross-line validation"
  },
  {
    id: 5,
    ir_number: "IR25/III/QA/072",
    date: "October 2025",
    issue_type: "QR tampering & mould mismatch",
    description: "QR labels re-pasted; mould mismatch detected",
    impact: "Traceability loss",
    root_cause: "No tampering detection"
  },
  {
    id: 6,
    ir_number: "IR25/III/QA/074",
    date: "October 2025",
    issue_type: "Wrong mould assignment",
    description: "MVANC00051 with N13 QR on N11",
    impact: "Production error",
    root_cause: "Manual error in batch assignment"
  }
];

export const keyMetrics = [
  { value: "100%", label: "Accuracy" },
  { value: "Zero", label: "False Rejections" },
  { value: "300", label: "Cartridges Successfully Tested" },
  { value: "✓", label: "QR Validation Eliminates Manual Error" },
  { value: "📊", label: "Full Traceability CSV Logs" }
];

export const challenges = [
  {
    icon: "📊",
    title: "6+ Mix-up Incidents",
    description: "Repeated across multiple batches",
    severity: "CRITICAL"
  },
  {
    icon: "🔍",
    title: "Root Cause",
    description: "Wrong batch, wrong mould, cross-line mix-up & QR tampering → Manual verification alone is not reliable",
    severity: "HIGH"
  },
  {
    icon: "⚡",
    title: "Risk Level",
    description: "HIGH",
    severity: "HIGH"
  },
  {
    icon: "📋",
    title: "QMS Traceability Issues",
    description: "Due to mix-ups: delays in closures, reworks, batch compilation errors",
    severity: "CRITICAL"
  }
];

export const currentSituation = [
  {
    title: "🔍 CPSR Today",
    description: "Scans and counts QR codes; does not validate Line ID, Batch, or QR range"
  },
  {
    title: "👤 Manual Checks",
    description: "Inconsistent for wrong batch, cross-line mix-ups, or tampered labels"
  },
  {
    title: "⚠️ Result",
    description: "Rework, delays, and traceability gaps"
  }
];

export const problemTypes = [
  "Wrong batch",
  "Wrong mould",
  "Cross-line mix-up",
  "QR tampering"
];

export const solutionSteps = [
  {
    step: 1,
    title: "Scans QR Code",
    description: "GM65 scanner reads the 14-character QR code from each cartridge"
  },
  {
    step: 2,
    title: "Validates Automatically",
    description: "System checks if QR belongs to current batch (Line ID, Batch Range, Format)"
  },
  {
    step: 3,
    title: "Auto-Diverts Cartridges",
    description: "Based on validation result, ACTJ actuators automatically route cartridges to PASS bin or REJECT bin"
  },
  {
    step: 4,
    title: "Zero Operator Intervention",
    description: "No manual decisions required — fully automated validation and routing"
  }
];

export const reductionFeatures = [
  {
    icon: "🔍",
    title: "Line ID Validation",
    description: "Extracts Line ID from QR Position 2 → Ensures cartridges from Line A don't mix with Line B"
  },
  {
    icon: "📊",
    title: "Batch Range Check",
    description: "Validates QR is within configured Start/End range → Rejects wrong batch cartridges"
  },
  {
    icon: "🔄",
    title: "Duplicate Detection",
    description: "Tracks scanned QRs in session → Prevents re-scanning same cartridge multiple times"
  },
  {
    icon: "🎯",
    title: "Format Validation",
    description: "14-char alphanumeric check → Rejects invalid or tampered QR codes"
  }
];

export const jigFeatures = [
  {
    icon: "💡",
    title: "LED Visual Indicators",
    description: "GREEN = Pass | YELLOW = Duplicate | RED = Reject — Instant visual feedback for operators"
  },
  {
    icon: "🔊",
    title: "Buzzer Sound Alert",
    description: "Audible beep for rejected cartridges — Alerts operator immediately when issues detected"
  },
  {
    icon: "📺",
    title: "Tkinter UI Display",
    description: "Real-time statistics visible on JIG screen: Total Scanned, Batch Number, Pass Count, Reject Count, Duplicate Count, Timeline, Last Scanned QR"
  },
  {
    icon: "🔧",
    title: "Multi-Mould Batch Support",
    description: "Handles batches with multiple moulds — Configure QR ranges for 1, 2, 3+ moulds per batch seamlessly"
  },
  {
    icon: "🌐",
    title: "Flask Web Dashboard",
    description: "Remote access to scan logs via browser (:8080) — View history, download CSV reports, audit trail"
  },
  {
    icon: "📋",
    title: "Complete Traceability",
    description: "CSV logs + SQLite database — Every scan recorded with timestamp, batch, result, operator details"
  },
  {
    icon: "💾",
    title: "Auto-Resume & Data Persistence",
    description: "Zero data loss even during power interruptions: Automatic State Recovery, Count Preservation, Session Continuity, Persistent Storage"
  }
];

export const validationLevels = [
  {
    level: 1,
    name: "Format Validation",
    description: "Check QR code format and character validity",
    prevents: "Invalid QR codes",
    accuracy: "99.8%"
  },
  {
    level: 2,
    name: "Line ID Validation",
    description: "Extract and validate Line ID from QR code",
    prevents: "Cross-line mix-ups",
    accuracy: "100%"
  },
  {
    level: 3,
    name: "Batch Range Validation",
    description: "Verify QR is within configured batch range",
    prevents: "Wrong batch assignment",
    accuracy: "100%"
  },
  {
    level: 4,
    name: "Duplicate Detection",
    description: "Prevent re-scanning of same cartridge",
    prevents: "Multiple-count errors",
    accuracy: "100%"
  }
];

export const testResults = {
  cartridges_tested: 300,
  accuracy: 100,
  cycle_time: 3.15,
  cartridges_per_minute: 20,
  system_reliability: 99.9,
  validations: {
    format: 99.8,
    line_id: 100,
    batch_range: 100,
    duplicate: 100
  }
};

export const timeline = [
  {
    phase: 1,
    name: "Concept Development",
    duration: "2 weeks",
    status: "✅ Complete",
    dates: "Oct 1-14, 2025"
  },
  {
    phase: 2,
    name: "Development & Testing",
    duration: "4 weeks",
    status: "✅ Complete",
    dates: "Oct 15 - Nov 11, 2025"
  },
  {
    phase: 3,
    name: "Validation & Verification",
    duration: "2 weeks",
    status: "✅ Complete",
    dates: "Nov 12-25, 2025"
  },
  {
    phase: 4,
    name: "Production Deployment",
    duration: "Ongoing",
    status: "⏳ Ready to Deploy",
    dates: "Dec 2025+"
  }
];

export const benefits = [
  {
    id: 1,
    title: "💯 Zero Mix-Ups",
    subtitle: "100% Accurate Prevention",
    description: "4-level validation ensures mix-ups are impossible. Cartridges never go to wrong batch with complete protection against all 6 incident types."
  },
  {
    id: 2,
    title: "💰 No Investment",
    subtitle: "$0 CAPEX Solution",
    description: "Uses existing ACTJ/CPSR jig, affordable Raspberry Pi (< $50), no capital expenditure needed. Complete reuse of existing infrastructure."
  },
  {
    id: 3,
    title: "📊 Full Traceability",
    subtitle: "Web-Based Access",
    description: "CSV logs + SQLite database with Flask web dashboard. Complete validation audit trail with remote access capability for monitoring and compliance."
  },
  {
    id: 4,
    title: "⏱️ Time Efficient",
    subtitle: "Quick Processing",
    description: "1 min 3 sec per 20 cartridges (~3.15 sec per cartridge). Faster than manual inspection with scalability to high-volume batches."
  },
  {
    id: 5,
    title: "🎯 Prevention-Focused",
    subtitle: "Proactive Detection",
    description: "Prevents all 6 types of mix-ups with real-time error detection. Immediate operator feedback eliminates rework and delays."
  },
  {
    id: 6,
    title: "🔧 No Hardware Changes",
    subtitle: "Drop-In Solution",
    description: "Same ACTJ/CPSR infrastructure reused. No firmware modifications needed. Seamless integration with existing systems."
  }
];
