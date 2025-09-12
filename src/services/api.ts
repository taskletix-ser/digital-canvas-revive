// API service for backend communication
const API_BASE_URL = '/api';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  country_code?: string;
  company?: string;
  project_type?: string;
  budget_range?: string;
  timeline?: string;
  project_details: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  country_code: string;
  company: string;
  project_type: string;
  budget_range: string;
  timeline: string;
  project_details: string;
  created_at: string;
}

export interface ApiResponse<T = any> {
  ok: boolean;
  message?: string;
  error?: string;
  data?: T;
}

export interface ContactResponse extends ApiResponse {
  submissionId?: string;
}

export interface SubmissionsResponse extends ApiResponse {
  submissions: ContactSubmission[];
  total: number;
  limit: number;
  offset: number;
}

export interface StatsResponse extends ApiResponse {
  stats: {
    totalSubmissions: number;
    recentSubmissions: number;
    projectTypeStats: Array<{ _id: string; count: number }>;
    monthlyStats: Array<{ _id: { year: number; month: number }; count: number }>;
  };
}

// Generic API request function
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const config = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || `HTTP error! status: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

// Contact API functions
export const contactApi = {
  // Submit contact form
  async submitContact(formData: ContactFormData): Promise<ContactResponse> {
    return apiRequest<ContactResponse>('/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  },

  // Health check
  async healthCheck(): Promise<ApiResponse> {
    return apiRequest<ApiResponse>('/contact/health');
  },
};

// Admin API functions
export const adminApi = {
  // Admin login
  async login(password: string, username?: string): Promise<ApiResponse & { token?: string }> {
    return apiRequest<ApiResponse & { token?: string }>('/admin/login', {
      method: 'POST',
      body: JSON.stringify({ username: username || 'admin', password }),
    });
  },

  // Get submissions
  async getSubmissions(
    limit: number = 10,
    offset: number = 0,
    search?: string
  ): Promise<SubmissionsResponse> {
    const params = new URLSearchParams({
      limit: limit.toString(),
      offset: offset.toString(),
      ...(search && { search }),
    });

    return apiRequest<SubmissionsResponse>(`/admin/submissions?${params}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
      },
    });
  },

  // Get dashboard stats
  async getStats(): Promise<StatsResponse> {
    return apiRequest<StatsResponse>('/admin/stats', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
      },
    });
  },

  // Export PDF
  async exportPDF(): Promise<Blob> {
    const response = await fetch(`${API_BASE_URL}/admin/export/pdf`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to export PDF');
    }

    return response.blob();
  },
};

// Utility functions
export const downloadFile = (blob: Blob, filename: string) => {
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};

export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('adminToken');
  if (!token) return false;

  try {
    // Basic token validation (you might want to add more sophisticated validation)
    const payload = JSON.parse(atob(token.split('.')[1]));
    const now = Date.now() / 1000;
    return payload.exp > now;
  } catch {
    return false;
  }
};

export const logout = (): void => {
  localStorage.removeItem('adminToken');
  window.location.href = '/';
};
