function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var i = n("812206"),
        r = n("592125"),
        a = n("944486"),
        s = n("594174"),
        o = n("867176"),
        l = n("566620"),
        u = n("882347"),
        d = n("917107"),
        _ = n("89425"),
        c = n("275920"),
        E = n("197386"),
        I = n("701488"),
        T = n("981631");
    async function f(e) {
        let {
            applicationId: t,
            currentEmbeddedApplication: n,
            activityChannelId: f,
            locationObject: S,
            embeddedActivitiesManager: h,
            analyticsLocations: A
        } = e, m = r.default.getChannel(f), N = null == m ? void 0 : m.getGuildId(), p = null == N || "" === N, O = s.default.getCurrentUser();
        if (null == m || p && !m.isPrivate() || null == f || null == O) return Promise.resolve(!1);
        if (a.default.getVoiceChannelId() === f && (null == n ? void 0 : n.id) === t) return (0, E.default)(N, f), Promise.resolve(!0);
        if (!await (0, u.confirmActivityLaunchChecks)({
                applicationId: t,
                application: i.default.getApplication(t),
                channel: m,
                currentEmbeddedApplication: n,
                embeddedActivitiesManager: h,
                user: O
            })) return !1;
        let R = (0, d.default)(m.id),
            C = I.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(m.type);
        if (R) {
            if (!await (0, _.default)({
                    channelId: m.id,
                    bypassChangeModal: null != n
                })) return !1
        } else if (!(0, o.isActivitiesInTextEnabled)(m, "joinEmbeddedActivity") || !C) return !1;
        return (0, E.default)(N, f), (0, l.startEmbeddedActivity)(f, t, A), (0, c.default)({
            type: T.AnalyticsGameOpenTypes.JOIN,
            userId: O.id,
            applicationId: t,
            locationObject: S,
            analyticsLocations: A
        }), !0
    }
}