// index.mjs
import * as counter from "./esm_counter.mjs";

counter.value = 5; // ❌ 에러 발생
// TypeError: Cannot assign to read only property
//   'value' of object '[object Module]'
