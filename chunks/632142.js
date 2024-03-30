function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NO_ACTIVITIES: function() {
            return D
        }
    });
    var r, o = n("898511"),
        i = n("629815"),
        a = n("29570"),
        u = n("217014"),
        s = n("935741"),
        l = n("29884"),
        c = n("894288"),
        f = n("208454"),
        d = n("120447"),
        _ = n("374550"),
        E = n("828578"),
        p = n("985146"),
        m = n("123015"),
        y = n("224680"),
        I = n("698007"),
        h = n("281767");

    function O(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function T(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function S(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function v(e) {
        return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function g(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                S(e, t, n[t])
            })
        }
        return e
    }

    function A(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function b(e, t) {
        return (b = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function N(e, t) {
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
        }(e, t) || C(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function R(e) {
        return function(e) {
            if (Array.isArray(e)) return O(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || C(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function C(e, t) {
        if (e) {
            if ("string" == typeof e) return O(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return O(e, t)
        }
    }
    var P = {
            seenActivities: new Set,
            everLaunchedActivities: new Set,
            seenNewActivities: {},
            seenUpdatedActivities: {},
            shouldShowNewActivityIndicator: !1,
            usersHavePlayedByApp: new Map
        },
        D = [],
        L = new Map,
        M = new Map,
        U = new Map,
        w = new Map,
        k = !1,
        G = new Map,
        B = new Map,
        j = new Map,
        F = new Map,
        V = new Map,
        H = new Map,
        x = new Map,
        Y = void 0,
        W = I.ActivityPanelModes.DISCONNECTED,
        K = I.FocusedActivityLayouts.RESIZABLE;

    function z(e) {
        return null != e ? e : "0"
    }

    function X(e) {
        var t, n, r = e.guildId,
            o = e.channelId,
            a = e.applicationId,
            c = e.instanceId,
            f = e.userIds,
            _ = e.activitySessionId,
            m = (0, p.default)(a);
        if (null != m) {
            var y = s.default.getBasicChannel(o),
                I = null != y && l.default.canBasicChannel(h.BasicPermissions.CONNECT, y) || (null == y ? void 0 : y.type) === h.ChannelTypes.DM || (null == y ? void 0 : y.type) === h.ChannelTypes.GROUP_DM;
            if (function(e, t) {
                    var n;
                    P.usersHavePlayedByApp.set(e, new Set(R(null !== (n = P.usersHavePlayedByApp.get(e)) && void 0 !== n ? n : []).concat(R(t))))
                }(a, f), I) {
                var O = {
                        activitySessionId: null != _ ? _ : c,
                        applicationId: a,
                        channelId: o,
                        guildId: r,
                        instanceId: c,
                        url: m,
                        userIds: new Set(f)
                    },
                    T = u.default.getId(),
                    S = L.get(O.applicationId);
                f.some(function(e) {
                    return e === T
                }) && null != S && (L.set(S.applicationId, g({}, S, O)), i.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_INSTANCE_CHANGE",
                    channelId: o,
                    instanceId: c
                })), null != S && o === S.channelId && !f.some(function(e) {
                    return e === T
                }) && Array.from(S.userIds).some(function(e) {
                    return e === T
                }) ? w.get(o) === a ? w.delete(o) : L.delete(a) : f.some(function(e) {
                    return e === T
                }) && (null == S || S.applicationId !== a || S.channelId !== o) && (null != _ && _ === u.default.getSessionId() || (0, E.shouldMountActivityIFrameFromGatewayUpdateWithoutSessionIdCheck)("EmbeddedActivitiesStore")) && (Q({
                    channelId: o,
                    applicationId: a,
                    instanceId: c
                }), d.ComponentDispatch.dispatch(h.ComponentActions.OPEN_EMBEDDED_ACTIVITY, {
                    channelId: o
                }));
                var v = (null !== (t = U.get(o)) && void 0 !== t ? t : []).filter(function(e) {
                        return e.applicationId !== a
                    }),
                    A = z(r),
                    b = (null !== (n = M.get(A)) && void 0 !== n ? n : []).filter(function(e) {
                        return !(e.applicationId === a && e.channelId === o)
                    });
                0 !== f.length && (v.push(O), b.push(O)), U.set(o, v), M.set(A, b)
            }
        }
    }

    function q(e) {
        e.embedded_activities.forEach(function(t) {
            var n = t.channel_id,
                r = t.embedded_activity,
                o = t.connections;
            X({
                guildId: e.id,
                channelId: n,
                applicationId: r.application_id,
                instanceId: r.activity_id,
                userIds: o.map(function(e) {
                    return e.user_id
                })
            })
        })
    }

    function Q(e) {
        var t, n, r = e.channelId,
            o = e.applicationId,
            i = e.instanceId,
            a = (0, p.default)(o),
            l = u.default.getSessionId();
        if (null == a || null == l || (null === (t = L.get(o)) || void 0 === t ? void 0 : t.channelId) === r) return !1;
        var d = s.default.getChannel(r),
            _ = null == d ? void 0 : d.getGuildId(),
            E = f.default.getCurrentUser();
        if (null == _ && !(null !== (n = null == d ? void 0 : d.isPrivate()) && void 0 !== n && n) || null == E) return !1;
        Y = r, L.set(o, {
            guildId: _,
            channelId: r,
            applicationId: o,
            url: a,
            userIds: new Set([E.id]),
            connectedSince: Date.now(),
            instanceId: i
        }), W = Y !== c.default.getChannelId() || (0, y.default)(r) ? I.ActivityPanelModes.PIP : I.ActivityPanelModes.PANEL, x.set(Z(r, o), Date.now())
    }

    function J() {
        k = !1
    }

    function Z(e, t) {
        return "".concat(e, ":").concat(t)
    }
    var $ = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && b(e, t)
        }(u, e);
        var t, n, r, o, i, a = (t = u, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = v(t);
            if (n) {
                var a = v(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function u() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a.apply(this, arguments)
        }
        return r = u, o = [{
            key: "initialize",
            value: function(e) {
                var t, n, r = new Map;
                Array.isArray(null == e ? void 0 : e.usersHavePlayedByApp) && (null == e || e.usersHavePlayedByApp.forEach(function(e) {
                    if (Array.isArray(e)) {
                        var t = N(e, 2),
                            n = t[0],
                            o = t[1];
                        "string" == typeof n && Array.isArray(o) && r.set(n, new Set(o))
                    }
                }));
                var o = new Set(null !== (t = null == e ? void 0 : e.seenActivities) && void 0 !== t ? t : []),
                    i = new Set(null !== (n = null == e ? void 0 : e.everLaunchedActivities) && void 0 !== n ? n : []);
                null != e && (P = A(g({}, e), {
                    seenActivities: o,
                    everLaunchedActivities: i,
                    usersHavePlayedByApp: r
                }))
            }
        }, {
            key: "getState",
            value: function() {
                return P
            }
        }, {
            key: "getSelfEmbeddedActivityForChannel",
            value: function(e) {
                var t;
                return null !== (t = Array.from(L.values()).find(function(t) {
                    return e === t.channelId
                })) && void 0 !== t ? t : null
            }
        }, {
            key: "getSelfEmbeddedActivities",
            value: function() {
                return L
            }
        }, {
            key: "getEmbeddedActivitiesForGuild",
            value: function(e) {
                var t;
                return null !== (t = M.get(e)) && void 0 !== t ? t : D
            }
        }, {
            key: "getEmbeddedActivitiesForChannel",
            value: function(e) {
                var t;
                return null !== (t = U.get(e)) && void 0 !== t ? t : D
            }
        }, {
            key: "getEmbeddedActivitiesByChannel",
            value: function() {
                return U
            }
        }, {
            key: "getEmbeddedActivityDurationMs",
            value: function(e, t) {
                var n = x.get(Z(e, t));
                return null == n ? null : Date.now() - n
            }
        }, {
            key: "isLaunchingActivity",
            value: function() {
                return k
            }
        }, {
            key: "getShelfActivities",
            value: function(e) {
                var t, n = z(e);
                return null !== (t = G.get(n)) && void 0 !== t ? t : []
            }
        }, {
            key: "getShelfFetchStatus",
            value: function(e) {
                var t = z(e);
                return B.get(t)
            }
        }, {
            key: "shouldFetchShelf",
            value: function(e) {
                var t, n, r = z(e),
                    o = null !== (t = B.get(r)) && void 0 !== t ? t : {
                        isFetching: !1
                    },
                    i = Date.now() - (null !== (n = null == o ? void 0 : o.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 216e5;
                return !(null == o ? void 0 : o.isFetching) && i
            }
        }, {
            key: "getOrientationLockStateForApp",
            value: function(e) {
                var t;
                return null !== (t = j.get(e)) && void 0 !== t ? t : null
            }
        }, {
            key: "getPipOrientationLockStateForApp",
            value: function(e) {
                var t;
                return null !== (t = F.get(e)) && void 0 !== t ? t : this.getOrientationLockStateForApp(e)
            }
        }, {
            key: "getGridOrientationLockStateForApp",
            value: function(e) {
                var t, n;
                return null !== (n = null !== (t = V.get(e)) && void 0 !== t ? t : F.get(e)) && void 0 !== n ? n : this.getOrientationLockStateForApp(e)
            }
        }, {
            key: "getLayoutModeForApp",
            value: function(e) {
                return H.get(e)
            }
        }, {
            key: "getUsersHavePlayedByApp",
            value: function(e) {
                var t;
                return R(null !== (t = P.usersHavePlayedByApp.get(e)) && void 0 !== t ? t : [])
            }
        }, {
            key: "getConnectedActivityChannelId",
            value: function() {
                return Y
            }
        }, {
            key: "getActivityPanelMode",
            value: function() {
                return W
            }
        }, {
            key: "getFocusedLayout",
            value: function() {
                return K
            }
        }, {
            key: "getCurrentEmbeddedActivity",
            value: function() {
                var e, t = this.getConnectedActivityChannelId();
                if (null != t) return null !== (e = this.getSelfEmbeddedActivityForChannel(t)) && void 0 !== e ? e : void 0
            }
        }, {
            key: "getEmbeddedActivityForUserId",
            value: function(e, t) {
                if (void 0 !== t) {
                    var n = void 0,
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        e: for (var a, u = U[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                            var s = N(a.value, 2),
                                l = (s[0], s[1]),
                                c = !0,
                                f = !1,
                                d = void 0;
                            try {
                                for (var _, E = l[Symbol.iterator](); !(c = (_ = E.next()).done); c = !0) {
                                    var p = _.value;
                                    if (p.applicationId === t && p.userIds.has(e)) {
                                        n = p;
                                        break e
                                    }
                                }
                            } catch (e) {
                                f = !0, d = e
                            } finally {
                                try {
                                    !c && null != E.return && E.return()
                                } finally {
                                    if (f) throw d
                                }
                            }
                        }
                    }
                    catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            !r && null != u.return && u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }
            }
        }, {
            key: "hasActivityEverBeenLaunched",
            value: function(e) {
                return P.everLaunchedActivities.has(e)
            }
        }], T(r.prototype, o), i && T(r, i), u
    }(o.default.PersistedStore);
    S($, "displayName", "EmbeddedActivitiesStore"), S($, "persistKey", "EmbeddedActivities"), S($, "migrations", [function(e) {
        return A(g({}, e), {
            seenFeaturedActivities: [],
            shouldShowNewActivityIndicator: !1
        })
    }, function(e) {
        return delete e.seenFeaturedActivities, A(g({}, e), {
            seenActivities: []
        })
    }, function(e) {
        return g({}, e)
    }, function(e) {
        return delete e.currentFreeActivity, delete e.lastFreeActivityRotationTimestampMs, delete e.freePeriodActivities, delete e.shouldShowFreeActivityIndicator, g({}, e)
    }, function(e) {
        var t, n = new Set(null !== (t = e.seenActivities) && void 0 !== t ? t : []);
        return A(g({}, e), {
            seenActivities: n,
            seenNewActivities: {},
            seenUpdatedActivities: {}
        })
    }, function(e) {
        var t, n = new Set(null !== (t = e.everLaunchedActivities) && void 0 !== t ? t : []);
        return A(g({}, e), {
            everLaunchedActivities: n
        })
    }]);
    var ee = new $(i.default, {
        ACTIVITY_LAYOUT_MODE_UPDATE: function(e) {
            var t = e.applicationId,
                n = e.layoutMode;
            H.set(t, n)
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
            var t = e.guilds;
            U.clear(), M.clear(), t.forEach(function(e) {
                return q(e)
            })
        },
        GUILD_CREATE: function(e) {
            q(e.guild)
        },
        CALL_CREATE: function(e) {
            var t = e.channelId;
            ! function(e, t) {
                t.forEach(function(e) {
                    var t = e.channel_id,
                        n = e.embedded_activity,
                        r = e.connections;
                    X({
                        guildId: null,
                        channelId: t,
                        applicationId: n.application_id,
                        instanceId: n.activity_id,
                        userIds: r.map(function(e) {
                            return e.user_id
                        })
                    })
                })
            }(0, e.embeddedActivities)
        },
        CHANNEL_DELETE: function(e) {
            var t = e.channel;
            U.set(t.id, []);
            var n = t.guild_id;
            if (null != n) {
                var r, o = z(n),
                    i = (null !== (r = M.get(o)) && void 0 !== r ? r : []).filter(function(e) {
                        return e.channelId !== t.id
                    });
                M.set(o, i)
            }
        },
        EMBEDDED_ACTIVITY_LAUNCH_START: function() {
            k = !0
        },
        EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: function(e) {
            var t = e.applicationId;
            P.everLaunchedActivities.add(t),
                function() {
                    k = !1
                }()
        },
        EMBEDDED_ACTIVITY_LAUNCH_FAIL: function() {
            (function() {
                k = !1
            })()
        },
        EMBEDDED_ACTIVITY_OPEN: function(e) {
            Q({
                channelId: e.channelId,
                applicationId: e.applicationId
            })
        },
        EMBEDDED_ACTIVITY_CLOSE: function(e) {
            var t = e.applicationId,
                n = L.get(t);
            L.delete(t), (null == n ? void 0 : n.channelId) === Y && (Y = void 0)
        },
        EMBEDDED_ACTIVITY_INBOUND_UPDATE: function(e) {
            var t = e.guildId,
                n = e.channelId,
                r = e.embeddedActivity,
                o = e.connections;
            X({
                guildId: t,
                channelId: n,
                applicationId: r.application_id,
                instanceId: r.activity_id,
                userIds: o.map(function(e) {
                    return e.user_id
                })
            })
        },
        EMBEDDED_ACTIVITY_INBOUND_UPDATE_V2: function(e) {
            var t = e.activitySessionId,
                n = e.applicationId,
                r = e.channelId;
            X({
                guildId: e.guildId,
                channelId: r,
                applicationId: n,
                instanceId: e.instanceId,
                userIds: e.userIds,
                activitySessionId: t
            })
        },
        LOCAL_ACTIVITY_UPDATE: function(e) {
            var t, n = e.activity;
            if (null == n) return !1;
            var r = L.get(null !== (t = n.application_id) && void 0 !== t ? t : "");
            if (null == r) return !1;
            L.set(r.applicationId, g({}, r))
        },
        EMBEDDED_ACTIVITY_SET_CONFIG: function(e) {
            var t = e.applicationId,
                n = e.config,
                r = L.get(t);
            null != r && L.set(r.applicationId, A(g({}, r), {
                config: n
            }))
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF: function(e) {
            var t = z(e.guildId),
                n = B.get(t);
            B.set(t, {
                isFetching: !0,
                lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
            })
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function(e) {
            var t, n, r, o = e.guildId,
                i = e.activities,
                u = z(o);
            G.set(u, i);
            var s = Date.now();
            n = (t = {
                activities: i,
                now: s
            }).activities, r = t.now, n.forEach(function(e) {
                var t = e.application_id,
                    n = e.client_platform_config[(0, m.default)((0, _.getOS)())];
                if (!P.seenActivities.has(t) && (P.shouldShowNewActivityIndicator = !0, P.seenActivities.add(t)), null != n.label_until) {
                    var o = new Date(n.label_until).getTime();
                    if (!(o < r)) {
                        var i = P.seenNewActivities[t],
                            u = Object.hasOwn(P.seenNewActivities, t),
                            s = new Date(i).getTime() < o;
                        n.label_type === a.EmbeddedActivityLabelTypes.NEW && (!u || s) && (P.shouldShowNewActivityIndicator = !0, P.seenNewActivities[t] = n.label_until);
                        var l = P.seenUpdatedActivities[t],
                            c = Object.hasOwn(P.seenUpdatedActivities, t),
                            f = new Date(l).getTime() < o;
                        n.label_type === a.EmbeddedActivityLabelTypes.UPDATED && (!c || f) && (P.shouldShowNewActivityIndicator = !0, P.seenUpdatedActivities[t] = n.label_until)
                    }
                }
            }), B.set(u, {
                isFetching: !1,
                lastFetchTimestampMs: s
            })
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: function(e) {
            var t = z(e.guildId),
                n = B.get(t);
            B.set(t, {
                isFetching: !1,
                lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
            })
        },
        EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR: function() {
            P.shouldShowNewActivityIndicator = !1
        },
        EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: function(e) {
            var t = e.applicationId,
                n = e.lockState,
                r = e.pictureInPictureLockState,
                o = e.gridLockState;
            null == n ? j.delete(t) : j.set(t, n), null === r ? F.delete(t) : void 0 !== r && F.set(t, r), null === o ? V.delete(t) : void 0 !== o && V.set(t, o)
        },
        EMBEDDED_ACTIVITY_SET_PANEL_MODE: function(e) {
            W = e.activityPanelMode
        },
        EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: function(e) {
            K = e.focusedActivityLayout
        },
        CHANNEL_SELECT: function(e) {
            var t = e.channelId;
            Y !== t && W === I.ActivityPanelModes.PANEL && (W = I.ActivityPanelModes.PIP)
        },
        EMBEDDED_ACTIVITY_DISCONNECT: function(e) {
            var t = e.channelId,
                n = e.applicationId;
            e.isRejoiningFromCurrentSession && w.set(t, n)
        },
        CONNECTION_INTERRUPTED: function(e) {
            e.code === h.RPCCloseCodes.CLOSE_ABNORMAL && (Y = void 0, L.clear(), k = !1, W = I.ActivityPanelModes.DISCONNECTED)
        },
        CHANNEL_CALL_POPOUT_WINDOW_OPEN: function(e) {
            var t = e.channel,
                n = Array.from(L.values()).find(function(e) {
                    var n = e.channelId;
                    return t.id === n
                });
            void 0 !== n && w.set(t.id, n.applicationId)
        }
    });
    t.default = ee
}