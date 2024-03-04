function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        NO_ACTIVITIES: function() {
            return v
        },
        default: function() {
            return Y
        }
    }), n("222007"), n("424973"), n("581081");
    var s = n("446674"),
        r = n("913144"),
        a = n("798609"),
        o = n("271938"),
        l = n("42203"),
        u = n("957255"),
        d = n("18494"),
        c = n("697218"),
        f = n("773336"),
        _ = n("378713"),
        h = n("711562"),
        E = n("334368"),
        g = n("420444"),
        m = n("272505"),
        p = n("49111");
    let S = {
            seenActivities: new Set,
            everLaunchedActivities: new Set,
            seenNewActivities: {},
            seenUpdatedActivities: {},
            shouldShowNewActivityIndicator: !1,
            usersHavePlayedByApp: new Map
        },
        v = [],
        T = new Map,
        I = new Map,
        C = new Map,
        A = new Map,
        y = !1,
        N = new Map,
        R = new Map,
        O = new Map,
        D = new Map,
        P = new Map,
        L = new Map,
        M = new Map;
    let b = m.ActivityPanelModes.DISCONNECTED,
        U = m.FocusedActivityLayouts.RESIZABLE;

    function w(e) {
        return null != e ? e : "0"
    }

    function k(e) {
        var t, n;
        let {
            guildId: i,
            channelId: s,
            applicationId: a,
            instanceId: d,
            userIds: c,
            activitySessionId: f
        } = e, E = (0, h.default)(a);
        if (null == E) return;
        let g = l.default.getBasicChannel(s),
            m = null != g && u.default.canBasicChannel(p.BasicPermissions.CONNECT, g) || (null == g ? void 0 : g.type) === p.ChannelTypes.DM || (null == g ? void 0 : g.type) === p.ChannelTypes.GROUP_DM;
        if (function(e, t) {
                var n;
                S.usersHavePlayedByApp.set(e, new Set([...null !== (n = S.usersHavePlayedByApp.get(e)) && void 0 !== n ? n : [], ...t]))
            }(a, c), !m) return;
        let v = {
                activitySessionId: null != f ? f : d,
                applicationId: a,
                channelId: s,
                guildId: i,
                instanceId: d,
                url: E,
                userIds: new Set(c)
            },
            y = o.default.getId(),
            N = T.get(v.applicationId);
        if (c.some(e => e === y) && null != N && (T.set(N.applicationId, {
                ...N,
                ...v
            }), r.default.dispatch({
                type: "EMBEDDED_ACTIVITY_INSTANCE_CHANGE",
                channelId: s,
                instanceId: d
            })), null != N && s === N.channelId && !c.some(e => e === y) && Array.from(N.userIds).some(e => e === y)) A.get(s) === a ? A.delete(s) : T.delete(a);
        else if (c.some(e => e === y) && (null == N || N.applicationId !== a || N.channelId !== s)) {
            let e = null != f && f === o.default.getSessionId();
            (e || (0, _.shouldMountActivityIFrameFromGatewayUpdateWithoutSessionIdCheck)("EmbeddedActivitiesStore")) && G({
                channelId: s,
                applicationId: a,
                instanceId: d
            })
        }
        let R = null !== (t = C.get(s)) && void 0 !== t ? t : [],
            O = R.filter(e => e.applicationId !== a),
            D = w(i),
            P = null !== (n = I.get(D)) && void 0 !== n ? n : [],
            L = P.filter(e => !(e.applicationId === a && e.channelId === s));
        0 !== c.length && (O.push(v), L.push(v)), C.set(s, O), I.set(D, L)
    }

    function V(e) {
        let t = e.embedded_activities;
        t.forEach(t => {
            let {
                channel_id: n,
                embedded_activity: i,
                connections: s
            } = t;
            k({
                guildId: e.id,
                channelId: n,
                applicationId: i.application_id,
                instanceId: i.activity_id,
                userIds: s.map(e => e.user_id)
            })
        })
    }

    function G(e) {
        var t, n;
        let {
            channelId: s,
            applicationId: r,
            instanceId: a
        } = e, u = (0, h.default)(r), f = o.default.getSessionId();
        if (null == u || null == f || (null === (t = T.get(r)) || void 0 === t ? void 0 : t.channelId) === s) return !1;
        let _ = l.default.getChannel(s),
            E = null == _ ? void 0 : _.getGuildId(),
            p = c.default.getCurrentUser();
        if (null == E && !(null !== (n = null == _ ? void 0 : _.isPrivate()) && void 0 !== n && n) || null == p) return !1;
        i = s, T.set(r, {
            guildId: E,
            channelId: s,
            applicationId: r,
            url: u,
            userIds: new Set([p.id]),
            connectedSince: Date.now(),
            instanceId: a
        }), b = i !== d.default.getChannelId() || (0, g.default)(s) ? m.ActivityPanelModes.PIP : m.ActivityPanelModes.PANEL, M.set(x(s, r), Date.now())
    }

    function F() {
        y = !1
    }

    function x(e, t) {
        return "".concat(e, ":").concat(t)
    }
    class B extends s.default.PersistedStore {
        initialize(e) {
            var t, n;
            let i = new Map;
            Array.isArray(null == e ? void 0 : e.usersHavePlayedByApp) && (null == e || e.usersHavePlayedByApp.forEach(e => {
                if (Array.isArray(e)) {
                    let [t, n] = e;
                    "string" == typeof t && Array.isArray(n) && i.set(t, new Set(n))
                }
            }));
            let s = new Set(null !== (t = null == e ? void 0 : e.seenActivities) && void 0 !== t ? t : []),
                r = new Set(null !== (n = null == e ? void 0 : e.everLaunchedActivities) && void 0 !== n ? n : []);
            null != e && (S = {
                ...e,
                seenActivities: s,
                everLaunchedActivities: r,
                usersHavePlayedByApp: i
            })
        }
        getState() {
            return S
        }
        getSelfEmbeddedActivityForChannel(e) {
            var t;
            return null !== (t = Array.from(T.values()).find(t => {
                let {
                    channelId: n
                } = t;
                return e === n
            })) && void 0 !== t ? t : null
        }
        getSelfEmbeddedActivities() {
            return T
        }
        getEmbeddedActivitiesForGuild(e) {
            var t;
            return null !== (t = I.get(e)) && void 0 !== t ? t : v
        }
        getEmbeddedActivitiesForChannel(e) {
            var t;
            return null !== (t = C.get(e)) && void 0 !== t ? t : v
        }
        getEmbeddedActivitiesByChannel() {
            return C
        }
        getEmbeddedActivityDurationMs(e, t) {
            let n = M.get(x(e, t));
            return null == n ? null : Date.now() - n
        }
        isLaunchingActivity() {
            return y
        }
        getShelfActivities(e) {
            var t;
            let n = w(e);
            return null !== (t = N.get(n)) && void 0 !== t ? t : []
        }
        getShelfFetchStatus(e) {
            let t = w(e);
            return R.get(t)
        }
        shouldFetchShelf(e) {
            var t, n;
            let i = w(e),
                s = null !== (t = R.get(i)) && void 0 !== t ? t : {
                    isFetching: !1
                },
                r = Date.now(),
                a = r - (null !== (n = null == s ? void 0 : s.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 216e5;
            return !(null == s ? void 0 : s.isFetching) && a
        }
        getOrientationLockStateForApp(e) {
            var t;
            return null !== (t = O.get(e)) && void 0 !== t ? t : null
        }
        getPipOrientationLockStateForApp(e) {
            var t;
            return null !== (t = D.get(e)) && void 0 !== t ? t : this.getOrientationLockStateForApp(e)
        }
        getGridOrientationLockStateForApp(e) {
            var t, n;
            return null !== (n = null !== (t = P.get(e)) && void 0 !== t ? t : D.get(e)) && void 0 !== n ? n : this.getOrientationLockStateForApp(e)
        }
        getLayoutModeForApp(e) {
            return L.get(e)
        }
        getUsersHavePlayedByApp(e) {
            var t;
            return [...null !== (t = S.usersHavePlayedByApp.get(e)) && void 0 !== t ? t : []]
        }
        getConnectedActivityChannelId() {
            return i
        }
        getActivityPanelMode() {
            return b
        }
        getFocusedLayout() {
            return U
        }
        getCurrentEmbeddedActivity() {
            var e;
            let t = this.getConnectedActivityChannelId();
            if (null != t) return null !== (e = this.getSelfEmbeddedActivityForChannel(t)) && void 0 !== e ? e : void 0
        }
        getEmbeddedActivityForUserId(e, t) {
            let n;
            if (void 0 !== t) {
                e: for (let [i, s] of C)
                    for (let i of s)
                        if (i.applicationId === t && i.userIds.has(e)) {
                            n = i;
                            break e
                        }return n
            }
        }
        hasActivityEverBeenLaunched(e) {
            return S.everLaunchedActivities.has(e)
        }
    }
    B.displayName = "EmbeddedActivitiesStore", B.persistKey = "EmbeddedActivities", B.migrations = [e => ({
        ...e,
        seenFeaturedActivities: [],
        shouldShowNewActivityIndicator: !1
    }), e => (delete e.seenFeaturedActivities, {
        ...e,
        seenActivities: []
    }), e => ({
        ...e
    }), e => (delete e.currentFreeActivity, delete e.lastFreeActivityRotationTimestampMs, delete e.freePeriodActivities, delete e.shouldShowFreeActivityIndicator, {
        ...e
    }), e => {
        var t;
        let n = new Set(null !== (t = e.seenActivities) && void 0 !== t ? t : []);
        return {
            ...e,
            seenActivities: n,
            seenNewActivities: {},
            seenUpdatedActivities: {}
        }
    }, e => {
        var t;
        let n = new Set(null !== (t = e.everLaunchedActivities) && void 0 !== t ? t : []);
        return {
            ...e,
            everLaunchedActivities: n
        }
    }];
    let H = new B(r.default, {
        ACTIVITY_LAYOUT_MODE_UPDATE: function(e) {
            let {
                applicationId: t,
                layoutMode: n
            } = e;
            L.set(t, n)
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
            let {
                guilds: t
            } = e;
            C.clear(), I.clear(), t.forEach(e => V(e))
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            V(t)
        },
        CALL_CREATE: function(e) {
            let {
                channelId: t,
                embeddedActivities: n
            } = e;
            ! function(e, t) {
                t.forEach(e => {
                    let {
                        channel_id: t,
                        embedded_activity: n,
                        connections: i
                    } = e;
                    k({
                        guildId: null,
                        channelId: t,
                        applicationId: n.application_id,
                        instanceId: n.activity_id,
                        userIds: i.map(e => e.user_id)
                    })
                })
            }(0, n)
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            C.set(t.id, []);
            let n = t.guild_id;
            if (null != n) {
                var i;
                let e = w(n),
                    s = null !== (i = I.get(e)) && void 0 !== i ? i : [],
                    r = s.filter(e => e.channelId !== t.id);
                I.set(e, r)
            }
        },
        EMBEDDED_ACTIVITY_LAUNCH_START: function() {
            y = !0
        },
        EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: function(e) {
            let {
                applicationId: t
            } = e;
            S.everLaunchedActivities.add(t),
                function() {
                    y = !1
                }()
        },
        EMBEDDED_ACTIVITY_LAUNCH_FAIL: function() {
            (function() {
                y = !1
            })()
        },
        EMBEDDED_ACTIVITY_OPEN: function(e) {
            let {
                channelId: t,
                applicationId: n
            } = e;
            G({
                channelId: t,
                applicationId: n
            })
        },
        EMBEDDED_ACTIVITY_CLOSE: function(e) {
            let {
                applicationId: t
            } = e, n = T.get(t);
            T.delete(t), (null == n ? void 0 : n.channelId) === i && (i = void 0)
        },
        EMBEDDED_ACTIVITY_INBOUND_UPDATE: function(e) {
            let {
                guildId: t,
                channelId: n,
                embeddedActivity: i,
                connections: s
            } = e;
            k({
                guildId: t,
                channelId: n,
                applicationId: i.application_id,
                instanceId: i.activity_id,
                userIds: s.map(e => e.user_id)
            })
        },
        EMBEDDED_ACTIVITY_INBOUND_UPDATE_V2: function(e) {
            let {
                activitySessionId: t,
                applicationId: n,
                channelId: i,
                guildId: s,
                instanceId: r,
                userIds: a
            } = e;
            k({
                guildId: s,
                channelId: i,
                applicationId: n,
                instanceId: r,
                userIds: a,
                activitySessionId: t
            })
        },
        LOCAL_ACTIVITY_UPDATE: function(e) {
            var t;
            let {
                activity: n
            } = e;
            if (null == n) return !1;
            let i = T.get(null !== (t = n.application_id) && void 0 !== t ? t : "");
            if (null == i) return !1;
            T.set(i.applicationId, {
                ...i
            })
        },
        EMBEDDED_ACTIVITY_SET_CONFIG: function(e) {
            let {
                applicationId: t,
                config: n
            } = e, i = T.get(t);
            null != i && T.set(i.applicationId, {
                ...i,
                config: n
            })
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF: function(e) {
            let {
                guildId: t
            } = e, n = w(t), i = R.get(n);
            R.set(n, {
                isFetching: !0,
                lastFetchTimestampMs: null == i ? void 0 : i.lastFetchTimestampMs
            })
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function(e) {
            let {
                guildId: t,
                activities: n
            } = e, i = w(t);
            N.set(i, n);
            let s = Date.now();
            ! function(e) {
                let {
                    activities: t,
                    now: n
                } = e;
                t.forEach(e => {
                    let t = e.application_id,
                        i = e.client_platform_config[(0, E.default)((0, f.getOS)())];
                    if (!S.seenActivities.has(t) && (S.shouldShowNewActivityIndicator = !0, S.seenActivities.add(t)), null == i.label_until) return;
                    let s = new Date(i.label_until).getTime();
                    if (s < n) return;
                    let r = S.seenNewActivities[t],
                        o = Object.hasOwn(S.seenNewActivities, t),
                        l = new Date(r).getTime() < s;
                    i.label_type === a.EmbeddedActivityLabelTypes.NEW && (!o || l) && (S.shouldShowNewActivityIndicator = !0, S.seenNewActivities[t] = i.label_until);
                    let u = S.seenUpdatedActivities[t],
                        d = Object.hasOwn(S.seenUpdatedActivities, t),
                        c = new Date(u).getTime() < s;
                    i.label_type === a.EmbeddedActivityLabelTypes.UPDATED && (!d || c) && (S.shouldShowNewActivityIndicator = !0, S.seenUpdatedActivities[t] = i.label_until)
                })
            }({
                activities: n,
                now: s
            }), R.set(i, {
                isFetching: !1,
                lastFetchTimestampMs: s
            })
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: function(e) {
            let {
                guildId: t
            } = e, n = w(t), i = R.get(n);
            R.set(n, {
                isFetching: !1,
                lastFetchTimestampMs: null == i ? void 0 : i.lastFetchTimestampMs
            })
        },
        EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR: () => {
            S.shouldShowNewActivityIndicator = !1
        },
        EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: function(e) {
            let {
                applicationId: t,
                lockState: n,
                pictureInPictureLockState: i,
                gridLockState: s
            } = e;
            null == n ? O.delete(t) : O.set(t, n), null === i ? D.delete(t) : void 0 !== i && D.set(t, i), null === s ? P.delete(t) : void 0 !== s && P.set(t, s)
        },
        EMBEDDED_ACTIVITY_SET_PANEL_MODE: function(e) {
            let {
                activityPanelMode: t
            } = e;
            b = t
        },
        EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: function(e) {
            let {
                focusedActivityLayout: t
            } = e;
            U = t
        },
        CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            i !== t && b === m.ActivityPanelModes.PANEL && (b = m.ActivityPanelModes.PIP)
        },
        EMBEDDED_ACTIVITY_DISCONNECT: function(e) {
            let {
                channelId: t,
                applicationId: n,
                isRejoiningFromCurrentSession: i
            } = e;
            i && A.set(t, n)
        },
        CONNECTION_INTERRUPTED: function(e) {
            e.code === p.RPCCloseCodes.CLOSE_ABNORMAL && (i = void 0, T.clear(), y = !1, b = m.ActivityPanelModes.DISCONNECTED)
        }
    });
    var Y = H
}