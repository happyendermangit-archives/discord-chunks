function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        maybeJoinEmbeddedActivity: function() {
            return T
        }
    });
    var r = n("483587"),
        o = n("625864"),
        i = n("342942"),
        a = n("937274"),
        u = n("338140"),
        s = n("935741"),
        l = n("306912"),
        c = n("29884"),
        f = n("208454"),
        d = n("665863"),
        _ = n("632142"),
        E = n("43722"),
        p = n("465059"),
        m = n("175303"),
        y = n("941504");

    function I(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function h(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    I(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    I(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function O(e, t) {
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
    }

    function T(e) {
        return S.apply(this, arguments)
    }

    function S() {
        return (S = h(function(e) {
            var t, n, I, T, S, v, g, A, b, N, R, C, P, D, L, M;

            function U() {
                return w.apply(this, arguments)
            }

            function w() {
                return (w = h(function() {
                    return O(this, function(e) {
                        switch (e.label) {
                            case 0:
                                if (null == g) return [2];
                                return [4, (0, E.default)({
                                    applicationId: g.applicationId,
                                    currentEmbeddedApplication: M,
                                    activityChannelId: t,
                                    locationObject: {},
                                    embeddedActivitiesManager: v,
                                    analyticsLocations: S
                                })];
                            case 1:
                                return e.sent(), [2]
                        }
                    })
                })).apply(this, arguments)
            }
            return O(this, function(E) {
                switch (E.label) {
                    case 0:
                        if (t = e.channelId, n = e.applicationId, I = e.instanceId, T = e.inputApplication, S = e.analyticsLocations, v = e.embeddedActivitiesManager, g = _.default.getEmbeddedActivitiesForChannel(t).find(function(e) {
                                return e.applicationId === n && (null == I || e.instanceId === I)
                            }), null != (A = T)) return [3, 2];
                        return [4, o.default.fetchApplication(n)];
                    case 1:
                        b = E.sent(), A = u.default.createFromServer(b), E.label = 2;
                    case 2:
                        if (null == g || null == A) return [2];
                        return N = f.default.getCurrentUser(), R = s.default.getChannel(t), C = (0, m.default)({
                            userId: null == N ? void 0 : N.id,
                            application: A,
                            channelId: t,
                            currentUser: N,
                            isActivitiesEnabledForCurrentPlatform: (0, p.getIsActivitiesEnabledForCurrentPlatform)(R),
                            ChannelStore: s.default,
                            VoiceStateStore: d.default,
                            PermissionStore: c.default,
                            GuildStore: l.default
                        }), M = null != (D = null == (P = _.default.getSelfEmbeddedActivityForChannel(t)) ? void 0 : P.applicationId) && null !== (L = i.default.getApplication(D)) && void 0 !== L ? L : void 0, ! function(e) {
                            var t = e.embeddedActivityJoinability,
                                n = e.handleCanJoin;
                            switch (t) {
                                case m.EmbeddedActivityJoinability.CAN_JOIN:
                                    null == n || n();
                                    break;
                                case m.EmbeddedActivityJoinability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                                    (0, a.showActivitiesInvalidPermissionsAlert)();
                                    break;
                                case m.EmbeddedActivityJoinability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                                    r.default.show({
                                        title: y.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                                        body: y.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
                                        hideActionSheet: !1
                                    });
                                    break;
                                case m.EmbeddedActivityJoinability.ACTIVITY_NOT_SUPPORTED_ON_OS:
                                    r.default.show({
                                        title: y.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                                        body: y.default.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS,
                                        hideActionSheet: !1
                                    });
                                    break;
                                case m.EmbeddedActivityJoinability.ACTIVITY_AGE_GATED:
                                    r.default.show({
                                        title: y.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                                        body: y.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE,
                                        hideActionSheet: !1
                                    });
                                    break;
                                case m.EmbeddedActivityJoinability.NO_CHANNEL_CONNECT_PERMISSION:
                                case m.EmbeddedActivityJoinability.CHANNEL_FULL:
                                case m.EmbeddedActivityJoinability.NO_CHANNEL:
                                case m.EmbeddedActivityJoinability.NO_USER:
                                    r.default.show({
                                        title: y.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                                        body: y.default.Messages.ACTIVITIES_GENERIC_LAUNCH_FAILURE_DIALOG_BODY,
                                        hideActionSheet: !1
                                    })
                            }
                        }({
                            embeddedActivityJoinability: C,
                            handleCanJoin: U
                        }), [2]
                }
            })
        })).apply(this, arguments)
    }
}