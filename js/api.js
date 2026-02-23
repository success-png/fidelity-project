/**
 * Fidelity Investment API Service
 * Frontend JavaScript for connecting HTML pages to the backend API
 */

// API Configuration
const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:5000/api';

// Auth Token Management
const AuthService = {
  // Get stored token
  getToken() {
    return localStorage.getItem('fidelity_token');
  },

  // Set token
  setToken(token) {
    localStorage.setItem('fidelity_token', token);
  },

  // Remove token
  removeToken() {
    localStorage.removeItem('fidelity_token');
    localStorage.removeItem('fidelity_user');
  },

  // Get stored user
  getUser() {
    const user = localStorage.getItem('fidelity_user');
    return user ? JSON.parse(user) : null;
  },

  // Set user
  setUser(user) {
    localStorage.setItem('fidelity_user', JSON.stringify(user));
  },

  // Check if logged in
  isLoggedIn() {
    return !!this.getToken();
  },

  // Logout
  logout() {
    this.removeToken();
    window.location.href = 'pages/login.html';
  }
};

// API Service
const api = {
  // Helper for fetch requests
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const token = AuthService.getToken();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    // Add auth token if available
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'An error occurred');
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  // Auth endpoints
  auth: {
    async register(userData) {
      const data = await api.request('/auth/register', {
        method: 'POST',
        body: JSON.stringify(userData),
      });

      if (data.token) {
        AuthService.setToken(data.token);
        AuthService.setUser(data.user);
      }

      return data;
    },

    async login(username, password) {
      const data = await api.request('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
      });

      if (data.token) {
        AuthService.setToken(data.token);
        AuthService.setUser(data.user);
      }

      return data;
    },

    async logout() {
      try {
        await api.request('/auth/logout', { method: 'POST' });
      } finally {
        AuthService.logout();
      }
    },

    async getProfile() {
      return api.request('/auth/profile');
    }
  },

  // User endpoints
  users: {
    async getProfile() {
      return api.request('/users/profile');
    },

    async updateProfile(userData) {
      return api.request('/users/profile', {
        method: 'PUT',
        body: JSON.stringify(userData),
      });
    }
  }
};

// Form Validation Helpers
const Validation = {
  // Email validation
  isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  },

  // Password strength validation
  isValidPassword(password) {
    // At least 8 characters, 1 letter, 1 number
    const re = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    return re.test(password);
  },

  // Required field validation
  isRequired(value) {
    return value && value.trim() !== '';
  },

  // Min length validation
  minLength(value, length) {
    return value && value.length >= length;
  },

  // Show error message
  showError(input, message) {
    const formGroup = input.closest('.form-group');
    if (formGroup) {
      const errorEl = formGroup.querySelector('.error-message') || document.createElement('div');
      errorEl.className = 'error-message';
      errorEl.textContent = message;
      errorEl.style.color = '#e31c3d';
      errorEl.style.fontSize = '12px';
      errorEl.style.marginTop = '4px';
      if (!formGroup.querySelector('.error-message')) {
        formGroup.appendChild(errorEl);
      }
      input.style.borderColor = '#e31c3d';
    }
  },

  // Clear error message
  clearError(input) {
    const formGroup = input.closest('.form-group');
    if (formGroup) {
      const errorEl = formGroup.querySelector('.error-message');
      if (errorEl) {
        errorEl.remove();
      }
      input.style.borderColor = '';
    }
  },

  // Clear all errors in form
  clearAllErrors(form) {
    form.querySelectorAll('.error-message').forEach(el => el.remove());
    form.querySelectorAll('input').forEach(input => {
      input.style.borderColor = '';
    });
  }
};

// Initialize forms when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Handle login form
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      Validation.clearAllErrors(this);

      const username = document.getElementById('username');
      const password = document.getElementById('password');

      let hasErrors = false;

      if (!Validation.isRequired(username.value)) {
        Validation.showError(username, 'Username or email is required');
        hasErrors = true;
      }

      if (!Validation.isRequired(password.value)) {
        Validation.showError(password, 'Password is required');
        hasErrors = true;
      }

      if (hasErrors) return;

      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Logging in...';
      submitBtn.disabled = true;

      try {
        const result = await api.auth.login(username.value, password.value);

        if (result.success) {
          window.location.href = 'pages/dashboard.html';
        }
      } catch (error) {
        Validation.showError(username, error.message);
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });

    // Clear errors on input
    document.getElementById('loginForm').querySelectorAll('input').forEach(input => {
      input.addEventListener('input', () => Validation.clearError(input));
    });
  }

  // Handle registration form
  const registerForm = document.getElementById('registerForm') || document.getElementById('openAccountForm');
  if (registerForm) {
    registerForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      Validation.clearAllErrors(this);

      const firstName = document.getElementById('firstName');
      const lastName = document.getElementById('lastName');
      const email = document.getElementById('email');
      const username = document.getElementById('username');
      const password = document.getElementById('password');

      let hasErrors = false;

      if (!Validation.isRequired(firstName.value)) {
        Validation.showError(firstName, 'First name is required');
        hasErrors = true;
      }

      if (!Validation.isRequired(lastName.value)) {
        Validation.showError(lastName, 'Last name is required');
        hasErrors = true;
      }

      if (!Validation.isRequired(email.value)) {
        Validation.showError(email, 'Email is required');
        hasErrors = true;
      } else if (!Validation.isValidEmail(email.value)) {
        Validation.showError(email, 'Please enter a valid email');
        hasErrors = true;
      }

      if (!Validation.isRequired(username.value)) {
        Validation.showError(username, 'Username is required');
        hasErrors = true;
      } else if (!Validation.minLength(username.value, 4)) {
        Validation.showError(username, 'Username must be at least 4 characters');
        hasErrors = true;
      }

      if (!Validation.isRequired(password.value)) {
        Validation.showError(password, 'Password is required');
        hasErrors = true;
      } else if (!Validation.isValidPassword(password.value)) {
        Validation.showError(password, 'Must be at least 8 characters with 1 letter and 1 number');
        hasErrors = true;
      }

      if (hasErrors) return;

      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Creating account...';
      submitBtn.disabled = true;

      try {
        const result = await api.auth.register({
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
          username: username.value,
          password: password.value
        });

        if (result.success) {
          window.location.href = 'pages/dashboard.html';
        }
      } catch (error) {
        Validation.showError(email, error.message);
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });

    // Clear errors on input
    registerForm.querySelectorAll('input').forEach(input => {
      input.addEventListener('input', () => Validation.clearError(input));
    });
  }

  // Handle logout
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', async function(e) {
      e.preventDefault();
      await api.auth.logout();
    });
  }

  // Check auth status on protected pages
  const protectedPages = ['dashboard.html', 'portfolio.html', 'account-positions.html'];
  const currentPage = window.location.pathname.split('/').pop();

  if (protectedPages.includes(currentPage) && !AuthService.isLoggedIn()) {
    window.location.href = 'pages/login.html';
  }

  // Update UI for logged in user
  if (AuthService.isLoggedIn()) {
    const user = AuthService.getUser();
    const userDisplayElements = document.querySelectorAll('.user-display-name');
    userDisplayElements.forEach(el => {
      el.textContent = user ? `${user.firstName} ${user.lastName}` : 'User';
    });
  }
});

// Export for global use
window.AuthService = AuthService;
window.api = api;
window.Validation = Validation;
