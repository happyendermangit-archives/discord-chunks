function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var s = n("37983");
    n("884691");
    var a = n("77078"),
        r = n("393414"),
        l = n("124969"),
        i = n("701909"),
        o = n("49111"),
        u = n("782340"),
        d = n("168500");
    let c = () => (0, r.transitionTo)(o.Routes.LOGIN);
    var f = e => {
        let {
            authBoxClassName: t,
            underageMessage: r
        } = e;
        return (0, s.jsxs)(l.default, {
            className: t,
            children: [(0, s.jsx)("img", {
                alt: "",
                src: n("803452"),
                className: d.img
            }), (0, s.jsx)(l.Title, {
                className: d.title,
                children: u.default.Messages.AGE_GATE_UNDERAGE_HEADER
            }), (0, s.jsx)(l.SubTitle, {
                className: d.subtitle,
                children: u.default.Messages.AGE_GATE_UNDERAGE_BODY.format({
                    underageMessage: null != r ? r : u.default.Messages.AGE_GATE_UNDERAGE_BODY_DEFAULT_REG_MESSAGE,
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