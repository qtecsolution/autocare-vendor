import GlobalSearch from '@/components/admin/GlobalSearch';
import React from 'react';
import Settings from './Settings';
export default function Page() {
  return (
    <main id="content">
      <div className="inner-content">
        <GlobalSearch />
        <div className="settings-header">
          <div className="settings-header-inner">
            <h1 className="title">Settings</h1>
          </div>
        </div>
        <Settings />
      </div>
    </main>
  );
}
