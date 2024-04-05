function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("757143"), n("653041");
    var i = n("879443"),
        r = n.n(i),
        s = n("414861"),
        a = n.n(s),
        o = n("360038"),
        l = n("710845"),
        u = n("626135"),
        d = n("358085"),
        _ = n("981631");
    let c = {},
        E = [],
        I = !1,
        T = a()(new(r())(window)),
        f = (0, d.isMac)() ? "cmd" : "ctrl",
        S = (0, d.isMac)() ? "opt" : "alt",
        A = (0, d.isMac)() ? "return" : "enter",
        h = [...o.JUMP_TO_GUILD.binds, "mod+shift+[", "mod+shift+]", "mod+[", "mod+]", "alt+[", "alt+]", "ctrl+shift+tab", "ctrl+tab", "mod+n", "mod+t", "mod+shift+t", "mod+plus", "mod+minus", "mod+0"].map(e => e.replace("mod", f)),
        m = () => [],
        N = [];

    function O(e) {
        let t = [];
        for (let n of Object.values(e)) null != n && t.push(...n.binds);
        return t.map(e => e.replace("mod", f))
    }

    function p(e, t) {
        return (n, i) => (u.default.track(_.AnalyticEvents.KEYBOARD_SHORTCUT_USED, {
            shortcut_name: e
        }), t(n, i))
    }

    function R(e) {
        for (let [t, n] of Object.entries(e)) {
            if (null == n) continue;
            let e = m();
            !d.isPlatformEmbedded && (e = e.concat(h));
            let i = n.binds.filter(t => (t = t.replace("mod", f), 0 > e.indexOf(t)));
            if (0 === i.length) continue;
            let r = n.comboKeysBindGlobal ? T.bindGlobal : T.bind;
            if (null != n.action && r.call(T, i, p(t, n.action)), null != n.keyup && r.call(T, i, p(t, n.keyup), "keyup"), null != n.keydown) {
                let e = i.indexOf("any-character"); - 1 !== e && (! function(e, t) {
                    let n = e => t(e, e.key);
                    document.addEventListener(e, n), N.push(() => document.removeEventListener(e, n))
                }("keydown", n.keydown), i.splice(e, 1)), i.length > 0 && r.call(T, i, p(t, n.keydown), "keydown")
            }
            null != n.keypress && r.call(T, i, p(t, n.keypress), "keypress")
        }
    }(0, d.isDesktop)() && new(r())(document.documentElement).bind("backspace", e => e.preventDefault()), t.default = {
        combokeys: T,
        modKey: f,
        altKey: S,
        returnKey: A,
        setGetKeybindList(e) {
            m = e
        },
        checkDupes(e) {
            let t = new Set,
                n = [];
            for (let i of O(e)) t.has(i) && n.push(i), t.add(i);
            n.length > 0 && new l.default("Keybinds").warn("Duplicate keyboard shortcuts defined:", n)
        },
        setLayout(e) {
            c = e
        },
        enable() {
            !I && (I = !0, this.checkDupes(c), R(c))
        },
        enableTemp(e) {
            E.push(c), c = e, R(e), I = !0
        },
        disableTemp() {
            let e = E.pop();
            null != e && (c = e), this.disable(), this.enable()
        },
        disable() {
            I && (I = !1, N.forEach(e => e()), N = [], T.reset())
        },
        validateKeybind(e) {
            I && this.hasBind(e) && T.unbind(e)
        },
        hasBind(e) {
            let t = O(c);
            return e = (e = e.replace("meta", "cmd")).replace(/right |left /i, "").trim(), t.includes(e)
        }
    }
}