function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        a = n("784184"),
        o = n("562052"),
        l = n("941504"),
        i = n("201775");
    t.default = function(e) {
        var t = e.user;
        return r.createElement("div", {
            className: i.container
        }, r.createElement(a.Heading, {
            className: i.header,
            variant: "heading-sm/semibold"
        }, l.default.Messages.REPORTS_USER_PREVIEW_TITLE), r.createElement("div", {
            className: i.userContainer
        }, r.createElement("div", {
            className: i.userInfo
        }, r.createElement(o.default, {
            className: i.userIcon,
            user: t,
            size: a.AvatarSizes.SIZE_40
        }), r.createElement("div", null, null != t.globalName && r.createElement(a.Text, {
            variant: "text-md/semibold",
            color: "header-primary"
        }, t.globalName), r.createElement(a.Text, {
            color: "header-secondary",
            variant: "text-sm/normal"
        }, t.username)))))
    }
}