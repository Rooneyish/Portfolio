import React from 'react';

const SYSTEM_LOGS = [
  {
    id: "01",
    name: "Hansei App",
    category: "RAG ARCHITECTURE",
    summary: "Asynchronous processing backend integrating FastAPI systems with a high-fidelity Qdrant vector database index. Deploys custom contextual embeddings to cross-reference guidelines under strict latency constraints.",
    stack: "FastAPI, Qdrant, React Native, Node.js, Transformers",
    links: [
      { label: "[source_code]", url: "https://github.com/Rooneyish/Hansei" }
    ]
  },
  {
    id: "02",
    name: "GoEmotions Multi-Label Classifier",
    category: "NLP OPTIMIZATION",
    summary: "Deep language parsing grid tracking 27 distinct conversational features. Built, optimized, and benchmarked custom Bi-LSTM layers and Transformer encoders from scratch without third-party abstraction modules.",
    stack: "PyTorch, Transformers, NumPy, Tokenizers",
    links: [
      { label: "[source_code]", url: "https://github.com/Rooneyish/GoEmotion_Classification" }
    ]
  },
  {
    id: "03",
    name: "Deforestation Detection",
    category: "COMPUTER VISION",
    summary: "Satellite terrain classification grid processing multi-spectral arrays. Benchmarked deep convolutional feature map extractors against optimized ResNet layers with real-time analytics verification.",
    stack: "TensorFlow, OpenCV, Gradio, Sci-Kit Learn",
    links: [
      { label: "[source_code]", url: "https://github.com/Rooneyish/deforestation_detection" }
    ]
  },
  {
    id: "04",
    name: "Devanagari OCR",
    category: "COMPUTER VISION PIPELINE",
    summary: "Localized script character-level recognition engine handling complex conjoined ligatures. Optimized performance by compiling model structures down to MobileNetV2 parameters.",
    stack: "PyTorch, MobileNetV2, FastAPI, Docker",
    links: [
      { label: "[api_source]", url: "https://github.com/Rooneyish/devanagari_ocr_app" },
      { label: "[model_source]", url: "https://github.com/Rooneyish/devanagari_ocr" }
    ]
  }
];

export default function ProjectsPage() {
  return (
    <div className="px-6 py-16 font-mono">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xs font-bold text-scholz-muted uppercase tracking-widest mb-12 border-b border-scholz-line pb-2">
          / artifacts_directory
        </h2>

        <div className="space-y-14">
          {SYSTEM_LOGS.map((log) => (
            <div key={log.id} className="space-y-3 group">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-scholz-line/40 pb-1">
                <h3 className="text-sm font-bold text-scholz-text group-hover:underline cursor-pointer">
                  {log.id}. {log.name}
                </h3>
                <span className="text-[10px] text-scholz-muted font-normal uppercase tracking-wider">
                  // {log.category}
                </span>
              </div>

              <p className="text-scholz-muted text-xs sm:text-sm leading-relaxed text-justify">
                {log.summary}
              </p>

              <div className="text-xs space-y-1 pt-1 text-scholz-muted">
                <div><span className="text-scholz-text font-bold">[engine]</span> {log.stack}</div>
              </div>

              {/* Dynamic Action Link Hub */}
              <div className="pt-2 flex flex-wrap gap-4">
                {log.links.map((link, idx) => (
                  <a 
                    key={idx}
                    href={link.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xs text-scholz-text font-bold hover:underline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}