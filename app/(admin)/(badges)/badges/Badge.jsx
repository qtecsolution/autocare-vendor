import Image from 'next/image';
import React from 'react';

export default function Badge({ badge,color}) {
  return (
    <div className="badge-section">
      <div className="row g-3">
        <div className="col-sm-4 col-lg-3">
          <div className="d-flex align-items-center h-100">
            <button className={`badge ${color}`}>
              <Image
                src={badge?.icon}
                width={16}
                height={16}
                alt={badge?.name}
              />
              <span>{badge?.name}</span>
            </button>
          </div>
        </div>

        <div className="col-sm-8 col-lg-9">
          <div className="d-flex flex-column gap-1">
            <h3 className="badge-title">{badge?.name}</h3>
            <p className="badge-details">{badge?.short_description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
