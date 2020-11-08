import React from 'react';
import { useLocation } from 'react-router-dom';

import CatalogPage from './catalog.component';

const CatalogPageContainer = () => {
  const location = useLocation();
  const menu = location.state;

  return <CatalogPage menu={menu} />
};

export default CatalogPageContainer;