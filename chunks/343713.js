function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var r = n("49691"),
        i = n("316138"),
        a = n("874900"),
        o = n("882159"),
        s = n("953177"),
        u = n("660027"),
        c = n("408431");

    function l(e) {
        return (0, o.isHTMLElement)(e) && "fixed" !== (0, a.default)(e).position ? e.offsetParent : null
    }

    function d(e) {
        for (var t = (0, r.default)(e), n = l(e); n && (0, s.default)(n) && "static" === (0, a.default)(n).position;) n = l(n);
        return n && ("html" === (0, i.default)(n) || "body" === (0, i.default)(n) && "static" === (0, a.default)(n).position) ? t : n || function(e) {
            var t = /firefox/i.test((0, c.default)());
            if (/Trident/i.test((0, c.default)()) && (0, o.isHTMLElement)(e) && "fixed" === (0, a.default)(e).position) return null;
            var n = (0, u.default)(e);
            for ((0, o.isShadowRoot)(n) && (n = n.host);
                (0, o.isHTMLElement)(n) && 0 > ["html", "body"].indexOf((0, i.default)(n));) {
                var r = (0, a.default)(n);
                if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
                n = n.parentNode
            }
            return null
        }(e) || t
    }
}