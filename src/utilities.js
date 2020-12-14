export const getTextColor = (colorHex) => {
  const colors = [
    parseInt(colorHex.slice(1, 3), 16),
    parseInt(colorHex.slice(3, 5), 16),
    parseInt(colorHex.slice(5), 16)
  ];
  
  const [r, g, b] = colors.map((color) => {
     color /= 255.0;

     if (color <= 0.03928) {
       color /= 12.92;
     } else {
       color = Math.pow((color + 0.055) / 1.055, 2.4);
     }

     return color;
  });

  const L = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  return L > 0.179 ? '#000000' : '#ffffff';
};

export const getCategoryStyle = (category) => {
  if (category === null) {
    return '';
  } else {
      return {
          'background-color': category.color,
          'color': getTextColor(category.color),
      };
  }
};