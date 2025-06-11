export const genreMap: { [key: number]: string } = {
  28: "Hành động",
  12: "Phiêu lưu",
  16: "Hoạt hình",
  35: "Hài hước",
  80: "Tội phạm",
  99: "Tài liệu",
  18: "Chính kịch",
  10751: "Gia đình",
  14: "Kỳ ảo",
  36: "Lịch sử",
  27: "Kinh dị",
  10402: "Ca nhạc",
  9648: "Bí ẩn",
  10749: "Lãng mạn",
  878: "Khoa học viễn tưởng",
  10770: "Phim truyền hình",
  53: "Giật gân",
  10752: "Chiến tranh",
  37: "Miền Tây",
};

export function getGenreNamesByIds(genreIds: number[]): string[] {
  if (!genreIds || genreIds.length === 0) {
    return [];
  }
  return genreIds
    .map((id) => genreMap[id])
    .filter((name) => name !== undefined);
}
