function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getSystemAnalyticsInfo: function() {
            return f
        }
    }), n("47120");
    var i, r = n("442837"),
        s = n("570140"),
        a = n("626135"),
        o = n("358085"),
        l = n("998502"),
        u = n("828695");

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let _ = {
        hashes: {}
    };
    async function c() {
        if (!o.isPlatformEmbedded || !(0, o.isWindows)()) return [];
        await l.default.ensureModule("discord_media");
        let e = l.default.requireModule("discord_media");
        return await e.getSystemAnalyticsBlob() || []
    }
    async function E() {
        try {
            let e = (await c()).filter(e => _.hashes[e.name] !== e.hash);
            for (let {
                    name: t,
                    hash: n,
                    data: i
                }
                of e) a.default.track(t, i), (_ = {
                hashes: {
                    ..._.hashes
                }
            }).hashes[t] = n;
            e.length > 0 && T.emitChange()
        } catch (e) {}
    }
    class I extends(i = r.default.PersistedStore) {
        initialize(e) {
            _ = null != e && "object" == typeof e.hashes ? e : {
                hashes: {}
            }, this.waitFor(u.default)
        }
        getState() {
            return _
        }
        async info() {
            try {
                let e = (await c()).find(e => "hardware_detected" === e.name);
                if (null == e) return null;
                return e.data
            } catch (e) {}
        }
    }
    d(I, "displayName", "SystemAnalyticsStore"), d(I, "persistKey", "SystemAnalyticsStore");
    let T = new I(s.default, {
        START_SESSION: function() {
            return E(), !1
        }
    });

    function f() {
        return T.info()
    }
}