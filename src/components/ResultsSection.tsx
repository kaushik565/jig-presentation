'use client';

import { Section } from './UI';

export function ResultsSection() {
  return (
    <Section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section 1: Current Situation & Why This Works */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-black mb-3">📌 Current Situation & Why This Solution Works</h2>
          <p className="text-gray-700 mb-8">How we addressed each gap in the existing system</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Existing CPSR */}
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
              <p className="text-lg font-bold text-black mb-2">❌ Existing CPSR Limitation</p>
              <p className="text-gray-700 text-sm">Only scans QR and counts — no Line ID, Batch, or QR validation</p>
            </div>

            {/* Manual Verification */}
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
              <p className="text-lg font-bold text-black mb-2">❌ Manual Verification</p>
              <p className="text-gray-700 text-sm">Cannot reliably catch cross-batch or cross-line mix-ups; slow and error-prone</p>
            </div>

            {/* Range-Based Validation */}
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
              <p className="text-lg font-bold text-black mb-2">✅ Range-Based Validation</p>
              <p className="text-gray-700 text-sm">Set QR Start/End → Within range = PASS | Outside = REJECT + Line ID check</p>
            </div>

            {/* Physical Auto-Routing */}
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
              <p className="text-lg font-bold text-black mb-2">✅ Physical Auto-Routing</p>
              <p className="text-gray-700 text-sm">ACTJ actuators route PASS/REJECT automatically — no human decision errors</p>
            </div>

            {/* Full Traceability */}
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
              <p className="text-lg font-bold text-black mb-2">✅ Full Traceability</p>
              <p className="text-gray-700 text-sm">CSV + SQLite + Flask dashboard — remote audit without touching the jig</p>
            </div>

            {/* Goal Achieved */}
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
              <p className="text-lg font-bold text-black mb-2">🎯 Goal Achieved</p>
              <p className="text-gray-700 text-sm">Intelligent validation (Line, Batch, Range) prevents mix-ups — zero added cost</p>
            </div>
          </div>
        </div>

        {/* Section 2: Core Logic */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-black mb-3">🧠 The Core Logic & How The System Works</h2>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-black mb-6">🔐 Validation Logic Added</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-lg font-bold text-black mb-2">1️⃣ Set QR Start & End Numbers for each batch</p>
                <p className="text-gray-700 text-sm">(defines valid range)</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-lg font-bold text-black mb-2">2️⃣ Scanned QR within range?</p>
                <p className="text-gray-700 text-sm">✅ PASS | Outside? → ❌ REJECT</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-lg font-bold text-black mb-2">3️⃣ Extract Line ID from QR (Position 2)</p>
                <p className="text-gray-700 text-sm">→ Match with batch line</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-lg font-bold text-black mb-2">4️⃣ Line mismatch?</p>
                <p className="text-gray-700 text-sm">→ Immediate REJECT (prevents cross-line mix-up)</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600 mb-12">
            <h3 className="text-xl font-bold text-black mb-4">🛠️ What Stayed the Same</h3>
            <p className="text-gray-700 mb-3">No hardware or firmware changes. The same ACTJ/CPSR jig and components are reused.</p>
            <p className="text-gray-700">A Python validation layer on Raspberry Pi validates Line ID, Batch Range, and QR format/duplicates. Jig control remains unchanged.</p>
          </div>
        </div>

        {/* Section 3: Complete Process Flow */}
        <div>
          <h2 className="text-4xl font-bold text-black mb-6">Complete Process Flow</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-3xl font-bold text-red-600 mb-4">1️⃣</p>
              <p className="text-xl font-bold text-black mb-3">Batch Configuration</p>
              <p className="text-gray-700 text-sm">Operator inputs: Batch Number, Line ID, Mould count, QR Start/End ranges</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-3xl font-bold text-red-600 mb-4">2️⃣</p>
              <p className="text-xl font-bold text-black mb-3">QR Scanning</p>
              <p className="text-gray-700 text-sm">GM65 scanner reads 14-char QRs; system validates & auto-routes to bins</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-3xl font-bold text-red-600 mb-4">3️⃣</p>
              <p className="text-xl font-bold text-black mb-3">4-Level Validation</p>
              <p className="text-gray-700 text-sm">Format → Line ID → Batch Range → Duplicate checks ensure only correct cartridges pass</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-3xl font-bold text-red-600 mb-4">4️⃣</p>
              <p className="text-xl font-bold text-black mb-3">Visual Feedback & Routing</p>
              <p className="text-gray-700 text-sm">GREEN (pass), YELLOW (duplicate), RED (reject) + ACTJ auto-diversion to bins</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
