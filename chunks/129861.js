function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("803997"),
        s = n.n(r),
        a = n("442837"),
        o = n("481060"),
        l = n("246946"),
        u = n("467679"),
        d = n("180828"),
        _ = n("51144"),
        c = n("689938"),
        E = n("483170");

    function I(e) {
        if (e.isSystemUser()) return d.BotTypes.SYSTEM_DM;
        if (e.isClyde()) return d.BotTypes.AI;
        if (e.bot) return d.BotTypes.BOT;
        return null
    }
    let T = e => {
        let {
            primary: t,
            secondary: n,
            botType: r,
            botVerified: a,
            discriminatorClass: l,
            className: d,
            usernameClass: _,
            color: I,
            botClass: T,
            showStreamerModeTooltip: f
        } = e;
        return (0, i.jsxs)("div", {
            className: s()(E.info, d),
            children: [(0, i.jsx)(o.Tooltip, {
                text: c.default.Messages.STREAMER_MODE_ENABLED,
                shouldShow: f,
                "aria-label": !!f && void 0,
                children: e => (0, i.jsx)("span", {
                    ...e,
                    className: s()(E.username, _),
                    style: null != I ? {
                        color: I
                    } : void 0,
                    children: t
                })
            }), null != n ? (0, i.jsx)("span", {
                className: s()(E.infoSpacing, l),
                children: n
            }) : void 0, null != r && (0, i.jsx)(u.default, {
                type: r,
                className: s()(E.infoSpacing, T),
                verified: a
            })]
        })
    };
    t.default = e => {
        let {
            hideDiscriminator: t = !1,
            user: n,
            nick: r,
            forceUsername: s,
            showAccountIdentifier: o,
            overrideDiscriminator: u,
            forcePomelo: c,
            ...E
        } = e, f = (0, a.useStateFromStores)([l.default], () => l.default.hidePersonalInformation), S = f || t || n.isNonUserBot(), h = n.toString(), A = _.default.getName(n), m = s ? h : null != r ? r : A, N = n.isPomelo() || c;
        if (N || m !== h) {
            let e = m === h && N && s ? _.default.getUserTag(n, {
                    forcePomelo: c
                }) : m,
                t = o && e !== "@".concat(h) ? _.default.getUserTag(n) : void 0;
            return (0, i.jsx)(T, {
                primary: e,
                secondary: t,
                botVerified: n.isVerifiedBot(),
                botType: I(n),
                showStreamerModeTooltip: f && e !== A,
                ...E
            })
        }
        return (0, i.jsx)(d.default, {
            name: m,
            botType: I(n),
            botVerified: n.isVerifiedBot(),
            discriminator: S || m !== h ? null : null != u ? u : n.discriminator,
            ...E
        })
    }
}