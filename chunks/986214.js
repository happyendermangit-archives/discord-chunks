function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return D
        }
    });
    var n = i("404118"),
        l = i("645999"),
        a = i("42203"),
        r = i("305961"),
        u = i("957255"),
        d = i("697218"),
        s = i("659500"),
        o = i("427953"),
        c = i("898065"),
        E = i("550766"),
        _ = i("900551"),
        f = i("943349"),
        I = i("420444"),
        A = i("541473"),
        T = i("407908"),
        S = i("578708"),
        C = i("702173"),
        N = i("954016"),
        v = i("49111"),
        O = i("782340");
    async function D(t) {
        let {
            activityItem: e,
            currentEmbeddedApplication: i,
            locationObject: D,
            channelId: p,
            guildId: y,
            embeddedActivitiesManager: h,
            analyticsLocations: L
        } = t, P = r.default.getGuild(y), g = d.default.getCurrentUser();
        if (null == P && !(0, C.isPrivateChannelWithEnabledActivities)(p) || null == g || null == e || null == e.application) return !1;
        if (null == p) return s.ComponentDispatch.dispatch(v.ComponentActions.SHOW_ACTIVITIES_CHANNEL_SELECTOR, {
            applicationId: e.application.id
        }), !1;
        let R = a.default.getChannel(p);
        if (null == R) return !1;
        let m = null != p ? (0, f.getEmbeddedActivityLaunchability)({
            channelId: p,
            ChannelStore: a.default,
            GuildStore: r.default,
            PermissionStore: u.default
        }) : f.EmbeddedActivityLaunchability.NO_CHANNEL;
        if (m !== f.EmbeddedActivityLaunchability.CAN_LAUNCH) return m === f.EmbeddedActivityLaunchability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION ? (0, l.showActivitiesInvalidPermissionsAlert)() : m === f.EmbeddedActivityLaunchability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS && n.default.show({
            title: O.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC,
            body: O.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
            hideActionSheet: !1
        }), !1;
        let M = await (0, _.confirmActivityLaunchChecks)({
            applicationId: e.application.id,
            application: e.application,
            channel: R,
            currentEmbeddedApplication: i,
            embeddedActivitiesManager: h,
            user: g
        });
        if (!M) return !1;
        let U = (0, I.default)(p),
            V = N.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(R.type);
        if (U) {
            let t = await (0, A.default)({
                channelId: p,
                bypassChangeModal: null != i
            });
            if (!t) return !1
        } else if (!(0, o.isActivitiesInTextEnabled)(R, "handleStartEmbeddedActivity") || !V) return !1;
        return E.startEmbeddedActivity(p, e.application.id, L), (0, S.default)(y, p), (0, T.default)({
            type: v.AnalyticsGameOpenTypes.LAUNCH,
            userId: g.id,
            applicationId: e.application.id,
            locationObject: D,
            analyticsLocations: L
        }), c.markActivityUsed(e.application.id), !0
    }
}