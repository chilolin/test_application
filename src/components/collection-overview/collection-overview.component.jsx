import React from "react";

const CollectionOverview = ({ items, WrappedComponent, num }) => {
  return (
    <div className="collection-container">
      {items
        .filter((_, idx) => idx < num)
        .map((item) => (
          <WrappedComponent key={item.id} {...item} />
        ))}
    </div>
  );
};

export default CollectionOverview;
