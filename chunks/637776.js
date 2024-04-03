function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return h
        }
    }), s("47120");
    var n = s("735250"),
        a = s("470079"),
        l = s("442837"),
        i = s("231239"),
        r = s("129293"),
        u = s("703656"),
        o = s("108427"),
        d = s("819570"),
        c = s("844800"),
        f = s("580497"),
        E = s("981631"),
        I = s("689938"),
        _ = s("639619");

    function h(e) {
        let {
            location: t
        } = e, [h, p] = a.useState(!1), {
            verifySuccess: T,
            verifyErrors: N,
            redirectGuildId: g
        } = (0, l.useStateFromStores)([c.default], () => c.default.getState());
        a.useEffect(() => {
            let e = (0, r.default)(t);
            i.default.verify(e), (0, o.trackAppUIViewed)("verify_hub_email")
        }, [t]);
        let m = () => {
            (0, f.default)(g), p(!0)
        };
        return h ? (0, n.jsxs)(d.default, {
            children: [(0, n.jsx)(d.Title, {
                className: _.title,
                children: I.default.Messages.APP_OPENED_TITLE
            }), (0, n.jsx)(d.SubTitle, {
                className: _.subtitle,
                children: I.default.Messages.APP_OPENED_BODY
            }), (0, n.jsx)(d.Button, {
                className: _.spacedButton,
                onClick: () => (0, u.transitionTo)(E.Routes.CHANNEL(g)),
                children: I.default.Messages.CONTINUE_TO_WEBAPP
            })]
        }) : T ? (0, n.jsxs)(d.default, {
            children: [(0, n.jsx)(d.Image, {
                className: _.image,
                src: s("73962")
            }), (0, n.jsx)(d.Title, {
                className: _.title,
                children: I.default.Messages.VERIFICATION_VERIFIED
            }), (0, n.jsx)(d.Button, {
                onClick: m,
                children: I.default.Messages.VERIFICATION_OPEN_DISCORD
            })]
        }) : null != N ? (0, n.jsxs)(d.default, {
            children: [(0, n.jsx)(d.Image, {
                className: _.image,
                src: s("375673")
            }), (0, n.jsx)(d.Title, {
                className: _.title,
                children: I.default.Messages.VERFICATION_EXPIRED
            }), (0, n.jsx)(d.SubTitle, {
                className: _.subtitle,
                children: I.default.Messages._AUTH_VERFICATION_EXPIRED_SUGGESTION
            }), (0, n.jsx)(d.Button, {
                onClick: m,
                children: I.default.Messages.VERIFICATION_OPEN_DISCORD
            })]
        }) : (0, n.jsxs)(d.default, {
            children: [(0, n.jsx)(d.Image, {
                className: _.image,
                src: s("892235")
            }), (0, n.jsx)(d.Title, {
                className: _.title,
                children: I.default.Messages.VERIFICATION_VERIFYING
            }), (0, n.jsx)(d.SubTitle, {
                className: _.subtitle,
                children: I.default.Messages.ACTION_MAY_TAKE_A_MOMENT
            }), (0, n.jsx)(d.Button, {
                submitting: !0,
                color: d.Button.Colors.PRIMARY
            })]
        })
    }
    l.default.initialize()
}