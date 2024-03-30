function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var i = n("668781"),
        r = n("835873"),
        s = n("592125"),
        a = n("430824"),
        o = n("496675"),
        l = n("594174"),
        u = n("585483"),
        d = n("867176"),
        _ = n("337682"),
        c = n("566620"),
        E = n("882347"),
        I = n("374065"),
        T = n("917107"),
        f = n("89425"),
        S = n("275920"),
        h = n("197386"),
        A = n("451576"),
        m = n("701488"),
        N = n("981631"),
        O = n("689938");
    async function p(e) {
        let {
            activityItem: t,
            currentEmbeddedApplication: n,
            locationObject: p,
            channelId: R,
            guildId: C,
            embeddedActivitiesManager: g,
            analyticsLocations: L
        } = e, D = a.default.getGuild(C), v = l.default.getCurrentUser();
        if (null == D && !(0, A.isPrivateChannelWithEnabledActivities)(R) || null == v || null == t || null == t.application) return !1;
        if (null == R) return u.ComponentDispatch.dispatch(N.ComponentActions.SHOW_ACTIVITIES_CHANNEL_SELECTOR, {
            applicationId: t.application.id
        }), !1;
        let M = s.default.getChannel(R);
        if (null == M) return !1;
        let y = null != R ? (0, I.getEmbeddedActivityLaunchability)({
            channelId: R,
            ChannelStore: s.default,
            GuildStore: a.default,
            PermissionStore: o.default
        }) : I.EmbeddedActivityLaunchability.NO_CHANNEL;
        if (y !== I.EmbeddedActivityLaunchability.CAN_LAUNCH) return y === I.EmbeddedActivityLaunchability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION ? (0, r.showActivitiesInvalidPermissionsAlert)() : y === I.EmbeddedActivityLaunchability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS && i.default.show({
            title: O.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC,
            body: O.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
            hideActionSheet: !1
        }), !1;
        if (!await (0, E.confirmActivityLaunchChecks)({
                applicationId: t.application.id,
                application: t.application,
                channel: M,
                currentEmbeddedApplication: n,
                embeddedActivitiesManager: g,
                user: v
            })) return !1;
        let P = (0, T.default)(R),
            U = m.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(M.type);
        if (P) {
            if (!await (0, f.default)({
                    channelId: R,
                    bypassChangeModal: null != n
                })) return !1
        } else if (!(0, d.isActivitiesInTextEnabled)(M, "handleStartEmbeddedActivity") || !U) return !1;
        return c.startEmbeddedActivity(R, t.application.id, L), (0, h.default)(C, R), (0, S.default)({
            type: N.AnalyticsGameOpenTypes.LAUNCH,
            userId: v.id,
            applicationId: t.application.id,
            locationObject: p,
            analyticsLocations: L
        }), _.markActivityUsed(t.application.id), !0
    }
}