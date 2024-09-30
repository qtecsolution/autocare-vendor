import React from 'react'
import FeedBackData from './FeedBackData';

export default function ServiceFeedBack() {
  return (
    <div
      className="tab-pane fade"
      id="Services"
      role="tabpanel"
      aria-labelledby="Services-tab"
    >
      <FeedBackData feedBackType="service" />
    </div>
  );
}
