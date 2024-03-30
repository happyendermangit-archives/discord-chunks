function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("539277");
    t.default = function(e) {
        var t = e.children;
        return e.shouldAnimate ? r.createElement("div", {
            className: o.outerContainer
        }, r.createElement("div", {
            className: o.innerContainer
        }, t)) : t
    }
}