'use client'
import React, { useEffect, useRef } from 'react'
import Badge from './Badge'
import GlobalSearch from '@/components/admin/GlobalSearch'
import { getAuthUser } from '@/utils/auth';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import AlertToast from '@/components/toast/AlertToast';

function BadgesPage({ badges, BadgeColor }) {
  const router = useRouter();
  const isToastShown = useRef(false);
  const sellerInfo = getAuthUser();
  useEffect(() => {
    const isVerified = sellerInfo?.store?.is_verified;
    if (!isVerified) {
      router.push('/');
      if (!isToastShown.current) {
        isToastShown.current = true;
        toast.custom((t) => (
          <AlertToast
            message="Your store is not verified !"
            dismiss={() => toast.dismiss(t.id)}
          />
        ));
      }
    }
  }, [sellerInfo, router]);
  return (
    <main id="content">
      <div className="inner-content">
        <GlobalSearch />
        <section className="earned-badge-section mt-4">
          <div className="earned-badge-section-inner">
            <h1 className="title">Badges</h1>

            <div className="mt-4 earned-badge-inner">
              <h2 className="sub-title">Earned badge</h2>

              <div className="badge-section-inner">
                {badges?.map((badge, index) => (
                  <Badge
                    key={index}
                    badge={badge?.badge}
                    color={BadgeColor[Math.floor(Math.random() * BadgeColor.length)]}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default BadgesPage