function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var a = n("470079"),
        r = n("746825"),
        c = n("242880"),
        o = n("517727"),
        i = n("870331"),
        f = n("131900"),
        d = n("983852"),
        u = n("281767");

    function l(e) {
        var t;
        return null == e ? void 0 : null === (t = e._state) || void 0 === t ? void 0 : t.lastTestTimestamp
    }

    function s() {
        return a.useEffect(function() {
            window.location.origin === window.GLOBAL_ENV.MIGRATION_DESTINATION_ORIGIN && !0 !== c.Storage.get(r.DOMAIN_MIGRATION_SUCCESS_KEY) && f.default.supportsFeature(u.NativeFeatures.USER_DATA_CACHE) && (d.migrate(), o.default.userDataCache.getCached().then(function(e) {
                if (null == e) {
                    d.failMigration(), i.default.track(u.AnalyticEvents.DOMAIN_MIGRATED, {
                        success: !1,
                        has_data: !1
                    }, {
                        flush: !0
                    });
                    return
                }
                var t = Object.keys(e),
                    n = 0 !== t.length,
                    a = null != e.token,
                    f = null == e.RTCRegionStore ? null : JSON.parse(e.RTCRegionStore),
                    s = null == f || null == l(f) || l(f) <= l(c.Storage.get("RTCRegionStore"));
                n && a && !s && (c.Storage.clear(), t.forEach(function(t) {
                    var n = e[t];
                    try {
                        c.Storage.set(t, JSON.parse(n))
                    } catch (e) {}
                })), i.default.track(u.AnalyticEvents.DOMAIN_MIGRATED, {
                    success: !0,
                    current_is_newer: s,
                    has_data: n
                }, {
                    flush: !0
                }), c.Storage.set(r.DOMAIN_MIGRATION_SUCCESS_KEY, !0), o.default.userDataCache.deleteCache(), d.finishMigration()
            }))
        }, []), null
    }
}