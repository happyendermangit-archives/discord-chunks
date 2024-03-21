function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("222007");
    var i = n("37983"),
        s = n("884691"),
        r = n("605451"),
        a = n("577776"),
        o = n("77078"),
        l = n("8222"),
        u = n("782340"),
        d = n("590732");

    function c(e) {
        var t;
        let {
            selectedGuildId: n,
            selectedChannelId: c,
            onChannelChange: _,
            error: f
        } = e, [E, h] = s.useState(null), g = s.useRef(!1);
        if (s.useEffect(() => {
                async function e(e) {
                    let t = await (0, l.fetchChannels)(e);
                    n === e && (t.sort((e, t) => e.name.localeCompare(t.name)), h({
                        guildId: e,
                        channels: t
                    }), g.current = !0)
                }
                h(null), null == n ? _(null) : e(n)
            }, [_, n]), s.useEffect(() => {
                if (!!g.current) null == E ? null != c && _(null) : !E.channels.some(e => e.id === c) && _(null)
            }, [E, _, c, n]), null == n) return null;
        let m = null == E || E.guildId !== n,
            p = m ? [] : (null !== (t = null == E ? void 0 : E.channels) && void 0 !== t ? t : []).map(e => ({
                value: e.id,
                label: e.name
            }));
        return (0, i.jsxs)("div", {
            className: d.selectorGroup,
            children: [(0, i.jsx)(r.Heading, {
                variant: "heading-deprecated-12/semibold",
                className: d.sectionLabel,
                children: u.default.Messages.OAUTH2_ADD_WEBHOOK_INCOMING
            }), null != f && "" !== f ? (0, i.jsx)(a.Text, {
                variant: "text-xs/normal",
                color: "text-danger",
                children: f
            }) : null, (0, i.jsx)(o.Select, {
                className: d.select,
                maxVisibleItems: 5,
                select: _,
                placeholder: u.default.Messages.SCOPE_WEBHOOK_INCOMING_CHANNEL_PLACEHOLDER,
                options: p,
                isSelected: e => e === c,
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