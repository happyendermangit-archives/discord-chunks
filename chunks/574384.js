function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("260034"),
        a = n("993365"),
        o = n("481060"),
        l = n("489863"),
        u = n("689938"),
        d = n("872272");

    function _(e) {
        var t;
        let {
            selectedGuildId: n,
            selectedChannelId: _,
            onChannelChange: c,
            error: E
        } = e, [I, T] = r.useState(null), f = r.useRef(!1);
        if (r.useEffect(() => {
                async function e(e) {
                    let t = await (0, l.fetchChannels)(e);
                    n === e && (t.sort((e, t) => e.name.localeCompare(t.name)), T({
                        guildId: e,
                        channels: t
                    }), f.current = !0)
                }
                T(null), null == n ? c(null) : e(n)
            }, [c, n]), r.useEffect(() => {
                if (!!f.current) null == I ? null != _ && c(null) : !I.channels.some(e => e.id === _) && c(null)
            }, [I, c, _, n]), null == n) return null;
        let S = null == I || I.guildId !== n ? [] : (null !== (t = null == I ? void 0 : I.channels) && void 0 !== t ? t : []).map(e => ({
            value: e.id,
            label: e.name
        }));
        return (0, i.jsxs)("div", {
            className: d.selectorGroup,
            children: [(0, i.jsx)(s.Heading, {
                variant: "heading-deprecated-12/semibold",
                className: d.sectionLabel,
                children: u.default.Messages.OAUTH2_ADD_WEBHOOK_INCOMING
            }), null != E && "" !== E ? (0, i.jsx)(a.Text, {
                variant: "text-xs/normal",
                color: "text-danger",
                children: E
            }) : null, (0, i.jsx)(o.Select, {
                className: d.select,
                maxVisibleItems: 5,
                select: c,
                placeholder: u.default.Messages.SCOPE_WEBHOOK_INCOMING_CHANNEL_PLACEHOLDER,
                options: S,
                isSelected: e => e === _,
                serialize: e => e,
                renderOptionLabel: e => (0, i.jsx)(a.Text, {
                    variant: "text-md/normal",
                    children: e.label
                }),
                renderOptionValue: e => (0, i.jsx)(a.Text, {
                    variant: "text-md/normal",
                    children: e[0].label
                })
            }), (0, i.jsx)(a.Text, {
                variant: "text-xs/normal",
                color: "header-secondary",
                className: d.label,
                children: u.default.Messages.SCOPE_WEBHOOK_INCOMING_DESCRIPTION
            })]
        })
    }
}