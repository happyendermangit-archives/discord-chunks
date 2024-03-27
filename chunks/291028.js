function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var a = n("37983");
    n("884691");
    var l = n("77078"),
        r = n("308289"),
        s = n("782340"),
        i = n("173868"),
        d = e => {
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