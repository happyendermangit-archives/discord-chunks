function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    });
    var r = n("483587"),
        o = n("937274"),
        i = n("935741"),
        a = n("306912"),
        u = n("29884"),
        s = n("208454"),
        l = n("120447"),
        c = n("987351"),
        f = n("402729"),
        d = n("623416"),
        _ = n("223832"),
        E = n("106490"),
        p = n("224680"),
        m = n("175825"),
        y = n("279271"),
        I = n("695359"),
        h = n("822904"),
        O = n("997133"),
        T = n("281767"),
        S = n("941504");

    function v(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function g(e) {
        return A.apply(this, arguments)
    }

    function A() {
        var e;
        return e = function(e) {
            var t, n, v, g, A, b, N, R, C, P, D, L, M;
            return function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            }(this, function(U) {
                switch (U.label) {
                    case 0:
                        if (t = e.activityItem, n = e.currentEmbeddedApplication, v = e.locationObject, g = e.channelId, A = e.guildId, b = e.embeddedActivitiesManager, N = e.analyticsLocations, R = a.default.getGuild(A), C = s.default.getCurrentUser(), null == R && !(0, h.isPrivateChannelWithEnabledActivities)(g) || null == C || null == t || null == t.application) return [2, !1];
                        if (null == g) return l.ComponentDispatch.dispatch(T.ComponentActions.SHOW_ACTIVITIES_CHANNEL_SELECTOR, {
                            applicationId: t.application.id
                        }), [2, !1];
                        if (null == (P = i.default.getChannel(g))) return [2, !1];
                        if ((D = null != g ? (0, E.getEmbeddedActivityLaunchability)({
                                channelId: g,
                                ChannelStore: i.default,
                                GuildStore: a.default,
                                PermissionStore: u.default
                            }) : E.EmbeddedActivityLaunchability.NO_CHANNEL) !== E.EmbeddedActivityLaunchability.CAN_LAUNCH) return D === E.EmbeddedActivityLaunchability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION ? (0, o.showActivitiesInvalidPermissionsAlert)() : D === E.EmbeddedActivityLaunchability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS && r.default.show({
                            title: S.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC,
                            body: S.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
                            hideActionSheet: !1
                        }), [2, !1];
                        return [4, (0, _.confirmActivityLaunchChecks)({
                            applicationId: t.application.id,
                            application: t.application,
                            channel: P,
                            currentEmbeddedApplication: n,
                            embeddedActivitiesManager: b,
                            user: C
                        })];
                    case 1:
                        if (!U.sent()) return [2, !1];
                        if (L = (0, p.default)(g), M = O.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(P.type), !L) return [3, 3];
                        return [4, (0, m.default)({
                            channelId: g,
                            bypassChangeModal: null != n
                        })];
                    case 2:
                        if (!U.sent()) return [2, !1];
                        return [3, 4];
                    case 3:
                        if (!(0, c.isActivitiesInTextEnabled)(P, "handleStartEmbeddedActivity") || !M) return [2, !1];
                        U.label = 4;
                    case 4:
                        return d.startEmbeddedActivity(g, t.application.id, N), (0, I.default)(A, g), (0, y.default)({
                            type: T.AnalyticsGameOpenTypes.LAUNCH,
                            userId: C.id,
                            applicationId: t.application.id,
                            locationObject: v,
                            analyticsLocations: N
                        }), f.markActivityUsed(t.application.id), [2, !0]
                }
            })
        }, (A = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    v(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    v(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }
}