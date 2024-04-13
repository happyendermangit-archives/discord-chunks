function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("47120");
    var s = n("735250"),
        a = n("470079"),
        i = n("442837"),
        l = n("231239"),
        r = n("129293"),
        u = n("703656"),
        o = n("108427"),
        d = n("819570"),
        c = n("844800"),
        f = n("580497"),
        E = n("981631"),
        I = n("689938"),
        h = n("639619");

    function _(e) {
        let {
            location: t
        } = e, [_, p] = a.useState(!1), {
            verifySuccess: T,
            verifyErrors: m,
            redirectGuildId: N
        } = (0, i.useStateFromStores)([c.default], () => c.default.getState());
        a.useEffect(() => {
            let e = (0, r.default)(t);
            l.default.verify(e), (0, o.trackAppUIViewed)("verify_hub_email")
        }, [t]);
        let g = () => {
            (0, f.default)(N), p(!0)
        };
        return _ ? (0, s.jsxs)(d.default, {
            children: [(0, s.jsx)(d.Title, {
                className: h.title,
                children: I.default.Messages.APP_OPENED_TITLE
            }), (0, s.jsx)(d.SubTitle, {
                className: h.subtitle,
                children: I.default.Messages.APP_OPENED_BODY
            }), (0, s.jsx)(d.Button, {
                className: h.spacedButton,
                onClick: () => (0, u.transitionTo)(E.Routes.CHANNEL(N)),
                children: I.default.Messages.CONTINUE_TO_WEBAPP
            })]
        }) : T ? (0, s.jsxs)(d.default, {
            children: [(0, s.jsx)(d.Image, {
                className: h.image,
                src: n("73962")
            }), (0, s.jsx)(d.Title, {
                className: h.title,
                children: I.default.Messages.VERIFICATION_VERIFIED
            }), (0, s.jsx)(d.Button, {
                onClick: g,
                children: I.default.Messages.VERIFICATION_OPEN_DISCORD
            })]
        }) : null != m ? (0, s.jsxs)(d.default, {
            children: [(0, s.jsx)(d.Image, {
                className: h.image,
                src: n("375673")
            }), (0, s.jsx)(d.Title, {
                className: h.title,
                children: I.default.Messages.VERFICATION_EXPIRED
            }), (0, s.jsx)(d.SubTitle, {
                className: h.subtitle,
                children: I.default.Messages._AUTH_VERFICATION_EXPIRED_SUGGESTION
            }), (0, s.jsx)(d.Button, {
                onClick: g,
                children: I.default.Messages.VERIFICATION_OPEN_DISCORD
            })]
        }) : (0, s.jsxs)(d.default, {
            children: [(0, s.jsx)(d.Image, {
                className: h.image,
                src: n("892235")
            }), (0, s.jsx)(d.Title, {
                className: h.title,
                children: I.default.Messages.VERIFICATION_VERIFYING
            }), (0, s.jsx)(d.SubTitle, {
                className: h.subtitle,
                children: I.default.Messages.ACTION_MAY_TAKE_A_MOMENT
            }), (0, s.jsx)(d.Button, {
                submitting: !0,
                color: d.Button.Colors.PRIMARY
            })]
        })
    }
    i.default.initialize()
}