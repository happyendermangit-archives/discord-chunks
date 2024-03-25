function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    }), n("702976");
    var i = n("981980"),
        s = n("171718"),
        r = n("446674"),
        a = n("872717"),
        o = n("95410"),
        l = n("913144"),
        u = n("527015"),
        d = n("718517"),
        c = n("286235"),
        _ = n("49111");
    let f = (() => {
            let e = "".concat(location.protocol, "//").concat(location.host, "/__development/source_maps"),
                t = null,
                n = new i.default(5 * d.default.Millis.SECOND, 1 * d.default.Millis.MINUTE, !0),
                r = () => {
                    a.HTTP.put({
                        url: e,
                        headers: {
                            Authorization: s.getToken()
                        },
                        oldFormErrors: !0
                    }).then(e => {
                        401 === e.status || 403 === e.status ? (t = null, (0, u.setDeveloperOptionSettings)({
                            sourceMapsEnabled: !1
                        })) : 200 !== e.status ? t = setTimeout(r, n.fail()) : (n.succeed(), t = setTimeout(r, e.body.sourceMapCookieTTLSeconds * d.default.Millis.SECOND * .75))
                    }, () => {
                        t = setTimeout(r, n.fail())
                    })
                };
            return {
                set: n => {
                    let i = null != t;
                    n !== i && (n ? t = setTimeout(r, 0) : (clearTimeout(t), t = null, a.HTTP.del({
                        url: e,
                        headers: {
                            Authorization: s.getToken()
                        },
                        oldFormErrors: !0
                    })))
                }
            }
        })(),
        E = "DeveloperOptionsStore",
        h = {
            trace: !1,
            canary: !1,
            logGatewayEvents: !1,
            logOverlayEvents: !1,
            logAnalyticsEvents: !1,
            sourceMapsEnabled: !1,
            axeEnabled: !1,
            analyticsDebuggerEnabled: !1,
            bugReporterEnabled: !0,
            idleStatusIndicatorEnabled: !1,
            appDirectoryIncludesInactiveCollections: !1
        },
        g = {
            ...h
        };

    function m(e) {
        g = {
            ...h,
            ...g,
            ...e
        }, f.set(g.sourceMapsEnabled), o.Storage.set(E, g)
    }
    class p extends r.default.Store {
        initialize() {
            let e = o.Storage.get(E);
            null != e && (g = {
                ...h,
                ...e
            })
        }
        get isTracingRequests() {
            return g.trace
        }
        get isForcedCanary() {
            return g.canary
        }
        get isLoggingGatewayEvents() {
            return g.logGatewayEvents
        }
        get isLoggingOverlayEvents() {
            return g.logOverlayEvents
        }
        get isLoggingAnalyticsEvents() {
            return g.logAnalyticsEvents
        }
        get isAxeEnabled() {
            return g.axeEnabled
        }
        get sourceMapsEnabled() {
            return g.sourceMapsEnabled
        }
        get isAnalyticsDebuggerEnabled() {
            return g.analyticsDebuggerEnabled
        }
        get isBugReporterEnabled() {
            return g.bugReporterEnabled
        }
        get isIdleStatusIndicatorEnabled() {
            return g.idleStatusIndicatorEnabled
        }
        get appDirectoryIncludesInactiveCollections() {
            return g.appDirectoryIncludesInactiveCollections
        }
        getDebugOptionsHeaderValue() {
            Object.keys(g).map(e => g[e]);
            let e = Object.keys(g).filter(e => g[e]);
            return e.join(",")
        }
    }
    p.displayName = "DeveloperOptionsStore";
    var S = new p(l.default, {
        LOGOUT: function(e) {
            m(h)
        },
        CONNECTION_OPEN: function(e) {
            var t;
            let n = ((null !== (t = e.user.flags) && void 0 !== t ? t : 0) & _.UserFlags.STAFF) === _.UserFlags.STAFF,
                i = n || null != e.user.personal_connection_id;
            n && f.set(g.sourceMapsEnabled), c.default.setTags({
                isStaff: i.toString()
            })
        },
        DEVELOPER_OPTIONS_UPDATE_SETTINGS: function(e) {
            let {
                settings: t
            } = e;
            m(t)
        }
    })
}