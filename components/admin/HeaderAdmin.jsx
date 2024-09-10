import Link from 'next/link';

export default function HeaderAdmin() {
    return (
        <>
        <header className="header-section">
            <div className="container">
                <div className="header-section-inner d-flex align-items-center justify-content-between gap-4">
                    <div className="logo">
                        <Link href="/">
                            <img src="/assets/images/Logo-2.png" alt="logo" />
                        </Link>
                    </div>

                    <ul className="header-button list-unstyled d-flex align-items-center gap-3">
                        <Link href="/">
                        Skip
                        </Link>
                    </ul>
                </div>
            </div>
        </header>
        </>
    );
}
