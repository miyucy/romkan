const assert = require("assert");
const Romkan = require("./lib");
assert(Romkan.default("wareomouyueniwareari") === "われおもうゆえにわれあり");
assert(Romkan.romkan("wareomouyueniwareari") === "われおもうゆえにわれあり");
