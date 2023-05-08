import { atom } from 'jotai';

export const boardsAtom = atom([]); //게시글 목록 표시 상태
export const selectedBoardAtom = atom(null); // 클릭한 게시글의 정보를 저장해둘 상태
export const commentsAtom = atom([]); //댓글 목록 표시
export const selectedCommentAtom = atom([]); // 클릭한 댓글의 정보를 저장해둘 상태 즉, 이걸 다시 보여줄 거 아니라면 굳이..?
export const repliesAtom = atom([]); //대댓글 목록 표시
export const nutritionsAtom = atom([]);
export const selectedNutritionAtom = atom(null);
