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
            onChannelChange: f,
            error: _
        } = e, [h, E] = s.useState(null), g = s.useRef(!1);
        if (s.useEffect(() => {
                async function e(e) {
                    let t = await (0, l.fetchChannels)(e);
                    n === e && (t.sort((e, t) => e.name.localeCompare(t.name)), E({
                        guildId: e,
                        channels: t
                    }), g.current = !0)
                }
                E(null), null == n ? f(null) : e(n)
            }, [f, n]), s.useEffect(() => {
                if (!!g.current) null == h ? null != c && f(null) : !h.channels.some(e => e.id === c) && f(null)
            }, [h, f, c, n]), null == n) return null;
        let m = null == h || h.guildId !== n,
            p = m ? [] : (null !== (t = null == h ? void 0 : h.channels) && void 0 !== t ? t : []).map(e => ({
                value: e.id,
                label: e.name
            }));
        return (0, i.jsxs)("div", {
            className: d.selectorGroup,
            children: [(0, i.jsx)(r.Heading, {
                variant: "heading-deprecated-12/semibold",
                className: d.sectionLabel,
                children: u.default.Messages.OAUTH2_ADD_WEBHOOK_INCOMING
            }), null != _ && "" !== _ ? (0, i.jsx)(a.Text, {
                variant: "text-xs/normal",
                color: "text-danger",
                children: _
            }) : null, (0, i.jsx)(o.Select, {
                className: d.select,
                maxVisibleItems: 5,
                select: f,
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