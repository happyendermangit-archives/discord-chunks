function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("570140"),
        a = n("468026"),
        o = n("566620"),
        l = n("287545"),
        u = n("689938");
    class d extends l.default {
        showErrorModal(e) {
            let {
                code: t,
                message: n
            } = e;
            (0, r.openModalLazy)(async () => e => (0, i.jsx)(a.default, {
                title: u.default.Messages.EMBEDDED_ACTIVITIES_ERROR_TITLE.format({
                    code: t
                }),
                body: n,
                ...e
            }))
        }
        showLaunchErrorModal(e) {
            (0, r.openModalLazy)(async () => t => (0, i.jsx)(a.default, {
                title: u.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                body: e,
                ...t
            }))
        }
        leaveActivity(e) {
            let {
                channelId: t,
                applicationId: n
            } = e;
            s.default.wait(() => (0, o.stopEmbeddedActivity)({
                channelId: t,
                applicationId: n
            }))
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "handleRPCDisconnect", i = e => {
                let {
                    reason: t,
                    application: n
                } = e;
                this.superHandleRPCDisconnect({
                    reason: t,
                    application: n
                })
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new d
}