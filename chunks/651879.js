function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    }), n("424973");
    var s = n("917351"),
        r = n.n(s),
        a = n("693566"),
        o = n.n(a),
        l = n("851387"),
        u = n("305961"),
        d = n("697218"),
        c = n("718517"),
        f = n("158998"),
        _ = n("782340");
    let h = new o({
        maxAge: 1 * c.default.Millis.MINUTE
    });

    function E(e, t, n) {
        null != i && clearTimeout(i), i = setTimeout(() => {
            let i = [],
                s = e => {
                    i.push(e.id)
                };
            if (null == e) r.forEach(u.default.getGuilds(), s);
            else if (Array.isArray(e)) e.forEach(e => {
                let t = u.default.getGuild(e);
                null != t && s(t)
            });
            else {
                let t = u.default.getGuild(e);
                null != t && s(t)
            }
            i.length > 0 && l.default.requestMembers(i, t.toLocaleLowerCase(), n)
        }, 200)
    }

    function g(e, t) {
        let n = "".concat(null != e ? e : "", ":").concat(t),
            i = h.get(n);
        if (null != i) return i;
        h.set(n, !0)
    }
    var m = {
        getGuildNameSuggestion: function(e) {
            let t = d.default.getCurrentUser(),
                n = f.getName(t);
            return null == n || 0 === n.length ? "" : _.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT.format({
                username: (null == e ? void 0 : e.truncateUsername) ? n.slice(0, 20) : n
            })
        },
        requestMembers(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                i = Array.isArray(e),
                s = [],
                r = !1;
            if (i) e.forEach(e => {
                let n = g(e, t);
                null == n && s.push(e)
            });
            else {
                let n = g(e, t);
                null == n && (r = !0)
            }
            s.length > 0 && i ? E(s, t, n) : r && E(e, t, n)
        }
    }
}