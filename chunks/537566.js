function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    }), n("424973");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        o = n("383018"),
        u = n("228226"),
        d = n("829290"),
        c = n("503063"),
        f = n("350583"),
        m = i.memo(e => {
            let {
                channel: t,
                type: n,
                activeCommand: i,
                pendingReply: a
            } = e, {
                activeCommandOption: m,
                activeCommandOptionStates: p
            } = (0, r.useStateFromStoresObject)([o.default], () => ({
                activeCommandOption: o.default.getActiveOption(t.id),
                activeCommandOptionStates: o.default.getOptionStates(t.id)
            })), h = (0, d.useShouldShowPTONotice)(t), E = [];
            return (null != i && E.push((0, l.jsx)(u.default, {
                activeCommand: i,
                activeOption: null != m ? m : null,
                optionStates: p
            })), null != a && E.push((0, l.jsx)(c.default, {
                reply: a,
                chatInputType: n
            })), h && E.push((0, l.jsx)(d.StaffPTOBar, {})), 0 === (E = E.map((e, t) => {
                let n = t === E.length - 1;
                return (0, l.jsx)("div", {
                    className: s({
                        [f.stackedAttachedBar]: !n
                    }),
                    children: e
                }, t)
            })).length) ? null : (0, l.jsx)("div", {
                className: f.attachedBars,
                children: E
            })
        })
}