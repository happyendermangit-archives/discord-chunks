function(e, t, n) {
    "use strict";
    let s;
    n.r(t), n.d(t, {
        NO_ACTIVITIES: function() {
            return y
        },
        default: function() {
            return Y
        }
    }), n("222007"), n("424973"), n("581081");
    var i = n("446674"),
        r = n("913144"),
        a = n("798609"),
        o = n("271938"),
        d = n("42203"),
        u = n("957255"),
        l = n("18494"),
        f = n("697218"),
        _ = n("773336"),
        c = n("378713"),
        g = n("711562"),
        m = n("334368"),
        h = n("420444"),
        v = n("272505"),
        E = n("49111");
    let p = {
            seenActivities: new Set,
            everLaunchedActivities: new Set,
            seenNewActivities: {},
            seenUpdatedActivities: {},
            shouldShowNewActivityIndicator: !1,
            usersHavePlayedByApp: new Map
        },
        y = [],
        T = new Map,
        C = new Map,
        I = new Map,
        S = new Map,
        A = !1,
        D = new Map,
        N = new Map,
        O = new Map,
        P = new Map,
        b = new Map,
        V = new Map,
        R = new Map;
    let k = v.ActivityPanelModes.DISCONNECTED,
        M = v.FocusedActivityLayouts.RESIZABLE;

    function w(e) {
        return null != e ? e : "0"
    }

    function L(e) {
        var t, n;
        let {
            guildId: s,
            channelId: i,
            applicationId: a,
            instanceId: l,
            userIds: f,
            activitySessionId: _
        } = e, m = (0, g.default)(a);
        if (null == m) return;
        let h = d.default.getBasicChannel(i),
            v = null != h && u.default.canBasicChannel(E.BasicPermissions.CONNECT, h) || (null == h ? void 0 : h.type) === E.ChannelTypes.DM || (null == h ? void 0 : h.type) === E.ChannelTypes.GROUP_DM;
        if (function(e, t) {
                var n;
                p.usersHavePlayedByApp.set(e, new Set([...null !== (n = p.usersHavePlayedByApp.get(e)) && void 0 !== n ? n : [], ...t]))
            }(a, f), !v) return;
        let y = {
                activitySessionId: null != _ ? _ : l,
                applicationId: a,
                channelId: i,
                guildId: s,
                instanceId: l,
                url: m,
                userIds: new Set(f)
            },
            A = o.default.getId(),
            D = T.get(y.applicationId);
        if (f.some(e => e === A) && null != D && (T.set(D.applicationId, {
                ...D,
                ...y
            }), r.default.dispatch({
                type: "EMBEDDED_ACTIVITY_INSTANCE_CHANGE",
                channelId: i,
                instanceId: l
            })), null != D && i === D.channelId && !f.some(e => e === A) && Array.from(D.userIds).some(e => e === A)) S.get(i) === a ? S.delete(i) : T.delete(a);
        else if (f.some(e => e === A) && (null == D || D.applicationId !== a || D.channelId !== i)) {
            let e = null != _ && _ === o.default.getSessionId();
            (e || (0, c.shouldMountActivityIFrameFromGatewayUpdateWithoutSessionIdCheck)("EmbeddedActivitiesStore")) && G({
                channelId: i,
                applicationId: a,
                instanceId: l
            })
        }
        let N = null !== (t = I.get(i)) && void 0 !== t ? t : [],
            O = N.filter(e => e.applicationId !== a),
            P = w(s),
            b = null !== (n = C.get(P)) && void 0 !== n ? n : [],
            V = b.filter(e => !(e.applicationId === a && e.channelId === i));
        0 !== f.length && (O.push(y), V.push(y)), I.set(i, O), C.set(P, V)
    }

    function U(e) {
        let t = e.embedded_activities;
        t.forEach(t => {
            let {
                channel_id: n,
                embedded_activity: s,
                connections: i
            } = t;
            L({
                guildId: e.id,
                channelId: n,
                applicationId: s.application_id,
                instanceId: s.activity_id,
                userIds: i.map(e => e.user_id)
            })
        })
    }

    function G(e) {
        var t, n;
        let {
            channelId: i,
            applicationId: r,
            instanceId: a
        } = e, u = (0, g.default)(r), _ = o.default.getSessionId();
        if (null == u || null == _ || (null === (t = T.get(r)) || void 0 === t ? void 0 : t.channelId) === i) return !1;
        let c = d.default.getChannel(i),
            m = null == c ? void 0 : c.getGuildId(),
            E = f.default.getCurrentUser();
        if (null == m && !(null !== (n = null == c ? void 0 : c.isPrivate()) && void 0 !== n && n) || null == E) return !1;
        s = i, T.set(r, {
            guildId: m,
            channelId: i,
            applicationId: r,
            url: u,
            userIds: new Set([E.id]),
            connectedSince: Date.now(),
            instanceId: a
        }), k = s !== l.default.getChannelId() || (0, h.default)(i) ? v.ActivityPanelModes.PIP : v.ActivityPanelModes.PANEL, R.set(H(i, r), Date.now())
    }

    function F() {
        A = !1
    }

    function H(e, t) {
        return "".concat(e, ":").concat(t)
    }
    class x extends i.default.PersistedStore {
        initialize(e) {
            var t, n;
            let s = new Map;
            Array.isArray(null == e ? void 0 : e.usersHavePlayedByApp) && (null == e || e.usersHavePlayedByApp.forEach(e => {
                if (Array.isArray(e)) {
                    let [t, n] = e;
                    "string" == typeof t && Array.isArray(n) && s.set(t, new Set(n))
                }
            }));
            let i = new Set(null !== (t = null == e ? void 0 : e.seenActivities) && void 0 !== t ? t : []),
                r = new Set(null !== (n = null == e ? void 0 : e.everLaunchedActivities) && void 0 !== n ? n : []);
            null != e && (p = {
                ...e,
                seenActivities: i,
                everLaunchedActivities: r,
                usersHavePlayedByApp: s
            })
        }
        getState() {
            return p
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
            return null !== (t = C.get(e)) && void 0 !== t ? t : y
        }
        getEmbeddedActivitiesForChannel(e) {
            var t;
            return null !== (t = I.get(e)) && void 0 !== t ? t : y
        }
        getEmbeddedActivitiesByChannel() {
            return I
        }
        getEmbeddedActivityDurationMs(e, t) {
            let n = R.get(H(e, t));
            return null == n ? null : Date.now() - n
        }
        isLaunchingActivity() {
            return A
        }
        getShelfActivities(e) {
            var t;
            let n = w(e);
            return null !== (t = D.get(n)) && void 0 !== t ? t : []
        }
        getShelfFetchStatus(e) {
            let t = w(e);
            return N.get(t)
        }
        shouldFetchShelf(e) {
            var t, n;
            let s = w(e),
                i = null !== (t = N.get(s)) && void 0 !== t ? t : {
                    isFetching: !1
                },
                r = Date.now(),
                a = r - (null !== (n = null == i ? void 0 : i.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 216e5;
            return !(null == i ? void 0 : i.isFetching) && a
        }
        getOrientationLockStateForApp(e) {
            var t;
            return null !== (t = O.get(e)) && void 0 !== t ? t : null
        }
        getPipOrientationLockStateForApp(e) {
            var t;
            return null !== (t = P.get(e)) && void 0 !== t ? t : this.getOrientationLockStateForApp(e)
        }
        getGridOrientationLockStateForApp(e) {
            var t, n;
            return null !== (n = null !== (t = b.get(e)) && void 0 !== t ? t : P.get(e)) && void 0 !== n ? n : this.getOrientationLockStateForApp(e)
        }
        getLayoutModeForApp(e) {
            return V.get(e)
        }
        getUsersHavePlayedByApp(e) {
            var t;
            return [...null !== (t = p.usersHavePlayedByApp.get(e)) && void 0 !== t ? t : []]
        }
        getConnectedActivityChannelId() {
            return s
        }
        getActivityPanelMode() {
            return k
        }
        getFocusedLayout() {
            return M
        }
        getCurrentEmbeddedActivity() {
            var e;
            let t = this.getConnectedActivityChannelId();
            if (null != t) return null !== (e = this.getSelfEmbeddedActivityForChannel(t)) && void 0 !== e ? e : void 0
        }
        getEmbeddedActivityForUserId(e, t) {
            let n;
            if (void 0 !== t) {
                e: for (let [s, i] of I)
                    for (let s of i)
                        if (s.applicationId === t && s.userIds.has(e)) {
                            n = s;
                            break e
                        }return n
            }
        }
        hasActivityEverBeenLaunched(e) {
            return p.everLaunchedActivities.has(e)
        }
    }
    x.displayName = "EmbeddedActivitiesStore", x.persistKey = "EmbeddedActivities", x.migrations = [e => ({
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
    let B = new x(r.default, {
        ACTIVITY_LAYOUT_MODE_UPDATE: function(e) {
            let {
                applicationId: t,
                layoutMode: n
            } = e;
            V.set(t, n)
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
            let {
                guilds: t
            } = e;
            I.clear(), C.clear(), t.forEach(e => U(e))
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            U(t)
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
                        connections: s
                    } = e;
                    L({
                        guildId: null,
                        channelId: t,
                        applicationId: n.application_id,
                        instanceId: n.activity_id,
                        userIds: s.map(e => e.user_id)
                    })
                })
            }(0, n)
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            I.set(t.id, []);
            let n = t.guild_id;
            if (null != n) {
                var s;
                let e = w(n),
                    i = null !== (s = C.get(e)) && void 0 !== s ? s : [],
                    r = i.filter(e => e.channelId !== t.id);
                C.set(e, r)
            }
        },
        EMBEDDED_ACTIVITY_LAUNCH_START: function() {
            A = !0
        },
        EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: function(e) {
            let {
                applicationId: t
            } = e;
            p.everLaunchedActivities.add(t),
                function() {
                    A = !1
                }()
        },
        EMBEDDED_ACTIVITY_LAUNCH_FAIL: function() {
            (function() {
                A = !1
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
            T.delete(t), (null == n ? void 0 : n.channelId) === s && (s = void 0)
        },
        EMBEDDED_ACTIVITY_INBOUND_UPDATE: function(e) {
            let {
                guildId: t,
                channelId: n,
                embeddedActivity: s,
                connections: i
            } = e;
            L({
                guildId: t,
                channelId: n,
                applicationId: s.application_id,
                instanceId: s.activity_id,
                userIds: i.map(e => e.user_id)
            })
        },
        EMBEDDED_ACTIVITY_INBOUND_UPDATE_V2: function(e) {
            let {
                activitySessionId: t,
                applicationId: n,
                channelId: s,
                guildId: i,
                instanceId: r,
                userIds: a
            } = e;
            L({
                guildId: i,
                channelId: s,
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
            let s = T.get(null !== (t = n.application_id) && void 0 !== t ? t : "");
            if (null == s) return !1;
            T.set(s.applicationId, {
                ...s
            })
        },
        EMBEDDED_ACTIVITY_SET_CONFIG: function(e) {
            let {
                applicationId: t,
                config: n
            } = e, s = T.get(t);
            null != s && T.set(s.applicationId, {
                ...s,
                config: n
            })
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF: function(e) {
            let {
                guildId: t
            } = e, n = w(t), s = N.get(n);
            N.set(n, {
                isFetching: !0,
                lastFetchTimestampMs: null == s ? void 0 : s.lastFetchTimestampMs
            })
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function(e) {
            let {
                guildId: t,
                activities: n
            } = e, s = w(t);
            D.set(s, n);
            let i = Date.now();
            ! function(e) {
                let {
                    activities: t,
                    now: n
                } = e;
                t.forEach(e => {
                    let t = e.application_id,
                        s = e.client_platform_config[(0, m.default)((0, _.getOS)())];
                    if (!p.seenActivities.has(t) && (p.shouldShowNewActivityIndicator = !0, p.seenActivities.add(t)), null == s.label_until) return;
                    let i = new Date(s.label_until).getTime();
                    if (i < n) return;
                    let r = p.seenNewActivities[t],
                        o = Object.hasOwn(p.seenNewActivities, t),
                        d = new Date(r).getTime() < i;
                    s.label_type === a.EmbeddedActivityLabelTypes.NEW && (!o || d) && (p.shouldShowNewActivityIndicator = !0, p.seenNewActivities[t] = s.label_until);
                    let u = p.seenUpdatedActivities[t],
                        l = Object.hasOwn(p.seenUpdatedActivities, t),
                        f = new Date(u).getTime() < i;
                    s.label_type === a.EmbeddedActivityLabelTypes.UPDATED && (!l || f) && (p.shouldShowNewActivityIndicator = !0, p.seenUpdatedActivities[t] = s.label_until)
                })
            }({
                activities: n,
                now: i
            }), N.set(s, {
                isFetching: !1,
                lastFetchTimestampMs: i
            })
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: function(e) {
            let {
                guildId: t
            } = e, n = w(t), s = N.get(n);
            N.set(n, {
                isFetching: !1,
                lastFetchTimestampMs: null == s ? void 0 : s.lastFetchTimestampMs
            })
        },
        EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR: () => {
            p.shouldShowNewActivityIndicator = !1
        },
        EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: function(e) {
            let {
                applicationId: t,
                lockState: n,
                pictureInPictureLockState: s,
                gridLockState: i
            } = e;
            null == n ? O.delete(t) : O.set(t, n), null === s ? P.delete(t) : void 0 !== s && P.set(t, s), null === i ? b.delete(t) : void 0 !== i && b.set(t, i)
        },
        EMBEDDED_ACTIVITY_SET_PANEL_MODE: function(e) {
            let {
                activityPanelMode: t
            } = e;
            k = t
        },
        EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: function(e) {
            let {
                focusedActivityLayout: t
            } = e;
            M = t
        },
        CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            s !== t && k === v.ActivityPanelModes.PANEL && (k = v.ActivityPanelModes.PIP)
        },
        EMBEDDED_ACTIVITY_DISCONNECT: function(e) {
            let {
                channelId: t,
                applicationId: n,
                isRejoiningFromCurrentSession: s
            } = e;
            s && S.set(t, n)
        },
        CONNECTION_INTERRUPTED: function(e) {
            e.code === E.RPCCloseCodes.CLOSE_ABNORMAL && (s = void 0, T.clear(), A = !1, k = v.ActivityPanelModes.DISCONNECTED)
        }
    });
    var Y = B
}