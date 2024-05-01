function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isIOSWeb: function() {
            return m
        },
        isMobile: function() {
            return A
        },
        isTablet: function() {
            return h
        }
    }), n("47120");
    var i, r, a, s, o, l, u, d, _, c, E = n("264344"),
        I = n.n(E);
    let T = new Set(["iPad", "Kindle", "Kindle Fire", "Nook", "PlayBook"]),
        f = new Set(["Android", "iOS", "Windows Phone"]),
        S = (null === (r = window) || void 0 === r ? void 0 : null === (i = r.navigator) || void 0 === i ? void 0 : i.platform) === "MacIntel" && void 0 !== (null === (s = window) || void 0 === s ? void 0 : null === (a = s.navigator) || void 0 === a ? void 0 : a.standalone) && (null === (l = window) || void 0 === l ? void 0 : null === (o = l.navigator) || void 0 === o ? void 0 : o.maxTouchPoints) > 1,
        h = T.has(null !== (_ = I().product) && void 0 !== _ ? _ : "") || S,
        A = !h && f.has(null !== (c = null === I() || void 0 === I() ? void 0 : null === (u = I().os) || void 0 === u ? void 0 : u.family) && void 0 !== c ? c : ""),
        m = (null === I() || void 0 === I() ? void 0 : null === (d = I().os) || void 0 === d ? void 0 : d.family) === "iOS"
}