function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        maybeJoinEmbeddedActivity: function() {
            return C
        }
    });
    var n = i("404118"),
        l = i("651057"),
        a = i("299285"),
        u = i("645999"),
        r = i("653047"),
        d = i("42203"),
        s = i("305961"),
        o = i("957255"),
        c = i("697218"),
        f = i("800762"),
        _ = i("191225"),
        E = i("706508"),
        I = i("126939"),
        A = i("501260"),
        T = i("782340");
    async function C(t) {
        var e;
        let {
            channelId: i,
            applicationId: C,
            instanceId: v,
            inputApplication: S,
            analyticsLocations: N,
            embeddedActivitiesManager: p
        } = t, y = _.default.getEmbeddedActivitiesForChannel(i), h = y.find(t => t.applicationId === C && (null == v || t.instanceId === v)), D = S;
        if (null == D) {
            let t = await l.default.fetchApplication(C);
            D = r.default.createFromServer(t)
        }
        if (null == h || null == D) return;
        let O = c.default.getCurrentUser(),
            L = d.default.getChannel(i),
            g = (0, A.default)({
                userId: null == O ? void 0 : O.id,
                application: D,
                channelId: i,
                currentUser: O,
                isActivitiesEnabledForCurrentPlatform: (0, I.getIsActivitiesEnabledForCurrentPlatform)(L),
                ChannelStore: d.default,
                VoiceStateStore: f.default,
                PermissionStore: o.default,
                GuildStore: s.default
            }),
            m = _.default.getSelfEmbeddedActivityForChannel(i),
            P = null == m ? void 0 : m.applicationId,
            M = null != P && null !== (e = a.default.getApplication(P)) && void 0 !== e ? e : void 0;
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
                    (0, u.showActivitiesInvalidPermissionsAlert)();
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
            embeddedActivityJoinability: g,
            handleCanJoin: async function t() {
                null != h && await (0, E.default)({
                    applicationId: h.applicationId,
                    currentEmbeddedApplication: M,
                    activityChannelId: i,
                    locationObject: {},
                    embeddedActivitiesManager: p,
                    analyticsLocations: N
                })
            }
        })
    }
}