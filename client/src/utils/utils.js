const getTitleNames = (name) => {
   const lowercaseTitles = name.replaceAll('-', ' ').split(' ');
   return lowercaseTitles
      .map((name) => {
         return name[0].toUpperCase() + name.slice(1);
      })
      .join(' ');
};

const getProjectNavIndexes = (index) => {
   const stringIndex = index + '';
   if (stringIndex.length === 1) {
      return '0' + stringIndex;
   } else {
      return index;
   }
};

export { getTitleNames, getProjectNavIndexes };
