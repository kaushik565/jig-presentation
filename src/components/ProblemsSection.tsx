'use client';

import { Section } from './UI';

export function ProblemsSection() {
  return (
    <Section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-3">📋 The Challenge</h2>
          <p className="text-lg text-gray-700">Creates traceability gaps and operational inefficiencies</p>
        </div>

        {/* Top Issues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Mix-up Incidents */}
          <div className="text-center">
            <p className="text-4xl font-bold text-red-600 mb-2">6+</p>
            <p className="text-lg font-semibold text-black mb-2">Mix-up Incidents</p>
            <p className="text-gray-600 text-sm">Repeated across multiple batches</p>
          </div>

          {/* Root Cause */}
          <div className="text-center">
            <p className="text-2xl mb-2">🔍</p>
            <p className="text-lg font-semibold text-black mb-3">Root Cause</p>
            <p className="text-gray-600 text-sm">Wrong batch, wrong mould, cross-line mix-up & QR tampering</p>
          </div>

          {/* Risk Level */}
          <div className="text-center">
            <p className="text-2xl mb-2">⚡</p>
            <p className="text-lg font-semibold text-black mb-2">Risk Level</p>
            <p className="text-red-600 font-bold text-base">CRITICAL</p>
          </div>
        </div>

        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold">⚠️ Manual verification alone is not reliable.</p>
        </div>

        {/* Current State Issues */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* CPSR Today */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-xl mb-3">📊 CPSR Today</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Scans and counts QR codes; does not validate Line ID, Batch, or QR range.
            </p>
          </div>

          {/* Manual Checks */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-xl mb-3">👤 Manual Checks</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Inconsistent for wrong batch, cross-line mix-ups, or tampered labels.
            </p>
          </div>

          {/* Result */}
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
            <p className="text-xl mb-3">⚠️ Result</p>
            <p className="text-gray-700 text-sm leading-relaxed font-semibold">
              Rework, delays, and traceability gaps.
            </p>
          </div>
        </div>

        {/* QMS Traceability Issues */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <p className="text-xl font-semibold text-black mb-3">📋 QMS Traceability Issues</p>
          <p className="text-gray-700">
            Due to mix-ups: delays in closures, reworks, batch compilation errors
          </p>
        </div>

        {/* Mix-up Types */}
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-600 mb-4">Common Mix-up Scenarios:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">
              ▸ Wrong batch
            </span>
            <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">
              ▸ Wrong mould
            </span>
            <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">
              ▸ Cross-line mix-up
            </span>
            <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">
              ▸ QR tampering
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
