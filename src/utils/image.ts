export const getImgSrc = (id: number | null) => {
  return `https://picsum.photos/id/${id || 0}/600/600`;
};
