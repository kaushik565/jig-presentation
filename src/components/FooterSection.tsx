'use client';

import { Section } from './UI';

export function FooterSection() {
  return (
    <Section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Test Results & Performance */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">📊 Test Results & Performance</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-red-600 mb-2">15</p>
              <p className="text-gray-700 font-semibold">Test Cycles</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-black mb-2">300</p>
              <p className="text-gray-700 font-semibold">Cartridges Tested</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-green-600 mb-2">100%</p>
              <p className="text-gray-700 font-semibold">Accuracy</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-black mb-2">3.15s</p>
              <p className="text-gray-700 font-semibold">Cycle Time</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-lg font-bold text-black mb-4">🎯 Perfect Performance</p>
            <div className="space-y-2">
              <p className="text-gray-700">✓ Zero False Rejects</p>
              <p className="text-gray-700">✓ 100% Detection Rate</p>
              <p className="text-gray-700">✓ Real-time Validation</p>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">⚙️ Technical Specifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg font-semibold text-black mb-2">🖥️ Processor</p>
              <p className="text-gray-700">Raspberry Pi 3B+</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg font-semibold text-black mb-2">📱 Scanner</p>
              <p className="text-gray-700">GM65 QR Scanner</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg font-semibold text-black mb-2">🔧 JIG CPSR</p>
              <p className="text-gray-700">Automated Routing System</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg font-semibold text-black mb-2">⚙️ Software</p>
              <p className="text-gray-700">Python 3 + Tkinter</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg font-semibold text-black mb-2">🗄️ Database</p>
              <p className="text-gray-700">SQLite + Auto-Resume (scan_state.db)</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg font-semibold text-black mb-2">🌐 Dashboard</p>
              <p className="text-gray-700">Flask Web (:8080)</p>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">✨ Key Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg font-bold text-black mb-2">💯 Zero Mix-Ups</p>
              <p className="text-gray-700 text-sm">100% accurate validation ensures cartridges never go to wrong batch</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg font-bold text-black mb-2">💰 No Investment</p>
              <p className="text-gray-700 text-sm">Uses existing jig + Raspberry Pi, zero capital expenditure</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg font-bold text-black mb-2">📊 Full Traceability</p>
              <p className="text-gray-700 text-sm">CSV + SQLite + Flask dashboard provides complete audit trail</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg font-bold text-black mb-2">⚡ Fast & Efficient</p>
              <p className="text-gray-700 text-sm">Average 3.15 seconds per cartridge processing time</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg font-bold text-black mb-2">🔄 Zero Disruption</p>
              <p className="text-gray-700 text-sm">No changes to existing ACTJ/CPSR firmware or hardware</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg font-bold text-black mb-2">💾 Auto-Resume</p>
              <p className="text-gray-700 text-sm">Power-safe design — JIG resumes from last scan after shutdown, no data loss</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg font-bold text-black mb-2">🤖 Operator Empowerment</p>
              <p className="text-gray-700 text-sm">Instant LED + buzzer feedback. Operators focus on action, not manual QR checks.</p>
            </div>
          </div>
        </div>

        {/* Project Impact & Value */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">📈 Project Impact & Value</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Problems Prevented */}
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
              <p className="text-lg font-bold text-black mb-4">🛡️ Problems Prevented</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Avg 2–3 hours delay per incident</li>
                <li>• Rework + QA investigation time</li>
                <li>• Material waste + rejected cartridges</li>
              </ul>
              <p className="text-sm font-semibold text-black mt-3">Prevents downtime and rework</p>
            </div>

            {/* Smart Resource Utilization */}
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
              <p className="text-lg font-bold text-black mb-4">♻️ Smart Resource Utilization</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Used existing ACTJ/CPSR infra</li>
                <li>• Raspberry Pi & scanner from maintenance</li>
                <li>• 100% in-house development</li>
              </ul>
              <p className="text-sm font-semibold text-black mt-3">Zero additional resources needed</p>
            </div>
          </div>

          {/* Final Impact Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center bg-gray-50 p-6 rounded-lg">
              <p className="text-4xl font-bold text-green-600 mb-2">💯</p>
              <p className="text-lg font-bold text-black mb-1">100%</p>
              <p className="text-gray-700 text-sm">Accuracy</p>
            </div>
            <div className="text-center bg-gray-50 p-6 rounded-lg">
              <p className="text-4xl font-bold text-red-600 mb-2">✅</p>
              <p className="text-lg font-bold text-black mb-1">0</p>
              <p className="text-gray-700 text-sm">Mix-ups</p>
            </div>
            <div className="text-center bg-gray-50 p-6 rounded-lg">
              <p className="text-4xl font-bold text-blue-600 mb-2">📦</p>
              <p className="text-lg font-bold text-black mb-1">300+</p>
              <p className="text-gray-700 text-sm">Cartridges Validated</p>
            </div>
            <div className="text-center bg-gray-50 p-6 rounded-lg">
              <p className="text-4xl font-bold text-purple-600 mb-2">⚡</p>
              <p className="text-lg font-bold text-black mb-1">3.15s</p>
              <p className="text-gray-700 text-sm">Avg Cycle Time</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
