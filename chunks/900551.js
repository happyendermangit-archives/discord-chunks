function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        confirmActivityLaunchChecks: function() {
            return C
        }
    }), i("702976");
    var n = i("913144"),
        l = i("448993"),
        a = i("651057"),
        u = i("299285"),
        r = i("653047"),
        d = i("568734"),
        s = i("191225"),
        o = i("213765"),
        c = i("370507"),
        f = i("772926"),
        _ = i("49111");
    async function E(e, t) {
        try {
            var i;
            return null !== (i = u.default.getApplication(e)) && void 0 !== i ? i : r.default.createFromServer(await a.default.fetchApplication(e))
        } catch (i) {
            n.default.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                applicationId: e,
                guildId: t,
                error: new l.APIError(i)
            })
        }
    }
    async function I(e) {
        let {
            channel: t,
            currentEmbeddedApplication: i,
            embeddedActivitiesManager: n
        } = e;
        if (null != i) {
            let e = await new Promise(e => {
                (0, c.default)(i, t, () => {
                    n.leaveActivity({
                        channelId: t.id,
                        applicationId: i.id
                    }), e(!0)
                }, () => e(!1))
            });
            if (!e) return !1
        }
        return !0
    }
    async function A(e) {
        let {
            application: t,
            applicationId: i,
            channel: n,
            user: l
        } = e;
        if (null == l.nsfwAllowed) {
            var a, u;
            let e = null != t ? t : await E(i, n.getGuildId());
            if (null == e) return !1;
            let l = null !== (u = null === (a = e.embeddedActivityConfig) || void 0 === a ? void 0 : a.requires_age_gate) && void 0 !== u && u;
            if (l) {
                let t = await new Promise(t => {
                    (0, o.confirmActivityAgeGateAlert)({
                        application: e,
                        onAgree: () => t(!0),
                        onDisagree: () => t(!1)
                    })
                });
                if (!t) return !1
            }
        }
        return !0
    }
    async function T(e) {
        let {
            application: t,
            applicationId: i,
            channel: n
        } = e, l = null != t ? t : await E(i, n.getGuildId());
        return null != l && (!!((0, d.hasFlag)(l.flags, _.ApplicationFlags.EMBEDDED_RELEASED) || s.default.hasActivityEverBeenLaunched(i)) || new Promise(e => {
            (0, f.confirmExternalAppLaunchAlert)({
                application: l,
                onConfirm: () => e(!0),
                onCancel: () => e(!1)
            })
        }))
    }
    async function C(e) {
        let t = await I(e);
        if (!t) return !1;
        let i = await A(e);
        if (!i) return !1;
        let n = await T(e);
        return !!n || !1
    }
}