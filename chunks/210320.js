function(e, t, n) {
    "use strict";
    n.r(t);
    var r = /^([\w-+]+(?:\.[\w-+]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i,
        o = /^((https:\/\/)?(discord\.gg\/)|(discord\.com\/)(invite\/)?)?[A-Za-z0-9]{8,8}$/,
        i = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
        a = /^(.*)#[0-9]{1,5}$/,
        u = ["@", "#", ":", "```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage"],
        s = ["discordtag", "everyone", "here", "discord nitro", "discord"];
    t.default = {
        isEmail: function(e) {
            return r.test(e)
        },
        isInvite: function(e) {
            return o.test(e)
        },
        isPhoneNumber: function(e) {
            return i.test(e)
        },
        isUserTagLike: function(e) {
            var t = a.exec(e);
            if (null != t && t.length > 1) {
                var n = t[1],
                    r = u.some(function(e) {
                        return n.includes(e)
                    }),
                    o = s.includes(n);
                return !r && !o
            }
            return !1
        }
    }
}