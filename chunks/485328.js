function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return y
        }
    }), n("222007"), n("781738"), n("424973");
    var i = n("800648"),
        s = n.n(i),
        r = n("969230"),
        a = n.n(r),
        o = n("953260"),
        l = n("605250"),
        u = n("599110"),
        d = n("773336"),
        c = n("49111");
    let _ = {},
        f = [],
        E = !1,
        h = a(new s(window)),
        g = (0, d.isMac)() ? "cmd" : "ctrl",
        m = (0, d.isMac)() ? "opt" : "alt",
        p = (0, d.isMac)() ? "return" : "enter",
        S = [...o.JUMP_TO_GUILD.binds, "mod+shift+[", "mod+shift+]", "mod+[", "mod+]", "alt+[", "alt+]", "ctrl+shift+tab", "ctrl+tab", "mod+n", "mod+t", "mod+shift+t", "mod+plus", "mod+minus", "mod+0"].map(e => e.replace("mod", g)),
        v = () => [],
        T = [];
    if ((0, d.isDesktop)()) {
        let e = new s(document.documentElement);
        e.bind("backspace", e => e.preventDefault())
    }

    function I(e) {
        let t = [];
        for (let n of Object.values(e)) null != n && t.push(...n.binds);
        return t.map(e => e.replace("mod", g))
    }

    function A(e, t) {
        return (n, i) => (u.default.track(c.AnalyticEvents.KEYBOARD_SHORTCUT_USED, {
            shortcut_name: e
        }), t(n, i))
    }

    function C(e) {
        for (let [t, n] of Object.entries(e)) {
            if (null == n) continue;
            let e = v();
            !d.isPlatformEmbedded && (e = e.concat(S));
            let i = n.binds.filter(t => (t = t.replace("mod", g), 0 > e.indexOf(t)));
            if (0 === i.length) continue;
            let s = n.comboKeysBindGlobal ? h.bindGlobal : h.bind;
            if (null != n.action && s.call(h, i, A(t, n.action)), null != n.keyup && s.call(h, i, A(t, n.keyup), "keyup"), null != n.keydown) {
                let e = i.indexOf("any-character"); - 1 !== e && (! function(e, t) {
                    let n = e => t(e, e.key);
                    document.addEventListener(e, n), T.push(() => document.removeEventListener(e, n))
                }("keydown", n.keydown), i.splice(e, 1)), i.length > 0 && s.call(h, i, A(t, n.keydown), "keydown")
            }
            null != n.keypress && s.call(h, i, A(t, n.keypress), "keypress")
        }
    }
    var y = {
        combokeys: h,
        modKey: g,
        altKey: m,
        returnKey: p,
        setGetKeybindList(e) {
            v = e
        },
        checkDupes(e) {
            let t = new Set,
                n = [],
                i = I(e);
            for (let e of i) t.has(e) && n.push(e), t.add(e);
            n.length > 0 && new(0, l.default)("Keybinds").warn("Duplicate keyboard shortcuts defined:", n)
        },
        setLayout(e) {
            _ = e
        },
        enable() {
            !E && (E = !0, this.checkDupes(_), C(_))
        },
        enableTemp(e) {
            f.push(_), _ = e, C(e), E = !0
        },
        disableTemp() {
            let e = f.pop();
            null != e && (_ = e), this.disable(), this.enable()
        },
        disable() {
            E && (E = !1, T.forEach(e => e()), T = [], h.reset())
        },
        validateKeybind(e) {
            E && this.hasBind(e) && h.unbind(e)
        },
        hasBind(e) {
            let t = I(_);
            return e = (e = e.replace("meta", "cmd")).replace(/right |left /i, "").trim(), t.includes(e)
        }
    }
}