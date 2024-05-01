function(e, t, n) {
    "use strict";
    n.r(t), n("789020");
    var i, r, a, s, o = n("261470"),
        l = n("213919"),
        u = n("442837"),
        d = n("544891"),
        _ = n("433517"),
        c = n("570140"),
        E = n("179658"),
        I = n("70956"),
        T = n("960048"),
        f = n("981631");
    let S = (() => {
            let e = "".concat(location.protocol, "//").concat(location.host, "/__development/source_maps"),
                t = null,
                n = new o.default(5 * I.default.Millis.SECOND, 1 * I.default.Millis.MINUTE, !0),
                i = () => {
                    d.HTTP.put({
                        url: e,
                        headers: {
                            Authorization: l.getToken()
                        },
                        oldFormErrors: !0
                    }).then(e => {
                        401 === e.status || 403 === e.status ? (t = null, (0, E.setDeveloperOptionSettings)({
                            sourceMapsEnabled: !1
                        })) : 200 !== e.status ? t = setTimeout(i, n.fail()) : (n.succeed(), t = setTimeout(i, e.body.sourceMapCookieTTLSeconds * I.default.Millis.SECOND * .75))
                    }, () => {
                        t = setTimeout(i, n.fail())
                    })
                };
            return {
                set: n => {
                    n !== (null != t) && (n ? t = setTimeout(i, 0) : (clearTimeout(t), t = null, d.HTTP.del({
                        url: e,
                        headers: {
                            Authorization: l.getToken()
                        },
                        oldFormErrors: !0
                    })))
                }
            }
        })(),
        h = "DeveloperOptionsStore",
        A = {
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
        m = {
            ...A
        };

    function N(e) {
        m = {
            ...A,
            ...m,
            ...e
        }, S.set(m.sourceMapsEnabled), _.Storage.set(h, m)
    }
    class p extends(i = u.default.Store) {
        initialize() {
            let e = _.Storage.get(h);
            null != e && (m = {
                ...A,
                ...e
            })
        }
        get isTracingRequests() {
            return m.trace
        }
        get isForcedCanary() {
            return m.canary
        }
        get isLoggingGatewayEvents() {
            return m.logGatewayEvents
        }
        get isLoggingOverlayEvents() {
            return m.logOverlayEvents
        }
        get isLoggingAnalyticsEvents() {
            return m.logAnalyticsEvents
        }
        get isAxeEnabled() {
            return m.axeEnabled
        }
        get sourceMapsEnabled() {
            return m.sourceMapsEnabled
        }
        get isAnalyticsDebuggerEnabled() {
            return m.analyticsDebuggerEnabled
        }
        get isBugReporterEnabled() {
            return m.bugReporterEnabled
        }
        get isIdleStatusIndicatorEnabled() {
            return m.idleStatusIndicatorEnabled
        }
        get appDirectoryIncludesInactiveCollections() {
            return m.appDirectoryIncludesInactiveCollections
        }
        getDebugOptionsHeaderValue() {
            return Object.keys(m).map(e => m[e]), Object.keys(m).filter(e => m[e]).join(",")
        }
    }
    s = "DeveloperOptionsStore", (a = "displayName") in(r = p) ? Object.defineProperty(r, a, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[a] = s, t.default = new p(c.default, {
        LOGOUT: function(e) {
            N(A)
        },
        CONNECTION_OPEN: function(e) {
            var t;
            let n = ((null !== (t = e.user.flags) && void 0 !== t ? t : 0) & f.UserFlags.STAFF) === f.UserFlags.STAFF,
                i = n || null != e.user.personal_connection_id;
            n && S.set(m.sourceMapsEnabled), T.default.setTags({
                isStaff: i.toString()
            })
        },
        DEVELOPER_OPTIONS_UPDATE_SETTINGS: function(e) {
            let {
                settings: t
            } = e;
            N(t)
        }
    })
}