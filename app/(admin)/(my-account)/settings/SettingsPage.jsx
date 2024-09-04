import GlobalSearch from '@/components/admin/GlobalSearch'
import React from 'react'

function SettingsPage() {
    return (
        <main id="content">
            <div className="inner-content">
                <GlobalSearch />

                <section className="order-management-section">
                    <div className="order-management-section-inner">
                        <div className="order-management-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <h1 className="title">Setting</h1>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    )
}

export default SettingsPage