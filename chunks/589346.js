function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        a = n("784184"),
        o = n("306912"),
        l = n("372844"),
        i = n("941504"),
        u = n("656173");
    t.default = function(e) {
        var t = e.stageInstance,
            n = o.default.getGuild(t.guild_id);
        return null == n ? null : r.createElement("div", {
            className: u.container
        }, r.createElement(a.Heading, {
            className: u.header,
            variant: "heading-sm/semibold"
        }, i.default.Messages.MOBILE_REPORTS_STAGE_CHANNEL_PREVIEW_TITLE), r.createElement("div", {
            className: u.guildContainer
        }, r.createElement("div", {
            className: u.guildInfo
        }, r.createElement(l.default, {
            guild: n,
            size: l.default.Sizes.MINI,
            className: u.guildIcon
        }), r.createElement(a.Text, {
            color: "header-secondary",
            variant: "text-sm/normal"
        }, n.name)), r.createElement(a.Text, {
            variant: "text-md/semibold",
            color: "header-primary"
        }, t.topic)))
    }
}