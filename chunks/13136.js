function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("686130"), n("781738");
    let a = /[<>:"/\\|?*\.]/g;
    var i = function(e) {
        return e.replaceAll(a, "").trim().replaceAll(" ", "_")
    }
}