function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n("653041");
    var r = n("392711"),
        a = n.n(r),
        s = n("31775"),
        o = n.n(s),
        l = n("749210"),
        u = n("430824"),
        d = n("594174"),
        _ = n("70956"),
        c = n("51144"),
        E = n("689938");
    let I = new(o())({
        maxAge: 1 * _.default.Millis.MINUTE
    });

    function T(e, t, n) {
        null != i && clearTimeout(i), i = setTimeout(() => {
            let i = [],
                r = e => {
                    i.push(e.id)
                };
            if (null == e) a().forEach(u.default.getGuilds(), r);
            else if (Array.isArray(e)) e.forEach(e => {
                let t = u.default.getGuild(e);
                null != t && r(t)
            });
            else {
                let t = u.default.getGuild(e);
                null != t && r(t)
            }
            i.length > 0 && l.default.requestMembers(i, t.toLocaleLowerCase(), n)
        }, 200)
    }

    function f(e, t) {
        let n = "".concat(null != e ? e : "", ":").concat(t),
            i = I.get(n);
        if (null != i) return i;
        I.set(n, !0)
    }
    t.default = {
        getGuildNameSuggestion: function(e) {
            let t = d.default.getCurrentUser(),
                n = c.getName(t);
            return null == n || 0 === n.length ? "" : E.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT.format({
                username: (null == e ? void 0 : e.truncateUsername) ? n.slice(0, 20) : n
            })
        },
        requestMembers(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                i = Array.isArray(e),
                r = [],
                a = !1;
            i ? e.forEach(e => {
                null == f(e, t) && r.push(e)
            }) : null == f(e, t) && (a = !0), r.length > 0 && i ? T(r, t, n) : a && T(e, t, n)
        }
    }
}