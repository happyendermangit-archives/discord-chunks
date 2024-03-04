function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        generateInviteKeyFromUrlParams: function() {
            return a
        },
        generateInviteKeyFromExtraData: function() {
            return o
        },
        parseExtraDataFromInviteKey: function() {
            return l
        },
        parseInviteCodeFromInviteKey: function() {
            return u
        }
    }), n("222007");
    var i = n("522632"),
        s = n("833858");
    let r = "event";

    function a(e, t) {
        if (null == t) return e;
        let n = function(e) {
            let t = "?" === e.charAt(0) ? e.substring(1) : e;
            try {
                let e = i.parse(t);
                return (0, s.getFirstQueryStringValue)(e[r])
            } catch (e) {
                return
            }
        }(t);
        return o({
            baseCode: e,
            guildScheduledEventId: n
        })
    }

    function o(e) {
        let {
            baseCode: t,
            guildScheduledEventId: n
        } = e;
        return null == n ? t : "".concat(t, "?").concat(r, "=").concat(n)
    }

    function l(e) {
        let [t, n] = e.split("?");
        if (null == n) return {
            baseCode: t
        };
        let a = i.parse(n),
            o = (0, s.getFirstQueryStringValue)(a[r]);
        return {
            baseCode: t,
            guildScheduledEventId: o
        }
    }

    function u(e) {
        let [t] = e.split("?");
        return t
    }
}