'use client';

import { Section } from './UI';

export function HeaderSection() {
  return (
    <Section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-black mb-4">
            Batch Mix-Up Detection JIG
          </h1>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Objective: Prevent batch and line mix-ups via Automatic QR Scanning JIG.
          </p>
        </div>

        {/* Developer Info */}
        <div className="text-center mb-12">
          <p className="text-sm text-red-600 font-semibold mb-2">DEVELOPED BY</p>
          <h2 className="text-3xl font-bold text-black mb-2">P. Lakshmana Sai Kaushik</h2>
          <p className="text-gray-700 font-semibold">QA Supervisor</p>
          <p className="text-red-600 font-semibold text-sm">Molbio Diagnostics Limited</p>
          <p className="text-gray-600 text-sm mt-2">October 2025 – December 2025</p>
        </div>

        {/* Key Value Proposition */}
        <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg mb-12">
          <p className="text-sm font-semibold text-red-600 mb-2">💡 KEY VALUE PROPOSITION</p>
          <p className="text-xl font-bold text-black">
            Automated in-house jig that eliminates batch and line mix-ups — delivering <span className="text-red-600">100% verified accuracy</span> with <span className="text-red-600">zero additional cost</span>.
          </p>
        </div>

        {/* Project Status */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-red-600 mb-2">PROJECT STATUS</p>
          <p className="text-2xl font-bold text-black">
            ✅ Testing Complete — Ready for Handover
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="metric-card">
            <p className="text-4xl font-bold metric-critical mb-2">100%</p>
            <p className="text-gray-700 font-semibold">Accuracy</p>
          </div>

          <div className="metric-card">
            <p className="text-4xl font-bold metric-neutral mb-2">0</p>
            <p className="text-gray-700 font-semibold">False Rejections</p>
          </div>

          <div className="metric-card">
            <p className="text-4xl font-bold metric-critical mb-2">300+</p>
            <p className="text-gray-700 font-semibold">Cartridges Tested</p>
          </div>

          <div className="metric-card">
            <p className="text-4xl font-bold metric-success mb-2">✓</p>
            <p className="text-gray-700 font-semibold">QR Validation</p>
          </div>

          <div className="metric-card">
            <p className="text-4xl font-bold metric-critical mb-2">📊</p>
            <p className="text-gray-700 font-semibold">Full Traceability</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
