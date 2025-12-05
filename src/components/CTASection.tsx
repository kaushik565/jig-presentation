'use client';

export function CTASection() {
  return (
    <section className="bg-gradient-to-r from-red-600 to-red-700 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Implement?
        </h2>
        
        <p className="text-lg md:text-xl text-red-100 mb-12 leading-relaxed">
          The Batch Mix-Up Detection JIG is production-ready and validated. 
          Take the next step to eliminate mix-ups and ensure 100% traceability across your operations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="mailto:p.lakshmana.sai.kaushik@molbio.com?subject=JIG Implementation Request"
            className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Request Implementation
          </a>
          
          <a
            href="#0"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-block bg-red-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View Full Presentation
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-red-500">
          <div className="text-center">
            <p className="text-4xl font-bold text-white mb-2">100%</p>
            <p className="text-red-100 text-sm">Accuracy</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-white mb-2">0</p>
            <p className="text-red-100 text-sm">False Rejections</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-white mb-2">300+</p>
            <p className="text-red-100 text-sm">Tested & Verified</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-white mb-2">0 $</p>
            <p className="text-red-100 text-sm">Additional Cost</p>
          </div>
        </div>

        <p className="text-red-100 mt-12 text-sm">
          Questions? Contact: <a href="mailto:p.lakshmana.sai.kaushik@molbio.com" className="underline text-white font-semibold hover:text-red-50 transition-colors">P. Lakshmana Sai Kaushik</a>
        </p>
      </div>
    </section>
  );
}
