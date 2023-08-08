// types/next-language-detector.d.ts

declare module 'next-language-detector' {
  import { OrderOptions } from 'i18next-browser-languagedetector';

  type DetectResult = string | null;

  export default function LanguageDetector(options?: {
    supportedLngs?: string[];
    fallbackLng?: string | false;
    order?: OrderOptions;
    [key: string]: any;
  }): {
    detect: (order?: string[]) => DetectResult;
    cache: (lng: string, caches?: any) => void;
  };
}
