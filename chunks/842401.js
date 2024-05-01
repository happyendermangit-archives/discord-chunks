function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        a = n("99690"),
        s = n("689938"),
        o = n("373548");
    t.default = e => {
        let {
            user: t
        } = e;
        return (0, i.jsxs)("div", {
            className: o.container,
            children: [(0, i.jsx)(r.Heading, {
                className: o.header,
                variant: "heading-sm/semibold",
                children: s.default.Messages.REPORTS_USER_PREVIEW_TITLE
            }), (0, i.jsx)("div", {
                className: o.userContainer,
                children: (0, i.jsxs)("div", {
                    className: o.userInfo,
                    children: [(0, i.jsx)(a.default, {
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