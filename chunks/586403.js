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
        r = n("1339"),
        i = n("914169"),
        u = n("931874"),
        o = n("745049"),
        d = n("409295");

    function c(e) {
        let {
            guildScheduledEvent: t,
            channel: n,
            onClose: c
        } = e, f = t.entity_type === o.GuildScheduledEventEntityTypes.EXTERNAL, E = a.useCallback(e => (0, i.createEventLocationClickHandler)(t, c)(e), [t, c]), _ = (0, u.getLocationDataForEvent)(t, n);
        if (null == _) return null;
        let {
            IconComponent: I,
            locationName: h
        } = _, p = (0, s.jsxs)(s.Fragment, {
            children: [null != I && (0, s.jsx)(I, {
                width: 20,
                height: 20,
                className: d.channelIcon
            }), (0, s.jsx)(l.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: d.locationText,
                children: (0, r.guildEventDetailsParser)(h, !0)
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