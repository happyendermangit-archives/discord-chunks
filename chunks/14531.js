function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BotTypes: function() {
            return u.BotTagTypes
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("303052"),
        u = n("292851"),
        s = n("513271");
    t.default = function(e) {
        var t = e.name,
            n = e.discriminator,
            o = e.invertBotTagColor,
            u = e.nameColor,
            l = e.className,
            c = e.botType,
            f = e.usernameClass,
            d = e.discriminatorClass,
            _ = e.botClass,
            E = e.botVerified,
            p = e.style,
            m = e.useRemSizes,
            y = e.usernameIcon;
        return r.createElement("div", {
            className: i()(l, s.nameTag),
            style: p
        }, r.createElement("span", {
            className: i()(s.username, f),
            style: null != u ? {
                color: u
            } : void 0
        }, y, t), null != n ? r.createElement("span", {
            className: null != d ? d : void 0
        }, "#", n) : null, null != c ? r.createElement(a.default, {
            type: c,
            invertColor: o,
            className: i()(_, s.bot),
            verified: void 0 !== E && E,
            useRemSizes: void 0 !== m && m
        }) : null)
    }
}