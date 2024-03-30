function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        KvMessage: function() {
            return l
        }
    });
    var r = n("957808"),
        o = n("208454"),
        i = n("281767");

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t) {
        if (e) {
            if ("string" == typeof e) return a(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
        }
    }
    var l = function() {
        var e, t, n;

        function l() {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, l)
        }
        return e = l, t = null, n = [{
            key: "fromMessage",
            value: function(e, t, n, r) {
                var o, i, a = (o = l.deriveMemberUsers(e, n), i = 2, function(e) {
                        if (Array.isArray(e)) return e
                    }(o) || function(e, t) {
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
                    }(o, i) || s(o, i) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    u = a[0],
                    c = a[1];
                return {
                    id: n.id,
                    channelId: t,
                    message: n,
                    members: u,
                    users: c,
                    connectionId: r
                }
            }
        }, {
            key: "deriveMemberUsers",
            value: function(e, t) {
                var n = new Set([null === (E = t.author) || void 0 === E ? void 0 : E.id, null === (p = t.interaction) || void 0 === p ? void 0 : p.user.id].concat(function(e) {
                        if (Array.isArray(e)) return a(e)
                    }(_ = null !== (y = null === (m = t.mentions) || void 0 === m ? void 0 : m.map(function(e) {
                        return e.id
                    })) && void 0 !== y ? y : []) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(_) || s(_) || function() {
                        throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }())),
                    u = [],
                    l = [],
                    c = !0,
                    f = !1,
                    d = void 0;
                try {
                    for (var _, E, p, m, y, I, h = n[Symbol.iterator](); !(c = (I = h.next()).done); c = !0) {
                        var O = I.value;
                        if (null != O) {
                            var T = o.default.getUser(O),
                                S = r.default.getTrueMember(null != e ? e : i.EMPTY_STRING_SNOWFLAKE_ID, O);
                            null != T && l.push(T), null != S && u.push(S)
                        }
                    }
                } catch (e) {
                    f = !0, d = e
                } finally {
                    try {
                        !c && null != h.return && h.return()
                    } finally {
                        if (f) throw d
                    }
                }
                return [u, l]
            }
        }], t && u(e.prototype, t), n && u(e, n), l
    }()
}