'use client';

import { Section } from './UI';

export function SolutionSection() {
  return (
    <Section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-3">💡 The Solution</h2>
          <p className="text-lg text-gray-700">Automatic QR Scanning JIG that prevents batch mix-ups without operator intervention</p>
        </div>

        {/* Overview */}
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <p className="text-lg font-semibold text-black mb-3">🎯 Our Solution: Automatic QR Scanning JIG</p>
          <p className="text-gray-700 leading-relaxed">
            We developed an intelligent QR Scanning JIG that automatically validates every cartridge and prevents batch mix-ups without any operator intervention.
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-black mb-6">How Our JIG Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg font-bold text-black mb-2">1. Scans QR Code</p>
              <p className="text-gray-700 text-sm">GM65 scanner reads the 14-character QR code from each cartridge</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg font-bold text-black mb-2">2. Validates Automatically</p>
              <p className="text-gray-700 text-sm">System checks if QR belongs to current batch (Line ID, Batch Range, Format)</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg font-bold text-black mb-2">3. Auto-Diverts Cartridges</p>
              <p className="text-gray-700 text-sm">Based on validation result, ACTJ actuators automatically route cartridges to PASS bin or REJECT bin</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg font-bold text-black mb-2">4. Zero Operator Intervention</p>
              <p className="text-gray-700 text-sm">No manual decisions required — fully automated validation and routing</p>
            </div>
          </div>
        </div>

        {/* How It Reduces Mix-ups */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-black mb-6">How It Reduces Batch Mix-ups</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-red-600 pl-6">
              <p className="text-lg font-bold text-black mb-2">🔍 Line ID Validation</p>
              <p className="text-gray-700 text-sm">Extracts Line ID from QR Position 2 → Ensures cartridges from Line A don't mix with Line B</p>
            </div>
            <div className="border-l-4 border-red-600 pl-6">
              <p className="text-lg font-bold text-black mb-2">📊 Batch Range Check</p>
              <p className="text-gray-700 text-sm">Validates QR is within configured Start/End range → Rejects wrong batch cartridges</p>
            </div>
            <div className="border-l-4 border-red-600 pl-6">
              <p className="text-lg font-bold text-black mb-2">🔄 Duplicate Detection</p>
              <p className="text-gray-700 text-sm">Tracks scanned QRs in session → Prevents re-scanning same cartridge multiple times</p>
            </div>
            <div className="border-l-4 border-red-600 pl-6">
              <p className="text-lg font-bold text-black mb-2">🎯 Format Validation</p>
              <p className="text-gray-700 text-sm">14-char alphanumeric check → Rejects invalid or tampered QR codes</p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-black mb-6">Key Features of Our JIG</h3>
          
          <div className="mb-8">
            <p className="text-lg font-bold text-black mb-3">💡 LED Visual Indicators</p>
            <p className="text-gray-700 text-sm mb-2">GREEN = Pass | YELLOW = Duplicate | RED = Reject — Instant visual feedback for operators</p>
          </div>

          <div className="mb-8">
            <p className="text-lg font-bold text-black mb-3">🔊 Buzzer Sound Alert</p>
            <p className="text-gray-700 text-sm mb-2">Audible beep for rejected cartridges — Alerts operator immediately when issues detected</p>
          </div>

          <div className="mb-8">
            <p className="text-lg font-bold text-black mb-3">📺 Tkinter UI Display</p>
            <p className="text-gray-700 text-sm mb-3">Real-time statistics visible on JIG screen:</p>
            <ul className="text-gray-700 text-sm space-y-1 ml-6">
              <li>• Total Scanned: Live count of all scanned cartridges</li>
              <li>• Batch Number: Current batch being processed</li>
              <li>• Pass Count: Number of validated cartridges</li>
              <li>• Reject Count: Number of rejected cartridges</li>
              <li>• Duplicate Count: Already scanned QRs detected</li>
              <li>• Timeline: Session duration and time tracking</li>
              <li>• Last Scanned QR: Most recent QR code processed</li>
            </ul>
          </div>

          <div className="mb-8">
            <p className="text-lg font-bold text-black mb-3">🔧 Multi-Mould Batch Support</p>
            <p className="text-gray-700 text-sm">Handles batches with multiple moulds — Configure QR ranges for 1, 2, 3+ moulds per batch seamlessly</p>
          </div>

          <div className="mb-8">
            <p className="text-lg font-bold text-black mb-3">🌐 Flask Web Dashboard</p>
            <p className="text-gray-700 text-sm">Remote access to scan logs via browser (:8080) — View history, download CSV reports, audit trail</p>
          </div>

          <div className="mb-8">
            <p className="text-lg font-bold text-black mb-3">📋 Complete Traceability</p>
            <p className="text-gray-700 text-sm">CSV logs + SQLite database — Every scan recorded with timestamp, batch, result, operator details</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-lg font-bold text-black mb-3">💾 Auto-Resume & Data Persistence</p>
            <p className="text-gray-700 text-sm mb-3">Zero data loss even during power interruptions:</p>
            <ul className="text-gray-700 text-sm space-y-2 ml-4">
              <li><span className="font-semibold">• Automatic State Recovery:</span> JIG resumes from last scanned QR when powered back on</li>
              <li><span className="font-semibold">• Count Preservation:</span> All counts (total, pass, reject, duplicate) retained in database</li>
              <li><span className="font-semibold">• Session Continuity:</span> Display shows exact state before shutdown — no manual re-entry needed</li>
              <li><span className="font-semibold">• Persistent Storage:</span> SQLite database ensures no scanned data is ever lost</li>
            </ul>
            <p className="text-gray-700 text-sm mt-3 font-semibold">→ Operators can continue exactly where they left off, maintaining workflow continuity</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
