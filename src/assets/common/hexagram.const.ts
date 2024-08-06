export type Index = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
export const TrigramList:{ [K in Index]: Array<number> } = {
    1: [1, 1, 1],
    2: [0, 1, 1],
    3: [1, 0, 1],
    4: [0, 0, 1],
    5: [1, 1, 0],
    6: [0, 1, 0],
    7: [1, 0, 0],
    8: [0, 0, 0],
}