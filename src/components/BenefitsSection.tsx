'use client';

import { Section } from './UI';

export function BenefitsSection() {
  return (
    <Section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Implementation Strategy */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">🎯 Implementation Strategy</h2>
          
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              By implementing this QR Scanning JIG in our production line, we can eliminate batch mix-ups and automatically detect cartridges mixed in wrong batches.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We used the existing ACTJ Jig for automated detection — it scans QR codes, validates Line ID, Batch range, and format in real-time, then automatically routes cartridges to PASS or REJECT bins. No manual intervention; zero human error.
            </p>
          </div>

          {/* System Architecture */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-lg font-bold text-black mb-4">System Architecture</p>
            <div className="flex flex-wrap items-center justify-between gap-4 text-center">
              <div className="flex-1 min-w-[120px]">
                <p className="text-2xl mb-2">🔧</p>
                <p className="text-sm font-semibold text-gray-700">ACTJ JIG</p>
              </div>
              <div className="text-2xl text-gray-400">→</div>
              <div className="flex-1 min-w-[120px]">
                <p className="text-2xl mb-2">📱</p>
                <p className="text-sm font-semibold text-gray-700">GM65 Scanner</p>
              </div>
              <div className="text-2xl text-gray-400">→</div>
              <div className="flex-1 min-w-[120px]">
                <p className="text-2xl mb-2">🔍</p>
                <p className="text-sm font-semibold text-gray-700">Python Validation</p>
              </div>
              <div className="text-2xl text-gray-400">→</div>
              <div className="flex-1 min-w-[120px]">
                <p className="text-2xl mb-2">🎛️</p>
                <p className="text-sm font-semibold text-gray-700">ACTJ Routing</p>
              </div>
              <div className="text-2xl text-gray-400">→</div>
              <div className="flex-1 min-w-[120px]">
                <p className="text-2xl mb-2">📊</p>
                <p className="text-sm font-semibold text-gray-700">Flask Dashboard</p>
              </div>
            </div>
          </div>
        </div>

        {/* Batch Configuration Example */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">⚙️ Batch Configuration Example</h2>
          
          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600 mb-8">
            <p className="text-lg font-bold text-black mb-4">Real Batch Setup</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-2"><span className="font-semibold">📦 Batch Number:</span> MVANC00045</p>
                <p className="text-gray-700 mb-2"><span className="font-semibold">📍 Batch Line:</span> A (Line A)</p>
                <p className="text-gray-700"><span className="font-semibold">🔧 Number of Moulds:</span> 3 Moulds</p>
              </div>
              <div>
                <p className="text-gray-700"><span className="font-semibold">🧭 Allowed Range:</span></p>
                <p className="text-gray-700 font-mono text-sm">VAN142536A0001 → VAN142536B9999</p>
              </div>
            </div>
          </div>

          {/* PASS and REJECT Examples */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <p className="text-lg font-bold text-black mb-4">✅ PASS Examples</p>
              <div className="space-y-2 text-sm">
                <p className="text-gray-700">✅ VAN142536A0001 — within range</p>
                <p className="text-gray-700">✅ VAN142536A5000 — within range</p>
                <p className="text-gray-700">✅ VAN142536B0002 — within range</p>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
              <p className="text-lg font-bold text-black mb-4">❌ REJECT Examples</p>
              <div className="space-y-2 text-sm">
                <p className="text-gray-700">❌ VAN142536C0003 — outside allowed range</p>
                <p className="text-gray-700">❌ VBN142536B0100 — wrong line</p>
                <p className="text-gray-700">❌ VAN142536A0001 — already scanned ⚠️ DUPLICATE</p>
              </div>
            </div>
          </div>

          {/* How Validation Works */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-lg font-bold text-black mb-4">🎯 How the Validation Logic Works</p>
            <div className="space-y-3">
              <div className="flex gap-4">
                <div className="bg-red-600 text-white font-bold w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <p className="font-semibold text-black">Configure QR Start (VAN142536A0001) and QR End (VAN142536B9999) for the batch</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-red-600 text-white font-bold w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <p className="font-semibold text-black">When QR is scanned, system checks: Is it within this range?</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-red-600 text-white font-bold w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <p className="font-semibold text-black">Extract Line ID from Position 2 of QR → Compare with batch line (A)</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-green-600 text-white font-bold w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">✓</div>
                <div>
                  <p className="font-semibold text-black">Both checks pass → GREEN (PASS) | Any check fails → RED (REJECT)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Level Validation Process */}
        <div>
          <h2 className="text-4xl font-bold text-black mb-6">✅ 4-Level Validation Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Level 1 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start mb-3">
                <span className="bg-red-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm mr-3">1</span>
                <p className="text-lg font-bold text-black">📝 Format Validation</p>
              </div>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold text-gray-700">Check:</span> QR must be exactly 14 alphanumeric characters</p>
                <p><span className="font-semibold text-gray-700">Rejects:</span> Wrong length, special characters, spaces</p>
                <p><span className="font-semibold text-gray-700">Result:</span> RED light if failed</p>
              </div>
            </div>

            {/* Level 2 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start mb-3">
                <span className="bg-red-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm mr-3">2</span>
                <p className="text-lg font-bold text-black">🔤 Line ID Validation</p>
              </div>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold text-gray-700">Check:</span> Does extracted Line ID match configured Batch Line?</p>
                <p><span className="font-semibold text-gray-700">Logic:</span> Extract character at Position 2 from scanned QR code (A-Z)</p>
                <p><span className="font-semibold text-gray-700">Example:</span> QR = VAN142536A0001 → Line = A | If batch is Line B → REJECT</p>
                <p><span className="font-semibold text-gray-700">Result:</span> RED light + reject bin if Line mismatch (cross-line mix-up detected)</p>
              </div>
            </div>

            {/* Level 3 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start mb-3">
                <span className="bg-red-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm mr-3">3</span>
                <p className="text-lg font-bold text-black">📊 Batch Range Validation</p>
              </div>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold text-gray-700">Check:</span> Is scanned QR within this range? (e.g., VAN142536A0001 to VAN142536B9999)</p>
                <p><span className="font-semibold text-gray-700">Logic:</span> Operator sets QR Start Number & QR End Number per batch</p>
                <p><span className="font-semibold text-gray-700">Decision:</span> Within range → PASS | Outside range → REJECT</p>
                <p><span className="font-semibold text-gray-700">Result:</span> RED light + reject bin if out of range</p>
              </div>
            </div>

            {/* Level 4 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start mb-3">
                <span className="bg-red-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm mr-3">4</span>
                <p className="text-lg font-bold text-black">🔄 Duplicate Detection</p>
              </div>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold text-gray-700">Check:</span> QR not previously scanned in current session</p>
                <p><span className="font-semibold text-gray-700">Prevents:</span> Re-scanning same cartridge multiple times</p>
                <p><span className="font-semibold text-gray-700">Result:</span> YELLOW light if duplicate, GREEN if all checks pass</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
