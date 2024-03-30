function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        filterOutMessageRequestsAndSpam: function() {
            return s
        },
        filterOutMessageRequestsAndSpamById: function() {
            return l
        },
        isMessageRequestOrSpamRequest: function() {
            return c
        },
        shouldShowMessageRequests: function() {
            return f
        }
    });
    var r = n("523018"),
        o = n("334025"),
        i = n("386044");

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function u(e, t) {
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
                if ("string" == typeof e) return a(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function s(e) {
        var t = u(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.default, i.default], 2),
            n = t[0],
            a = t[1];
        return function(e) {
            return Array.from(e).reduce(function(e, t) {
                var n, r, o, i = u(t, 2),
                    a = i[0],
                    s = i[1];
                return Object.assign(e, (n = {}, r = a, o = s, r in n ? Object.defineProperty(n, r, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[r] = o, n))
            }, {})
        }((function(e) {
            return r.default.keys(e).map(function(t) {
                return [t, e[t]]
            })
        })(e).filter(function(e) {
            var t = u(e, 2)[1];
            return !n.isMessageRequest(t.id) && !a.isSpam(t.id)
        }))
    }

    function l(e) {
        var t = u(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.default, i.default], 2),
            n = t[0],
            r = t[1];
        return e.filter(function(e) {
            return !n.isMessageRequest(e) && !r.isSpam(e)
        })
    }

    function c(e) {
        var t = u(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.default, i.default], 2),
            n = t[0],
            r = t[1];
        return n.isMessageRequest(e) || r.isSpam(e)
    }

    function f() {
        var e = u(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [o.default, i.default], 2),
            t = e[0],
            n = e[1].getSpamChannelsCount(),
            r = t.getMessageRequestsCount();
        return r > 0 || n > 0
    }
}