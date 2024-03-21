function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getEnv: function() {
            return g
        },
        codeToKey: function() {
            return m
        },
        keyToCode: function() {
            return p
        },
        toBrowserEvents: function() {
            return A
        },
        toCombo: function() {
            return C
        },
        toString: function() {
            return y
        }
    }), n("222007"), n("781738"), n("70102"), n("808653"), n("424973");
    var i = n("499032"),
        s = n.n(i),
        r = n("917351"),
        a = n.n(r),
        o = n("485328"),
        l = n("449008"),
        u = n("773336"),
        d = n("49111");
    let c = (0, u.isLinux)() ? d.LinuxKeyToCode : (0, u.isMac)() ? d.MacosKeyToCode : (0, u.isWindows)() ? d.WindowsKeyToCode : void 0,
        _ = a.invert(d.LinuxKeyToCode);
    _["223"] = "`", Object.freeze(_);
    let f = Object.freeze(a.invert(d.MacosKeyToCode)),
        E = a.invert(d.WindowsKeyToCode);
    E["223"] = "`", Object.freeze(E);
    let h = a.invert(null != c ? c : {});

    function g() {
        if ((0, u.isLinux)()) return d.KeyboardEnvs.LINUX;
        if ((0, u.isMac)()) return d.KeyboardEnvs.MACOS;
        if ((0, u.isWindows)()) return d.KeyboardEnvs.WINDOWS;
        else return d.KeyboardEnvs.BROWSER
    }

    function m(e) {
        let [, t, n] = e;
        switch (n) {
            case d.KeyboardEnvs.LINUX:
                return _["" + t];
            case d.KeyboardEnvs.MACOS:
                return f["" + t];
            case d.KeyboardEnvs.WINDOWS:
                return E["" + t];
            case d.KeyboardEnvs.BROWSER:
                return s(t);
            default:
                return h["" + t]
        }
    }

    function p(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g(),
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.KeyboardDeviceTypes.KEYBOARD_KEY;
        switch (n) {
            case d.KeyboardDeviceTypes.KEYBOARD_KEY:
            case d.KeyboardDeviceTypes.KEYBOARD_MODIFIER_KEY:
                switch (t) {
                    case d.KeyboardEnvs.LINUX:
                        return d.LinuxKeyToCode[e];
                    case d.KeyboardEnvs.MACOS:
                        return d.MacosKeyToCode[e];
                    case d.KeyboardEnvs.WINDOWS:
                        return d.WindowsKeyToCode[e];
                    case d.KeyboardEnvs.BROWSER:
                        return s(e.replace(/^(right|left) (shift|meta|ctrl|alt)$/, "$2").replace("meta", "command"));
                    default:
                        return c[e]
                }
            case d.KeyboardDeviceTypes.MOUSE_BUTTON:
                return parseInt(e.replace("MOUSE", ""), 10);
            case d.KeyboardDeviceTypes.GAMEPAD_BUTTON:
                return parseInt(e.replace("GAMEPAD", ""), 10);
            default:
                throw Error("Unrecognized DeviceType ".concat(n, "."))
        }
    }!(0, u.isMac)() && (h["223"] = "`"), Object.freeze(h);
    let S = [
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
        T = e => {
            for (let [t, n] of S)
                if (t === e.toUpperCase()) return n;
            return e
        },
        v = e => {
            for (let [t, n] of S)
                if (n === e.toUpperCase()) return t.toLowerCase();
            return e
        },
        I = /shift|meta|ctrl|alt$/;

    function A(e) {
        let t = {
            keyCode: 0,
            metaKey: !1,
            shiftKey: !1,
            altKey: !1,
            ctrlKey: !1
        };
        return null == e ? [] : e.reduce((e, n) => {
            let i = m(n),
                s = {
                    ...t
                };
            if (null == i) return e.push({
                ...s,
                combo: n
            }), e;
            if (I.test(i)) return t[i + "Key"] = !0, e.map(e => (e[i + "Key"] = !0, e));
            {
                let t = p(i, d.KeyboardEnvs.BROWSER);
                return null != t && (s.keyCode = t), e.push(s), e
            }
        }, [])
    }

    function C(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g(),
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.KeyboardDeviceTypes.KEYBOARD_KEY,
            i = e.replace(/numpad plus/i, "").replace(/NUMPAD \+/i, "numpad plus").replace(/mod/i, o.default.modKey).split("+").map(e => e.trim().replace("plus", "+"));
        return i.reduce((e, i) => {
            let s = v(i),
                r = p(s, t, n);
            return null != r && e.push([n, r, t]), e
        }, [])
    }

    function y(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = e.map(e => {
                let [t, n, i] = e;
                if (t === d.KeyboardDeviceTypes.KEYBOARD_KEY || t === d.KeyboardDeviceTypes.KEYBOARD_MODIFIER_KEY) {
                    var s;
                    return null !== (s = m(null != i ? [t, n, i] : [t, n])) && void 0 !== s ? s : "UNK".concat(n)
                }
                if (t === d.KeyboardDeviceTypes.MOUSE_BUTTON) return "mouse".concat(n);
                if (t === d.KeyboardDeviceTypes.GAMEPAD_BUTTON) return "gamepad".concat(n);
                else return "dev".concat(t, ",").concat(n)
            }).filter(l.isNotNullish);
        if (!t) return i.join("+");
        {
            let e = -1 !== n.g.navigator.appVersion.indexOf("Mac OS X") ? i.map(T) : i;
            return e.join(" + ").toUpperCase()
        }
    }
}