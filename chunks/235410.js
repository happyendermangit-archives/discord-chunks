function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        chromeStackLineParser: function() {
            return o
        },
        defaultStackLineParsers: function() {
            return m
        },
        defaultStackParser: function() {
            return y
        },
        geckoStackLineParser: function() {
            return u
        },
        opera10StackLineParser: function() {
            return p
        },
        opera11StackLineParser: function() {
            return g
        },
        winjsStackLineParser: function() {
            return h
        }
    }), n("222007");
    var r = n("103787");

    function i(t, e, n, r) {
        let i = {
            filename: t,
            function: e,
            in_app: !0
        };
        return void 0 !== n && (i.lineno = n), void 0 !== r && (i.colno = r), i
    }
    let a = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        s = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        o = [30, t => {
            let e = a.exec(t);
            if (e) {
                let t = e[2] && 0 === e[2].indexOf("eval");
                if (t) {
                    let t = s.exec(e[2]);
                    t && (e[2] = t[1], e[3] = t[2], e[4] = t[3])
                }
                let [n, r] = v(e[1] || "?", e[2]);
                return i(r, n, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0)
            }
        }],
        c = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        l = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        u = [50, t => {
            let e = c.exec(t);
            if (e) {
                let t = e[3] && e[3].indexOf(" > eval") > -1;
                if (t) {
                    let t = l.exec(e[3]);
                    t && (e[1] = e[1] || "eval", e[3] = t[1], e[4] = t[2], e[5] = "")
                }
                let n = e[3],
                    r = e[1] || "?";
                return [r, n] = v(r, n), i(n, r, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
            }
        }],
        d = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        h = [40, t => {
            let e = d.exec(t);
            return e ? i(e[2], e[1] || "?", +e[3], e[4] ? +e[4] : void 0) : void 0
        }],
        f = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
        p = [10, t => {
            let e = f.exec(t);
            return e ? i(e[2], e[3] || "?", +e[1]) : void 0
        }],
        _ = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
        g = [20, t => {
            let e = _.exec(t);
            return e ? i(e[5], e[3] || e[4] || "?", +e[1], +e[2]) : void 0
        }],
        m = [o, u, h],
        y = (0, r.createStackParser)(...m),
        v = (t, e) => {
            let n = -1 !== t.indexOf("safari-extension"),
                r = -1 !== t.indexOf("safari-web-extension");
            return n || r ? [-1 !== t.indexOf("@") ? t.split("@")[0] : "?", n ? "safari-extension:".concat(e) : "safari-web-extension:".concat(e)] : [t, e]
        }
}