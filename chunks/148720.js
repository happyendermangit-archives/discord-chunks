function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        maybeJoinEmbeddedActivity: function() {
            return h
        }
    });
    var i = n("668781"),
        r = n("728345"),
        s = n("812206"),
        a = n("835873"),
        o = n("973616"),
        l = n("592125"),
        u = n("430824"),
        d = n("496675"),
        _ = n("594174"),
        c = n("979651"),
        E = n("317381"),
        I = n("638880"),
        T = n("782769"),
        f = n("527805"),
        S = n("689938");
    async function h(e) {
        var t;
        let {
            channelId: n,
            applicationId: h,
            launchId: A,
            inputApplication: m,
            analyticsLocations: N,
            embeddedActivitiesManager: p
        } = e, O = E.default.getEmbeddedActivitiesForChannel(n).find(e => e.applicationId === h && (null == A || e.launchId === A)), R = m;
        if (null == R) {
            let e = await r.default.fetchApplication(h);
            R = o.default.createFromServer(e)
        }
        if (null == O || null == R) return;
        let C = _.default.getCurrentUser(),
            g = l.default.getChannel(n),
            L = (0, f.default)({
                userId: null == C ? void 0 : C.id,
                application: R,
                channelId: n,
                currentUser: C,
                isActivitiesEnabledForCurrentPlatform: (0, T.getIsActivitiesEnabledForCurrentPlatform)(g),
                ChannelStore: l.default,
                VoiceStateStore: c.default,
                PermissionStore: d.default,
                GuildStore: u.default
            }),
            D = E.default.getSelfEmbeddedActivityForChannel(n),
            v = null == D ? void 0 : D.applicationId,
            M = null != v && null !== (t = s.default.getApplication(v)) && void 0 !== t ? t : void 0;
        ! function(e) {
            let {
                embeddedActivityJoinability: t,
                handleCanJoin: n
            } = e;
            switch (t) {
                case f.EmbeddedActivityJoinability.CAN_JOIN:
                    null == n || n();
                    break;
                case f.EmbeddedActivityJoinability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                    (0, a.showActivitiesInvalidPermissionsAlert)();
                    break;
                case f.EmbeddedActivityJoinability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                    i.default.show({
                        title: S.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                        body: S.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
                        hideActionSheet: !1
                    });
                    break;
                case f.EmbeddedActivityJoinability.ACTIVITY_NOT_SUPPORTED_ON_OS:
                    i.default.show({
                        title: S.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                        body: S.default.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS,
                        hideActionSheet: !1
                    });
                    break;
                case f.EmbeddedActivityJoinability.ACTIVITY_AGE_GATED:
                    i.default.show({
                        title: S.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                        body: S.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE,
                        hideActionSheet: !1
                    });
                    break;
                case f.EmbeddedActivityJoinability.NO_CHANNEL_CONNECT_PERMISSION:
                case f.EmbeddedActivityJoinability.CHANNEL_FULL:
                case f.EmbeddedActivityJoinability.NO_CHANNEL:
                case f.EmbeddedActivityJoinability.NO_USER:
                    i.default.show({
                        title: S.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                        body: S.default.Messages.ACTIVITIES_GENERIC_LAUNCH_FAILURE_DIALOG_BODY,
                        hideActionSheet: !1
                    })
            }
        }({
            embeddedActivityJoinability: L,
            handleCanJoin: async function e() {
                null != O && await (0, I.default)({
                    applicationId: O.applicationId,
                    currentEmbeddedApplication: M,
                    activityChannelId: n,
                    locationObject: {},
                    embeddedActivitiesManager: p,
                    analyticsLocations: N
                })
            }
        })
    }
}