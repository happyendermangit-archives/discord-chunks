function(e, t, n) {
    n("781738"), n("424973");
    var r = n("258169"),
        a = /%[sdv%]/g,
        i = function(e) {
            var t = 1,
                n = arguments,
                r = n.length;
            return e.replace(a, function(e) {
                if (t >= r) return e;
                var a = n[t];
                switch (t += 1, e) {
                    case "%%":
                        return "%";
                    case "%s":
                        return String(a);
                    case "%d":
                        return Number(a);
                    case "%v":
                        return ""
                }
            })
        },
        o = function(e, t, n) {
            var r = [e + "=" + (t.format instanceof Function ? t.format(t.push ? n : n[t.name]) : t.format)];
            if (t.names)
                for (var a = 0; a < t.names.length; a += 1) {
                    var o = t.names[a];
                    t.name ? r.push(n[t.name][o]) : r.push(n[t.names[a]])
                } else r.push(n[t.name]);
            return i.apply(null, r)
        },
        s = ["v", "o", "s", "i", "u", "e", "p", "c", "b", "t", "r", "z", "a"],
        c = ["i", "c", "b", "a"];
    e.exports = function(e, t) {
        t = t || {}, null == e.version && (e.version = 0), null == e.name && (e.name = " "), e.media.forEach(function(e) {
            null == e.payloads && (e.payloads = "")
        });
        var n = t.outerOrder || s,
            a = t.innerOrder || c,
            i = [];
        return n.forEach(function(t) {
            r[t].forEach(function(n) {
                n.name in e && null != e[n.name] ? i.push(o(t, n, e)) : n.push in e && null != e[n.push] && e[n.push].forEach(function(e) {
                    i.push(o(t, n, e))
                })
            })
        }), e.media.forEach(function(e) {
            i.push(o("m", r.m[0], e)), a.forEach(function(t) {
                r[t].forEach(function(n) {
                    n.name in e && null != e[n.name] ? i.push(o(t, n, e)) : n.push in e && null != e[n.push] && e[n.push].forEach(function(e) {
                        i.push(o(t, n, e))
                    })
                })
            })
        }), i.join("\r\n") + "\r\n"
    }
}