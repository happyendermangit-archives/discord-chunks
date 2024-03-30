function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return o
        }
    });
    var n = r("470079"),
        a = r("803997"),
        u = r.n(a),
        l = r("829267"),
        i = r("161061"),
        c = r("931093");

    function o(e) {
        var t, r, a, o = e.description,
            s = e.className,
            d = e.guildId,
            f = e.truncate,
            E = n.useMemo(function() {
                return (0, l.guildEventDetailsParser)(o, !0, {
                    guildId: d,
                    allowLinks: !0,
                    allowHeading: !0,
                    allowList: !0
                })
            }, [o, d]);
        return n.createElement("div", {
            className: u()(i.descriptionText, s, c.markup, (t = {}, r = i.truncate, a = void 0 === f || f, r in t ? Object.defineProperty(t, r, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[r] = a, t))
        }, E)
    }
}