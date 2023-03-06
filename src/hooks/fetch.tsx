import { useState } from 'react';

export const useFetch = (callback: () => Promise<void>) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const fetch = async () => {
    try {
      setLoading(true);
      await callback();
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [fetch, loading, error] as const;
};
