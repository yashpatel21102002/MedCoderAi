declare module 'pdfjs-dist/build/pdf';
declare module 'pdfjs-dist/build/pdf.worker.entry';
declare module 'pdfjs-dist/build/pdf.worker.min.js?url' {
    const workerSrc: string;
    export default workerSrc;
}
