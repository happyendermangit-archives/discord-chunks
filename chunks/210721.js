function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AnimationState: function() {
            return i
        },
        sendGiftMessage: function() {
            return f
        }
    }), n("70102");
    var i, a, s = n("627445"),
        r = n.n(s),
        l = n("450911"),
        o = n("819689"),
        u = n("884351"),
        c = n("42203"),
        d = n("659632");
    (a = i || (i = {})).ACTION = "action", a.LOOP = "loop", a.IDLE = "idle";
    let f = async (e, t) => {
        if (null == t) throw Error("giftCode must be defined");
        if (null == e) throw Error("Recipient must be defined");
        let n = await l.default.openPrivateChannel(e.id).then(e => {
                let t = c.default.getChannel(e);
                if (r(null != t, "PrivateChannel is null"), null == t) throw Error("Channel must be defined");
                return t
            }),
            i = (0, d.getGiftCodeURL)(t);
        return o.default.sendMessage(n.id, u.default.parse(n, i), void 0, {
            isGiftLinkSentOnBehalfOfUser: !0
        })
    }
}