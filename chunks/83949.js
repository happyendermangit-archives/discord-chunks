function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        default: function() {
            return u
        }
    });
    var d = a("470079"),
        n = a("719711"),
        i = a("433517"),
        c = a("579806"),
        o = a("626135"),
        r = a("998502"),
        f = a("286035"),
        s = a("981631");

    function l(e) {
        var t;
        return null == e ? void 0 : null === (t = e._state) || void 0 === t ? void 0 : t.lastTestTimestamp
    }

    function u() {
        return d.useEffect(() => {
            window.location.origin === window.GLOBAL_ENV.MIGRATION_DESTINATION_ORIGIN && !0 !== i.Storage.get(n.DOMAIN_MIGRATION_SUCCESS_KEY) && r.default.supportsFeature(s.NativeFeatures.USER_DATA_CACHE) && (f.migrate(), c.default.userDataCache.getCached().then(e => {
                if (null == e) {
                    f.failMigration(), o.default.track(s.AnalyticEvents.DOMAIN_MIGRATED, {
                        success: !1,
                        has_data: !1
                    }, {
                        flush: !0
                    });
                    return
                }
                let t = Object.keys(e),
                    a = 0 !== t.length,
                    d = null != e.token,
                    r = null == e.RTCRegionStore ? null : JSON.parse(e.RTCRegionStore),
                    u = null == r || null == l(r) || l(r) <= l(i.Storage.get("RTCRegionStore"));
                a && d && !u && (i.Storage.clear(), t.forEach(t => {
                    let a = e[t];
                    try {
                        i.Storage.set(t, JSON.parse(a))
                    } catch (e) {}
                })), o.default.track(s.AnalyticEvents.DOMAIN_MIGRATED, {
                    success: !0,
                    current_is_newer: u,
                    has_data: a
                }, {
                    flush: !0
                }), i.Storage.set(n.DOMAIN_MIGRATION_SUCCESS_KEY, !0), c.default.userDataCache.deleteCache(), f.finishMigration()
            }))
        }, []), null
    }
}