import React from "react";
import "./preview-collection.style.scss";
import CollectionItem from '../collection-item/collection-item.component'

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="preview-collection">
      <h1 className="title">{title}</h1>

      <div className="preview">
        {items.slice(0, 4).map(item => {
          return <CollectionItem key={item.id} item={item}/>;
        })}
      </div>
    </div>
  );
};

export default PreviewCollection;
