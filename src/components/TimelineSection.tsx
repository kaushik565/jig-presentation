'use client';

import { Section } from './UI';

export function TimelineSection() {
  return (
    <Section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Project Timeline */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-black mb-12">⏱️ Project Timeline</h2>
          
          <div className="space-y-0">
            {/* Phase 1 */}
            <div className="flex gap-6 py-8 px-6 bg-white border-l-4 border-red-600 hover:bg-red-50 transition-all duration-300">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="bg-red-600 text-white font-bold w-14 h-14 rounded-full flex items-center justify-center text-lg shadow-lg">1</div>
                <div className="w-1 h-16 bg-gradient-to-b from-red-600 to-red-300 mt-4"></div>
              </div>
              <div className="pb-8">
                <p className="text-lg font-bold text-black mb-2">Concept Approval & Material Procurement</p>
                <p className="text-red-600 font-semibold text-sm mb-2">📅 Oct 6-7, 2025</p>
                <p className="text-gray-700 text-sm">Project proposal submitted and approved by QA Manager. Hardware procured: Raspberry Pi 3B+, GM65 Scanner, SD Card from Maintenance Team</p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="flex gap-6 py-8 px-6 bg-gray-50 border-l-4 border-red-600 hover:bg-red-50 transition-all duration-300">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="bg-red-600 text-white font-bold w-14 h-14 rounded-full flex items-center justify-center text-lg shadow-lg">2</div>
                <div className="w-1 h-16 bg-gradient-to-b from-red-600 to-red-300 mt-4"></div>
              </div>
              <div className="pb-8">
                <p className="text-lg font-bold text-black mb-2">Prototype Completion</p>
                <p className="text-red-600 font-semibold text-sm mb-2">📅 Oct 9, 2025</p>
                <p className="text-gray-700 text-sm">Prototype model completed and functioning. Demo video shared with stakeholders. Approval received for ACTJ integration and USB access</p>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="flex gap-6 py-8 px-6 bg-white border-l-4 border-red-600 hover:bg-red-50 transition-all duration-300">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="bg-red-600 text-white font-bold w-14 h-14 rounded-full flex items-center justify-center text-lg shadow-lg">3</div>
                <div className="w-1 h-16 bg-gradient-to-b from-red-600 to-red-300 mt-4"></div>
              </div>
              <div className="pb-8">
                <p className="text-lg font-bold text-black mb-2">BigTec Collaboration</p>
                <p className="text-red-600 font-semibold text-sm mb-2">📅 Oct 10-14, 2025</p>
                <p className="text-gray-700 text-sm">Source code received from BigTec Labs (Salman Khaja). Software integration with existing ACTJ firmware (v2.6) — no firmware modifications</p>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="flex gap-6 py-8 px-6 bg-gray-50 border-l-4 border-red-600 hover:bg-red-50 transition-all duration-300">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="bg-red-600 text-white font-bold w-14 h-14 rounded-full flex items-center justify-center text-lg shadow-lg">4</div>
                <div className="w-1 h-16 bg-gradient-to-b from-red-600 to-red-300 mt-4"></div>
              </div>
              <div className="pb-8">
                <p className="text-lg font-bold text-black mb-2">System Integration Complete</p>
                <p className="text-red-600 font-semibold text-sm mb-2">📅 Nov 19, 2025</p>
                <p className="text-gray-700 text-sm">Jig successfully integrated with CPSR. Demo with real-time run completed. 300 cartridges approved for validation testing</p>
              </div>
            </div>

            {/* Phase 5 */}
            <div className="flex gap-6 py-8 px-6 bg-white border-l-4 border-green-600 hover:bg-green-50 transition-all duration-300 rounded-b-lg">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="bg-green-600 text-white font-bold w-14 h-14 rounded-full flex items-center justify-center text-lg shadow-lg">✓</div>
              </div>
              <div>
                <p className="text-lg font-bold text-black mb-2">Testing & Performance Evaluation</p>
                <p className="text-green-600 font-semibold text-sm mb-2">📅 Nov 20 - Dec 2025</p>
                <p className="text-gray-700 text-sm mb-3">Completed: Performance evaluation with 300 cartridges. Cycle time tested: 1 min 03 sec per 20 cartridges</p>
                <p className="text-3xl">✅</p>
              </div>
            </div>
          </div>
        </div>

        {/* Acknowledgments */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-black mb-2">🙏 Acknowledgments</h2>
          <p className="text-gray-600 mb-8 text-lg">Leadership & Key Stakeholders</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-white border-2 border-red-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-4xl">👔</div>
                <div className="flex-1">
                  <p className="text-lg font-bold text-black mb-1">Plant Head</p>
                  <p className="text-red-600 font-semibold text-base mb-1">G. Uday Bhaskar</p>
                  <p className="text-gray-600 text-sm">GM-Operations</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🎯</div>
                <div className="flex-1">
                  <p className="text-lg font-bold text-black mb-1">QA Management</p>
                  <p className="text-blue-600 font-semibold text-base mb-1">Hameed C.R.</p>
                  <p className="text-gray-600 text-sm">Assistant Manager - QA</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🛠️</div>
                <div className="flex-1">
                  <p className="text-lg font-bold text-black mb-1">Design Team Lead</p>
                  <p className="text-green-600 font-semibold text-base mb-1">Gompa Naidu</p>
                  <p className="text-gray-600 text-sm">HOD - DI</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-4xl">⚙️</div>
                <div className="flex-1">
                  <p className="text-lg font-bold text-black mb-1">Technical Support</p>
                  <p className="text-purple-600 font-semibold text-base mb-1">S. Chakravarthi</p>
                  <p className="text-gray-600 text-sm">Maintenance Site-III</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Contributors */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-black mb-2">🌟 Key Contributors</h2>
          <p className="text-gray-600 mb-8 text-lg">Essential Team Members & Support</p>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xl font-bold mb-2">🔧 BigTec Labs</p>
                  <p className="text-blue-100 font-semibold mb-1">Salman Khaja</p>
                  <p className="text-blue-200 text-sm">Source Code & Integration</p>
                </div>
                <div className="text-3xl">✓</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xl font-bold mb-2">🏭 Production Lead</p>
                  <p className="text-amber-100 font-semibold mb-1">Santosh Yavvari</p>
                  <p className="text-amber-200 text-sm">Inputs & Guidance</p>
                </div>
                <div className="text-3xl">✓</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xl font-bold mb-2">💻 IT Support</p>
                  <p className="text-indigo-100 font-semibold mb-1">Raj Kumar Kanithi</p>
                  <p className="text-indigo-200 text-sm">USB Access & IT Infrastructure</p>
                </div>
                <div className="text-3xl">✓</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xl font-bold mb-2">📦 Materials Team</p>
                  <p className="text-teal-100 font-semibold mb-1">G. Bala Sri Ram & Vadlapudi Ramya</p>
                  <p className="text-teal-200 text-sm">Cartridge Provision for Testing</p>
                </div>
                <div className="text-3xl">✓</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rose-600 to-rose-700 text-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xl font-bold mb-2">🔧 Maintenance Team</p>
                  <p className="text-rose-100 font-semibold mb-1">Sanjeev Varma, Bhargav, Sri Ram, Yeswanth & Team</p>
                  <p className="text-rose-200 text-sm">Technical Support & Field Troubleshooting</p>
                </div>
                <div className="text-3xl">✓</div>
              </div>
            </div>
          </div>
        </div>

        {/* Special Thanks */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-black mb-8">💖 Special Thanks</h2>
          
          <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-300 rounded-xl p-8 shadow-md">
            <div className="flex items-center gap-4">
              <div className="text-5xl">🌟</div>
              <div className="flex-1">
                <p className="text-2xl font-bold text-red-600 mb-2">CH. Praneet Raj</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  For bringing this idea into focus and supporting every step of this journey. Your mentorship and guidance were instrumental in making this project a success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Champions Initiative */}
        <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-xl p-8 shadow-lg text-white">
          <div className="flex items-start gap-4">
            <div className="text-5xl flex-shrink-0">🏆</div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-3">Champions 2.0 Initiative</h2>
              <p className="text-lg leading-relaxed font-semibold mb-4">
                This project is my Champions 2.0 initiative task — an end-to-end improvement project under the program led by GM-Operations, <span className="text-yellow-100">G. Uday Bhaskar</span>.
              </p>
              <p className="text-base leading-relaxed opacity-95">
                It demonstrates how every new joiner can implement a meaningful, impactful solution from conception to deployment, delivering measurable value to the organization.
              </p>
              <div className="mt-4 pt-4 border-t border-white border-opacity-30">
                <p className="text-sm font-semibold">✓ Built-in Prevention • ✓ Zero Cost • ✓ Full Traceability • ✓ Production Ready</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
