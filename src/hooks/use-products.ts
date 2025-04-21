import { useQuery } from "@tanstack/react-query";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_BASE_API_URL}`);
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json();
    },
  });
}