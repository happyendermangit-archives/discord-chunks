function(e, t, r) {
    "use strict";
    r("781738"), r("222007"), Object.defineProperty(t, "__esModule", {
        value: !0
    });
    for (var n = "undefined" != typeof window && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), u = {
            alt: "altKey",
            control: "ctrlKey",
            meta: "metaKey",
            shift: "shiftKey"
        }, a = {
            add: "+",
            break: "pause",
            cmd: "meta",
            command: "meta",
            ctl: "control",
            ctrl: "control",
            del: "delete",
            down: "arrowdown",
            esc: "escape",
            ins: "insert",
            left: "arrowleft",
            mod: n ? "meta" : "control",
            opt: "alt",
            option: "alt",
            return: "enter",
            right: "arrowright",
            space: " ",
            spacebar: " ",
            up: "arrowup",
            win: "meta",
            windows: "meta"
        }, o = {
            backspace: 8,
            tab: 9,
            enter: 13,
            shift: 16,
            control: 17,
            alt: 18,
            pause: 19,
            capslock: 20,
            escape: 27,
            " ": 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36,
            arrowleft: 37,
            arrowup: 38,
            arrowright: 39,
            arrowdown: 40,
            insert: 45,
            delete: 46,
            meta: 91,
            numlock: 144,
            scrolllock: 145,
            ";": 186,
            "=": 187,
            ",": 188,
            "-": 189,
            ".": 190,
            "/": 191,
            "`": 192,
            "[": 219,
            "\\": 220,
            "]": 221,
            "'": 222
        }, i = 1; i < 20; i++) o["f" + i] = 111 + i;

    function s(e, t, r) {
        t && !("byKey" in t) && (r = t, t = null), !Array.isArray(e) && (e = [e]);
        var n = e.map(function(e) {
                return l(e, t)
            }),
            u = function(e) {
                return n.some(function(t) {
                    return c(t, e)
                })
            };
        return null == r ? u : u(r)
    }

    function l(e, t) {
        var r = t && t.byKey,
            n = {},
            a = (e = e.replace("++", "+add")).split("+"),
            o = a.length;
        for (var i in u) n[u[i]] = !1;
        var s = !0,
            l = !1,
            c = void 0;
        try {
            for (var D, h = a[Symbol.iterator](); !(s = (D = h.next()).done); s = !0) {
                var v = D.value,
                    p = v.endsWith("?") && v.length > 1;
                p && (v = v.slice(0, -1));
                var C = d(v),
                    g = u[C];
                (1 === o || !g) && (r ? n.key = C : n.which = f(v)), g && (n[g] = !p || null)
            }
        } catch (e) {
            l = !0, c = e
        } finally {
            try {
                !s && h.return && h.return()
            } finally {
                if (l) throw c
            }
        }
        return n
    }

    function c(e, t) {
        for (var r in e) {
            var n = e[r],
                u = void 0;
            if (null != n) {
                if ((null != (u = "key" === r && null != t.key ? t.key.toLowerCase() : "which" === r ? 91 === n && 93 === t.which ? 91 : t.which : t[r]) || !1 !== n) && u !== n) return !1
            }
        }
        return !0
    }

    function f(e) {
        return o[e = d(e)] || e.toUpperCase().charCodeAt(0)
    }

    function d(e) {
        return e = a[e = e.toLowerCase()] || e
    }
    t.default = s, t.isHotkey = s, t.isCodeHotkey = function(e, t) {
        return s(e, t)
    }, t.isKeyHotkey = function(e, t) {
        return s(e, {
            byKey: !0
        }, t)
    }, t.parseHotkey = l, t.compareHotkey = c, t.toKeyCode = f, t.toKeyName = d
}