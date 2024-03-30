function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("512722"),
        o = n.n(r),
        i = n("261535"),
        a = n("794820"),
        u = n("29884"),
        s = n("281767");

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var c = new RegExp(/@(:?everyone|here)/);

    function f(e, t) {
        var n, r = 0;
        return t.isThread() ? null !== (n = t.memberCount) && void 0 !== n ? n : 0 : (a.default.getProps(t.getGuildId(), t.id).groups.forEach(function(t) {
            ("@everyone" === e || t.id !== s.StatusTypes.OFFLINE) && (r += t.count)
        }), r)
    }
    t.default = {
        shouldShowEveryoneGuard: function(e, t) {
            var n = t.getGuildId();
            return o()(n, "isGuildChannel with null guildId"), f(e, t) > 30 && u.default.can(s.Permissions.MENTION_EVERYONE, t)
        },
        everyoneMemberCount: f,
        extractEveryoneRole: function(e, t) {
            var n = i.default.parsePreprocessor(t, e),
                r = !0,
                o = !1,
                a = void 0;
            try {
                for (var u, s = n[Symbol.iterator](); !(r = (u = s.next()).done); r = !0) {
                    var f = u.value,
                        d = function e(t) {
                            if ("string" == typeof t.content) {
                                if ("inlineCode" === t.type || "codeBlock" === t.type) return null;
                                var n, r, o, i = null === (o = t.content) || void 0 === o ? void 0 : o.match(c);
                                if (null != i) {
                                    ;
                                    return (r = 1, function(e) {
                                        if (Array.isArray(e)) return e
                                    }(n = i) || function(e, t) {
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
                                    }(n, r) || function(e, t) {
                                        if (e) {
                                            if ("string" == typeof e) return l(e, t);
                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                                        }
                                    }(n, r) || function() {
                                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }())[0]
                                }
                            } else if (Array.isArray(t.content)) {
                                var a = !0,
                                    u = !1,
                                    s = void 0;
                                try {
                                    for (var f, d = t.content[Symbol.iterator](); !(a = (f = d.next()).done); a = !0) {
                                        var _ = f.value,
                                            E = e(_);
                                        if (null != E) return E
                                    }
                                } catch (e) {
                                    u = !0, s = e
                                } finally {
                                    try {
                                        !a && null != d.return && d.return()
                                    } finally {
                                        if (u) throw s
                                    }
                                }
                            }
                            return null
                        }(f);
                    if (null != d) return d
                }
            } catch (e) {
                o = !0, a = e
            } finally {
                try {
                    !r && null != s.return && s.return()
                } finally {
                    if (o) throw a
                }
            }
            return null
        }
    }
}