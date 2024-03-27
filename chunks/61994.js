function(e, t, n) {
    "use strict";
    n.r(t), n("627494"), n("757143");
    let i = /[<>:"/\\|?*\.]/g;
    t.default = function(e) {
        return e.replaceAll(i, "").trim().replaceAll(" ", "_")
    }
}