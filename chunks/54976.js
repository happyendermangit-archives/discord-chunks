function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        generateInviteKeyFromExtraData: function() {
            return l
        },
        generateInviteKeyFromUrlParams: function() {
            return s
        },
        parseExtraDataFromInviteKey: function() {
            return c
        },
        parseInviteCodeFromInviteKey: function() {
            return f
        }
    });
    var r = n("664751"),
        o = n("63240");

    function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function a(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return i(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var u = "event";

    function s(e, t) {
        return null == t ? e : l({
            baseCode: e,
            guildScheduledEventId: function(e) {
                var t = "?" === e.charAt(0) ? e.substring(1) : e;
                try {
                    var n = r.parse(t);
                    return (0, o.getFirstQueryStringValue)(n[u])
                } catch (e) {
                    return
                }
            }(t)
        })
    }

    function l(e) {
        var t = e.baseCode,
            n = e.guildScheduledEventId;
        return null == n ? t : "".concat(t, "?").concat(u, "=").concat(n)
    }

    function c(e) {
        var t = a(e.split("?"), 2),
            n = t[0],
            i = t[1];
        if (null == i) return {
            baseCode: n
        };
        var s = r.parse(i);
        return {
            baseCode: n,
            guildScheduledEventId: (0, o.getFirstQueryStringValue)(s[u])
        }
    }

    function f(e) {
        return a(e.split("?"), 1)[0]
    }
}