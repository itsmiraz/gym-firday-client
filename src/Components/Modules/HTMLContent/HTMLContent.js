import React from 'react';
import PropTypes from 'prop-types';

const HTMLContent = ({ content }) => {
  const createMarkup = () => ({ __html: content });

  const getClassNames = (tag) => {
    switch (tag) {
      case 'h1':
        return 'text-2xl font-bold mb-4';
      case 'p':
        return 'mb-2';
      case 'ol':
        return 'list-decimal ml-4 mb-4';
      case 'li':
        return 'mb-2';
      case 'blockquote':
        return 'border-l-4 pl-4 italic my-4';
      case 'a':
        return 'text-blue-500';
      default:
        return '';
    }
  };

  const renderTag = (node, index) => {
    if (typeof node === 'string') {
      return node;
    }

    const { type, props } = node;
    const classNames = getClassNames(type);

    if (classNames) {
      return React.createElement(type, { ...props, className: classNames, key: index }, props.children);
    }

    return node;
  };

  const renderContent = () => {
    const parsedHTML = new DOMParser().parseFromString(content, 'text/html');
    const bodyNodes = Array.from(parsedHTML.body.childNodes);

    return bodyNodes.reduce((result, node, index) => {
      if (node.nodeName === '#text') {
        result.push(node.textContent);
      } else {
        result.push(renderTag(node, index));
      }
      return result;
    }, []);
  };

  return <div>{renderContent()}</div>;
};

HTMLContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default HTMLContent;
