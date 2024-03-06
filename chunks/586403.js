function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var s = n("37983"),
        a = n("884691"),
        l = n("77078"),
        i = n("1339"),
        r = n("914169"),
        u = n("931874"),
        o = n("745049"),
        d = n("409295");

    function c(e) {
        let {
            guildScheduledEvent: t,
            channel: n,
            onClose: c
        } = e, f = t.entity_type === o.GuildScheduledEventEntityTypes.EXTERNAL, E = a.useCallback(e => (0, r.createEventLocationClickHandler)(t, c)(e), [t, c]), I = (0, u.getLocationDataForEvent)(t, n);
        if (null == I) return null;
        let {
            IconComponent: _,
            locationName: h
        } = I, p = (0, s.jsxs)(s.Fragment, {
            children: [null != _ && (0, s.jsx)(_, {
                width: 20,
                height: 20,
                className: d.channelIcon
            }), (0, s.jsx)(l.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: d.locationText,
                children: (0, i.guildEventDetailsParser)(h, !0)
            })]
        });
        return (0, s.jsx)("div", {
            className: d.row,
            children: null != E ? (0, s.jsx)(l.Clickable, {
                className: f ? d.externalLocation : d.channelLocation,
                onClick: E,
                children: p
            }) : p
        })
    }
}