function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        codeToKey: function() {
            return O
        },
        getEnv: function() {
            return h
        },
        keyToCode: function() {
            return T
        },
        toBrowserEvents: function() {
            return b
        },
        toCombo: function() {
            return N
        },
        toString: function() {
            return R
        }
    });
    var r = n("921738"),
        o = n.n(r),
        i = n("392711"),
        a = n.n(i),
        u = n("423466"),
        s = n("162677"),
        l = n("374550"),
        c = n("281767");

    function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function d(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function _(e, t) {
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
                if ("string" == typeof e) return f(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var E = (0, l.isLinux)() ? c.LinuxKeyToCode : (0, l.isMac)() ? c.MacosKeyToCode : (0, l.isWindows)() ? c.WindowsKeyToCode : void 0,
        p = a().invert(c.LinuxKeyToCode);
    p["223"] = "`", Object.freeze(p);
    var m = Object.freeze(a().invert(c.MacosKeyToCode)),
        y = a().invert(c.WindowsKeyToCode);
    y["223"] = "`", Object.freeze(y);
    var I = a().invert(null != E ? E : {});

    function h() {
        if ((0, l.isLinux)()) return c.KeyboardEnvs.LINUX;
        if ((0, l.isMac)()) return c.KeyboardEnvs.MACOS;
        if ((0, l.isWindows)()) return c.KeyboardEnvs.WINDOWS;
        else return c.KeyboardEnvs.BROWSER
    }

    function O(e) {
        var t = _(e, 3),
            n = t[1];
        switch (t[2]) {
            case c.KeyboardEnvs.LINUX:
                return p["" + n];
            case c.KeyboardEnvs.MACOS:
                return m["" + n];
            case c.KeyboardEnvs.WINDOWS:
                return y["" + n];
            case c.KeyboardEnvs.BROWSER:
                return o()(n);
            default:
                return I["" + n]
        }
    }

    function T(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h(),
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.KeyboardDeviceTypes.KEYBOARD_KEY;
        switch (n) {
            case c.KeyboardDeviceTypes.KEYBOARD_KEY:
            case c.KeyboardDeviceTypes.KEYBOARD_MODIFIER_KEY:
                switch (t) {
                    case c.KeyboardEnvs.LINUX:
                        return c.LinuxKeyToCode[e];
                    case c.KeyboardEnvs.MACOS:
                        return c.MacosKeyToCode[e];
                    case c.KeyboardEnvs.WINDOWS:
                        return c.WindowsKeyToCode[e];
                    case c.KeyboardEnvs.BROWSER:
                        return o()(e.replace(/^(right|left) (shift|meta|ctrl|alt)$/, "$2").replace("meta", "command"));
                    default:
                        return E[e]
                }
            case c.KeyboardDeviceTypes.MOUSE_BUTTON:
                return parseInt(e.replace("MOUSE", ""), 10);
            case c.KeyboardDeviceTypes.GAMEPAD_BUTTON:
                return parseInt(e.replace("GAMEPAD", ""), 10);
            default:
                throw Error("Unrecognized DeviceType ".concat(n, "."))
        }
    }!(0, l.isMac)() && (I["223"] = "`"), Object.freeze(I);
    var S = [
            ["META", "⌘"],
            ["RIGHT META", "RIGHT ⌘"],
            ["SHIFT", "⇧"],
            ["RIGHT SHIFT", "RIGHT ⇧"],
            ["ALT", "⌥"],
            ["RIGHT ALT", "RIGHT ⌥"],
            ["CTRL", "⌃"],
            ["RIGHT CTRL", "RIGHT ⌃"],
            ["ENTER", "↵"],
            ["BACKSPACE", "⌫"],
            ["DEL", "⌦"],
            ["ESC", "⎋"],
            ["PAGEUP", "⇞"],
            ["PAGEDOWN", "⇟"],
            ["UP", "↑"],
            ["DOWN", "↓"],
            ["LEFT", "←"],
            ["RIGHT", "→"],
            ["HOME", "↖"],
            ["END", "↘"],
            ["TAB", "⇥"],
            ["SPACE", "␣"]
        ],
        v = function(e) {
            var t = !0,
                n = !1,
                r = void 0;
            try {
                for (var o, i = S[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                    var a = _(o.value, 2),
                        u = a[0],
                        s = a[1];
                    if (u === e.toUpperCase()) return s
                }
            } catch (e) {
                n = !0, r = e
            } finally {
                try {
                    !t && null != i.return && i.return()
                } finally {
                    if (n) throw r
                }
            }
            return e
        },
        g = function(e) {
            var t = !0,
                n = !1,
                r = void 0;
            try {
                for (var o, i = S[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                    var a = _(o.value, 2),
                        u = a[0];
                    if (a[1] === e.toUpperCase()) return u.toLowerCase()
                }
            } catch (e) {
                n = !0, r = e
            } finally {
                try {
                    !t && null != i.return && i.return()
                } finally {
                    if (n) throw r
                }
            }
            return e
        },
        A = /shift|meta|ctrl|alt$/;

    function b(e) {
        var t = {
            keyCode: 0,
            metaKey: !1,
            shiftKey: !1,
            altKey: !1,
            ctrlKey: !1
        };
        return null == e ? [] : e.reduce(function(e, n) {
            var r, o, i = O(n),
                a = d({}, t);
            if (null == i) {
                ;
                return e.push((r = d({}, a), o = (o = {
                    combo: n
                }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(o)).forEach(function(e) {
                    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
                }), r)), e
            }
            if (A.test(i)) return t[i + "Key"] = !0, e.map(function(e) {
                return e[i + "Key"] = !0, e
            });
            var u = T(i, c.KeyboardEnvs.BROWSER);
            return null != u && (a.keyCode = u), e.push(a), e
        }, [])
    }

    function N(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h(),
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.KeyboardDeviceTypes.KEYBOARD_KEY;
        return e.replace(/numpad plus/i, "").replace(/NUMPAD \+/i, "numpad plus").replace(/mod/i, u.default.modKey).split("+").map(function(e) {
            return e.trim().replace("plus", "+")
        }).reduce(function(e, r) {
            var o = T(g(r), t, n);
            return null != o && e.push([n, o, t]), e
        }, [])
    }

    function R(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = e.map(function(e) {
                var t, n = _(e, 3),
                    r = n[0],
                    o = n[1],
                    i = n[2];
                if (r === c.KeyboardDeviceTypes.KEYBOARD_KEY || r === c.KeyboardDeviceTypes.KEYBOARD_MODIFIER_KEY) return null !== (t = O(null != i ? [r, o, i] : [r, o])) && void 0 !== t ? t : "UNK".concat(o);
                if (r === c.KeyboardDeviceTypes.MOUSE_BUTTON) return "mouse".concat(o);
                if (r === c.KeyboardDeviceTypes.GAMEPAD_BUTTON) return "gamepad".concat(o);
                else return "dev".concat(r, ",").concat(o)
            }).filter(s.isNotNullish);
        return t ? (-1 !== n.g.navigator.appVersion.indexOf("Mac OS X") ? r.map(v) : r).join(" + ").toUpperCase() : r.join("+")
    }
}