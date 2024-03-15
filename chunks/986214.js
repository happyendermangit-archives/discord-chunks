function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
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
        p = i("49111"),
        N = i("782340");
    async function y(t) {
        let {
            activityItem: e,
            currentEmbeddedApplication: i,
            locationObject: y,
            channelId: h,
            guildId: D,
            embeddedActivitiesManager: O,
            analyticsLocations: L
        } = t, g = u.default.getGuild(D), m = d.default.getCurrentUser();
        if (null == g && !(0, v.isPrivateChannelWithEnabledActivities)(h) || null == m || null == e || null == e.application) return !1;
        if (null == h) return s.ComponentDispatch.dispatch(p.ComponentActions.SHOW_ACTIVITIES_CHANNEL_SELECTOR, {
            applicationId: e.application.id
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
            title: N.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC,
            body: N.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
            hideActionSheet: !1
        }), !1;
        let b = await (0, _.confirmActivityLaunchChecks)({
            applicationId: e.application.id,
            application: e.application,
            channel: P,
            currentEmbeddedApplication: i,
            embeddedActivitiesManager: O,
            user: m
        });
        if (!b) return !1;
        let U = (0, I.default)(h),
            R = S.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(P.type);
        if (U) {
            let t = await (0, A.default)({
                channelId: h,
                bypassChangeModal: null != i
            });
            if (!t) return !1
        } else if (!(0, o.isActivitiesInTextEnabled)(P, "handleStartEmbeddedActivity") || !R) return !1;
        return f.startEmbeddedActivity(h, e.application.id, L), (0, C.default)(D, h), (0, T.default)({
            type: p.AnalyticsGameOpenTypes.LAUNCH,
            userId: m.id,
            applicationId: e.application.id,
            locationObject: y,
            analyticsLocations: L
        }), c.markActivityUsed(e.application.id), !0
    }
}