import Link from 'next/link';

export default function Header2() {
    return (
        <>
        <header className="header-section">
            <div className="container">
                <div className="header-section-inner d-flex align-items-center justify-content-between gap-4">
                    <div className="logo">
                        <Link href="/login">
                            <img src="/assets/images/Logo-2.png" alt="logo" />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
}
