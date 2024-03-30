function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isIOSWeb: function() {
            return O
        },
        isMobile: function() {
            return h
        },
        isTablet: function() {
            return I
        }
    });
    var r, o, i, a, u, s, l, c, f, d, _ = n("264344"),
        E = n.n(_),
        p = new Set(["iPad", "Kindle", "Kindle Fire", "Nook", "PlayBook"]),
        m = new Set(["Android", "iOS", "Windows Phone"]),
        y = (null === (o = window) || void 0 === o ? void 0 : null === (r = o.navigator) || void 0 === r ? void 0 : r.platform) === "MacIntel" && void 0 !== (null === (a = window) || void 0 === a ? void 0 : null === (i = a.navigator) || void 0 === i ? void 0 : i.standalone) && (null === (s = window) || void 0 === s ? void 0 : null === (u = s.navigator) || void 0 === u ? void 0 : u.maxTouchPoints) > 1,
        I = p.has(null !== (f = E().product) && void 0 !== f ? f : "") || y,
        h = !I && m.has(null !== (d = null === E() || void 0 === E() ? void 0 : null === (l = E().os) || void 0 === l ? void 0 : l.family) && void 0 !== d ? d : ""),
        O = (null === E() || void 0 === E() ? void 0 : null === (c = E().os) || void 0 === c ? void 0 : c.family) === "iOS"
}