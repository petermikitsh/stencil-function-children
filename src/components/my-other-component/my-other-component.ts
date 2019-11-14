export const MyOtherComponent = (props, children) => {
  debugger;
  const renderer = children[0];
  return renderer();
};
