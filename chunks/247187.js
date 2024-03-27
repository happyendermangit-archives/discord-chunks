function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    for (var n = "undefined" != typeof window && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), r = {
            alt: "altKey",
            control: "ctrlKey",
            meta: "metaKey",
            shift: "shiftKey"
        }, i = {
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
        }, a = {
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
        }, o = 1; o < 20; o++) a["f" + o] = 111 + o;

    function s(e, t, n) {
        t && !("byKey" in t) && (n = t, t = null), !Array.isArray(e) && (e = [e]);
        var r = e.map(function(e) {
                return u(e, t)
            }),
            i = function(e) {
                return r.some(function(t) {
                    return c(t, e)
                })
            };
        return null == n ? i : i(n)
    }

    function u(e, t) {
        var n = t && t.byKey,
            i = {},
            a = (e = e.replace("++", "+add")).split("+"),
            o = a.length;
        for (var s in r) i[r[s]] = !1;
        var u = !0,
            c = !1,
            f = void 0;
        try {
            for (var p, h = a[Symbol.iterator](); !(u = (p = h.next()).done); u = !0) {
                var m = p.value,
                    g = m.endsWith("?") && m.length > 1;
                g && (m = m.slice(0, -1));
                var _ = d(m),
                    b = r[_];
                (1 === o || !b) && (n ? i.key = _ : i.which = l(m)), b && (i[b] = !g || null)
            }
        } catch (e) {
            c = !0, f = e
        } finally {
            try {
                !u && h.return && h.return()
            } finally {
                if (c) throw f
            }
        }
        return i
    }

    function c(e, t) {
        for (var n in e) {
            var r = e[n],
                i = void 0;
            if (null != r) {
                if ((null != (i = "key" === n && null != t.key ? t.key.toLowerCase() : "which" === n ? 91 === r && 93 === t.which ? 91 : t.which : t[n]) || !1 !== r) && i !== r) return !1
            }
        }
        return !0
    }

    function l(e) {
        return a[e = d(e)] || e.toUpperCase().charCodeAt(0)
    }

    function d(e) {
        return e = i[e = e.toLowerCase()] || e
    }
    t.default = s, t.isHotkey = s, t.isCodeHotkey = function(e, t) {
        return s(e, t)
    }, t.isKeyHotkey = function(e, t) {
        return s(e, {
            byKey: !0
        }, t)
    }, t.parseHotkey = u, t.compareHotkey = c, t.toKeyCode = l, t.toKeyName = d
}