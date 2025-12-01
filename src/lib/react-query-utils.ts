/**
 * Common React Query utilities and helpers
 */

// Query Keys Factory
export const queryKeys = {
  // Example: User queries
  users: {
    all: ["users"] as const,
    lists: () => [...queryKeys.users.all, "list"] as const,
    list: (filters: Record<string, unknown>) =>
      [...queryKeys.users.lists(), { filters }] as const,
    details: () => [...queryKeys.users.all, "detail"] as const,
    detail: (id: string) => [...queryKeys.users.details(), id] as const,
  },

  // Example: Posts queries
  posts: {
    all: ["posts"] as const,
    lists: () => [...queryKeys.posts.all, "list"] as const,
    list: (filters: Record<string, unknown>) =>
      [...queryKeys.posts.lists(), { filters }] as const,
    details: () => [...queryKeys.posts.all, "detail"] as const,
    detail: (id: string) => [...queryKeys.posts.details(), id] as const,
  },

  // Add more query key factories as needed
} as const;

// Common query options
export const commonQueryOptions = {
  refetchOnWindowFocus: false,
  staleTime: 60 * 1000, // 1 minute
  retry: 1,
} as const;
