/**
 * @param prefix: string
 */
const generateUniqueClassName = (prefix: string) => {
  const count = classNameRegistry.get(prefix)?.length ?? 0;
  const postfix = count.toString().padStart(4, '0');
  return `lighthouse${prefix ? `-${prefix}` : ''}-${postfix}`;
};

const classNameRegistry: Map<string, Array<string>> = new Map();

const createUniqueClassName = (prefix: string = ''): string => {
  const uniqueClassName = generateUniqueClassName(prefix);

  if (classNameRegistry.has(prefix)) {
    const prefixClasses = classNameRegistry.get(prefix);
    classNameRegistry.set(prefix, [uniqueClassName, ...(prefixClasses as Array<string>)]);
  } else {
    classNameRegistry.set(prefix, [uniqueClassName]);
  }
  return uniqueClassName;
};

export default createUniqueClassName;
