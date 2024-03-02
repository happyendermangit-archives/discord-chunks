function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    }), n("222007");
    var s = n("37983"),
        i = n("884691"),
        r = n("605451"),
        a = n("577776"),
        o = n("77078"),
        d = n("8222"),
        u = n("782340"),
        l = n("590732");

    function f(e) {
        var t;
        let {
            selectedGuildId: n,
            selectedChannelId: f,
            onChannelChange: _,
            error: c
        } = e, [g, m] = i.useState(null), h = i.useRef(!1);
        if (i.useEffect(() => {
                async function e(e) {
                    let t = await (0, d.fetchChannels)(e);
                    n === e && (t.sort((e, t) => e.name.localeCompare(t.name)), m({
                        guildId: e,
                        channels: t
                    }), h.current = !0)
                }
                m(null), null == n ? _(null) : e(n)
            }, [_, n]), i.useEffect(() => {
                if (!!h.current) null == g ? null != f && _(null) : !g.channels.some(e => e.id === f) && _(null)
            }, [g, _, f, n]), null == n) return null;
        let v = null == g || g.guildId !== n,
            E = v ? [] : (null !== (t = null == g ? void 0 : g.channels) && void 0 !== t ? t : []).map(e => ({
                value: e.id,
                label: e.name
            }));
        return (0, s.jsxs)("div", {
            className: l.selectorGroup,
            children: [(0, s.jsx)(r.Heading, {
                variant: "heading-deprecated-12/semibold",
                className: l.sectionLabel,
                children: u.default.Messages.OAUTH2_ADD_WEBHOOK_INCOMING
            }), null != c && "" !== c ? (0, s.jsx)(a.Text, {
                variant: "text-xs/normal",
                color: "text-danger",
                children: c
            }) : null, (0, s.jsx)(o.Select, {
                className: l.select,
                maxVisibleItems: 5,
                select: _,
                placeholder: u.default.Messages.SCOPE_WEBHOOK_INCOMING_CHANNEL_PLACEHOLDER,
                options: E,
                isSelected: e => e === f,
                serialize: e => e,
                renderOptionLabel: e => (0, s.jsx)(a.Text, {
                    variant: "text-md/normal",
                    children: e.label
                }),
                renderOptionValue: e => (0, s.jsx)(a.Text, {
                    variant: "text-md/normal",
                    children: e[0].label
                })
            }), (0, s.jsx)(a.Text, {
                variant: "text-xs/normal",
                color: "header-secondary",
                className: l.label,
                children: u.default.Messages.SCOPE_WEBHOOK_INCOMING_DESCRIPTION
            })]
        })
    }
}