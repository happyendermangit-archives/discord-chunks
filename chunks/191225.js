function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        NO_ACTIVITIES: function() {
            return v
        },
        default: function() {
            return K
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
        _ = n("659500"),
        f = n("773336"),
        E = n("378713"),
        h = n("711562"),
        g = n("334368"),
        m = n("420444"),
        p = n("272505"),
        S = n("49111");
    let T = {
            seenActivities: new Set,
            everLaunchedActivities: new Set,
            seenNewActivities: {},
            seenUpdatedActivities: {},
            shouldShowNewActivityIndicator: !1,
            usersHavePlayedByApp: new Map
        },
        v = [],
        I = new Map,
        A = new Map,
        C = new Map,
        y = new Map,
        N = !1,
        R = new Map,
        O = new Map,
        D = new Map,
        P = new Map,
        L = new Map,
        M = new Map,
        b = new Map;
    let U = p.ActivityPanelModes.DISCONNECTED,
        w = p.FocusedActivityLayouts.RESIZABLE;

    function k(e) {
        return null != e ? e : "0"
    }

    function V(e) {
        var t, n;
        let {
            guildId: i,
            channelId: s,
            applicationId: a,
            instanceId: d,
            userIds: c,
            activitySessionId: f
        } = e, g = (0, h.default)(a);
        if (null == g) return;
        let m = l.default.getBasicChannel(s),
            p = null != m && u.default.canBasicChannel(S.BasicPermissions.CONNECT, m) || (null == m ? void 0 : m.type) === S.ChannelTypes.DM || (null == m ? void 0 : m.type) === S.ChannelTypes.GROUP_DM;
        if (function(e, t) {
                var n;
                T.usersHavePlayedByApp.set(e, new Set([...null !== (n = T.usersHavePlayedByApp.get(e)) && void 0 !== n ? n : [], ...t]))
            }(a, c), !p) return;
        let v = {
                activitySessionId: null != f ? f : d,
                applicationId: a,
                channelId: s,
                guildId: i,
                instanceId: d,
                url: g,
                userIds: new Set(c)
            },
            N = o.default.getId(),
            R = I.get(v.applicationId);
        if (c.some(e => e === N) && null != R && (I.set(R.applicationId, {
                ...R,
                ...v
            }), r.default.dispatch({
                type: "EMBEDDED_ACTIVITY_INSTANCE_CHANGE",
                channelId: s,
                instanceId: d
            })), null != R && s === R.channelId && !c.some(e => e === N) && Array.from(R.userIds).some(e => e === N)) y.get(s) === a ? y.delete(s) : I.delete(a);
        else if (c.some(e => e === N) && (null == R || R.applicationId !== a || R.channelId !== s)) {
            let e = null != f && f === o.default.getSessionId();
            (e || (0, E.shouldMountActivityIFrameFromGatewayUpdateWithoutSessionIdCheck)("EmbeddedActivitiesStore")) && (F({
                channelId: s,
                applicationId: a,
                instanceId: d
            }), _.ComponentDispatch.dispatch(S.ComponentActions.OPEN_EMBEDDED_ACTIVITY, {
                channelId: s
            }))
        }
        let O = null !== (t = C.get(s)) && void 0 !== t ? t : [],
            D = O.filter(e => e.applicationId !== a),
            P = k(i),
            L = null !== (n = A.get(P)) && void 0 !== n ? n : [],
            M = L.filter(e => !(e.applicationId === a && e.channelId === s));
        0 !== c.length && (D.push(v), M.push(v)), C.set(s, D), A.set(P, M)
    }

    function G(e) {
        let t = e.embedded_activities;
        t.forEach(t => {
            let {
                channel_id: n,
                embedded_activity: i,
                connections: s
            } = t;
            V({
                guildId: e.id,
                channelId: n,
                applicationId: i.application_id,
                instanceId: i.activity_id,
                userIds: s.map(e => e.user_id)
            })
        })
    }

    function F(e) {
        var t, n;
        let {
            channelId: s,
            applicationId: r,
            instanceId: a
        } = e, u = (0, h.default)(r), _ = o.default.getSessionId();
        if (null == u || null == _ || (null === (t = I.get(r)) || void 0 === t ? void 0 : t.channelId) === s) return !1;
        let f = l.default.getChannel(s),
            E = null == f ? void 0 : f.getGuildId(),
            g = c.default.getCurrentUser();
        if (null == E && !(null !== (n = null == f ? void 0 : f.isPrivate()) && void 0 !== n && n) || null == g) return !1;
        i = s, I.set(r, {
            guildId: E,
            channelId: s,
            applicationId: r,
            url: u,
            userIds: new Set([g.id]),
            connectedSince: Date.now(),
            instanceId: a
        }), U = i !== d.default.getChannelId() || (0, m.default)(s) ? p.ActivityPanelModes.PIP : p.ActivityPanelModes.PANEL, b.set(B(s, r), Date.now())
    }

    function x() {
        N = !1
    }

    function B(e, t) {
        return "".concat(e, ":").concat(t)
    }
    class H extends s.default.PersistedStore {
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
            null != e && (T = {
                ...e,
                seenActivities: s,
                everLaunchedActivities: r,
                usersHavePlayedByApp: i
            })
        }
        getState() {
            return T
        }
        getSelfEmbeddedActivityForChannel(e) {
            var t;
            return null !== (t = Array.from(I.values()).find(t => {
                let {
                    channelId: n
                } = t;
                return e === n
            })) && void 0 !== t ? t : null
        }
        getSelfEmbeddedActivities() {
            return I
        }
        getEmbeddedActivitiesForGuild(e) {
            var t;
            return null !== (t = A.get(e)) && void 0 !== t ? t : v
        }
        getEmbeddedActivitiesForChannel(e) {
            var t;
            return null !== (t = C.get(e)) && void 0 !== t ? t : v
        }
        getEmbeddedActivitiesByChannel() {
            return C
        }
        getEmbeddedActivityDurationMs(e, t) {
            let n = b.get(B(e, t));
            return null == n ? null : Date.now() - n
        }
        isLaunchingActivity() {
            return N
        }
        getShelfActivities(e) {
            var t;
            let n = k(e);
            return null !== (t = R.get(n)) && void 0 !== t ? t : []
        }
        getShelfFetchStatus(e) {
            let t = k(e);
            return O.get(t)
        }
        shouldFetchShelf(e) {
            var t, n;
            let i = k(e),
                s = null !== (t = O.get(i)) && void 0 !== t ? t : {
                    isFetching: !1
                },
                r = Date.now(),
                a = r - (null !== (n = null == s ? void 0 : s.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 216e5;
            return !(null == s ? void 0 : s.isFetching) && a
        }
        getOrientationLockStateForApp(e) {
            var t;
            return null !== (t = D.get(e)) && void 0 !== t ? t : null
        }
        getPipOrientationLockStateForApp(e) {
            var t;
            return null !== (t = P.get(e)) && void 0 !== t ? t : this.getOrientationLockStateForApp(e)
        }
        getGridOrientationLockStateForApp(e) {
            var t, n;
            return null !== (n = null !== (t = L.get(e)) && void 0 !== t ? t : P.get(e)) && void 0 !== n ? n : this.getOrientationLockStateForApp(e)
        }
        getLayoutModeForApp(e) {
            return M.get(e)
        }
        getUsersHavePlayedByApp(e) {
            var t;
            return [...null !== (t = T.usersHavePlayedByApp.get(e)) && void 0 !== t ? t : []]
        }
        getConnectedActivityChannelId() {
            return i
        }
        getActivityPanelMode() {
            return U
        }
        getFocusedLayout() {
            return w
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
            return T.everLaunchedActivities.has(e)
        }
    }
    H.displayName = "EmbeddedActivitiesStore", H.persistKey = "EmbeddedActivities", H.migrations = [e => ({
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
    let Y = new H(r.default, {
        ACTIVITY_LAYOUT_MODE_UPDATE: function(e) {
            let {
                applicationId: t,
                layoutMode: n
            } = e;
            M.set(t, n)
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
            let {
                guilds: t
            } = e;
            C.clear(), A.clear(), t.forEach(e => G(e))
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            G(t)
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
                    V({
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
                let e = k(n),
                    s = null !== (i = A.get(e)) && void 0 !== i ? i : [],
                    r = s.filter(e => e.channelId !== t.id);
                A.set(e, r)
            }
        },
        EMBEDDED_ACTIVITY_LAUNCH_START: function() {
            N = !0
        },
        EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: function(e) {
            let {
                applicationId: t
            } = e;
            T.everLaunchedActivities.add(t),
                function() {
                    N = !1
                }()
        },
        EMBEDDED_ACTIVITY_LAUNCH_FAIL: function() {
            (function() {
                N = !1
            })()
        },
        EMBEDDED_ACTIVITY_OPEN: function(e) {
            let {
                channelId: t,
                applicationId: n
            } = e;
            F({
                channelId: t,
                applicationId: n
            })
        },
        EMBEDDED_ACTIVITY_CLOSE: function(e) {
            let {
                applicationId: t
            } = e, n = I.get(t);
            I.delete(t), (null == n ? void 0 : n.channelId) === i && (i = void 0)
        },
        EMBEDDED_ACTIVITY_INBOUND_UPDATE: function(e) {
            let {
                guildId: t,
                channelId: n,
                embeddedActivity: i,
                connections: s
            } = e;
            V({
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
            V({
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
            let i = I.get(null !== (t = n.application_id) && void 0 !== t ? t : "");
            if (null == i) return !1;
            I.set(i.applicationId, {
                ...i
            })
        },
        EMBEDDED_ACTIVITY_SET_CONFIG: function(e) {
            let {
                applicationId: t,
                config: n
            } = e, i = I.get(t);
            null != i && I.set(i.applicationId, {
                ...i,
                config: n
            })
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF: function(e) {
            let {
                guildId: t
            } = e, n = k(t), i = O.get(n);
            O.set(n, {
                isFetching: !0,
                lastFetchTimestampMs: null == i ? void 0 : i.lastFetchTimestampMs
            })
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function(e) {
            let {
                guildId: t,
                activities: n
            } = e, i = k(t);
            R.set(i, n);
            let s = Date.now();
            ! function(e) {
                let {
                    activities: t,
                    now: n
                } = e;
                t.forEach(e => {
                    let t = e.application_id,
                        i = e.client_platform_config[(0, g.default)((0, f.getOS)())];
                    if (!T.seenActivities.has(t) && (T.shouldShowNewActivityIndicator = !0, T.seenActivities.add(t)), null == i.label_until) return;
                    let s = new Date(i.label_until).getTime();
                    if (s < n) return;
                    let r = T.seenNewActivities[t],
                        o = Object.hasOwn(T.seenNewActivities, t),
                        l = new Date(r).getTime() < s;
                    i.label_type === a.EmbeddedActivityLabelTypes.NEW && (!o || l) && (T.shouldShowNewActivityIndicator = !0, T.seenNewActivities[t] = i.label_until);
                    let u = T.seenUpdatedActivities[t],
                        d = Object.hasOwn(T.seenUpdatedActivities, t),
                        c = new Date(u).getTime() < s;
                    i.label_type === a.EmbeddedActivityLabelTypes.UPDATED && (!d || c) && (T.shouldShowNewActivityIndicator = !0, T.seenUpdatedActivities[t] = i.label_until)
                })
            }({
                activities: n,
                now: s
            }), O.set(i, {
                isFetching: !1,
                lastFetchTimestampMs: s
            })
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: function(e) {
            let {
                guildId: t
            } = e, n = k(t), i = O.get(n);
            O.set(n, {
                isFetching: !1,
                lastFetchTimestampMs: null == i ? void 0 : i.lastFetchTimestampMs
            })
        },
        EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR: () => {
            T.shouldShowNewActivityIndicator = !1
        },
        EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: function(e) {
            let {
                applicationId: t,
                lockState: n,
                pictureInPictureLockState: i,
                gridLockState: s
            } = e;
            null == n ? D.delete(t) : D.set(t, n), null === i ? P.delete(t) : void 0 !== i && P.set(t, i), null === s ? L.delete(t) : void 0 !== s && L.set(t, s)
        },
        EMBEDDED_ACTIVITY_SET_PANEL_MODE: function(e) {
            let {
                activityPanelMode: t
            } = e;
            U = t
        },
        EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: function(e) {
            let {
                focusedActivityLayout: t
            } = e;
            w = t
        },
        CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            i !== t && U === p.ActivityPanelModes.PANEL && (U = p.ActivityPanelModes.PIP)
        },
        EMBEDDED_ACTIVITY_DISCONNECT: function(e) {
            let {
                channelId: t,
                applicationId: n,
                isRejoiningFromCurrentSession: i
            } = e;
            i && y.set(t, n)
        },
        CONNECTION_INTERRUPTED: function(e) {
            e.code === S.RPCCloseCodes.CLOSE_ABNORMAL && (i = void 0, I.clear(), N = !1, U = p.ActivityPanelModes.DISCONNECTED)
        },
        CHANNEL_CALL_POPOUT_WINDOW_OPEN: function(e) {
            let {
                channel: t
            } = e, n = Array.from(I.values()).find(e => {
                let {
                    channelId: n
                } = e;
                return t.id === n
            });
            void 0 !== n && y.set(t.id, n.applicationId)
        }
    });
    var K = Y
}