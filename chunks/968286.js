function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("471559"),
        s = n("222131"),
        l = n("636222"),
        c = n("836961"),
        f = n("276395"),
        d = n("604051"),
        _ = n("23383");
    t.default = r.memo(function(e) {
        var t = e.channel,
            n = e.type,
            o = e.activeCommand,
            E = e.pendingReply,
            p = (0, a.useStateFromStoresObject)([u.default], function() {
                return {
                    activeCommandOption: u.default.getActiveOption(t.id),
                    activeCommandOptionStates: u.default.getOptionStates(t.id)
                }
            }),
            m = p.activeCommandOption,
            y = p.activeCommandOptionStates,
            I = (0, f.useShouldShowPTONotice)(t),
            h = (0, s.useShouldShowUserAppBetaBar)(o, t, {
                location: "ChannelTextAreaBars"
            }),
            O = [];
        return (null != o && (h && O.push(r.createElement(c.default, {
            activeCommand: o
        })), O.push(r.createElement(l.default, {
            activeCommand: o,
            activeOption: null != m ? m : null,
            optionStates: y
        }))), null != E && O.push(r.createElement(d.default, {
            reply: E,
            chatInputType: n
        })), I && O.push(r.createElement(f.StaffPTOBar, null)), 0 === (O = O.map(function(e, t) {
            var n, o, a, u = t === O.length - 1;
            return r.createElement("div", {
                key: t,
                className: i()((n = {}, o = _.stackedAttachedBar, a = !u, o in n ? Object.defineProperty(n, o, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[o] = a, n))
            }, e)
        })).length) ? null : r.createElement("div", {
            className: _.attachedBars
        }, O)
    })
}