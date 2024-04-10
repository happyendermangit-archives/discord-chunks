function(e, t, n) {
    "use strict";
    n.r(t);
    var a = n("735250");
    n("470079");
    var l = n("481060"),
        r = n("99690"),
        s = n("689938"),
        i = n("201775");
    t.default = e => {
        let {
            user: t
        } = e;
        return (0, a.jsxs)("div", {
            className: i.container,
            children: [(0, a.jsx)(l.Heading, {
                className: i.header,
                variant: "heading-sm/semibold",
                children: s.default.Messages.REPORTS_USER_PREVIEW_TITLE
            }), (0, a.jsx)("div", {
                className: i.userContainer,
                children: (0, a.jsxs)("div", {
                    className: i.userInfo,
                    children: [(0, a.jsx)(r.default, {
                        className: i.userIcon,
                        user: t,
                        size: l.AvatarSizes.SIZE_40
                    }), (0, a.jsxs)("div", {
                        children: [null != t.globalName && (0, a.jsx)(l.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: t.globalName
                        }), (0, a.jsx)(l.Text, {
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