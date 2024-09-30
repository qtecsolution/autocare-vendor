import React from 'react';
import FeedBackData from './FeedBackData';
export default function ProductFeedback() {
  return (
    <div
      className="tab-pane fade active show"
      id="Product"
      role="tabpanel"
      aria-labelledby="Product-tab"
    >
      <FeedBackData feedBackType="product" />
    </div>
  );
}
