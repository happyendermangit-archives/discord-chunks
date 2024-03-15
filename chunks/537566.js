function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    }), n("424973");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        o = n("383018"),
        u = n("656015"),
        d = n("228226"),
        c = n("568658"),
        f = n("829290"),
        p = n("503063"),
        m = n("350583"),
        h = l.memo(e => {
            let {
                channel: t,
                type: n,
                activeCommand: l,
                pendingReply: a
            } = e, {
                activeCommandOption: h,
                activeCommandOptionStates: x
            } = (0, r.useStateFromStoresObject)([o.default], () => ({
                activeCommandOption: o.default.getActiveOption(t.id),
                activeCommandOptionStates: o.default.getOptionStates(t.id)
            })), E = (0, f.useShouldShowPTONotice)(t), y = (0, u.useShouldShowUserAppBetaBar)(l, t, {
                location: "ChannelTextAreaBars"
            }), g = [];
            return (null != l && (y && g.push((0, i.jsx)(c.default, {
                activeCommand: l
            })), g.push((0, i.jsx)(d.default, {
                activeCommand: l,
                activeOption: null != h ? h : null,
                optionStates: x
            }))), null != a && g.push((0, i.jsx)(p.default, {
                reply: a,
                chatInputType: n
            })), E && g.push((0, i.jsx)(f.StaffPTOBar, {})), 0 === (g = g.map((e, t) => {
                let n = t === g.length - 1;
                return (0, i.jsx)("div", {
                    className: s({
                        [m.stackedAttachedBar]: !n
                    }),
                    children: e
                }, t)
            })).length) ? null : (0, i.jsx)("div", {
                className: m.attachedBars,
                children: g
            })
        })
}