function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AnimationState: function() {
            return i
        },
        sendGiftMessage: function() {
            return c
        }
    }), n("411104");
    var i, r, s = n("512722"),
        a = n.n(s),
        o = n("493683"),
        l = n("904245"),
        u = n("957730"),
        d = n("592125"),
        _ = n("669079");
    (r = i || (i = {})).ACTION = "action", r.LOOP = "loop", r.IDLE = "idle";
    let c = async (e, t) => {
        if (null == t) throw Error("giftCode must be defined");
        if (null == e) throw Error("Recipient must be defined");
        let n = await o.default.openPrivateChannel(e.id).then(e => {
                let t = d.default.getChannel(e);
                if (a()(null != t, "PrivateChannel is null"), null == t) throw Error("Channel must be defined");
                return t
            }),
            i = (0, _.getGiftCodeURL)(t);
        return l.default.sendMessage(n.id, u.default.parse(n, i), void 0, {
            isGiftLinkSentOnBehalfOfUser: !0
        })
    }
}