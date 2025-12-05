'use client';

import { Section } from './UI';

export function ClosingSection() {
  return (
    <Section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Main Thank You */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-3">🙏 Thank You!</h2>
          <p className="text-2xl font-semibold text-red-600 mb-6">✨ Testing Complete — Concept Proven</p>
        </div>

        {/* Test Results Summary */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-black mb-6 text-center">🎯 Test Results Summary</h3>
          
          <div className="bg-green-50 border-l-4 border-green-600 p-8 rounded-lg mb-8">
            <div className="space-y-3">
              <p className="text-lg text-gray-700"><span className="font-bold">✅</span> 300 cartridges tested</p>
              <p className="text-lg text-gray-700"><span className="font-bold">✅</span> 100% detection accuracy</p>
              <p className="text-lg text-gray-700"><span className="font-bold">✅</span> Zero false rejections</p>
            </div>
          </div>
        </div>

        {/* Performance Tested */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-black mb-6 text-center">⏱️ Performance Tested</h3>
          
          <div className="bg-gray-50 p-8 rounded-lg text-center mb-8">
            <p className="text-3xl font-bold text-red-600 mb-2">1 min 03 sec</p>
            <p className="text-lg text-gray-700">per 20 cartridges</p>
          </div>
        </div>

        {/* Quality Impact */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-black mb-6 text-center">🎯 Quality Impact</h3>
          
          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg">
            <div className="space-y-3">
              <p className="text-lg text-gray-700"><span className="font-bold">✓</span> Eliminates batch mix-up risk</p>
              <p className="text-lg text-gray-700"><span className="font-bold">✓</span> Full traceability maintained</p>
              <p className="text-lg text-gray-700"><span className="font-bold">✓</span> Complete audit documentation</p>
            </div>
          </div>
        </div>

        {/* Next Phase */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🤝 Next Phase — Concept Validation Complete</h2>
          
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <p className="text-gray-700 mb-4">
              Prototype successfully tested with proven performance metrics validated across diverse batch scenarios.
            </p>
          </div>

          {/* Production Implementation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg font-bold text-black mb-3">🔄 Production Implementation</p>
              <p className="text-gray-700 text-sm">
                If deemed valuable for production lines, this concept can be implemented and scaled with BigTec's support for system integration and deployment.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg font-bold text-black mb-3">💡 Key Advantage</p>
              <p className="text-gray-700 text-sm">
                Zero production line disruption during implementation
              </p>
            </div>
          </div>

          {/* Status */}
          <div className="text-center space-y-2">
            <p className="text-gray-700"><span className="font-bold">✓</span> Prototype Validated</p>
            <p className="text-gray-700"><span className="font-bold">✓</span> Performance Proven</p>
            <p className="text-gray-700"><span className="font-bold">✓</span> Ready for Next Implementing</p>
          </div>
        </div>

        {/* Final Message */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">💡 Final Message</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-8 rounded-lg mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Built-in prevention, compliance, and traceability — embedded in the process.
            </p>
          </div>
        </div>

        {/* What We Achieved */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🎯 What We Achieved</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg text-center">
              <p className="text-2xl font-bold text-green-600 mb-2">✅</p>
              <p className="font-bold text-black">Automated prevention</p>
              <p className="text-gray-700 text-sm">with zero cost</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg text-center">
              <p className="text-2xl font-bold text-green-600 mb-2">✅</p>
              <p className="font-bold text-black">100% verified</p>
              <p className="text-gray-700 text-sm">accuracy</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg text-center">
              <p className="text-2xl font-bold text-green-600 mb-2">✅</p>
              <p className="font-bold text-black">Complete</p>
              <p className="text-gray-700 text-sm">traceability</p>
            </div>
          </div>
        </div>

        {/* Champions Initiative Badge */}
        <div className="mb-16 text-center">
          <p className="text-xl font-bold text-black mb-2">🏆 Champions 2.0 in action</p>
        </div>

        {/* Final Signature */}
        <div className="text-center bg-red-600 text-white p-12 rounded-lg border-t border-gray-200 mt-12">
          <p className="text-lg font-semibold mb-2 text-white">👤 Regards</p>
          <p className="text-2xl font-bold mb-1 text-white">P. Lakshmana Sai Kaushik</p>
          <p className="text-lg font-semibold mb-1 text-white">QA Supervisor</p>
          <p className="font-semibold text-white">Molbio Diagnostics Limited - SITE III</p>
        </div>
      </div>
    </Section>
  );
}
