function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getSystemAnalyticsInfo: function() {
            return E
        }
    }), n("222007");
    var i = n("446674"),
        s = n("913144"),
        r = n("599110"),
        a = n("773336"),
        o = n("50885"),
        l = n("760190");
    let u = {
        hashes: {}
    };
    async function d() {
        if (!a.isPlatformEmbedded || !(0, a.isWindows)()) return [];
        await o.default.ensureModule("discord_media");
        let e = o.default.requireModule("discord_media"),
            t = await e.getSystemAnalyticsBlob();
        return t || []
    }
    async function c() {
        try {
            let e = await d(),
                t = e.filter(e => u.hashes[e.name] !== e.hash);
            for (let {
                    name: e,
                    hash: n,
                    data: i
                }
                of t) r.default.track(e, i), (u = {
                hashes: {
                    ...u.hashes
                }
            }).hashes[e] = n;
            t.length > 0 && f.emitChange()
        } catch (e) {}
    }
    class _ extends i.default.PersistedStore {
        initialize(e) {
            u = null != e && "object" == typeof e.hashes ? e : {
                hashes: {}
            }, this.waitFor(l.default)
        }
        getState() {
            return u
        }
        async info() {
            try {
                let e = await d(),
                    t = e.find(e => "hardware_detected" === e.name);
                if (null == t) return null;
                return t.data
            } catch (e) {}
        }
    }
    _.displayName = "SystemAnalyticsStore", _.persistKey = "SystemAnalyticsStore";
    let f = new _(s.default, {
        START_SESSION: function() {
            return c(), !1
        }
    });

    function E() {
        return f.info()
    }
}