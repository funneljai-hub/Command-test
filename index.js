const RANK_PREFIX = "rank:"
const DEFAULT_RANK = "§bMember"
export function getRanks(player) {
    const ranks = player
        .getTags()
        .map((v) => {
            if (!v.startsWith(RANK_PREFIX))
                return null;
            return v.substring(RANK_PREFIX.length);
        })
        .filter((x) => x);
    return ranks.length == 0 ? [DEFAULT_RANK] : ranks;
}
