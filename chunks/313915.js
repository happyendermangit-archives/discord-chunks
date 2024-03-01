function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    }), n("702976");
    var i = n("981980"),
        r = n("171718"),
        s = n("446674"),
        a = n("872717"),
        o = n("95410"),
        l = n("913144"),
        u = n("527015"),
        c = n("718517"),
        d = n("286235"),
        f = n("49111");
    let E = (() => {
            let e = "".concat(location.protocol, "//").concat(location.host, "/__development/source_maps"),
                t = null,
                n = new i.default(5 * c.default.Millis.SECOND, 1 * c.default.Millis.MINUTE, !0),
                s = () => {
                    a.default.put({
                        url: e,
                        headers: {
                            Authorization: r.default.getToken()
                        },
                        oldFormErrors: !0
                    }).then(e => {
                        401 === e.status || 403 === e.status ? (t = null, (0, u.setDeveloperOptionSettings)({
                            sourceMapsEnabled: !1
                        })) : 200 !== e.status ? t = setTimeout(s, n.fail()) : (n.succeed(), t = setTimeout(s, e.body.sourceMapCookieTTLSeconds * c.default.Millis.SECOND * .75))
                    }, () => {
                        t = setTimeout(s, n.fail())
                    })
                };
            return {
                set: n => {
                    let i = null != t;
                    n !== i && (n ? t = setTimeout(s, 0) : (clearTimeout(t), t = null, a.default.delete({
                        url: e,
                        headers: {
                            Authorization: r.default.getToken()
                        },
                        oldFormErrors: !0
                    })))
                }
            }
        })(),
        p = "DeveloperOptionsStore",
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
        _ = {
            ...h
        };

    function S(e) {
        _ = {
            ...h,
            ..._,
            ...e
        }, E.set(_.sourceMapsEnabled), o.default.set(p, _)
    }
    class m extends s.default.Store {
        initialize() {
            let e = o.default.get(p);
            null != e && (_ = {
                ...h,
                ...e
            })
        }
        get isTracingRequests() {
            return _.trace
        }
        get isForcedCanary() {
            return _.canary
        }
        get isLoggingGatewayEvents() {
            return _.logGatewayEvents
        }
        get isLoggingOverlayEvents() {
            return _.logOverlayEvents
        }
        get isLoggingAnalyticsEvents() {
            return _.logAnalyticsEvents
        }
        get isAxeEnabled() {
            return _.axeEnabled
        }
        get sourceMapsEnabled() {
            return _.sourceMapsEnabled
        }
        get isAnalyticsDebuggerEnabled() {
            return _.analyticsDebuggerEnabled
        }
        get isBugReporterEnabled() {
            return _.bugReporterEnabled
        }
        get isIdleStatusIndicatorEnabled() {
            return _.idleStatusIndicatorEnabled
        }
        get appDirectoryIncludesInactiveCollections() {
            return _.appDirectoryIncludesInactiveCollections
        }
        getDebugOptionsHeaderValue() {
            Object.keys(_).map(e => _[e]);
            let e = Object.keys(_).filter(e => _[e]);
            return e.join(",")
        }
    }
    m.displayName = "DeveloperOptionsStore";
    var T = new m(l.default, {
        LOGOUT: function(e) {
            S(h)
        },
        CONNECTION_OPEN: function(e) {
            var t;
            let n = ((null !== (t = e.user.flags) && void 0 !== t ? t : 0) & f.UserFlags.STAFF) === f.UserFlags.STAFF,
                i = n || null != e.user.personal_connection_id;
            n && E.set(_.sourceMapsEnabled), d.default.setTags({
                isStaff: i.toString()
            })
        },
        DEVELOPER_OPTIONS_UPDATE_SETTINGS: function(e) {
            let {
                settings: t
            } = e;
            S(t)
        }
    })
}