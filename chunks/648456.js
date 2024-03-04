function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        getActiveAnalyticsSessionIDs: function() {
            return J
        },
        default: function() {
            return n
        }
    }), i("424973"), i("222007");
    var n, l = i("627445"),
        a = i.n(l),
        u = i("748820"),
        r = i("913144"),
        d = i("255397"),
        s = i("316272"),
        o = i("651057"),
        c = i("299285"),
        f = i("191145"),
        _ = i("601222"),
        E = i("233069"),
        I = i("271938"),
        A = i("42203"),
        T = i("945956"),
        C = i("18494"),
        v = i("697218"),
        S = i("599110"),
        N = i("773336"),
        p = i("289732"),
        y = i("550766"),
        h = i("191225"),
        D = i("602718"),
        O = i("885829"),
        L = i("986214"),
        g = i("126939"),
        m = i("837707"),
        P = i("334368"),
        M = i("803353"),
        b = i("420444"),
        U = i("954016"),
        R = i("49111"),
        V = i("782340");
    let F = {},
        Y = {};

    function w(e) {
        var t;
        let i = null == e ? void 0 : null === (t = e.activity) || void 0 === t ? void 0 : t.client_platform_config[(0, P.default)((0, N.getOS)())].release_phase;
        return {
            releasePhase: i
        }
    }
    async function B(e) {
        let {
            channelId: t,
            applicationId: i,
            analyticsLocations: n
        } = e, l = A.default.getChannel(t), a = null == l ? void 0 : l.getGuildId(), u = v.default.getCurrentUser();
        if (null == l || null == u) return;
        let r = h.default.getShelfActivities(a),
            d = p.default.getState().shelfOrder,
            s = 0 === h.default.getEmbeddedActivitiesForChannel(t).filter(e => e.applicationId === i).length,
            o = (0, D.default)({
                applicationId: i,
                activityConfigs: r
            }),
            c = 1 + d.findIndex(e => e === i),
            {
                releasePhase: E
            } = w(o),
            I = await (0, _.default)();
        Y[i] = e => {
            var t, a, r;
            F[i] = e, S.default.track(R.AnalyticEvents.ACTIVITY_SESSION_JOINED, {
                channel_id: l.id,
                guild_id: l.getGuildId(),
                media_session_id: e.mediaSessionIds[0],
                activity_session_id: e.activitySessionId,
                application_id: i,
                location_stack: n,
                user_premium_tier: u.premiumType,
                raw_thermal_state: I,
                n_participants: f.default.getUserParticipantCount(l.id),
                is_activity_start: s,
                release_phase: E,
                activity_premium_tier_requirement: null == o ? void 0 : null === (t = o.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
                shelf_rank: null == o ? void 0 : null === (a = o.activity) || void 0 === a ? void 0 : a.shelf_rank,
                shelf_sorted_rank: c > 0 ? c : null,
                activity_user_session_id: e.activityUserSessionId,
                channel_type: l.type
            }), S.default.track(R.AnalyticEvents.ACTIVITY_IFRAME_MOUNT, {
                location_stack: n,
                channel_id: l.id,
                channel_type: l.type,
                guild_id: l.getGuildId(),
                application_id: i,
                instance_id: e.instanceId,
                initial_media_session_id: e.mediaSessionIds[0],
                activity_user_session_id: e.activityUserSessionId,
                raw_thermal_state: I,
                is_activity_start: s,
                shelf_rank: null == o ? void 0 : null === (r = o.activity) || void 0 === r ? void 0 : r.shelf_rank,
                shelf_sorted_rank: c > 0 ? c : null
            })
        }
    }
    async function G(e) {
        var t, i;
        let {
            channelId: n,
            applicationId: l
        } = e, a = F[l], u = A.default.getChannel(n), r = h.default.getEmbeddedActivityDurationMs(n, l), d = v.default.getCurrentUser(), s = null == u ? void 0 : u.getGuildId();
        if (null == a || null == u || null == d) return;
        let o = h.default.getShelfActivities(s),
            c = (0, D.default)({
                applicationId: l,
                activityConfigs: o
            }),
            {
                releasePhase: f
            } = w(c),
            E = await (0, _.default)();
        S.default.track(R.AnalyticEvents.ACTIVITY_SESSION_LEFT, {
            channel_id: u.id,
            guild_id: u.getGuildId(),
            media_session_id: a.mediaSessionIds[0],
            activity_session_id: a.activitySessionId,
            application_id: l,
            duration_ms: r,
            user_premium_tier: d.premiumType,
            raw_thermal_state: E,
            release_phase: f,
            activity_premium_tier_requirement: null == c ? void 0 : null === (t = c.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
            shelf_rank: null == c ? void 0 : null === (i = c.activity) || void 0 === i ? void 0 : i.shelf_rank,
            activity_user_session_id: a.activityUserSessionId,
            channel_type: u.type,
            media_session_ids: a.mediaSessionIds
        }), S.default.track(R.AnalyticEvents.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: u.id,
            guild_id: u.getGuildId(),
            application_id: l,
            instance_ids: [a.instanceId],
            media_session_ids: a.mediaSessionIds,
            activity_user_session_id: a.activityUserSessionId,
            raw_thermal_state: E,
            duration_ms: r
        }), delete Y[l], delete F[l]
    }

    function H(e) {
        var t, i;
        let {
            channelId: n,
            embeddedActivity: l,
            connections: a,
            updateCode: r
        } = e, s = I.default.getId(), o = h.default.getEmbeddedActivitiesForChannel(n), c = A.default.getChannel(n);
        if (r === U.EmbeddedActivityUpdateCodes.ACTIVITY_STARTED && null !== (i = null == c ? void 0 : c.isPrivate()) && void 0 !== i && i && o.length <= 1 && void 0 === a.find(e => e.user_id === s) && d.default.selectParticipant(n, null), !a.some(e => e.user_id === s)) return;
        let f = T.default.getMediaSessionId(),
            {
                application_id: _
            } = l,
            E = (0, m.default)(l),
            C = null == f && (null == c ? void 0 : c.isVocal()) === !0;
        null != E && !C && (null === (t = Y[_]) || void 0 === t || t.call(Y, {
            activitySessionId: E,
            activityUserSessionId: (0, u.v4)(),
            instanceId: l.activity_id,
            mediaSessionIds: null != f ? [f] : []
        }), delete Y[_])
    }

    function k(e) {
        let {
            mediaSessionId: t
        } = e;
        if (null == t) return;
        for (let e in F) F[e].mediaSessionIds.push(t);
        let i = T.default.getChannelId();
        if (null != i) {
            let e = h.default.getSelfEmbeddedActivityForChannel(i),
                n = null == e ? void 0 : e.applicationId,
                l = null == e ? void 0 : e.instanceId,
                r = (0, m.default)(e);
            if (null != n && null != t && null != r && null != l) {
                let e = F[n],
                    i = Y[n];
                a(null == e || null == i, "an active session and awaiting session both exist"), null == i || i({
                    activitySessionId: r,
                    activityUserSessionId: (0, u.v4)(),
                    instanceId: l,
                    mediaSessionIds: [t]
                }), delete Y[n]
            }
        }
    }

    function J(e) {
        return F[e]
    }
    n = class extends s.default {
        _initialize() {
            C.default.addChangeListener(this.handleSelectedChannelUpdate), r.default.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), r.default.subscribe("EMBEDDED_ACTIVITY_OPEN", B), r.default.subscribe("EMBEDDED_ACTIVITY_CLOSE", G), r.default.subscribe("EMBEDDED_ACTIVITY_INBOUND_UPDATE", H), r.default.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), r.default.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), r.default.subscribe("MEDIA_SESSION_JOINED", k)
        }
        _terminate() {
            C.default.removeChangeListener(this.handleSelectedChannelUpdate), r.default.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), r.default.unsubscribe("EMBEDDED_ACTIVITY_OPEN", B), r.default.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", G), r.default.unsubscribe("EMBEDDED_ACTIVITY_INBOUND_UPDATE", H), r.default.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), r.default.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), r.default.unsubscribe("MEDIA_SESSION_JOINED", k)
        }
        constructor(...e) {
            super(...e), this.handleSelectedChannelUpdate = () => {
                let e = C.default.getVoiceChannelId();
                for (let {
                        channelId: t,
                        applicationId: i
                    }
                    of h.default.getSelfEmbeddedActivities().values())(0, b.default)(t) && t !== e && this.leaveActivity({
                    channelId: t,
                    applicationId: i
                });
                if (null != e) {
                    let t = h.default.getEmbeddedActivitiesForChannel(e),
                        i = I.default.getId();
                    t.forEach(e => {
                        if (e.userIds.has(i)) {
                            let t = h.default.getSelfEmbeddedActivityForChannel(e.channelId);
                            null == t && (0, y.disconnectEmbeddedActivity)(e.channelId, e.applicationId)
                        }
                    })
                }
            }, this.handleActivityLaunchFail = e => {
                let {
                    error: t,
                    guildId: i
                } = e;
                if (null == i) return;
                let n = V.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC;
                switch (t.code) {
                    case R.AbortCodes.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                        n = V.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_ACCESS;
                        break;
                    case R.AbortCodes.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                        n = V.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_PREMIUM;
                        break;
                    case R.AbortCodes.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES:
                        n = V.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_CONCURRENT;
                        break;
                    case R.AbortCodes.INVALID_PERMISSIONS:
                        n = V.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
                        break;
                    case R.AbortCodes.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                        n = V.default.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL;
                        break;
                    case R.AbortCodes.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                        n = V.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE;
                        break;
                    case R.AbortCodes.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
                        n = V.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GUILD_SIZE
                }
                this.showLaunchErrorModal(n)
            }, this.superHandleRPCDisconnect = e => {
                let {
                    reason: t,
                    application: i
                } = e, n = i.id;
                if (null != n && null != t) {
                    for (let {
                            applicationId: e,
                            channelId: t
                        }
                        of h.default.getSelfEmbeddedActivities().values()) e === n && this.leaveActivity({
                        channelId: t,
                        applicationId: n
                    });
                    t.code !== R.RPCCloseCodes.CLOSE_NORMAL && this.showErrorModal(t, n)
                }
            }, this.handleDeferredOpen = async e => {
                var t, i, n;
                let l;
                let {
                    channelId: a,
                    applicationId: u,
                    analyticsLocations: r
                } = e, d = A.default.getChannel(a);
                if (void 0 === d || E.GUILD_VOCAL_CHANNEL_TYPES.has(null == d ? void 0 : d.type) && C.default.getVoiceChannelId() !== a) return;
                let s = h.default.getSelfEmbeddedActivityForChannel(a);
                if ((null == s ? void 0 : s.applicationId) === u) return;
                let f = await o.default.fetchApplication(u),
                    _ = (0, g.getIsActivitiesEnabledForCurrentPlatform)(d);
                if (!_) {
                    this.showLaunchErrorModal(V.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS);
                    return
                }
                if (!(0, M.default)(null == f ? void 0 : null === (t = f.embedded_activity_config) || void 0 === t ? void 0 : t.supported_platforms)) {
                    this.showLaunchErrorModal(V.default.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS);
                    return
                }
                let I = null == s ? void 0 : s.applicationId;
                null != I && (await o.default.fetchApplication(I), l = c.default.getApplication(I));
                let T = null !== (i = null == d ? void 0 : d.getGuildId()) && void 0 !== i ? i : void 0,
                    {
                        activityConfigs: v,
                        applications: S
                    } = await (0, y.fetchShelf)({
                        guildId: T
                    }),
                    N = (0, D.default)({
                        applicationId: u,
                        activityConfigs: v,
                        applications: S
                    });
                if (null == N) {
                    let e = await (0, y.fetchShelf)({
                        guildId: T,
                        force: !0
                    });
                    N = (0, D.default)({
                        applicationId: u,
                        activityConfigs: e.activityConfigs,
                        applications: e.applications
                    })
                }
                let p = h.default.getEmbeddedActivitiesForChannel(a).find(e => e.applicationId === u),
                    m = null !== (n = null == p ? void 0 : p.userIds.size) && void 0 !== n ? n : 0;
                m > 0 ? (0, O.maybeJoinEmbeddedActivity)({
                    channelId: a,
                    applicationId: u,
                    instanceId: null == p ? void 0 : p.instanceId,
                    inputApplication: null,
                    analyticsLocations: r,
                    embeddedActivitiesManager: this
                }) : await (0, L.default)({
                    activityItem: N,
                    currentEmbeddedApplication: l,
                    channelId: a,
                    guildId: T,
                    embeddedActivitiesManager: this,
                    analyticsLocations: r
                })
            }
        }
    }
}