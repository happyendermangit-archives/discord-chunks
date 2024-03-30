function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("879443"),
        o = n.n(r),
        i = n("414861"),
        a = n.n(i),
        u = n("536560"),
        s = n("35523"),
        l = n("870331"),
        c = n("374550"),
        f = n("281767");

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function _(e) {
        return function(e) {
            if (Array.isArray(e)) return d(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || E(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function E(e, t) {
        if (e) {
            if ("string" == typeof e) return d(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
        }
    }
    var p = {},
        m = [],
        y = !1,
        I = a()(new(o())(window)),
        h = (0, c.isMac)() ? "cmd" : "ctrl",
        O = (0, c.isMac)() ? "opt" : "alt",
        T = (0, c.isMac)() ? "return" : "enter",
        S = _(u.JUMP_TO_GUILD.binds).concat(["mod+shift+[", "mod+shift+]", "mod+[", "mod+]", "alt+[", "alt+]", "ctrl+shift+tab", "ctrl+tab", "mod+n", "mod+t", "mod+shift+t", "mod+plus", "mod+minus", "mod+0"]).map(function(e) {
            return e.replace("mod", h)
        }),
        v = function() {
            return []
        },
        g = [];

    function A(e) {
        var t = [],
            n = !0,
            r = !1,
            o = void 0;
        try {
            for (var i, a = Object.values(e)[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                var u = i.value;
                null != u && t.push.apply(t, _(u.binds))
            }
        } catch (e) {
            r = !0, o = e
        } finally {
            try {
                !n && null != a.return && a.return()
            } finally {
                if (r) throw o
            }
        }
        return t.map(function(e) {
            return e.replace("mod", h)
        })
    }

    function b(e, t) {
        return function(n, r) {
            return l.default.track(f.AnalyticEvents.KEYBOARD_SHORTCUT_USED, {
                shortcut_name: e
            }), t(n, r)
        }
    }

    function N(e) {
        var t = !0,
            n = !1,
            r = void 0;
        try {
            for (var o, i = Object.entries(e)[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) ! function() {
                var e = (u = o.value, s = 2, function(e) {
                        if (Array.isArray(e)) return e
                    }(u) || function(e, t) {
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
                    }(u, s) || E(u, s) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    t = e[0],
                    n = e[1];
                if (null == n) return;
                var r = v();
                !c.isPlatformEmbedded && (r = r.concat(S));
                var i = n.binds.filter(function(e) {
                    return e = e.replace("mod", h), 0 > r.indexOf(e)
                });
                if (0 === i.length) return;
                var a = n.comboKeysBindGlobal ? I.bindGlobal : I.bind;
                if (null != n.action && a.call(I, i, b(t, n.action)), null != n.keyup && a.call(I, i, b(t, n.keyup), "keyup"), null != n.keydown) {
                    var u, s, l, f, d, _ = i.indexOf("any-character");
                    if (-1 !== _) {
                        ;
                        l = "keydown", f = n.keydown, d = function(e) {
                            return f(e, e.key)
                        }, document.addEventListener(l, d), g.push(function() {
                            return document.removeEventListener(l, d)
                        }), i.splice(_, 1)
                    }
                    i.length > 0 && a.call(I, i, b(t, n.keydown), "keydown")
                }
                null != n.keypress && a.call(I, i, b(t, n.keypress), "keypress")
            }()
        } catch (e) {
            n = !0, r = e
        } finally {
            try {
                !t && null != i.return && i.return()
            } finally {
                if (n) throw r
            }
        }
    }(0, c.isDesktop)() && new(o())(document.documentElement).bind("backspace", function(e) {
        return e.preventDefault()
    }), t.default = {
        combokeys: I,
        modKey: h,
        altKey: O,
        returnKey: T,
        setGetKeybindList: function(e) {
            v = e
        },
        checkDupes: function(e) {
            var t = new Set,
                n = [],
                r = A(e),
                o = !0,
                i = !1,
                a = void 0;
            try {
                for (var u, l = r[Symbol.iterator](); !(o = (u = l.next()).done); o = !0) {
                    var c = u.value;
                    t.has(c) && n.push(c), t.add(c)
                }
            } catch (e) {
                i = !0, a = e
            } finally {
                try {
                    !o && null != l.return && l.return()
                } finally {
                    if (i) throw a
                }
            }
            n.length > 0 && new s.default("Keybinds").warn("Duplicate keyboard shortcuts defined:", n)
        },
        setLayout: function(e) {
            p = e
        },
        enable: function() {
            !y && (y = !0, this.checkDupes(p), N(p))
        },
        enableTemp: function(e) {
            m.push(p), p = e, N(e), y = !0
        },
        disableTemp: function() {
            var e = m.pop();
            null != e && (p = e), this.disable(), this.enable()
        },
        disable: function() {
            y && (y = !1, g.forEach(function(e) {
                return e()
            }), g = [], I.reset())
        },
        validateKeybind: function(e) {
            y && this.hasBind(e) && I.unbind(e)
        },
        hasBind: function(e) {
            var t = A(p);
            return e = (e = e.replace("meta", "cmd")).replace(/right |left /i, "").trim(), t.includes(e)
        }
    }
}