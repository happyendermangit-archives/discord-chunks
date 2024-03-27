function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("911331");

    function i(e) {
        return e === Object(e) && 0 !== Object.keys(e).length
    }
    t.default = function(e, t) {
        var n = e.isConnected || e.ownerDocument.documentElement.contains(e);
        if (i(t) && "function" == typeof t.behavior) return t.behavior(n ? (0, r.default)(e, t) : []);
        if (n) {
            var a, o = !1 === (a = t) ? {
                block: "end",
                inline: "nearest"
            } : i(a) ? a : {
                block: "start",
                inline: "nearest"
            };
            return function(e, t) {
                void 0 === t && (t = "auto");
                var n = "scrollBehavior" in document.body.style;
                e.forEach(function(e) {
                    var r = e.el,
                        i = e.top,
                        a = e.left;
                    r.scroll && n ? r.scroll({
                        top: i,
                        left: a,
                        behavior: t
                    }) : (r.scrollTop = i, r.scrollLeft = a)
                })
            }((0, r.default)(e, o), o.behavior)
        }
    }
}