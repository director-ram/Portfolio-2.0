import { X } from 'lucide-react';
import { RESUME_PDF_AVAILABLE, resumeConfig } from '../resume';

type ResumeViewerProps = {
  open: boolean;
  onClose: () => void;
};

export function ResumeViewer({ open, onClose }: ResumeViewerProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Resume viewer"
    >
      <div
        className="relative w-full max-w-4xl h-[85vh] rounded-2xl overflow-hidden border border-red-500/20 bg-black shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          aria-label="Close resume viewer"
        >
          <X size={20} />
        </button>

        {RESUME_PDF_AVAILABLE ? (
          <iframe src={resumeConfig.pdf} title="Resume" className="h-full w-full" />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-6 p-8 text-center">
            <p className="text-xl font-semibold text-white">PDF resume coming soon</p>
            <p className="max-w-md text-white/70">
              An in-browser PDF version will be available here. For now, download the DOCX resume below.
            </p>
            <a
              href={resumeConfig.docx}
              download={resumeConfig.docxFilename}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-800 px-6 py-3 font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all"
            >
              Download DOCX Resume
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
