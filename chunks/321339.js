function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var r = n("470079"),
        o = n("784184"),
        i = n("52913"),
        a = n("429383"),
        u = n("877987"),
        s = n("941504"),
        l = n("830254"),
        c = n("989171");

    function f(e) {
        var t = e.applicationId,
            n = e.channelId,
            f = (0, a.usePrivateChannelIntegrationState)({
                channelId: n
            }),
            d = f.installedIntegrations;
        return f.fetched && void 0 !== d.find(function(e) {
            return e.application.id === t
        }) ? r.createElement(u.default, null, r.createElement(o.Heading, {
            variant: "eyebrow",
            className: c.title
        }, s.default.Messages.BOT_PROFILE_MANAGE_PRIVATE_CHANNEL_INTEGRATION), r.createElement(o.Button, {
            onClick: function() {
                return (0, i.deletePrivateChannelIntegration)(n, t)
            },
            size: o.Button.Sizes.ICON,
            color: o.Button.Colors.RED,
            look: o.Button.Looks.LINK,
            className: l.button
        }, s.default.Messages.BOT_PROFILE_REMOVE_PRIVATE_CHANNEL_INTEGRATION)) : null
    }
}