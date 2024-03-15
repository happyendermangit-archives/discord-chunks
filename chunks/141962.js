function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return c
        }
    }), i("222007");
    var n = i("37983");
    i("884691");
    var l = i("77078"),
        a = i("913144"),
        r = i("135230"),
        u = i("550766"),
        d = i("648456"),
        s = i("782340");
    class o extends d.default {
        showErrorModal(t) {
            let {
                code: e,
                message: i
            } = t;
            (0, l.openModalLazy)(async () => t => (0, n.jsx)(r.default, {
                title: s.default.Messages.EMBEDDED_ACTIVITIES_ERROR_TITLE.format({
                    code: e
                }),
                body: i,
                ...t
            }))
        }
        showLaunchErrorModal(t) {
            (0, l.openModalLazy)(async () => e => (0, n.jsx)(r.default, {
                title: s.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                body: t,
                ...e
            }))
        }
        leaveActivity(t) {
            let {
                channelId: e,
                applicationId: i
            } = t;
            a.default.wait(() => (0, u.stopEmbeddedActivity)({
                channelId: e,
                applicationId: i
            }))
        }
        constructor(...t) {
            super(...t), this.handleRPCDisconnect = t => {
                let {
                    reason: e,
                    application: i
                } = t;
                this.superHandleRPCDisconnect({
                    reason: e,
                    application: i
                })
            }
        }
    }
    var c = new o
}