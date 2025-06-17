// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Alia's Portfolio. All rights reserved.</p>
    </footer>
  );
}