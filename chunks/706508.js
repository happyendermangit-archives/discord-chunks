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
        f = i("407908"),
        _ = i("578708"),
        E = i("954016"),
        I = i("49111");
    async function A(t) {
        let {
            applicationId: e,
            currentEmbeddedApplication: i,
            activityChannelId: A,
            locationObject: T,
            embeddedActivitiesManager: C,
            analyticsLocations: v
        } = t, S = l.default.getChannel(A), N = null == S ? void 0 : S.getGuildId(), p = null == N || "" === N, y = r.default.getCurrentUser();
        if (null == S || p && !S.isPrivate() || null == A || null == y) return Promise.resolve(!1);
        if (a.default.getVoiceChannelId() === A && (null == i ? void 0 : i.id) === e) return (0, _.default)(N, A), Promise.resolve(!0);
        let h = await (0, s.confirmActivityLaunchChecks)({
            applicationId: e,
            application: n.default.getApplication(e),
            channel: S,
            currentEmbeddedApplication: i,
            embeddedActivitiesManager: C,
            user: y
        });
        if (!h) return !1;
        let D = (0, o.default)(S.id),
            O = E.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(S.type);
        if (D) {
            let t = await (0, c.default)({
                channelId: S.id,
                bypassChangeModal: null != i
            });
            if (!t) return !1
        } else if (!(0, u.isActivitiesInTextEnabled)(S, "joinEmbeddedActivity") || !O) return !1;
        return (0, _.default)(N, A), (0, d.startEmbeddedActivity)(A, e, v), (0, f.default)({
            type: I.AnalyticsGameOpenTypes.JOIN,
            userId: y.id,
            applicationId: e,
            locationObject: T,
            analyticsLocations: v
        }), !0
    }
}