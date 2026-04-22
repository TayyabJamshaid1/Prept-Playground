import { useState } from "react";
import { toast } from "sonner";

export const useFetch = (cb: any) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const fn = async (...args: any) => {
    setLoading(true);
    setError(null);
    try {        
      const response = await cb(...args);
      setData(response);
      setLoading(false);
      setError(null);
    } catch (error: any) {
      setError(error);
      setLoading(false);
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };
  return { data, loading, error, fn, setData };
};
