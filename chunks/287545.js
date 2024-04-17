function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return X
        },
        getActiveAnalyticsSessionIDs: function() {
            return z
        }
    }), n("653041"), n("47120");
    var i = n("512722"),
        r = n.n(i),
        s = n("153832"),
        a = n("544891"),
        o = n("570140"),
        l = n("475179"),
        u = n("317770"),
        d = n("728345"),
        _ = n("812206"),
        c = n("358221"),
        E = n("42352"),
        I = n("131704"),
        T = n("314897"),
        f = n("592125"),
        S = n("19780"),
        h = n("944486"),
        A = n("594174"),
        m = n("626135"),
        N = n("358085"),
        p = n("24933"),
        O = n("566620"),
        R = n("317381"),
        C = n("969345"),
        g = n("148720"),
        L = n("266820"),
        D = n("782769"),
        v = n("964517"),
        M = n("761122"),
        y = n("983695"),
        P = n("917107"),
        U = n("701488"),
        b = n("981631"),
        G = n("689938");

    function w(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let B = {},
        k = {};

    function V(e) {
        var t;
        return {
            releasePhase: null == e ? void 0 : null === (t = e.activity) || void 0 === t ? void 0 : t.client_platform_config[(0, M.default)((0, N.getOS)())].release_phase
        }
    }
    async function F(e) {
        let {
            channelId: t,
            applicationId: n,
            analyticsLocations: i
        } = e, r = f.default.getChannel(t), s = null == r ? void 0 : r.getGuildId(), a = A.default.getCurrentUser();
        if (null == r || null == a) return;
        let o = R.default.getShelfActivities(s),
            l = p.default.getState().shelfOrder,
            u = 0 === R.default.getEmbeddedActivitiesForChannel(t).filter(e => e.applicationId === n).length,
            d = (0, C.default)({
                applicationId: n,
                activityConfigs: o
            }),
            _ = 1 + l.findIndex(e => e === n),
            {
                releasePhase: I
            } = V(d),
            T = await (0, E.default)();
        k[n] = e => {
            var t, s, o;
            B[n] = e, m.default.track(b.AnalyticEvents.ACTIVITY_SESSION_JOINED, {
                channel_id: r.id,
                guild_id: r.getGuildId(),
                media_session_id: e.mediaSessionIds[0],
                activity_session_id: e.activitySessionId,
                application_id: n,
                location_stack: i,
                user_premium_tier: a.premiumType,
                raw_thermal_state: T,
                n_participants: c.default.getUserParticipantCount(r.id),
                is_activity_start: u,
                release_phase: I,
                activity_premium_tier_requirement: null == d ? void 0 : null === (t = d.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
                shelf_rank: null == d ? void 0 : null === (s = d.activity) || void 0 === s ? void 0 : s.shelf_rank,
                shelf_sorted_rank: _ > 0 ? _ : null,
                activity_user_session_id: e.activityUserSessionId,
                channel_type: r.type
            }), m.default.track(b.AnalyticEvents.ACTIVITY_IFRAME_MOUNT, {
                location_stack: i,
                channel_id: r.id,
                channel_type: r.type,
                guild_id: r.getGuildId(),
                application_id: n,
                instance_id: e.instanceId,
                initial_media_session_id: e.mediaSessionIds[0],
                activity_user_session_id: e.activityUserSessionId,
                raw_thermal_state: T,
                is_activity_start: u,
                shelf_rank: null == d ? void 0 : null === (o = d.activity) || void 0 === o ? void 0 : o.shelf_rank,
                shelf_sorted_rank: _ > 0 ? _ : null
            })
        }
    }
    async function x(e) {
        var t, n;
        let {
            channelId: i,
            applicationId: r
        } = e, s = B[r], a = f.default.getChannel(i), o = R.default.getEmbeddedActivityDurationMs(i, r), l = A.default.getCurrentUser(), u = null == a ? void 0 : a.getGuildId();
        if (null == s || null == a || null == l) return;
        let d = R.default.getShelfActivities(u),
            _ = (0, C.default)({
                applicationId: r,
                activityConfigs: d
            }),
            {
                releasePhase: c
            } = V(_),
            I = await (0, E.default)();
        m.default.track(b.AnalyticEvents.ACTIVITY_SESSION_LEFT, {
            channel_id: a.id,
            guild_id: a.getGuildId(),
            media_session_id: s.mediaSessionIds[0],
            activity_session_id: s.activitySessionId,
            application_id: r,
            duration_ms: o,
            user_premium_tier: l.premiumType,
            raw_thermal_state: I,
            release_phase: c,
            activity_premium_tier_requirement: null == _ ? void 0 : null === (t = _.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
            shelf_rank: null == _ ? void 0 : null === (n = _.activity) || void 0 === n ? void 0 : n.shelf_rank,
            activity_user_session_id: s.activityUserSessionId,
            channel_type: a.type,
            media_session_ids: s.mediaSessionIds
        }), m.default.track(b.AnalyticEvents.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: a.id,
            guild_id: a.getGuildId(),
            application_id: r,
            instance_ids: [s.instanceId],
            media_session_ids: s.mediaSessionIds,
            activity_user_session_id: s.activityUserSessionId,
            raw_thermal_state: I,
            duration_ms: o
        }), delete k[r], delete B[r]
    }

    function H(e) {
        let {
            channelId: t,
            embeddedActivity: n,
            connections: i,
            updateCode: r
        } = e, s = T.default.getId(), a = i.find(e => e.user_id === s);
        j(t, n, n.application_id, n.activity_id, null == a ? void 0 : a.user_id, r === U.EmbeddedActivityUpdateCodes.ACTIVITY_STARTED)
    }

    function Y(e) {
        let {
            location: t,
            applicationId: n,
            instanceId: i,
            participants: r
        } = e, s = T.default.getId(), a = R.default.getEmbeddedActivitiesForChannel(t.channel_id).find(e => e.instanceId === i), o = r.find(e => e.user_id === s);
        null != a && j(t.channel_id, a, n, i, null == o ? void 0 : o.user_id, !1)
    }

    function j(e, t, n, i, r, a) {
        var o, u;
        let d = R.default.getEmbeddedActivitiesForChannel(e),
            _ = f.default.getChannel(e);
        if (a && null !== (u = null == _ ? void 0 : _.isPrivate()) && void 0 !== u && u && d.length <= 1 && null == r && l.default.selectParticipant(e, null), null == r) return;
        let c = S.default.getMediaSessionId(),
            E = (0, v.default)(t),
            I = null == c && (null == _ ? void 0 : _.isVocal()) === !0 && (null == _ ? void 0 : _.isPrivate()) === !1;
        null != E && !I && (null === (o = k[n]) || void 0 === o || o.call(k, {
            activitySessionId: E,
            activityUserSessionId: (0, s.v4)(),
            instanceId: i,
            mediaSessionIds: null != c ? [c] : []
        }), delete k[n])
    }

    function W(e) {
        let {
            mediaSessionId: t
        } = e;
        if (null == t) return;
        for (let e in B) B[e].mediaSessionIds.push(t);
        let n = S.default.getChannelId();
        if (null != n) {
            let e = R.default.getSelfEmbeddedActivityForChannel(n),
                i = null == e ? void 0 : e.applicationId,
                a = null == e ? void 0 : e.instanceId,
                o = (0, v.default)(e);
            if (null != i && null != t && null != o && null != a) {
                let e = B[i],
                    n = k[i];
                r()(null == e || null == n, "an active session and awaiting session both exist"), null == n || n({
                    activitySessionId: o,
                    activityUserSessionId: (0, s.v4)(),
                    instanceId: a,
                    mediaSessionIds: [t]
                }), delete k[i]
            }
        }
    }
    async function K(e) {
        let {
            channelId: t
        } = e, n = R.default.getSelfEmbeddedActivityForChannel(t), i = f.default.getChannel(t), r = T.default.getSessionId();
        null != r && null != n && null != i && null != n.instanceId && (null == n ? void 0 : n.location) != null && await a.HTTP.post({
            url: b.Endpoints.ACTIVITY_LEAVE(n.applicationId, n.location.id, n.instanceId),
            body: {
                session_id: r
            },
            timeout: 3e3
        })
    }

    function z(e) {
        return B[e]
    }
    class X extends u.default {
        _initialize() {
            h.default.addChangeListener(this.handleSelectedChannelUpdate), o.default.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), o.default.subscribe("EMBEDDED_ACTIVITY_OPEN", F), o.default.subscribe("EMBEDDED_ACTIVITY_CLOSE", x), o.default.subscribe("EMBEDDED_ACTIVITY_UPDATE", H), o.default.subscribe("EMBEDDED_ACTIVITY_UPDATE_V2", Y), o.default.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), o.default.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), o.default.subscribe("MEDIA_SESSION_JOINED", W), o.default.subscribe("CALL_DELETE", K)
        }
        _terminate() {
            h.default.removeChangeListener(this.handleSelectedChannelUpdate), o.default.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), o.default.unsubscribe("EMBEDDED_ACTIVITY_OPEN", F), o.default.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", x), o.default.unsubscribe("EMBEDDED_ACTIVITY_UPDATE", H), o.default.unsubscribe("EMBEDDED_ACTIVITY_UPDATE_V2", Y), o.default.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), o.default.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), o.default.unsubscribe("MEDIA_SESSION_JOINED", W), o.default.unsubscribe("CALL_DELETE", K)
        }
        constructor(...e) {
            super(...e), w(this, "handleSelectedChannelUpdate", () => {
                let e = h.default.getVoiceChannelId();
                for (let {
                        channelId: t,
                        applicationId: n
                    }
                    of R.default.getSelfEmbeddedActivities().values())(0, P.default)(t) && t !== e && this.leaveActivity({
                    channelId: t,
                    applicationId: n
                });
                if (null != e) {
                    let t = R.default.getEmbeddedActivitiesForChannel(e),
                        n = T.default.getId();
                    t.forEach(e => {
                        e.userIds.has(n) && null == R.default.getSelfEmbeddedActivityForChannel(e.channelId) && (0, O.disconnectEmbeddedActivity)(e.channelId, e.applicationId)
                    })
                }
            }), w(this, "handleActivityLaunchFail", e => {
                let {
                    error: t,
                    applicationId: n,
                    guildId: i
                } = e;
                if (delete k[n], null == i) return;
                let r = G.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC;
                switch (t.code) {
                    case b.AbortCodes.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                        r = G.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_ACCESS;
                        break;
                    case b.AbortCodes.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                        r = G.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_PREMIUM;
                        break;
                    case b.AbortCodes.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES:
                        r = G.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_CONCURRENT;
                        break;
                    case b.AbortCodes.INVALID_PERMISSIONS:
                        r = G.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
                        break;
                    case b.AbortCodes.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                        r = G.default.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL;
                        break;
                    case b.AbortCodes.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                        r = G.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE;
                        break;
                    case b.AbortCodes.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
                        r = G.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GUILD_SIZE
                }
                this.showLaunchErrorModal(r)
            }), w(this, "superHandleRPCDisconnect", e => {
                let {
                    reason: t,
                    application: n
                } = e, i = n.id;
                if (null != i && null != t) {
                    for (let {
                            applicationId: e,
                            channelId: t
                        }
                        of R.default.getSelfEmbeddedActivities().values()) e === i && this.leaveActivity({
                        channelId: t,
                        applicationId: i
                    });
                    t.code !== b.RPCCloseCodes.CLOSE_NORMAL && this.showErrorModal(t, i)
                }
            }), w(this, "handleDeferredOpen", async e => {
                var t, n, i;
                let r;
                let {
                    channelId: s,
                    applicationId: a,
                    analyticsLocations: o
                } = e, l = f.default.getChannel(s);
                if (void 0 === l || I.GUILD_VOCAL_CHANNEL_TYPES.has(null == l ? void 0 : l.type) && h.default.getVoiceChannelId() !== s) return;
                let u = R.default.getSelfEmbeddedActivityForChannel(s);
                if ((null == u ? void 0 : u.applicationId) === a) return;
                let c = await d.default.fetchApplication(a);
                if (!(0, D.getIsActivitiesEnabledForCurrentPlatform)(l)) {
                    this.showLaunchErrorModal(G.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS);
                    return
                }
                if (!(0, y.default)(null == c ? void 0 : null === (t = c.embedded_activity_config) || void 0 === t ? void 0 : t.supported_platforms)) {
                    this.showLaunchErrorModal(G.default.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS);
                    return
                }
                let E = null == u ? void 0 : u.applicationId;
                null != E && (await d.default.fetchApplication(E), r = _.default.getApplication(E));
                let T = null !== (n = null == l ? void 0 : l.getGuildId()) && void 0 !== n ? n : void 0,
                    {
                        activityConfigs: S,
                        applications: A
                    } = await (0, O.fetchShelf)({
                        guildId: T
                    }),
                    m = (0, C.default)({
                        applicationId: a,
                        activityConfigs: S,
                        applications: A
                    });
                if (null == m) {
                    let e = await (0, O.fetchShelf)({
                        guildId: T,
                        force: !0
                    });
                    m = (0, C.default)({
                        applicationId: a,
                        activityConfigs: e.activityConfigs,
                        applications: e.applications
                    })
                }
                let N = R.default.getEmbeddedActivitiesForChannel(s).find(e => e.applicationId === a),
                    p = null !== (i = null == N ? void 0 : N.userIds.size) && void 0 !== i ? i : 0;
                p > 0 ? (0, g.maybeJoinEmbeddedActivity)({
                    channelId: s,
                    applicationId: a,
                    instanceId: null == N ? void 0 : N.instanceId,
                    inputApplication: null,
                    analyticsLocations: o,
                    embeddedActivitiesManager: this
                }) : await (0, L.default)({
                    activityItem: m,
                    currentEmbeddedApplication: r,
                    channelId: s,
                    guildId: T,
                    embeddedActivitiesManager: this,
                    analyticsLocations: o
                })
            })
        }
    }
}