/** Set to true after adding public/KUNA-HEMA-SAI.pdf */
export const RESUME_PDF_AVAILABLE = true;

export const resumeConfig = {
  docx: '/KUNA-HEMA-SAI.docx',
  pdf: '/Hema_Sai_Resume.pdf',
  docxFilename: 'KUNA-HEMA-SAI.docx',
  pdfFilename: 'Hema_Sai_Resume.pdf',
} as const;

export type ResumeAction =
  | { type: 'view'; url: string }
  | { type: 'download'; url: string; filename: string };

export function getResumeViewAction(): ResumeAction {
  if (RESUME_PDF_AVAILABLE) {
    return { type: 'view', url: resumeConfig.pdf };
  }
  return {
    type: 'download',
    url: resumeConfig.docx,
    filename: resumeConfig.docxFilename,
  };
}
