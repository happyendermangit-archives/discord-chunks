function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    }), n("222007"), n("424973");
    let l = {
            1: "bold",
            4: "underline"
        },
        i = {
            30: "black",
            31: "red",
            32: "green",
            33: "yellow",
            34: "blue",
            35: "magenta",
            36: "cyan",
            37: "white"
        },
        a = {
            40: "black",
            41: "red",
            42: "green",
            43: "yellow",
            44: "blue",
            45: "magenta",
            46: "cyan",
            47: "white"
        },
        s = /\x1B\[(\d+(?:[:;]\d+)*)m/,
        r = new RegExp("(?=".concat(s.source, ")"));

    function o() {
        let e = [...u("foreground", i, ["38", "39"], !0), ...u("background", a, ["48", "49"], !0), ...u("style", l, [], !1), {
            className: "ansi-control-sequence",
            begin: s,
            starts: {
                end: r,
                endsParent: !0
            }
        }];
        return function(e) {
            for (let t = 0; t < e.length; t++) e[t].contains = e.slice(t + 1)
        }(e), {
            contains: [{
                begin: r,
                contains: e
            }]
        }
    }

    function u(e, t, n, l) {
        let i = ["0", ...n];
        return l && i.push(...Object.keys(t)), Object.entries(t).map(t => {
            var n, l, a, s;
            let [o, u] = t;
            return n = e, l = u, a = o, s = i, {
                className: "ansi-".concat(n, "-").concat(l),
                endsParent: !0,
                begin: r,
                "on:begin": (e, t) => {
                    let n = e[1].split(";");
                    for (let e of (void 0 === t.data.isOn && (t.data.isOn = !1), n)) e === a ? t.data.isOn = !0 : s.includes(e) && (t.data.isOn = !1);
                    !t.data.isOn && t.ignoreMatch()
                }
            }
        })
    }
}