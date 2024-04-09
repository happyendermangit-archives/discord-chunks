function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        NO_ACTIVITIES: function() {
            return p
        }
    }), n("47120"), n("653041"), n("51350");
    var r, s = n("442837"),
        a = n("570140"),
        o = n("911969"),
        l = n("314897"),
        u = n("592125"),
        d = n("496675"),
        _ = n("944486"),
        c = n("594174"),
        E = n("585483"),
        I = n("358085"),
        T = n("139143"),
        f = n("155268"),
        S = n("761122"),
        h = n("917107"),
        A = n("918559"),
        m = n("981631");

    function N(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let O = {
            seenActivities: new Set,
            everLaunchedActivities: new Set,
            seenNewActivities: {},
            seenUpdatedActivities: {},
            shouldShowNewActivityIndicator: !1
        },
        p = [],
        R = new Map,
        C = new Map,
        g = new Map,
        L = new Map,
        D = !1,
        v = new Map,
        M = new Map,
        y = new Map,
        P = new Map,
        U = new Map,
        b = new Map,
        G = new Map;
    let w = A.ActivityPanelModes.DISCONNECTED,
        B = A.FocusedActivityLayouts.RESIZABLE;

    function k(e) {
        return null != e ? e : "0"
    }

    function V(e) {
        var t, n;
        let {
            guildId: i,
            channelId: r,
            applicationId: s,
            instanceId: o,
            userIds: _,
            activitySessionId: c
        } = e, I = (0, f.default)(s);
        if (null == I) return;
        let S = u.default.getBasicChannel(r);
        if (!(null != S && d.default.canBasicChannel(m.BasicPermissions.CONNECT, S) || (null == S ? void 0 : S.type) === m.ChannelTypes.DM || (null == S ? void 0 : S.type) === m.ChannelTypes.GROUP_DM)) return;
        let h = {
                activitySessionId: null != c ? c : o,
                applicationId: s,
                channelId: r,
                guildId: i,
                instanceId: o,
                url: I,
                userIds: new Set(_)
            },
            A = l.default.getId(),
            N = R.get(h.applicationId);
        _.some(e => e === A) && null != N && (R.set(N.applicationId, {
            ...N,
            ...h
        }), a.default.dispatch({
            type: "EMBEDDED_ACTIVITY_INSTANCE_CHANGE",
            channelId: r,
            instanceId: o
        })), null != N && r === N.channelId && !_.some(e => e === A) && Array.from(N.userIds).some(e => e === A) ? L.get(r) === s ? L.delete(r) : R.delete(s) : _.some(e => e === A) && (null == N || N.applicationId !== s || N.channelId !== r) && (null != c && c === l.default.getSessionId() || (0, T.shouldMountActivityIFrameFromGatewayUpdateWithoutSessionIdCheck)("EmbeddedActivitiesStore")) && (x({
            channelId: r,
            applicationId: s,
            instanceId: o
        }), E.ComponentDispatch.dispatch(m.ComponentActions.OPEN_EMBEDDED_ACTIVITY, {
            channelId: r
        }));
        let O = (null !== (t = g.get(r)) && void 0 !== t ? t : []).filter(e => e.applicationId !== s),
            p = k(i),
            D = (null !== (n = C.get(p)) && void 0 !== n ? n : []).filter(e => !(e.applicationId === s && e.channelId === r));
        0 !== _.length && (O.push(h), D.push(h)), g.set(r, O), C.set(p, D)
    }

    function F(e) {
        e.embedded_activities.forEach(t => {
            let {
                channel_id: n,
                embedded_activity: i,
                connections: r
            } = t;
            V({
                guildId: e.id,
                channelId: n,
                applicationId: i.application_id,
                instanceId: i.activity_id,
                userIds: r.map(e => e.user_id)
            })
        })
    }

    function x(e) {
        var t, n;
        let {
            channelId: r,
            applicationId: s,
            instanceId: a
        } = e, o = (0, f.default)(s), d = l.default.getSessionId();
        if (null == o || null == d || (null === (t = R.get(s)) || void 0 === t ? void 0 : t.channelId) === r) return !1;
        let E = u.default.getChannel(r),
            I = null == E ? void 0 : E.getGuildId(),
            T = c.default.getCurrentUser();
        if (null == I && !(null !== (n = null == E ? void 0 : E.isPrivate()) && void 0 !== n && n) || null == T) return !1;
        i = r, R.set(s, {
            guildId: I,
            channelId: r,
            applicationId: s,
            url: o,
            userIds: new Set([T.id]),
            connectedSince: Date.now(),
            instanceId: a
        }), w = i !== _.default.getChannelId() || (0, h.default)(r) ? A.ActivityPanelModes.PIP : A.ActivityPanelModes.PANEL, G.set(Y(r, s), Date.now())
    }

    function H() {
        D = !1
    }

    function Y(e, t) {
        return "".concat(e, ":").concat(t)
    }
    class j extends(r = s.default.PersistedStore) {
        initialize(e) {
            var t, n;
            let i = new Set(null !== (t = null == e ? void 0 : e.seenActivities) && void 0 !== t ? t : []),
                r = new Set(null !== (n = null == e ? void 0 : e.everLaunchedActivities) && void 0 !== n ? n : []);
            null != e && (O = {
                ...e,
                seenActivities: i,
                everLaunchedActivities: r
            })
        }
        getState() {
            return O
        }
        getSelfEmbeddedActivityForChannel(e) {
            var t;
            return null !== (t = Array.from(R.values()).find(t => {
                let {
                    channelId: n
                } = t;
                return e === n
            })) && void 0 !== t ? t : null
        }
        getSelfEmbeddedActivities() {
            return R
        }
        getEmbeddedActivitiesForGuild(e) {
            var t;
            return null !== (t = C.get(e)) && void 0 !== t ? t : p
        }
        getEmbeddedActivitiesForChannel(e) {
            var t;
            return null !== (t = g.get(e)) && void 0 !== t ? t : p
        }
        getEmbeddedActivitiesByChannel() {
            return g
        }
        getEmbeddedActivityDurationMs(e, t) {
            let n = G.get(Y(e, t));
            return null == n ? null : Date.now() - n
        }
        isLaunchingActivity() {
            return D
        }
        getShelfActivities(e) {
            var t;
            let n = k(e);
            return null !== (t = v.get(n)) && void 0 !== t ? t : []
        }
        getShelfFetchStatus(e) {
            let t = k(e);
            return M.get(t)
        }
        shouldFetchShelf(e) {
            var t, n;
            let i = k(e),
                r = null !== (t = M.get(i)) && void 0 !== t ? t : {
                    isFetching: !1
                },
                s = Date.now() - (null !== (n = null == r ? void 0 : r.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 216e5;
            return !(null == r ? void 0 : r.isFetching) && s
        }
        getOrientationLockStateForApp(e) {
            var t;
            return null !== (t = y.get(e)) && void 0 !== t ? t : null
        }
        getPipOrientationLockStateForApp(e) {
            var t;
            return null !== (t = P.get(e)) && void 0 !== t ? t : this.getOrientationLockStateForApp(e)
        }
        getGridOrientationLockStateForApp(e) {
            var t, n;
            return null !== (n = null !== (t = U.get(e)) && void 0 !== t ? t : P.get(e)) && void 0 !== n ? n : this.getOrientationLockStateForApp(e)
        }
        getLayoutModeForApp(e) {
            return b.get(e)
        }
        getConnectedActivityChannelId() {
            return i
        }
        getActivityPanelMode() {
            return w
        }
        getFocusedLayout() {
            return B
        }
        getCurrentEmbeddedActivity() {
            var e;
            let t = this.getConnectedActivityChannelId();
            if (null != t) return null !== (e = this.getSelfEmbeddedActivityForChannel(t)) && void 0 !== e ? e : void 0
        }
        getEmbeddedActivityForUserId(e, t) {
            let n;
            if (void 0 !== t) {
                e: for (let [i, r] of g)
                    for (let i of r)
                        if (i.applicationId === t && i.userIds.has(e)) {
                            n = i;
                            break e
                        }return n
            }
        }
        hasActivityEverBeenLaunched(e) {
            return O.everLaunchedActivities.has(e)
        }
    }
    N(j, "displayName", "EmbeddedActivitiesStore"), N(j, "persistKey", "EmbeddedActivities"), N(j, "migrations", [e => ({
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
    }, e => (delete e.usersHavePlayedByApp, {
        ...e
    })]);
    let W = new j(a.default, {
        ACTIVITY_LAYOUT_MODE_UPDATE: function(e) {
            let {
                applicationId: t,
                layoutMode: n
            } = e;
            b.set(t, n)
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
            let {
                guilds: t
            } = e;
            g.clear(), C.clear(), t.forEach(e => F(e))
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            F(t)
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
            g.set(t.id, []);
            let n = t.guild_id;
            if (null != n) {
                var i;
                let e = k(n),
                    r = (null !== (i = C.get(e)) && void 0 !== i ? i : []).filter(e => e.channelId !== t.id);
                C.set(e, r)
            }
        },
        EMBEDDED_ACTIVITY_LAUNCH_START: function() {
            D = !0
        },
        EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: function(e) {
            let {
                applicationId: t
            } = e;
            O.everLaunchedActivities.add(t),
                function() {
                    D = !1
                }()
        },
        EMBEDDED_ACTIVITY_LAUNCH_FAIL: function() {
            (function() {
                D = !1
            })()
        },
        EMBEDDED_ACTIVITY_OPEN: function(e) {
            let {
                channelId: t,
                applicationId: n
            } = e;
            x({
                channelId: t,
                applicationId: n
            })
        },
        EMBEDDED_ACTIVITY_CLOSE: function(e) {
            let {
                applicationId: t
            } = e, n = R.get(t);
            R.delete(t), (null == n ? void 0 : n.channelId) === i && (i = void 0)
        },
        EMBEDDED_ACTIVITY_UPDATE: function(e) {
            let {
                guildId: t,
                channelId: n,
                embeddedActivity: i,
                connections: r
            } = e;
            V({
                guildId: t,
                channelId: n,
                applicationId: i.application_id,
                instanceId: i.activity_id,
                userIds: r.map(e => e.user_id)
            })
        },
        EMBEDDED_ACTIVITY_UPDATE_V2: function(e) {
            let {
                activitySessionId: t,
                applicationId: n,
                channelId: i,
                guildId: r,
                instanceId: s,
                userIds: a
            } = e;
            V({
                guildId: r,
                channelId: i,
                applicationId: n,
                instanceId: s,
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
            let i = R.get(null !== (t = n.application_id) && void 0 !== t ? t : "");
            if (null == i) return !1;
            R.set(i.applicationId, {
                ...i
            })
        },
        EMBEDDED_ACTIVITY_SET_CONFIG: function(e) {
            let {
                applicationId: t,
                config: n
            } = e, i = R.get(t);
            null != i && R.set(i.applicationId, {
                ...i,
                config: n
            })
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF: function(e) {
            let {
                guildId: t
            } = e, n = k(t), i = M.get(n);
            M.set(n, {
                isFetching: !0,
                lastFetchTimestampMs: null == i ? void 0 : i.lastFetchTimestampMs
            })
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function(e) {
            let {
                guildId: t,
                activities: n
            } = e, i = k(t);
            v.set(i, n);
            let r = Date.now();
            ! function(e) {
                let {
                    activities: t,
                    now: n
                } = e;
                t.forEach(e => {
                    let t = e.application_id,
                        i = e.client_platform_config[(0, S.default)((0, I.getOS)())];
                    if (!O.seenActivities.has(t) && (O.shouldShowNewActivityIndicator = !0, O.seenActivities.add(t)), null == i.label_until) return;
                    let r = new Date(i.label_until).getTime();
                    if (r < n) return;
                    let s = O.seenNewActivities[t],
                        a = Object.hasOwn(O.seenNewActivities, t),
                        l = new Date(s).getTime() < r;
                    i.label_type === o.EmbeddedActivityLabelTypes.NEW && (!a || l) && (O.shouldShowNewActivityIndicator = !0, O.seenNewActivities[t] = i.label_until);
                    let u = O.seenUpdatedActivities[t],
                        d = Object.hasOwn(O.seenUpdatedActivities, t),
                        _ = new Date(u).getTime() < r;
                    i.label_type === o.EmbeddedActivityLabelTypes.UPDATED && (!d || _) && (O.shouldShowNewActivityIndicator = !0, O.seenUpdatedActivities[t] = i.label_until)
                })
            }({
                activities: n,
                now: r
            }), M.set(i, {
                isFetching: !1,
                lastFetchTimestampMs: r
            })
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: function(e) {
            let {
                guildId: t
            } = e, n = k(t), i = M.get(n);
            M.set(n, {
                isFetching: !1,
                lastFetchTimestampMs: null == i ? void 0 : i.lastFetchTimestampMs
            })
        },
        EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR: () => {
            O.shouldShowNewActivityIndicator = !1
        },
        EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: function(e) {
            let {
                applicationId: t,
                lockState: n,
                pictureInPictureLockState: i,
                gridLockState: r
            } = e;
            null == n ? y.delete(t) : y.set(t, n), null === i ? P.delete(t) : void 0 !== i && P.set(t, i), null === r ? U.delete(t) : void 0 !== r && U.set(t, r)
        },
        EMBEDDED_ACTIVITY_SET_PANEL_MODE: function(e) {
            let {
                activityPanelMode: t
            } = e;
            w = t
        },
        EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: function(e) {
            let {
                focusedActivityLayout: t
            } = e;
            B = t
        },
        CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            i !== t && w === A.ActivityPanelModes.PANEL && (w = A.ActivityPanelModes.PIP)
        },
        EMBEDDED_ACTIVITY_DISCONNECT: function(e) {
            let {
                channelId: t,
                applicationId: n,
                isRejoiningFromCurrentSession: i
            } = e;
            i && L.set(t, n)
        },
        CONNECTION_INTERRUPTED: function(e) {
            e.code === m.RPCCloseCodes.CLOSE_ABNORMAL && (i = void 0, R.clear(), D = !1, w = A.ActivityPanelModes.DISCONNECTED)
        },
        CHANNEL_CALL_POPOUT_WINDOW_OPEN: function(e) {
            let {
                channel: t
            } = e, n = Array.from(R.values()).find(e => {
                let {
                    channelId: n
                } = e;
                return t.id === n
            });
            void 0 !== n && L.set(t.id, n.applicationId)
        }
    });
    t.default = W
}