function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("49691"),
        i = {
            passive: !0
        };
    t.default = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(e) {
            var t = e.state,
                n = e.instance,
                a = e.options,
                o = a.scroll,
                s = void 0 === o || o,
                u = a.resize,
                c = void 0 === u || u,
                l = (0, r.default)(t.elements.popper),
                d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
            return s && d.forEach(function(e) {
                    e.addEventListener("scroll", n.update, i)
                }), c && l.addEventListener("resize", n.update, i),
                function() {
                    s && d.forEach(function(e) {
                        e.removeEventListener("scroll", n.update, i)
                    }), c && l.removeEventListener("resize", n.update, i)
                }
        },
        data: {}
    }
}