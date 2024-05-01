function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        generateInviteKeyFromExtraData: function() {
            return o
        },
        generateInviteKeyFromUrlParams: function() {
            return s
        },
        parseExtraDataFromInviteKey: function() {
            return l
        },
        parseInviteCodeFromInviteKey: function() {
            return u
        }
    }), n("47120");
    var i = n("664751"),
        r = n("898450");
    let a = "event";

    function s(e, t) {
        return null == t ? e : o({
            baseCode: e,
            guildScheduledEventId: function(e) {
                let t = "?" === e.charAt(0) ? e.substring(1) : e;
                try {
                    let e = i.parse(t);
                    return (0, r.getFirstQueryStringValue)(e[a])
                } catch (e) {
                    return
                }
            }(t)
        })
    }

    function o(e) {
        let {
            baseCode: t,
            guildScheduledEventId: n
        } = e;
        return null == n ? t : "".concat(t, "?").concat(a, "=").concat(n)
    }

    function l(e) {
        let [t, n] = e.split("?");
        if (null == n) return {
            baseCode: t
        };
        let s = i.parse(n);
        return {
            baseCode: t,
            guildScheduledEventId: (0, r.getFirstQueryStringValue)(s[a])
        }
    }

    function u(e) {
        let [t] = e.split("?");
        return t
    }
}