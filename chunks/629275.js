function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        a = n("898511"),
        o = n("784184"),
        l = n("306912"),
        i = n("372844"),
        u = n("941504"),
        c = n("325468");
    t.default = function(e) {
        var t = e.event,
            n = (0, a.useStateFromStores)([l.default], function() {
                return l.default.getGuild(t.guild_id)
            });
        return null == n ? null : r.createElement("div", {
            className: c.container
        }, r.createElement(o.Heading, {
            className: c.header,
            variant: "heading-sm/semibold"
        }, u.default.Messages.MOBILE_REPORTS_EVENT_PREVIEW_TITLE), r.createElement("div", {
            className: c.guildContainer
        }, r.createElement("div", {
            className: c.guildInfo
        }, r.createElement(i.default, {
            guild: n,
            size: i.default.Sizes.MINI,
            className: c.guildIcon
        }), r.createElement(o.Text, {
            color: "header-secondary",
            variant: "text-sm/normal"
        }, n.name)), r.createElement(o.Text, {
            variant: "text-md/semibold",
            color: "header-primary"
        }, t.name)))
    }
}