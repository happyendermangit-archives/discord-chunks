function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("803997"),
        s = n.n(r),
        a = n("913527"),
        o = n.n(a),
        l = n("442837"),
        u = n("481060"),
        d = n("835473"),
        _ = n("318374"),
        c = n("594174"),
        E = n("366695"),
        I = n("823379"),
        T = n("689938"),
        f = n("100387");
    t.default = function(e) {
        let {
            createdAt: t,
            participantIds: n,
            applicationId: r,
            title: a,
            guildId: S,
            className: h
        } = e, A = (0, d.useGetOrFetchApplication)(r), m = (0, l.useStateFromStoresArray)([c.default], () => {
            var e;
            return null !== (e = n.map(e => c.default.getUser(e)).filter(I.isNotNullish)) && void 0 !== e ? e : []
        }), N = null == A ? void 0 : A.name, O = o()(t).fromNow();
        return null == t ? null : (0, i.jsxs)("div", {
            className: s()(h, f.container),
            children: [(0, i.jsx)(E.default, {
                game: A
            }), (0, i.jsxs)("div", {
                className: f.textSection,
                children: [null != a && "" !== a ? (0, i.jsx)(u.Text, {
                    variant: "text-md/semibold",
                    color: "interactive-active",
                    children: a
                }) : (0, i.jsx)(u.Text, {
                    variant: "text-md/semibold",
                    color: "text-muted",
                    children: T.default.Messages.CLIPS_UNTITLED
                }), (0, i.jsxs)(u.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: f.__invalid_subtitle,
                    children: [null != N ? "".concat(N, " • ") : null, O]
                }), (0, i.jsx)(u.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: f.__invalid_subtitle
                })]
            }), null != m && m.length > 0 && (0, i.jsx)(_.default, {
                maxUsers: 4,
                users: m,
                className: f.__invalid_facePile,
                guildId: S
            })]
        })
    }
}