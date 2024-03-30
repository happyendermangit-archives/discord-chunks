function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getHighestHoistedRole: function() {
            return u
        }
    }), n("898511");
    var r = n("957808"),
        o = n("306912"),
        i = n("359017");

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var u = function(e, t) {
        var n, u, s = (n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.default, r.default], u = 2, function(e) {
                if (Array.isArray(e)) return e
            }(n) || function(e, t) {
                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        u = !0, r = e
                    } finally {
                        try {
                            !a && null != o.return && o.return()
                        } finally {
                            if (u) throw r
                        }
                    }
                    return i
                }
            }(n, u) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                }
            }(n, u) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            l = s[0],
            c = s[1];
        if (null == e || null == t) return null;
        var f = l.getGuild(e);
        if (null == f) return null;
        var d = c.getMember(f.id, t);
        return null == d ? null : i.getHighestHoistedRole(f, d)
    }
}