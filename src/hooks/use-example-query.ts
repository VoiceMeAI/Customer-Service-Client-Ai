"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/lib/react-query-utils";
import apiClient from "@/connections/api-client";

/**
 * Example: Fetch users query
 */
export function useUsers() {
  return useQuery({
    queryKey: queryKeys.users.lists(),
    queryFn: async () => {
      // Example API call
      const response = await apiClient.get<{ users: any[] }>("/users");
      return response.users;
    },
  });
}

/**
 * Example: Fetch single user query
 */
export function useUser(userId: string) {
  return useQuery({
    queryKey: queryKeys.users.detail(userId),
    queryFn: async () => {
      // Example API call
      const response = await apiClient.get<{ user: any }>(`/users/${userId}`);
      return response.user;
    },
    enabled: !!userId, // Only run query if userId is provided
  });
}

/**
 * Example: Create user mutation
 */
export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (userData: { name: string; email: string }) => {
      // Example API call
      const response = await apiClient.post<{ user: any }>("/users", userData);
      return response.user;
    },
    onSuccess: () => {
      // Invalidate and refetch users list after creation
      queryClient.invalidateQueries({ queryKey: queryKeys.users.lists() });
    },
  });
}

/**
 * Example: Update user mutation
 */
export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      userId,
      data,
    }: {
      userId: string;
      data: Partial<{ name: string; email: string }>;
    }) => {
      // Example API call
      const response = await apiClient.put<{ user: any }>(
        `/users/${userId}`,
        data
      );
      return response.user;
    },
    onSuccess: (data, variables) => {
      // Invalidate specific user and users list
      queryClient.invalidateQueries({
        queryKey: queryKeys.users.detail(variables.userId),
      });
      queryClient.invalidateQueries({ queryKey: queryKeys.users.lists() });
    },
  });
}

/**
 * Example: Delete user mutation
 */
export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (userId: string) => {
      // Example API call
      await apiClient.delete(`/users/${userId}`);
    },
    onSuccess: () => {
      // Invalidate users list after deletion
      queryClient.invalidateQueries({ queryKey: queryKeys.users.lists() });
    },
  });
}
