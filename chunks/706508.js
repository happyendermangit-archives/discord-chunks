function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        default: function() {
            return A
        }
    });
    var n = i("299285"),
        l = i("42203"),
        a = i("18494"),
        u = i("697218"),
        r = i("427953"),
        d = i("550766"),
        s = i("900551"),
        o = i("420444"),
        c = i("541473"),
        f = i("407908"),
        _ = i("578708"),
        E = i("954016"),
        I = i("49111");
    async function A(e) {
        let {
            applicationId: t,
            currentEmbeddedApplication: i,
            activityChannelId: A,
            locationObject: T,
            embeddedActivitiesManager: C,
            analyticsLocations: v
        } = e, S = l.default.getChannel(A), N = null == S ? void 0 : S.getGuildId(), p = null == N || "" === N, y = u.default.getCurrentUser();
        if (null == S || p && !S.isPrivate() || null == A || null == y) return Promise.resolve(!1);
        if (a.default.getVoiceChannelId() === A && (null == i ? void 0 : i.id) === t) return (0, _.default)(N, A), Promise.resolve(!0);
        let h = await (0, s.confirmActivityLaunchChecks)({
            applicationId: t,
            application: n.default.getApplication(t),
            channel: S,
            currentEmbeddedApplication: i,
            embeddedActivitiesManager: C,
            user: y
        });
        if (!h) return !1;
        let D = (0, o.default)(S.id),
            O = E.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(S.type);
        if (D) {
            let e = await (0, c.default)({
                channelId: S.id,
                bypassChangeModal: null != i
            });
            if (!e) return !1
        } else if (!(0, r.isActivitiesInTextEnabled)(S, "joinEmbeddedActivity") || !O) return !1;
        return (0, _.default)(N, A), (0, d.startEmbeddedActivity)(A, t, v), (0, f.default)({
            type: I.AnalyticsGameOpenTypes.JOIN,
            userId: y.id,
            applicationId: t,
            locationObject: T,
            analyticsLocations: v
        }), !0
    }
}