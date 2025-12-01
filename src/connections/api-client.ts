"use client";

import BaseAPI from "@/connections/base-api";

class ApiClient {
  private static instance: BaseAPI;

  public static getInstance(): BaseAPI {
    if (!ApiClient.instance) {
      ApiClient.instance = new BaseAPI();
    }
    return ApiClient.instance;
  }

  public static reinitialize(token?: string): BaseAPI {
    ApiClient.instance = new BaseAPI(token);
    return ApiClient.instance;
  }

  public static clearInstance(): void {
    if (ApiClient.instance) {
      ApiClient.instance.clearToken();
    }
    ApiClient.instance = new BaseAPI();
  }
}

export const apiClient = ApiClient.getInstance();

export { ApiClient };

export default apiClient;
