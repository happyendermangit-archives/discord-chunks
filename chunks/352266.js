function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    }), n("222007");
    var s = n("446674"),
        r = n("95410"),
        a = n("913144"),
        o = n("48703"),
        l = n("599110"),
        u = n("195052"),
        d = n("49111");
    let c = "BlockedDomainStore",
        _ = "BlockedDomainRevision",
        f = null;
    class E extends s.default.Store {
        initialize() {
            i = null, r.Storage.get(c) && (r.Storage.remove(_), r.Storage.remove(c))
        }
        getCurrentRevision() {
            if (null == i) {
                var e;
                i = null !== (e = r.Storage.get(_)) && void 0 !== e ? e : null
            }
            return i
        }
        async getBlockedDomainList() {
            return null == f && (f = new Set(await u.default.getBlockedDomains())), f
        }
        isBlockedDomain(e) {
            let t = n("874749");
            if (null == f) return this.getBlockedDomainList(), null;
            let i = (0, o.getHostname)(e),
                s = new t.hash.sha256,
                r = t.codec.hex.fromBits(s.update(i).finalize()),
                a = "";
            f.has(r) && (a = i);
            let u = i.indexOf(".");
            for (; - 1 !== u && "" === a;) i = i.substring(u + 1), s.reset(), r = t.codec.hex.fromBits(s.update(i).finalize()), f.has(r) && (a = i), u = i.indexOf(".");
            return "" !== a ? (l.default.track(d.AnalyticEvents.LINK_SECURITY_CHECK_BLOCKED, {
                blocked_domain: a
            }), a) : null
        }
    }
    E.displayName = "BlockedDomainStore";
    var h = new E(a.default, {
        BLOCKED_DOMAIN_LIST_FETCHED: function(e) {
            let {
                list: t,
                revision: n
            } = e;
            f = null, i = null, u.default.saveBlockedDomains(t), r.Storage.set("BlockedDomainRevision", n)
        }
    })
}