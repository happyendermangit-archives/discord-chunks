function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    }), n("47120"), n("653041");
    let i = {
            1: "bold",
            4: "underline"
        },
        r = {
            30: "black",
            31: "red",
            32: "green",
            33: "yellow",
            34: "blue",
            35: "magenta",
            36: "cyan",
            37: "white"
        },
        s = {
            40: "black",
            41: "red",
            42: "green",
            43: "yellow",
            44: "blue",
            45: "magenta",
            46: "cyan",
            47: "white"
        },
        a = /\x1B\[(\d+(?:[:;]\d+)*)m/,
        o = new RegExp("(?=".concat(a.source, ")"));

    function l() {
        let e = [...u("foreground", r, ["38", "39"], !0), ...u("background", s, ["48", "49"], !0), ...u("style", i, [], !1), {
            className: "ansi-control-sequence",
            begin: a,
            starts: {
                end: o,
                endsParent: !0
            }
        }];
        return function(e) {
            for (let t = 0; t < e.length; t++) e[t].contains = e.slice(t + 1)
        }(e), {
            contains: [{
                begin: o,
                contains: e
            }]
        }
    }

    function u(e, t, n, i) {
        let r = ["0", ...n];
        return i && r.push(...Object.keys(t)), Object.entries(t).map(t => {
            var n, i, s, a;
            let [l, u] = t;
            return n = e, i = u, s = l, a = r, {
                className: "ansi-".concat(n, "-").concat(i),
                endsParent: !0,
                begin: o,
                "on:begin": (e, t) => {
                    let n = e[1].split(";");
                    for (let e of (void 0 === t.data.isOn && (t.data.isOn = !1), n)) e === s ? t.data.isOn = !0 : a.includes(e) && (t.data.isOn = !1);
                    !t.data.isOn && t.ignoreMatch()
                }
            }
        })
    }
}