function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    }), n("47120");
    var s = n("735250"),
        a = n("470079"),
        l = n("442837"),
        i = n("231239"),
        r = n("129293"),
        u = n("703656"),
        o = n("108427"),
        d = n("819570"),
        c = n("844800"),
        f = n("580497"),
        E = n("981631"),
        _ = n("689938"),
        I = n("887889");

    function p(e) {
        let {
            location: t
        } = e, [p, h] = a.useState(!1), {
            verifySuccess: T,
            verifyErrors: N,
            redirectGuildId: g
        } = (0, l.useStateFromStores)([c.default], () => c.default.getState());
        a.useEffect(() => {
            let e = (0, r.default)(t);
            i.default.verify(e), (0, o.trackAppUIViewed)("verify_hub_email")
        }, [t]);
        let m = () => {
            (0, f.default)(g), h(!0)
        };
        return p ? (0, s.jsxs)(d.default, {
            children: [(0, s.jsx)(d.Title, {
                className: I.title,
                children: _.default.Messages.APP_OPENED_TITLE
            }), (0, s.jsx)(d.SubTitle, {
                className: I.subtitle,
                children: _.default.Messages.APP_OPENED_BODY
            }), (0, s.jsx)(d.Button, {
                className: I.spacedButton,
                onClick: () => (0, u.transitionTo)(E.Routes.CHANNEL(g)),
                children: _.default.Messages.CONTINUE_TO_WEBAPP
            })]
        }) : T ? (0, s.jsxs)(d.default, {
            children: [(0, s.jsx)(d.Image, {
                className: I.image,
                src: n("73962")
            }), (0, s.jsx)(d.Title, {
                className: I.title,
                children: _.default.Messages.VERIFICATION_VERIFIED
            }), (0, s.jsx)(d.Button, {
                onClick: m,
                children: _.default.Messages.VERIFICATION_OPEN_DISCORD
            })]
        }) : null != N ? (0, s.jsxs)(d.default, {
            children: [(0, s.jsx)(d.Image, {
                className: I.image,
                src: n("375673")
            }), (0, s.jsx)(d.Title, {
                className: I.title,
                children: _.default.Messages.VERFICATION_EXPIRED
            }), (0, s.jsx)(d.SubTitle, {
                className: I.subtitle,
                children: _.default.Messages._AUTH_VERFICATION_EXPIRED_SUGGESTION
            }), (0, s.jsx)(d.Button, {
                onClick: m,
                children: _.default.Messages.VERIFICATION_OPEN_DISCORD
            })]
        }) : (0, s.jsxs)(d.default, {
            children: [(0, s.jsx)(d.Image, {
                className: I.image,
                src: n("892235")
            }), (0, s.jsx)(d.Title, {
                className: I.title,
                children: _.default.Messages.VERIFICATION_VERIFYING
            }), (0, s.jsx)(d.SubTitle, {
                className: I.subtitle,
                children: _.default.Messages.ACTION_MAY_TAKE_A_MOMENT
            }), (0, s.jsx)(d.Button, {
                submitting: !0,
                color: d.Button.Colors.PRIMARY
            })]
        })
    }
    l.default.initialize()
}