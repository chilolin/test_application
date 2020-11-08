import React from 'react';
import { useLocation } from 'react-router-dom';

import DetailPage from './detail.component';

const DetailPageContainer = () => {
  const location = useLocation();
  const { item, docId } = location.state;

  return <DetailPage item={item} docId={docId} />
};

export default DetailPageContainer;