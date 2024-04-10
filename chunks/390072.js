function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return c
        }
    });
    var n = s("735250"),
        a = s("470079"),
        l = s("481060"),
        i = s("725436"),
        r = s("11868"),
        u = s("217804"),
        o = s("765305"),
        d = s("177477");

    function c(e) {
        let {
            guildScheduledEvent: t,
            channel: s,
            onClose: c
        } = e, f = t.entity_type === o.GuildScheduledEventEntityTypes.EXTERNAL, E = a.useCallback(e => (0, r.createEventLocationClickHandler)(t, c)(e), [t, c]), I = (0, u.getLocationDataForEvent)(t, s);
        if (null == I) return null;
        let {
            IconComponent: _,
            locationName: h
        } = I, p = (0, n.jsxs)(n.Fragment, {
            children: [null != _ && (0, n.jsx)(_, {
                width: 20,
                height: 20,
                className: d.channelIcon
            }), (0, n.jsx)(l.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: d.locationText,
                children: (0, i.guildEventDetailsParser)(h, !0)
            })]
        });
        return (0, n.jsx)("div", {
            className: d.row,
            children: null != E ? (0, n.jsx)(l.Clickable, {
                className: f ? d.externalLocation : d.channelLocation,
                onClick: E,
                children: p
            }) : p
        })
    }
}