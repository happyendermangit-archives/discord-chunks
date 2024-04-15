function(e, t, n) {
    "use strict";
    n.r(t);
    var s = n("735250");
    n("470079");
    var a = n("481060"),
        i = n("703656"),
        r = n("819570"),
        l = n("63063"),
        o = n("981631"),
        u = n("689938"),
        d = n("925690");
    let c = () => (0, i.transitionTo)(o.Routes.LOGIN);
    t.default = e => {
        let {
            authBoxClassName: t,
            underageMessage: i
        } = e;
        return (0, s.jsxs)(r.default, {
            className: t,
            children: [(0, s.jsx)("img", {
                alt: "",
                src: n("231443"),
                className: d.img
            }), (0, s.jsx)(r.Title, {
                className: d.title,
                children: u.default.Messages.AGE_GATE_UNDERAGE_HEADER
            }), (0, s.jsx)(r.SubTitle, {
                className: d.subtitle,
                children: u.default.Messages.AGE_GATE_UNDERAGE_BODY.format({
                    underageMessage: null != i ? i : u.default.Messages.AGE_GATE_UNDERAGE_BODY_DEFAULT_REG_MESSAGE,
                    helpURL: l.default.getArticleURL(o.HelpdeskArticles.AGE_GATE)
                })
            }), (0, s.jsx)(a.Button, {
                fullWidth: !0,
                onClick: c,
                children: u.default.Messages.AGE_GATE_UNDERAGE_BACK_TO_LOGIN
            })]
        })
    }
}