function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("392711"),
        i = n.n(o),
        a = n("31775"),
        u = n.n(a),
        s = n("322997"),
        l = n("306912"),
        c = n("208454"),
        f = n("388990"),
        d = n("830567"),
        _ = n("941504"),
        E = new(u())({
            maxAge: 1 * f.default.Millis.MINUTE
        });

    function p(e, t, n) {
        null != r && clearTimeout(r), r = setTimeout(function() {
            var r = [],
                o = function(e) {
                    r.push(e.id)
                };
            if (null == e) i().forEach(l.default.getGuilds(), o);
            else if (Array.isArray(e)) e.forEach(function(e) {
                var t = l.default.getGuild(e);
                null != t && o(t)
            });
            else {
                var a = l.default.getGuild(e);
                null != a && o(a)
            }
            r.length > 0 && s.default.requestMembers(r, t.toLocaleLowerCase(), n)
        }, 200)
    }

    function m(e, t) {
        var n = "".concat(null != e ? e : "", ":").concat(t),
            r = E.get(n);
        if (null != r) return r;
        E.set(n, !0)
    }
    t.default = {
        getGuildNameSuggestion: function(e) {
            var t = c.default.getCurrentUser(),
                n = d.getName(t);
            return null == n || 0 === n.length ? "" : _.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT.format({
                username: (null == e ? void 0 : e.truncateUsername) ? n.slice(0, 20) : n
            })
        },
        requestMembers: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                r = Array.isArray(e),
                o = [],
                i = !1;
            r ? e.forEach(function(e) {
                null == m(e, t) && o.push(e)
            }) : null == m(e, t) && (i = !0), o.length > 0 && r ? p(o, t, n) : i && p(e, t, n)
        }
    }
}