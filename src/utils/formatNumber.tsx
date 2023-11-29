const FormatNumber = (num: number) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  } else {
    return num.toString();
  }
};

export default FormatNumber;
