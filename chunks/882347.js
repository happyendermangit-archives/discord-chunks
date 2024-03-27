function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        confirmActivityLaunchChecks: function() {
            return h
        }
    }), n("789020");
    var i = n("570140"),
        r = n("881052"),
        s = n("728345"),
        a = n("812206"),
        o = n("973616"),
        l = n("630388"),
        u = n("317381"),
        d = n("424291"),
        _ = n("966434"),
        c = n("649591"),
        E = n("981631");
    async function I(e, t) {
        try {
            var n;
            return null !== (n = a.default.getApplication(e)) && void 0 !== n ? n : o.default.createFromServer(await s.default.fetchApplication(e))
        } catch (n) {
            i.default.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                applicationId: e,
                guildId: t,
                error: new r.APIError(n)
            })
        }
    }
    async function T(e) {
        let {
            channel: t,
            currentEmbeddedApplication: n,
            embeddedActivitiesManager: i
        } = e;
        return !!(null == n || await new Promise(e => {
            (0, _.default)(n, t, () => {
                i.leaveActivity({
                    channelId: t.id,
                    applicationId: n.id
                }), e(!0)
            }, () => e(!1))
        })) || !1
    }
    async function f(e) {
        let {
            application: t,
            applicationId: n,
            channel: i,
            user: r
        } = e;
        if (null == r.nsfwAllowed) {
            var s, a;
            let e = null != t ? t : await I(n, i.getGuildId());
            if (null == e || null !== (a = null === (s = e.embeddedActivityConfig) || void 0 === s ? void 0 : s.requires_age_gate) && void 0 !== a && a && !await new Promise(t => {
                    (0, d.confirmActivityAgeGateAlert)({
                        application: e,
                        onAgree: () => t(!0),
                        onDisagree: () => t(!1)
                    })
                })) return !1
        }
        return !0
    }
    async function S(e) {
        let {
            application: t,
            applicationId: n,
            channel: i
        } = e, r = null != t ? t : await I(n, i.getGuildId());
        return null != r && (!!((0, l.hasFlag)(r.flags, E.ApplicationFlags.EMBEDDED_RELEASED) || u.default.hasActivityEverBeenLaunched(n)) || new Promise(e => {
            (0, c.confirmExternalAppLaunchAlert)({
                application: r,
                onConfirm: () => e(!0),
                onCancel: () => e(!1)
            })
        }))
    }
    async function h(e) {
        return !!(await T(e) && await f(e) && await S(e)) || !1
    }
}