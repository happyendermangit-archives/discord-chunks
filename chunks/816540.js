function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var s = n("37983");
    n("884691");
    var a = n("77078"),
        l = n("393414"),
        r = n("124969"),
        i = n("701909"),
        o = n("49111"),
        u = n("782340"),
        d = n("168500");
    let c = () => (0, l.transitionTo)(o.Routes.LOGIN);
    var E = e => {
        let {
            authBoxClassName: t,
            underageMessage: l
        } = e;
        return (0, s.jsxs)(r.default, {
            className: t,
            children: [(0, s.jsx)("img", {
                alt: "",
                src: n("803452"),
                className: d.img
            }), (0, s.jsx)(r.Title, {
                className: d.title,
                children: u.default.Messages.AGE_GATE_UNDERAGE_HEADER
            }), (0, s.jsx)(r.SubTitle, {
                className: d.subtitle,
                children: u.default.Messages.AGE_GATE_UNDERAGE_BODY.format({
                    underageMessage: null != l ? l : u.default.Messages.AGE_GATE_UNDERAGE_BODY_DEFAULT_REG_MESSAGE,
                    helpURL: i.default.getArticleURL(o.HelpdeskArticles.AGE_GATE)
                })
            }), (0, s.jsx)(a.Button, {
                fullWidth: !0,
                onClick: c,
                children: u.default.Messages.AGE_GATE_UNDERAGE_BACK_TO_LOGIN
            })]
        })
    }
}