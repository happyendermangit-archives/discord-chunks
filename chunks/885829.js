function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        maybeJoinEmbeddedActivity: function() {
            return S
        }
    });
    var n = i("404118"),
        l = i("651057"),
        a = i("299285"),
        r = i("645999"),
        u = i("653047"),
        d = i("42203"),
        s = i("305961"),
        o = i("957255"),
        c = i("697218"),
        E = i("800762"),
        _ = i("191225"),
        f = i("706508"),
        I = i("126939"),
        A = i("501260"),
        T = i("782340");
    async function S(t) {
        var e;
        let {
            channelId: i,
            applicationId: S,
            instanceId: C,
            inputApplication: N,
            analyticsLocations: v,
            embeddedActivitiesManager: O
        } = t, D = _.default.getEmbeddedActivitiesForChannel(i), p = D.find(t => t.applicationId === S && (null == C || t.instanceId === C)), y = N;
        if (null == y) {
            let t = await l.default.fetchApplication(S);
            y = u.default.createFromServer(t)
        }
        if (null == p || null == y) return;
        let h = c.default.getCurrentUser(),
            L = d.default.getChannel(i),
            P = (0, A.default)({
                userId: null == h ? void 0 : h.id,
                application: y,
                channelId: i,
                currentUser: h,
                isActivitiesEnabledForCurrentPlatform: (0, I.getIsActivitiesEnabledForCurrentPlatform)(L),
                ChannelStore: d.default,
                VoiceStateStore: E.default,
                PermissionStore: o.default,
                GuildStore: s.default
            }),
            g = _.default.getSelfEmbeddedActivityForChannel(i),
            R = null == g ? void 0 : g.applicationId,
            m = null != R && null !== (e = a.default.getApplication(R)) && void 0 !== e ? e : void 0;
        ! function(t) {
            let {
                embeddedActivityJoinability: e,
                handleCanJoin: i
            } = t;
            switch (e) {
                case A.EmbeddedActivityJoinability.CAN_JOIN:
                    null == i || i();
                    break;
                case A.EmbeddedActivityJoinability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                    (0, r.showActivitiesInvalidPermissionsAlert)();
                    break;
                case A.EmbeddedActivityJoinability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                    n.default.show({
                        title: T.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                        body: T.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
                        hideActionSheet: !1
                    });
                    break;
                case A.EmbeddedActivityJoinability.ACTIVITY_NOT_SUPPORTED_ON_OS:
                    n.default.show({
                        title: T.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                        body: T.default.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS,
                        hideActionSheet: !1
                    });
                    break;
                case A.EmbeddedActivityJoinability.ACTIVITY_AGE_GATED:
                    n.default.show({
                        title: T.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                        body: T.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE,
                        hideActionSheet: !1
                    });
                    break;
                case A.EmbeddedActivityJoinability.NO_CHANNEL_CONNECT_PERMISSION:
                case A.EmbeddedActivityJoinability.CHANNEL_FULL:
                case A.EmbeddedActivityJoinability.NO_CHANNEL:
                case A.EmbeddedActivityJoinability.NO_USER:
                    n.default.show({
                        title: T.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                        body: T.default.Messages.ACTIVITIES_GENERIC_LAUNCH_FAILURE_DIALOG_BODY,
                        hideActionSheet: !1
                    })
            }
        }({
            embeddedActivityJoinability: P,
            handleCanJoin: async function t() {
                null != p && await (0, f.default)({
                    applicationId: p.applicationId,
                    currentEmbeddedApplication: m,
                    activityChannelId: i,
                    locationObject: {},
                    embeddedActivitiesManager: O,
                    analyticsLocations: v
                })
            }
        })
    }
}