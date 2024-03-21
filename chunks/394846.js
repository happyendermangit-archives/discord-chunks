function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isTablet: function() {
            return p
        },
        isMobile: function() {
            return S
        },
        isIOSWeb: function() {
            return v
        }
    }), n("222007");
    var i, s, r, a, o, l, u, d, c, _, f = n("383536"),
        E = n.n(f);
    let h = new Set(["iPad", "Kindle", "Kindle Fire", "Nook", "PlayBook"]),
        g = new Set(["Android", "iOS", "Windows Phone"]),
        m = (null === (s = window) || void 0 === s ? void 0 : null === (i = s.navigator) || void 0 === i ? void 0 : i.platform) === "MacIntel" && void 0 !== (null === (a = window) || void 0 === a ? void 0 : null === (r = a.navigator) || void 0 === r ? void 0 : r.standalone) && (null === (l = window) || void 0 === l ? void 0 : null === (o = l.navigator) || void 0 === o ? void 0 : o.maxTouchPoints) > 1,
        p = h.has(null !== (c = E.product) && void 0 !== c ? c : "") || m,
        S = !p && g.has(null !== (_ = null == E ? void 0 : null === (u = E.os) || void 0 === u ? void 0 : u.family) && void 0 !== _ ? _ : ""),
        v = (null == E ? void 0 : null === (d = E.os) || void 0 === d ? void 0 : d.family) === "iOS"
}