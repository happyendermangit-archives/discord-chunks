function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var s = n("735250"),
        a = n("470079"),
        l = n("481060"),
        i = n("725436"),
        r = n("11868"),
        u = n("217804"),
        o = n("765305"),
        d = n("263246");

    function c(e) {
        let {
            guildScheduledEvent: t,
            channel: n,
            onClose: c
        } = e, f = t.entity_type === o.GuildScheduledEventEntityTypes.EXTERNAL, E = a.useCallback(e => (0, r.createEventLocationClickHandler)(t, c)(e), [t, c]), _ = (0, u.getLocationDataForEvent)(t, n);
        if (null == _) return null;
        let {
            IconComponent: I,
            locationName: p
        } = _, h = (0, s.jsxs)(s.Fragment, {
            children: [null != I && (0, s.jsx)(I, {
                width: 20,
                height: 20,
                className: d.channelIcon
            }), (0, s.jsx)(l.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: d.locationText,
                children: (0, i.guildEventDetailsParser)(p, !0)
            })]
        });
        return (0, s.jsx)("div", {
            className: d.row,
            children: null != E ? (0, s.jsx)(l.Clickable, {
                className: f ? d.externalLocation : d.channelLocation,
                onClick: E,
                children: h
            }) : h
        })
    }
}