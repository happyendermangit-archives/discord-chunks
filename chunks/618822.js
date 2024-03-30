function(e, t, n) {
    "use strict";
    n.r(t);
    var r = /[<>:"/\\|?*\.]/g;
    t.default = function(e) {
        return e.replaceAll(r, "").trim().replaceAll(" ", "_")
    }
}