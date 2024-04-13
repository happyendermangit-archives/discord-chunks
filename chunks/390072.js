function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var s = n("735250"),
        a = n("470079"),
        i = n("481060"),
        l = n("725436"),
        r = n("11868"),
        u = n("217804"),
        o = n("765305"),
        d = n("177477");

    function c(e) {
        let {
            guildScheduledEvent: t,
            channel: n,
            onClose: c
        } = e, f = t.entity_type === o.GuildScheduledEventEntityTypes.EXTERNAL, E = a.useCallback(e => (0, r.createEventLocationClickHandler)(t, c)(e), [t, c]), I = (0, u.getLocationDataForEvent)(t, n);
        if (null == I) return null;
        let {
            IconComponent: h,
            locationName: _
        } = I, p = (0, s.jsxs)(s.Fragment, {
            children: [null != h && (0, s.jsx)(h, {
                width: 20,
                height: 20,
                className: d.channelIcon
            }), (0, s.jsx)(i.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: d.locationText,
                children: (0, l.guildEventDetailsParser)(_, !0)
            })]
        });
        return (0, s.jsx)("div", {
            className: d.row,
            children: null != E ? (0, s.jsx)(i.Clickable, {
                className: f ? d.externalLocation : d.channelLocation,
                onClick: E,
                children: p
            }) : p
        })
    }
}