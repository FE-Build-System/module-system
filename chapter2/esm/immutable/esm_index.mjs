// index.mjs
import * as counter from "./esm_counter.mjs";

counter.value = 5; // ❌ Error
// TypeError: Cannot assign to read only property
//   'value' of object '[object Module]'
