import { useState, useEffect } from 'react';
import type { PortfolioData } from './ai-parser';

export function useResumeData() {
  const [data, setData] = useState<PortfolioData | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('folio_ai_resume_data');
      if (stored) {
        try {
          setData(JSON.parse(stored));
        } catch (e) {
          console.error("Failed to parse resume data from localStorage");
        }
      }
    }
  }, []);

  return data;
}
