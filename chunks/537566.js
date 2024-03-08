function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    }), n("424973");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        o = n("383018"),
        u = n("228226"),
        d = n("829290"),
        c = n("503063"),
        f = n("350583"),
        p = l.memo(e => {
            let {
                channel: t,
                type: n,
                activeCommand: l,
                pendingReply: a
            } = e, {
                activeCommandOption: p,
                activeCommandOptionStates: m
            } = (0, r.useStateFromStoresObject)([o.default], () => ({
                activeCommandOption: o.default.getActiveOption(t.id),
                activeCommandOptionStates: o.default.getOptionStates(t.id)
            })), h = (0, d.useShouldShowPTONotice)(t), x = [];
            return (null != l && x.push((0, i.jsx)(u.default, {
                activeCommand: l,
                activeOption: null != p ? p : null,
                optionStates: m
            })), null != a && x.push((0, i.jsx)(c.default, {
                reply: a,
                chatInputType: n
            })), h && x.push((0, i.jsx)(d.StaffPTOBar, {})), 0 === (x = x.map((e, t) => {
                let n = t === x.length - 1;
                return (0, i.jsx)("div", {
                    className: s({
                        [f.stackedAttachedBar]: !n
                    }),
                    children: e
                }, t)
            })).length) ? null : (0, i.jsx)("div", {
                className: f.attachedBars,
                children: x
            })
        })
}