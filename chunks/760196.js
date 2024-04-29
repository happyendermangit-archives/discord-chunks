function(e, t, n) {
    "use strict";
    n.r(t), n("653041");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("442837"),
        l = n("998698"),
        u = n("824203"),
        d = n("713583"),
        _ = n("920455"),
        c = n("931981"),
        E = n("407661"),
        I = n("414367");
    t.default = r.memo(e => {
        let {
            channel: t,
            type: n,
            activeCommand: r,
            pendingReply: s
        } = e, {
            activeCommandOption: T,
            activeCommandOptionStates: f
        } = (0, o.useStateFromStoresObject)([l.default], () => ({
            activeCommandOption: l.default.getActiveOption(t.id),
            activeCommandOptionStates: l.default.getOptionStates(t.id)
        })), S = (0, c.useShouldShowPTONotice)(t), h = (0, u.useShouldShowUserAppBetaBar)(r, t, {
            location: "ChannelTextAreaBars"
        }), A = [];
        return (null != r && (h && A.push((0, i.jsx)(_.default, {
            activeCommand: r
        })), A.push((0, i.jsx)(d.default, {
            activeCommand: r,
            activeOption: null != T ? T : null,
            optionStates: f
        }))), null != s && A.push((0, i.jsx)(E.default, {
            reply: s,
            chatInputType: n
        })), S && A.push((0, i.jsx)(c.StaffPTOBar, {})), 0 === (A = A.map((e, t) => {
            let n = t === A.length - 1;
            return (0, i.jsx)("div", {
                className: a()({
                    [I.stackedAttachedBar]: !n
                }),
                children: e
            }, t)
        })).length) ? null : (0, i.jsx)("div", {
            className: I.attachedBars,
            children: A
        })
    })
}