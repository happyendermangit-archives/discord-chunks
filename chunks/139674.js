function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n("47120");
    var r, s, a, o, l = n("442837"),
        u = n("433517"),
        d = n("570140"),
        _ = n("902676"),
        c = n("626135"),
        E = n("704133"),
        I = n("981631");
    let T = "BlockedDomainStore",
        f = "BlockedDomainRevision",
        S = null;
    class h extends(r = l.default.Store) {
        initialize() {
            i = null, u.Storage.get(T) && (u.Storage.remove(f), u.Storage.remove(T))
        }
        getCurrentRevision() {
            if (null == i) {
                var e;
                i = null !== (e = u.Storage.get(f)) && void 0 !== e ? e : null
            }
            return i
        }
        async getBlockedDomainList() {
            return null == S && (S = new Set(await E.default.getBlockedDomains())), S
        }
        isBlockedDomain(e) {
            let t = n("647229");
            if (null == S) return this.getBlockedDomainList(), null;
            let i = (0, _.getHostname)(e),
                r = new t.hash.sha256,
                s = t.codec.hex.fromBits(r.update(i).finalize()),
                a = "";
            S.has(s) && (a = i);
            let o = i.indexOf(".");
            for (; - 1 !== o && "" === a;) i = i.substring(o + 1), r.reset(), s = t.codec.hex.fromBits(r.update(i).finalize()), S.has(s) && (a = i), o = i.indexOf(".");
            return "" !== a ? (c.default.track(I.AnalyticEvents.LINK_SECURITY_CHECK_BLOCKED, {
                blocked_domain: a
            }), a) : null
        }
    }
    o = "BlockedDomainStore", (a = "displayName") in(s = h) ? Object.defineProperty(s, a, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : s[a] = o, t.default = new h(d.default, {
        BLOCKED_DOMAIN_LIST_FETCHED: function(e) {
            let {
                list: t,
                revision: n
            } = e;
            S = null, i = null, E.default.saveBlockedDomains(t), u.Storage.set("BlockedDomainRevision", n)
        }
    })
}