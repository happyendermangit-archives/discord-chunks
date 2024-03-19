function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return A
        }
    });
    var n = i("299285"),
        l = i("42203"),
        a = i("18494"),
        r = i("697218"),
        u = i("427953"),
        d = i("550766"),
        s = i("900551"),
        o = i("420444"),
        c = i("541473"),
        E = i("407908"),
        _ = i("578708"),
        f = i("954016"),
        I = i("49111");
    async function A(t) {
        let {
            applicationId: e,
            currentEmbeddedApplication: i,
            activityChannelId: A,
            locationObject: T,
            embeddedActivitiesManager: C,
            analyticsLocations: S
        } = t, N = l.default.getChannel(A), v = null == N ? void 0 : N.getGuildId(), O = null == v || "" === v, D = r.default.getCurrentUser();
        if (null == N || O && !N.isPrivate() || null == A || null == D) return Promise.resolve(!1);
        if (a.default.getVoiceChannelId() === A && (null == i ? void 0 : i.id) === e) return (0, _.default)(v, A), Promise.resolve(!0);
        let p = await (0, s.confirmActivityLaunchChecks)({
            applicationId: e,
            application: n.default.getApplication(e),
            channel: N,
            currentEmbeddedApplication: i,
            embeddedActivitiesManager: C,
            user: D
        });
        if (!p) return !1;
        let y = (0, o.default)(N.id),
            h = f.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(N.type);
        if (y) {
            let t = await (0, c.default)({
                channelId: N.id,
                bypassChangeModal: null != i
            });
            if (!t) return !1
        } else if (!(0, u.isActivitiesInTextEnabled)(N, "joinEmbeddedActivity") || !h) return !1;
        return (0, _.default)(v, A), (0, d.startEmbeddedActivity)(A, e, S), (0, E.default)({
            type: I.AnalyticsGameOpenTypes.JOIN,
            userId: D.id,
            applicationId: e,
            locationObject: T,
            analyticsLocations: S
        }), !0
    }
}