function(l, o, r) {
    "use strict";
    r.r(o), o.default = {
        escape: function(l) {
            return l.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
        }
    }
}