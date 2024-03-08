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
    var i, l, a = n("627445"),
        s = n.n(a),
        r = n("450911"),
        o = n("819689"),
        u = n("884351"),
        d = n("42203"),
        c = n("659632");
    (l = i || (i = {})).ACTION = "action", l.LOOP = "loop", l.IDLE = "idle";
    let f = async (e, t) => {
        if (null == t) throw Error("giftCode must be defined");
        if (null == e) throw Error("Recipient must be defined");
        let n = await r.default.openPrivateChannel(e.id).then(e => {
                let t = d.default.getChannel(e);
                if (s(null != t, "PrivateChannel is null"), null == t) throw Error("Channel must be defined");
                return t
            }),
            i = (0, c.getGiftCodeURL)(t);
        return o.default.sendMessage(n.id, u.default.parse(n, i), void 0, {
            isGiftLinkSentOnBehalfOfUser: !0
        })
    }
}