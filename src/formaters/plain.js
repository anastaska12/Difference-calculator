const checkUnnested = (node) => {
  if (node === null) {
    return null;
  }
  if (typeof (node) === 'object' && node !== null) {
    return '[complex value]';
  }
  if (typeof (node) === 'string') {
    return `'${node}'`;
  }
  return String(node);
};

const plain = (value) => {
  const iter = (tree, format) => {
    const result = tree.flatMap((val) => {
      switch (val.type) {
        case 'nested':
          return iter(val.children, `${format}${val.name}.`);
        case 'added':
          return `Property '${format}${val.name}' was added with value: ${checkUnnested(val.value)}`;
        case 'changed':
          return `Property '${format}${val.name}' was updated. From ${checkUnnested(val.value1)} to ${checkUnnested(val.value2)}`;
        case 'deleted':
          return `Property '${format}${val.name}' was removed`;
        default:
          return [];
      }
    });
    return result.join('\n');
  };
  return iter(value, '');
};

export default plain;
