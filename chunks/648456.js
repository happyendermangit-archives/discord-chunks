function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        getActiveAnalyticsSessionIDs: function() {
            return J
        },
        default: function() {
            return n
        }
    }), i("424973"), i("222007");
    var n, l = i("627445"),
        a = i.n(l),
        r = i("748820"),
        u = i("913144"),
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

    function w(t) {
        var e;
        let i = null == t ? void 0 : null === (e = t.activity) || void 0 === e ? void 0 : e.client_platform_config[(0, P.default)((0, N.getOS)())].release_phase;
        return {
            releasePhase: i
        }
    }
    async function B(t) {
        let {
            channelId: e,
            applicationId: i,
            analyticsLocations: n
        } = t, l = A.default.getChannel(e), a = null == l ? void 0 : l.getGuildId(), r = v.default.getCurrentUser();
        if (null == l || null == r) return;
        let u = h.default.getShelfActivities(a),
            d = p.default.getState().shelfOrder,
            s = 0 === h.default.getEmbeddedActivitiesForChannel(e).filter(t => t.applicationId === i).length,
            o = (0, D.default)({
                applicationId: i,
                activityConfigs: u
            }),
            c = 1 + d.findIndex(t => t === i),
            {
                releasePhase: E
            } = w(o),
            I = await (0, _.default)();
        Y[i] = t => {
            var e, a, u;
            F[i] = t, S.default.track(R.AnalyticEvents.ACTIVITY_SESSION_JOINED, {
                channel_id: l.id,
                guild_id: l.getGuildId(),
                media_session_id: t.mediaSessionIds[0],
                activity_session_id: t.activitySessionId,
                application_id: i,
                location_stack: n,
                user_premium_tier: r.premiumType,
                raw_thermal_state: I,
                n_participants: f.default.getUserParticipantCount(l.id),
                is_activity_start: s,
                release_phase: E,
                activity_premium_tier_requirement: null == o ? void 0 : null === (e = o.activity) || void 0 === e ? void 0 : e.premium_tier_requirement,
                shelf_rank: null == o ? void 0 : null === (a = o.activity) || void 0 === a ? void 0 : a.shelf_rank,
                shelf_sorted_rank: c > 0 ? c : null,
                activity_user_session_id: t.activityUserSessionId,
                channel_type: l.type
            }), S.default.track(R.AnalyticEvents.ACTIVITY_IFRAME_MOUNT, {
                location_stack: n,
                channel_id: l.id,
                channel_type: l.type,
                guild_id: l.getGuildId(),
                application_id: i,
                instance_id: t.instanceId,
                initial_media_session_id: t.mediaSessionIds[0],
                activity_user_session_id: t.activityUserSessionId,
                raw_thermal_state: I,
                is_activity_start: s,
                shelf_rank: null == o ? void 0 : null === (u = o.activity) || void 0 === u ? void 0 : u.shelf_rank,
                shelf_sorted_rank: c > 0 ? c : null
            })
        }
    }
    async function G(t) {
        var e, i;
        let {
            channelId: n,
            applicationId: l
        } = t, a = F[l], r = A.default.getChannel(n), u = h.default.getEmbeddedActivityDurationMs(n, l), d = v.default.getCurrentUser(), s = null == r ? void 0 : r.getGuildId();
        if (null == a || null == r || null == d) return;
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
            channel_id: r.id,
            guild_id: r.getGuildId(),
            media_session_id: a.mediaSessionIds[0],
            activity_session_id: a.activitySessionId,
            application_id: l,
            duration_ms: u,
            user_premium_tier: d.premiumType,
            raw_thermal_state: E,
            release_phase: f,
            activity_premium_tier_requirement: null == c ? void 0 : null === (e = c.activity) || void 0 === e ? void 0 : e.premium_tier_requirement,
            shelf_rank: null == c ? void 0 : null === (i = c.activity) || void 0 === i ? void 0 : i.shelf_rank,
            activity_user_session_id: a.activityUserSessionId,
            channel_type: r.type,
            media_session_ids: a.mediaSessionIds
        }), S.default.track(R.AnalyticEvents.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: r.id,
            guild_id: r.getGuildId(),
            application_id: l,
            instance_ids: [a.instanceId],
            media_session_ids: a.mediaSessionIds,
            activity_user_session_id: a.activityUserSessionId,
            raw_thermal_state: E,
            duration_ms: u
        }), delete Y[l], delete F[l]
    }

    function H(t) {
        var e, i;
        let {
            channelId: n,
            embeddedActivity: l,
            connections: a,
            updateCode: u
        } = t, s = I.default.getId(), o = h.default.getEmbeddedActivitiesForChannel(n), c = A.default.getChannel(n);
        if (u === U.EmbeddedActivityUpdateCodes.ACTIVITY_STARTED && null !== (i = null == c ? void 0 : c.isPrivate()) && void 0 !== i && i && o.length <= 1 && void 0 === a.find(t => t.user_id === s) && d.default.selectParticipant(n, null), !a.some(t => t.user_id === s)) return;
        let f = T.default.getMediaSessionId(),
            {
                application_id: _
            } = l,
            E = (0, m.default)(l),
            C = null == f && (null == c ? void 0 : c.isVocal()) === !0;
        null != E && !C && (null === (e = Y[_]) || void 0 === e || e.call(Y, {
            activitySessionId: E,
            activityUserSessionId: (0, r.v4)(),
            instanceId: l.activity_id,
            mediaSessionIds: null != f ? [f] : []
        }), delete Y[_])
    }

    function k(t) {
        let {
            mediaSessionId: e
        } = t;
        if (null == e) return;
        for (let t in F) F[t].mediaSessionIds.push(e);
        let i = T.default.getChannelId();
        if (null != i) {
            let t = h.default.getSelfEmbeddedActivityForChannel(i),
                n = null == t ? void 0 : t.applicationId,
                l = null == t ? void 0 : t.instanceId,
                u = (0, m.default)(t);
            if (null != n && null != e && null != u && null != l) {
                let t = F[n],
                    i = Y[n];
                a(null == t || null == i, "an active session and awaiting session both exist"), null == i || i({
                    activitySessionId: u,
                    activityUserSessionId: (0, r.v4)(),
                    instanceId: l,
                    mediaSessionIds: [e]
                }), delete Y[n]
            }
        }
    }

    function J(t) {
        return F[t]
    }
    n = class extends s.default {
        _initialize() {
            C.default.addChangeListener(this.handleSelectedChannelUpdate), u.default.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), u.default.subscribe("EMBEDDED_ACTIVITY_OPEN", B), u.default.subscribe("EMBEDDED_ACTIVITY_CLOSE", G), u.default.subscribe("EMBEDDED_ACTIVITY_INBOUND_UPDATE", H), u.default.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), u.default.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), u.default.subscribe("MEDIA_SESSION_JOINED", k)
        }
        _terminate() {
            C.default.removeChangeListener(this.handleSelectedChannelUpdate), u.default.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), u.default.unsubscribe("EMBEDDED_ACTIVITY_OPEN", B), u.default.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", G), u.default.unsubscribe("EMBEDDED_ACTIVITY_INBOUND_UPDATE", H), u.default.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), u.default.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), u.default.unsubscribe("MEDIA_SESSION_JOINED", k)
        }
        constructor(...t) {
            super(...t), this.handleSelectedChannelUpdate = () => {
                let t = C.default.getVoiceChannelId();
                for (let {
                        channelId: e,
                        applicationId: i
                    }
                    of h.default.getSelfEmbeddedActivities().values())(0, b.default)(e) && e !== t && this.leaveActivity({
                    channelId: e,
                    applicationId: i
                });
                if (null != t) {
                    let e = h.default.getEmbeddedActivitiesForChannel(t),
                        i = I.default.getId();
                    e.forEach(t => {
                        if (t.userIds.has(i)) {
                            let e = h.default.getSelfEmbeddedActivityForChannel(t.channelId);
                            null == e && (0, y.disconnectEmbeddedActivity)(t.channelId, t.applicationId)
                        }
                    })
                }
            }, this.handleActivityLaunchFail = t => {
                let {
                    error: e,
                    guildId: i
                } = t;
                if (null == i) return;
                let n = V.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC;
                switch (e.code) {
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
            }, this.superHandleRPCDisconnect = t => {
                let {
                    reason: e,
                    application: i
                } = t, n = i.id;
                if (null != n && null != e) {
                    for (let {
                            applicationId: t,
                            channelId: e
                        }
                        of h.default.getSelfEmbeddedActivities().values()) t === n && this.leaveActivity({
                        channelId: e,
                        applicationId: n
                    });
                    e.code !== R.RPCCloseCodes.CLOSE_NORMAL && this.showErrorModal(e, n)
                }
            }, this.handleDeferredOpen = async t => {
                var e, i, n;
                let l;
                let {
                    channelId: a,
                    applicationId: r,
                    analyticsLocations: u
                } = t, d = A.default.getChannel(a);
                if (void 0 === d || E.GUILD_VOCAL_CHANNEL_TYPES.has(null == d ? void 0 : d.type) && C.default.getVoiceChannelId() !== a) return;
                let s = h.default.getSelfEmbeddedActivityForChannel(a);
                if ((null == s ? void 0 : s.applicationId) === r) return;
                let f = await o.default.fetchApplication(r),
                    _ = (0, g.getIsActivitiesEnabledForCurrentPlatform)(d);
                if (!_) {
                    this.showLaunchErrorModal(V.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS);
                    return
                }
                if (!(0, M.default)(null == f ? void 0 : null === (e = f.embedded_activity_config) || void 0 === e ? void 0 : e.supported_platforms)) {
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
                        applicationId: r,
                        activityConfigs: v,
                        applications: S
                    });
                if (null == N) {
                    let t = await (0, y.fetchShelf)({
                        guildId: T,
                        force: !0
                    });
                    N = (0, D.default)({
                        applicationId: r,
                        activityConfigs: t.activityConfigs,
                        applications: t.applications
                    })
                }
                let p = h.default.getEmbeddedActivitiesForChannel(a).find(t => t.applicationId === r),
                    m = null !== (n = null == p ? void 0 : p.userIds.size) && void 0 !== n ? n : 0;
                m > 0 ? (0, O.maybeJoinEmbeddedActivity)({
                    channelId: a,
                    applicationId: r,
                    instanceId: null == p ? void 0 : p.instanceId,
                    inputApplication: null,
                    analyticsLocations: u,
                    embeddedActivitiesManager: this
                }) : await (0, L.default)({
                    activityItem: N,
                    currentEmbeddedApplication: l,
                    channelId: a,
                    guildId: T,
                    embeddedActivitiesManager: this,
                    analyticsLocations: u
                })
            }
        }
    }
}