function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return x
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("784184"),
        a = n("323515"),
        u = n("391737"),
        s = n("585949"),
        l = n("560897"),
        c = n("396586"),
        f = n("550168"),
        d = n("602799"),
        _ = n("935741"),
        E = n("389749"),
        p = n("382199"),
        m = n("306912"),
        y = n("620205"),
        I = n("29884"),
        h = n("776982"),
        O = n("894288"),
        T = n("208454"),
        S = n("665863"),
        v = n("367741"),
        g = n("262283"),
        A = n("374550"),
        b = n("671566"),
        N = n("632142"),
        R = n("43722"),
        C = n("410097"),
        P = n("949065"),
        D = n("111540"),
        L = n("279271"),
        M = n("972977"),
        U = n("521862"),
        w = n("997133"),
        k = n("281767"),
        G = n("941504");

    function B(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function j(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function F(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    j(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    j(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function V(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return B(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return B(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function H(e, t) {
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

    function x(e) {
        var t, n, B = e.activity,
            j = e.currentEmbeddedApplication,
            x = e.isCurrentUser,
            Y = e.color,
            W = e.look,
            K = e.hover,
            z = e.user,
            X = e.isEmbedded,
            q = void 0 !== X && X,
            Q = (0, c.default)().analyticsLocations,
            J = V(r.useState(!1), 2),
            Z = J[0],
            $ = J[1],
            ee = (0, o.useStateFromStores)([T.default], function() {
                return T.default.getCurrentUser()
            }),
            et = null == B ? void 0 : B.application_id,
            en = (0, o.useStateFromStores)([N.default], function() {
                return q ? N.default.getEmbeddedActivityForUserId(z.id, et) : null
            }, [z.id, q, et]),
            er = (0, P.default)({
                channelId: null == en ? void 0 : en.channelId,
                userId: z.id,
                activity: B
            }),
            eo = (0, o.useStateFromStores)([y.default, d.default, g.default, E.default], function() {
                return q || (null == B ? void 0 : B.application_id) != null && (0, b.isLaunchable)({
                    LibraryApplicationStore: y.default,
                    LaunchableGameStore: d.default,
                    DispatchApplicationStore: g.default,
                    ConnectedAppsStore: E.default,
                    applicationId: B.application_id
                })
            }),
            ei = (0, o.useStateFromStores)([N.default], function() {
                return Array.from(N.default.getSelfEmbeddedActivities().values()).some(function(e) {
                    var t = e.applicationId,
                        n = e.channelId;
                    return t === (null == B ? void 0 : B.application_id) && n === er
                })
            }),
            ea = (0, o.useStateFromStores)([v.default], function() {
                return null != B && null != B.application_id && v.default.getState(B.application_id, k.ActivityActionTypes.JOIN) === k.ActivityActionStates.LOADING
            }),
            eu = V((0, f.default)((null == B ? void 0 : B.application_id) != null ? [null == B ? void 0 : B.application_id] : []), 1)[0],
            es = (0, o.useStateFromStores)([_.default, m.default, p.default, h.default, O.default, S.default, I.default], function() {
                return (0, C.default)({
                    user: z,
                    activity: B,
                    application: eu,
                    channelId: er,
                    currentUser: ee,
                    isEmbedded: q,
                    ChannelStore: _.default,
                    GuildStore: m.default,
                    GuildMemberCountStore: p.default,
                    RelationshipStore: h.default,
                    SelectedChannelStore: O.default,
                    VoiceStateStore: S.default,
                    PermissionStore: I.default
                })
            }),
            el = (0, o.useStateFromStores)([N.default], function() {
                return Array.from(N.default.getSelfEmbeddedActivities().values()).some(function(e) {
                    return e.applicationId === (null == en ? void 0 : en.applicationId) && e.channelId === (null == en ? void 0 : en.channelId)
                })
            }),
            ec = (0, l.useAnalyticsContext)(),
            ef = !A.isPlatformEmbedded,
            ed = (0, D.default)(B, k.ActivityFlags.JOIN) || q;
        if (null == B || !ed || null == B.application_id) return null;
        var e_ = !x && (ef || eo) && !Z && !ei && (!q || es),
            eE = null;
        x ? eE = G.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : !ef && !eo && (eE = G.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
            name: B.name
        }));
        var ep = (t = F(function(e, t) {
            var n;
            return H(this, function(r) {
                switch (r.label) {
                    case 0:
                        if (null == t.session_id || null == t.application_id) return [2];
                        return [4, u.default.join({
                            userId: e.id,
                            sessionId: t.session_id,
                            applicationId: t.application_id,
                            channelId: O.default.getVoiceChannelId(),
                            messageId: null,
                            intent: w.ActivityIntent.PLAY,
                            embedded: (0, D.default)(t, k.ActivityFlags.EMBEDDED)
                        })];
                    case 1:
                        return r.sent(), (0, L.default)({
                            type: k.AnalyticsGameOpenTypes.JOIN,
                            userId: e.id,
                            applicationId: t.application_id,
                            partyId: null === (n = t.party) || void 0 === n ? void 0 : n.id,
                            locationObject: ec.location,
                            analyticsLocations: Q
                        }), [2]
                }
            })
        }), function(e, n) {
            return t.apply(this, arguments)
        });
        var em = (n = F(function() {
                var e, t;
                return H(this, function(n) {
                    switch (n.label) {
                        case 0:
                            if (e = !1, !q) return [3, 2];
                            if (!es || null == er || null == B.application_id) return [2];
                            return [4, (0, R.default)({
                                applicationId: B.application_id,
                                currentEmbeddedApplication: j,
                                activityChannelId: er,
                                locationObject: ec.location,
                                embeddedActivitiesManager: M.default,
                                analyticsLocations: Q
                            })];
                        case 1:
                            e = n.sent(), n.label = 2;
                        case 2:
                            if (e) return [3, 4];
                            return es && ep(z, B), $(!0), [4, a.default.sendActivityInviteUser({
                                type: k.ActivityActionTypes.JOIN_REQUEST,
                                userId: z.id,
                                activity: B,
                                location: k.AnalyticsLocations.PROFILE_POPOUT
                            })];
                        case 3:
                            null != (t = n.sent()) && s.default.selectPrivateChannel(t.id), n.label = 4;
                        case 4:
                            return [2]
                    }
                })
            }), function() {
                return n.apply(this, arguments)
            }),
            ey = es ? G.default.Messages.JOIN : G.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN;
        return q && (ey = G.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY), el && (ey = G.default.Messages.EMBEDDED_ACTIVITIES_JOINED), r.createElement(i.Tooltip, {
            key: "join",
            text: eE
        }, function(e) {
            var t = e.onMouseEnter,
                n = e.onMouseLeave;
            return r.createElement(U.default, {
                onClick: em,
                onMouseEnter: t,
                onMouseLeave: n,
                color: Y,
                look: W,
                hover: K,
                disabled: !e_,
                submitting: ea,
                fullWidth: !0
            }, ey)
        })
    }
}