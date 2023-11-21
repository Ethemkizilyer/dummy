import React from 'react'

const Layout = ({ children }) => {
  return (
    <main>
      <div className="min-h-screen mx-auto max-w-6xl pt-24">{children}</div>
    </main>
  );
};

export default Layout