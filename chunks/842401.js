function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("99690"),
        a = n("689938"),
        o = n("412356");
    t.default = e => {
        let {
            user: t
        } = e;
        return (0, i.jsxs)("div", {
            className: o.container,
            children: [(0, i.jsx)(r.Heading, {
                className: o.header,
                variant: "heading-sm/semibold",
                children: a.default.Messages.REPORTS_USER_PREVIEW_TITLE
            }), (0, i.jsx)("div", {
                className: o.userContainer,
                children: (0, i.jsxs)("div", {
                    className: o.userInfo,
                    children: [(0, i.jsx)(s.default, {
                        className: o.userIcon,
                        user: t,
                        size: r.AvatarSizes.SIZE_40
                    }), (0, i.jsxs)("div", {
                        children: [null != t.globalName && (0, i.jsx)(r.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: t.globalName
                        }), (0, i.jsx)(r.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: t.username
                        })]
                    })]
                })
            })]
        })
    }
}