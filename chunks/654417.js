function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        shouldShowMembershipVerificationGate: function() {
            return l
        },
        useShowMemberVerificationGate: function() {
            return c
        }
    });
    var r = n("898511"),
        o = n("957808"),
        i = n("306912"),
        a = n("267322"),
        u = n("208454");

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function l(e) {
        var t, n, r, l, c = (t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.default, a.default, u.default, o.default], n = 4, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
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
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return s(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            f = c[0],
            d = c[1],
            _ = c[2],
            E = c[3];
        if (null == e) return !1;
        var p = f.getGuild(e),
            m = d.getCheck(e).notClaimed,
            y = _.getCurrentUser(),
            I = !1;
        return null != y && (I = null !== (l = null === (r = E.getMember(e, y.id)) || void 0 === r ? void 0 : r.isPending) && void 0 !== l && l), (I || m) && !!(null == p ? void 0 : p.hasVerificationGate())
    }

    function c(e) {
        return (0, r.useStateFromStores)([i.default, a.default, u.default, o.default], function() {
            return null != e && l(e, [i.default, a.default, u.default, o.default])
        }, [e])
    }
}