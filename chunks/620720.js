function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return function e(t, n) {
                void 0 === n && (n = []);
                var s, u = (0, r.default)(t),
                    c = u === (null == (s = t.ownerDocument) ? void 0 : s.body),
                    l = (0, a.default)(u),
                    d = c ? [l].concat(l.visualViewport || [], (0, o.default)(u) ? u : []) : u,
                    f = n.concat(d);
                return c ? f : f.concat(e((0, i.default)(d)))
            }
        }
    });
    var r = n("310680"),
        i = n("660027"),
        a = n("49691"),
        o = n("538018")
}