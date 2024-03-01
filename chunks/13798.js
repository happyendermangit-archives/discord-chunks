function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getEnv: function() {
            return _
        },
        codeToKey: function() {
            return S
        },
        keyToCode: function() {
            return m
        },
        toBrowserEvents: function() {
            return v
        },
        toCombo: function() {
            return A
        },
        toString: function() {
            return R
        }
    }), n("222007"), n("781738"), n("70102"), n("808653"), n("424973");
    var i = n("499032"),
        r = n.n(i),
        s = n("917351"),
        a = n.n(s),
        o = n("485328"),
        l = n("449008"),
        u = n("773336"),
        c = n("49111");
    let d = (0, u.isLinux)() ? c.LinuxKeyToCode : (0, u.isMac)() ? c.MacosKeyToCode : (0, u.isWindows)() ? c.WindowsKeyToCode : void 0,
        f = a.invert(c.LinuxKeyToCode);
    f["223"] = "`", Object.freeze(f);
    let E = Object.freeze(a.invert(c.MacosKeyToCode)),
        p = a.invert(c.WindowsKeyToCode);
    p["223"] = "`", Object.freeze(p);
    let h = a.invert(null != d ? d : {});

    function _() {
        if ((0, u.isLinux)()) return c.KeyboardEnvs.LINUX;
        if ((0, u.isMac)()) return c.KeyboardEnvs.MACOS;
        if ((0, u.isWindows)()) return c.KeyboardEnvs.WINDOWS;
        else return c.KeyboardEnvs.BROWSER
    }

    function S(e) {
        let [, t, n] = e;
        switch (n) {
            case c.KeyboardEnvs.LINUX:
                return f["" + t];
            case c.KeyboardEnvs.MACOS:
                return E["" + t];
            case c.KeyboardEnvs.WINDOWS:
                return p["" + t];
            case c.KeyboardEnvs.BROWSER:
                return r(t);
            default:
                return h["" + t]
        }
    }

    function m(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _(),
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
                        return r(e.replace(/^(right|left) (shift|meta|ctrl|alt)$/, "$2").replace("meta", "command"));
                    default:
                        return d[e]
                }
            case c.KeyboardDeviceTypes.MOUSE_BUTTON:
                return parseInt(e.replace("MOUSE", ""), 10);
            case c.KeyboardDeviceTypes.GAMEPAD_BUTTON:
                return parseInt(e.replace("GAMEPAD", ""), 10);
            default:
                throw Error("Unrecognized DeviceType ".concat(n, "."))
        }
    }!(0, u.isMac)() && (h["223"] = "`"), Object.freeze(h);
    let T = [
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
        g = e => {
            for (let [t, n] of T)
                if (t === e.toUpperCase()) return n;
            return e
        },
        I = e => {
            for (let [t, n] of T)
                if (n === e.toUpperCase()) return t.toLowerCase();
            return e
        },
        C = /shift|meta|ctrl|alt$/;

    function v(e) {
        let t = {
            keyCode: 0,
            metaKey: !1,
            shiftKey: !1,
            altKey: !1,
            ctrlKey: !1
        };
        return null == e ? [] : e.reduce((e, n) => {
            let i = S(n),
                r = {
                    ...t
                };
            if (null == i) return e.push({
                ...r,
                combo: n
            }), e;
            if (C.test(i)) return t[i + "Key"] = !0, e.map(e => (e[i + "Key"] = !0, e));
            {
                let t = m(i, c.KeyboardEnvs.BROWSER);
                return null != t && (r.keyCode = t), e.push(r), e
            }
        }, [])
    }

    function A(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _(),
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.KeyboardDeviceTypes.KEYBOARD_KEY,
            i = e.replace(/numpad plus/i, "").replace(/NUMPAD \+/i, "numpad plus").replace(/mod/i, o.default.modKey).split("+").map(e => e.trim().replace("plus", "+"));
        return i.reduce((e, i) => {
            let r = I(i),
                s = m(r, t, n);
            return null != s && e.push([n, s, t]), e
        }, [])
    }

    function R(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = e.map(e => {
                let [t, n, i] = e;
                if (t === c.KeyboardDeviceTypes.KEYBOARD_KEY || t === c.KeyboardDeviceTypes.KEYBOARD_MODIFIER_KEY) {
                    var r;
                    return null !== (r = S(null != i ? [t, n, i] : [t, n])) && void 0 !== r ? r : "UNK".concat(n)
                }
                if (t === c.KeyboardDeviceTypes.MOUSE_BUTTON) return "mouse".concat(n);
                if (t === c.KeyboardDeviceTypes.GAMEPAD_BUTTON) return "gamepad".concat(n);
                else return "dev".concat(t, ",").concat(n)
            }).filter(l.isNotNullish);
        if (!t) return i.join("+");
        {
            let e = -1 !== n.g.navigator.appVersion.indexOf("Mac OS X") ? i.map(g) : i;
            return e.join(" + ").toUpperCase()
        }
    }
}