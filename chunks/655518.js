function(D, u, E) {
    "use strict";
    E.r(u), E.d(u, {
        default: function() {
            return C
        }
    }), E("781738");
    var C = {
        escape: D => D.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
    }
}