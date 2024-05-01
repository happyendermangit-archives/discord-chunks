function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        codeToKey: function() {
            return S
        },
        getEnv: function() {
            return f
        },
        keyToCode: function() {
            return h
        },
        toBrowserEvents: function() {
            return O
        },
        toCombo: function() {
            return R
        },
        toString: function() {
            return C
        }
    }), n("47120"), n("757143"), n("411104"), n("724458"), n("653041");
    var i = n("921738"),
        r = n.n(i),
        a = n("392711"),
        s = n.n(a),
        o = n("714338"),
        l = n("823379"),
        u = n("358085"),
        d = n("981631");
    let _ = (0, u.isLinux)() ? d.LinuxKeyToCode : (0, u.isMac)() ? d.MacosKeyToCode : (0, u.isWindows)() ? d.WindowsKeyToCode : void 0,
        c = s().invert(d.LinuxKeyToCode);
    c["223"] = "`", Object.freeze(c);
    let E = Object.freeze(s().invert(d.MacosKeyToCode)),
        I = s().invert(d.WindowsKeyToCode);
    I["223"] = "`", Object.freeze(I);
    let T = s().invert(null != _ ? _ : {});

    function f() {
        if ((0, u.isLinux)()) return d.KeyboardEnvs.LINUX;
        if ((0, u.isMac)()) return d.KeyboardEnvs.MACOS;
        if ((0, u.isWindows)()) return d.KeyboardEnvs.WINDOWS;
        else return d.KeyboardEnvs.BROWSER
    }

    function S(e) {
        let [, t, n] = e;
        switch (n) {
            case d.KeyboardEnvs.LINUX:
                return c["" + t];
            case d.KeyboardEnvs.MACOS:
                return E["" + t];
            case d.KeyboardEnvs.WINDOWS:
                return I["" + t];
            case d.KeyboardEnvs.BROWSER:
                return r()(t);
            default:
                return T["" + t]
        }
    }

    function h(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f(),
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
                        return r()(e.replace(/^(right|left) (shift|meta|ctrl|alt)$/, "$2").replace("meta", "command"));
                    default:
                        return _[e]
                }
            case d.KeyboardDeviceTypes.MOUSE_BUTTON:
                return parseInt(e.replace("MOUSE", ""), 10);
            case d.KeyboardDeviceTypes.GAMEPAD_BUTTON:
                return parseInt(e.replace("GAMEPAD", ""), 10);
            default:
                throw Error("Unrecognized DeviceType ".concat(n, "."))
        }
    }!(0, u.isMac)() && (T["223"] = "`"), Object.freeze(T);
    let A = [
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
        m = e => {
            for (let [t, n] of A)
                if (t === e.toUpperCase()) return n;
            return e
        },
        N = e => {
            for (let [t, n] of A)
                if (n === e.toUpperCase()) return t.toLowerCase();
            return e
        },
        p = /shift|meta|ctrl|alt$/;

    function O(e) {
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
            if (p.test(i)) return t[i + "Key"] = !0, e.map(e => (e[i + "Key"] = !0, e));
            {
                let t = h(i, d.KeyboardEnvs.BROWSER);
                return null != t && (r.keyCode = t), e.push(r), e
            }
        }, [])
    }

    function R(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f(),
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.KeyboardDeviceTypes.KEYBOARD_KEY;
        return e.replace(/numpad plus/i, "").replace(/NUMPAD \+/i, "numpad plus").replace(/mod/i, o.default.modKey).split("+").map(e => e.trim().replace("plus", "+")).reduce((e, i) => {
            let r = h(N(i), t, n);
            return null != r && e.push([n, r, t]), e
        }, [])
    }

    function C(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = e.map(e => {
                let [t, n, i] = e;
                if (t === d.KeyboardDeviceTypes.KEYBOARD_KEY || t === d.KeyboardDeviceTypes.KEYBOARD_MODIFIER_KEY) {
                    var r;
                    return null !== (r = S(null != i ? [t, n, i] : [t, n])) && void 0 !== r ? r : "UNK".concat(n)
                }
                if (t === d.KeyboardDeviceTypes.MOUSE_BUTTON) return "mouse".concat(n);
                if (t === d.KeyboardDeviceTypes.GAMEPAD_BUTTON) return "gamepad".concat(n);
                else return "dev".concat(t, ",").concat(n)
            }).filter(l.isNotNullish);
        return t ? (-1 !== n.g.navigator.appVersion.indexOf("Mac OS X") ? i.map(m) : i).join(" + ").toUpperCase() : i.join("+")
    }
}