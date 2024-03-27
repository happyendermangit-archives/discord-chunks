function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        createStackParser: function() {
            return i
        },
        getFunctionName: function() {
            return s
        },
        stackParserFromStackParserOptions: function() {
            return a
        }
    });
    let r = /\(error: (.*)\)/;

    function i(...t) {
        let e = t.sort((t, e) => t[0] - e[0]).map(t => t[1]);
        return (t, n = 0) => {
            let i = [],
                a = t.split("\n");
            for (let t = n; t < a.length; t++) {
                let n = a[t];
                if (n.length > 1024) continue;
                let o = r.test(n) ? n.replace(r, "$1") : n;
                if (!o.match(/\S*Error: /)) {
                    for (let t of e) {
                        let e = t(o);
                        if (e) {
                            i.push(e);
                            break
                        }
                    }
                    if (i.length >= 50) break
                }
            }
            return function(t) {
                if (!t.length) return [];
                let e = t.slice(0, 50),
                    n = e[e.length - 1].function;
                n && /sentryWrapped/.test(n) && e.pop(), e.reverse();
                let r = e[e.length - 1].function;
                return r && /captureMessage|captureException/.test(r) && e.pop(), e.map(t => ({
                    ...t,
                    filename: t.filename || e[e.length - 1].filename,
                    function: t.function || "?"
                }))
            }(i)
        }
    }

    function a(t) {
        return Array.isArray(t) ? i(...t) : t
    }
    let o = "<anonymous>";

    function s(t) {
        try {
            if (!t || "function" != typeof t) return o;
            return t.name || o
        } catch (t) {
            return o
        }
    }
}