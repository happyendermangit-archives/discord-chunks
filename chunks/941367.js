function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        a = n("784184"),
        o = n("935741"),
        l = n("306912"),
        i = n("372844"),
        u = n("941504"),
        c = n("61574");
    t.default = function(e) {
        var t = e.entry,
            n = o.default.getChannel(t.channelId);
        if (null == n) return null;
        var s = l.default.getGuild(n.guild_id);
        return null == s ? null : r.createElement("div", {
            className: c.container
        }, r.createElement(a.Heading, {
            className: c.header,
            variant: "heading-sm/semibold"
        }, u.default.Messages.REPORT_MODAL_SERVER_PREVIEW_HEADER), r.createElement("div", {
            className: c.guildContainer
        }, r.createElement("div", {
            className: c.hubInfo
        }, r.createElement(i.default, {
            guild: s,
            size: i.default.Sizes.MINI,
            className: c.hubIcon
        }), r.createElement(a.Text, {
            color: "header-secondary",
            variant: "text-sm/normal"
        }, s.name)), r.createElement(a.Text, {
            variant: "text-md/semibold",
            color: "header-primary"
        }, t.name)))
    }
}