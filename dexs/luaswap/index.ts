import { CHAIN } from "../../helpers/chains";
import { univ2Adapter } from "../../helpers/getUniSubgraphVolume";
process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'
export default univ2Adapter({
  [CHAIN.TOMOCHAIN]: "https://api.luaswap.org/subgraphs/name/phucngh/Luaswap3",
  [CHAIN.ETHEREUM]: "https://api.thegraph.com/subgraphs/name/phucngh/luaswap"
}, {});
