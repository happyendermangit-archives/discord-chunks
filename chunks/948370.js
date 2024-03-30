function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        a = n("784184"),
        o = n("845265"),
        l = n("299529"),
        i = n("941504"),
        u = n("765339");
    t.default = function(e) {
        var t, n = e.entry,
            c = n.id,
            s = n.icon,
            d = n.name,
            f = null !== (t = l.default.getGuildIconURL({
                id: c,
                icon: s,
                size: 32
            })) && void 0 !== t ? t : void 0;
        return r.createElement("div", {
            className: u.container
        }, r.createElement(a.Heading, {
            className: u.header,
            variant: "heading-sm/semibold"
        }, i.default.Messages.REPORT_MODAL_SERVER_PREVIEW_HEADER), r.createElement("div", {
            className: u.guildContainer
        }, r.createElement("div", {
            className: u.guildInfo
        }, r.createElement(o.default, {
            mask: o.default.Masks.SQUIRCLE,
            width: 32,
            height: 32,
            className: u.guildIconMask
        }, r.createElement("img", {
            src: f,
            alt: "",
            className: u.guildIcon
        })), r.createElement(a.Text, {
            color: "header-secondary",
            variant: "text-sm/normal"
        }, d))))
    }
}