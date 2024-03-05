function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return a
        }
    });
    var n = r("604676");

    function u(e) {
        return e === Object(e) && 0 !== Object.keys(e).length
    }
    var a = function(e, t) {
        var r = e.isConnected || e.ownerDocument.documentElement.contains(e);
        if (u(t) && "function" == typeof t.behavior) return t.behavior(r ? (0, n.default)(e, t) : []);
        if (r) {
            var a, o = !1 === (a = t) ? {
                block: "end",
                inline: "nearest"
            } : u(a) ? a : {
                block: "start",
                inline: "nearest"
            };
            return function(e, t) {
                void 0 === t && (t = "auto");
                var r = "scrollBehavior" in document.body.style;
                e.forEach(function(e) {
                    var n = e.el,
                        u = e.top,
                        a = e.left;
                    n.scroll && r ? n.scroll({
                        top: u,
                        left: a,
                        behavior: t
                    }) : (n.scrollTop = u, n.scrollLeft = a)
                })
            }((0, n.default)(e, o), o.behavior)
        }
    }
}