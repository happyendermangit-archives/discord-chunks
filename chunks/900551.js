function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        confirmActivityLaunchChecks: function() {
            return S
        }
    }), i("702976");
    var n = i("913144"),
        l = i("448993"),
        a = i("651057"),
        r = i("299285"),
        u = i("653047"),
        d = i("568734"),
        s = i("191225"),
        o = i("213765"),
        c = i("370507"),
        E = i("772926"),
        _ = i("49111");
    async function f(t, e) {
        try {
            var i;
            return null !== (i = r.default.getApplication(t)) && void 0 !== i ? i : u.default.createFromServer(await a.default.fetchApplication(t))
        } catch (i) {
            n.default.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                applicationId: t,
                guildId: e,
                error: new l.APIError(i)
            })
        }
    }
    async function I(t) {
        let {
            channel: e,
            currentEmbeddedApplication: i,
            embeddedActivitiesManager: n
        } = t;
        if (null != i) {
            let t = await new Promise(t => {
                (0, c.default)(i, e, () => {
                    n.leaveActivity({
                        channelId: e.id,
                        applicationId: i.id
                    }), t(!0)
                }, () => t(!1))
            });
            if (!t) return !1
        }
        return !0
    }
    async function A(t) {
        let {
            application: e,
            applicationId: i,
            channel: n,
            user: l
        } = t;
        if (null == l.nsfwAllowed) {
            var a, r;
            let t = null != e ? e : await f(i, n.getGuildId());
            if (null == t) return !1;
            let l = null !== (r = null === (a = t.embeddedActivityConfig) || void 0 === a ? void 0 : a.requires_age_gate) && void 0 !== r && r;
            if (l) {
                let e = await new Promise(e => {
                    (0, o.confirmActivityAgeGateAlert)({
                        application: t,
                        onAgree: () => e(!0),
                        onDisagree: () => e(!1)
                    })
                });
                if (!e) return !1
            }
        }
        return !0
    }
    async function T(t) {
        let {
            application: e,
            applicationId: i,
            channel: n
        } = t, l = null != e ? e : await f(i, n.getGuildId());
        return null != l && (!!((0, d.hasFlag)(l.flags, _.ApplicationFlags.EMBEDDED_RELEASED) || s.default.hasActivityEverBeenLaunched(i)) || new Promise(t => {
            (0, E.confirmExternalAppLaunchAlert)({
                application: l,
                onConfirm: () => t(!0),
                onCancel: () => t(!1)
            })
        }))
    }
    async function S(t) {
        let e = await I(t);
        if (!e) return !1;
        let i = await A(t);
        if (!i) return !1;
        let n = await T(t);
        return !!n || !1
    }
}