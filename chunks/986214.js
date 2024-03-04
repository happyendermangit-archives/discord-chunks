function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        default: function() {
            return y
        }
    });
    var n = i("404118"),
        l = i("645999"),
        a = i("42203"),
        u = i("305961"),
        r = i("957255"),
        d = i("697218"),
        s = i("659500"),
        o = i("427953"),
        c = i("898065"),
        f = i("550766"),
        _ = i("900551"),
        E = i("943349"),
        I = i("420444"),
        A = i("541473"),
        T = i("407908"),
        C = i("578708"),
        v = i("702173"),
        S = i("954016"),
        N = i("49111"),
        p = i("782340");
    async function y(e) {
        let {
            activityItem: t,
            currentEmbeddedApplication: i,
            locationObject: y,
            channelId: h,
            guildId: D,
            embeddedActivitiesManager: O,
            analyticsLocations: L
        } = e, g = u.default.getGuild(D), m = d.default.getCurrentUser();
        if (null == g && !(0, v.isPrivateChannelWithEnabledActivities)(h) || null == m || null == t || null == t.application) return !1;
        if (null == h) return s.ComponentDispatch.dispatch(N.ComponentActions.SHOW_ACTIVITIES_CHANNEL_SELECTOR, {
            applicationId: t.application.id
        }), !1;
        let P = a.default.getChannel(h);
        if (null == P) return !1;
        let M = null != h ? (0, E.getEmbeddedActivityLaunchability)({
            channelId: h,
            ChannelStore: a.default,
            GuildStore: u.default,
            PermissionStore: r.default
        }) : E.EmbeddedActivityLaunchability.NO_CHANNEL;
        if (M !== E.EmbeddedActivityLaunchability.CAN_LAUNCH) return M === E.EmbeddedActivityLaunchability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION ? (0, l.showActivitiesInvalidPermissionsAlert)() : M === E.EmbeddedActivityLaunchability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS && n.default.show({
            title: p.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC,
            body: p.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
            hideActionSheet: !1
        }), !1;
        let b = await (0, _.confirmActivityLaunchChecks)({
            applicationId: t.application.id,
            application: t.application,
            channel: P,
            currentEmbeddedApplication: i,
            embeddedActivitiesManager: O,
            user: m
        });
        if (!b) return !1;
        let U = (0, I.default)(h),
            R = S.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(P.type);
        if (U) {
            let e = await (0, A.default)({
                channelId: h,
                bypassChangeModal: null != i
            });
            if (!e) return !1
        } else if (!(0, o.isActivitiesInTextEnabled)(P, "handleStartEmbeddedActivity") || !R) return !1;
        return f.startEmbeddedActivity(h, t.application.id, L), (0, C.default)(D, h), (0, T.default)({
            type: N.AnalyticsGameOpenTypes.LAUNCH,
            userId: m.id,
            applicationId: t.application.id,
            locationObject: y,
            analyticsLocations: L
        }), c.markActivityUsed(t.application.id), !0
    }
}