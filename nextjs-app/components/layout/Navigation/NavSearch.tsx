'use client';

import React, { useState } from 'react';

export function NavSearch() {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // Redirect to search or handle search logic
      console.log('Search query:', query);
      // You can redirect to search page or handle search here
      // For now, let's clear the search
      setQuery('');
    }
  };

  return (
    <div className="nav-search">
      <form onSubmit={handleSubmit} className="nav-search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          className="nav-search-input"
        />
        <button type="submit" className="nav-search-submit" aria-label="Submit search">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
}
