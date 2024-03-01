function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        caseInsensitiveLangRegex: function() {
            return r
        },
        isKnownLang: function() {
            return o
        },
        findBackticks: function() {
            return u
        }
    }), n("222007"), n("70102"), n("424973");
    var l = n("436443");
    n("86256");
    let i = l.default.listLanguages(),
        a = {};
    for (let e of i) {
        e = e.toLowerCase();
        let t = l.default.getLanguage(e);
        if (null == t) continue;
        let n = t.aliases;
        if (a[e] = e, null != n)
            for (let t of n) a[t.toLowerCase()] = e
    }
    let s = /^[a-z0-9_+\-.#]+$/,
        r = /^[a-z0-9_+\-.#]+$/i;
    for (let e in a)
        if (null == e.match(s)) throw Error("Language name does not match regex: ".concat(e));

    function o(e) {
        return e.toLowerCase() in a
    }

    function u(e) {
        let t;
        let n = [],
            l = /\\|```/g;
        for (; null != (t = l.exec(e));) {
            if ("\\" === t[0]) {
                l.lastIndex += 1;
                continue
            }
            n.push(t.index)
        }
        return n
    }
}