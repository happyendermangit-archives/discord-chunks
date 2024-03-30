function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        chromeStackLineParser: function() {
            return s
        },
        defaultStackLineParsers: function() {
            return m
        },
        defaultStackParser: function() {
            return y
        },
        geckoStackLineParser: function() {
            return c
        },
        opera10StackLineParser: function() {
            return h
        },
        opera11StackLineParser: function() {
            return g
        },
        winjsStackLineParser: function() {
            return f
        }
    });
    var r = n("648238");

    function i(t, e, n, r) {
        let i = {
            filename: t,
            function: e,
            in_app: !0
        };
        return void 0 !== n && (i.lineno = n), void 0 !== r && (i.colno = r), i
    }
    let a = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        o = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        s = [30, t => {
            let e = a.exec(t);
            if (e) {
                if (e[2] && 0 === e[2].indexOf("eval")) {
                    let t = o.exec(e[2]);
                    t && (e[2] = t[1], e[3] = t[2], e[4] = t[3])
                }
                let [t, n] = v(e[1] || "?", e[2]);
                return i(n, t, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0)
            }
        }],
        u = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        l = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        c = [50, t => {
            let e = u.exec(t);
            if (e) {
                if (e[3] && e[3].indexOf(" > eval") > -1) {
                    let t = l.exec(e[3]);
                    t && (e[1] = e[1] || "eval", e[3] = t[1], e[4] = t[2], e[5] = "")
                }
                let t = e[3],
                    n = e[1] || "?";
                return [n, t] = v(n, t), i(t, n, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
            }
        }],
        d = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        f = [40, t => {
            let e = d.exec(t);
            return e ? i(e[2], e[1] || "?", +e[3], e[4] ? +e[4] : void 0) : void 0
        }],
        p = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
        h = [10, t => {
            let e = p.exec(t);
            return e ? i(e[2], e[3] || "?", +e[1]) : void 0
        }],
        _ = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
        g = [20, t => {
            let e = _.exec(t);
            return e ? i(e[5], e[3] || e[4] || "?", +e[1], +e[2]) : void 0
        }],
        m = [s, c, f],
        y = (0, r.createStackParser)(...m),
        v = (t, e) => {
            let n = -1 !== t.indexOf("safari-extension"),
                r = -1 !== t.indexOf("safari-web-extension");
            return n || r ? [-1 !== t.indexOf("@") ? t.split("@")[0] : "?", n ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e]
        }
}