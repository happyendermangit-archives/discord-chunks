function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("194926"),
        o = n("712398"),
        i = n("405502"),
        a = n("281767");

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function s(e, t) {
        var n, s, l, c, f = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            d = f.pendingThemeColors,
            _ = f.isPreview,
            E = null == e ? void 0 : e.getAvatarURL(null == t ? void 0 : t.guildId, 80),
            p = (0, i.useColorValue)(a.Color.PRIMARY_530).hex;
        var m = (n = (0, o.useAvatarColors)(E, p, !1), s = 2, function(e) {
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
            }(n, s) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                }
            }(n, s) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            y = m[0],
            I = m[1];
        if (!(null == t ? void 0 : t.canEditThemes) && !_) return [null, null];
        var h = null == t ? void 0 : t.getPreviewThemeColors(d);
        return [null !== (l = null == h ? void 0 : h[0]) && void 0 !== l ? l : (0, r.hex2int)(y), null !== (c = null == h ? void 0 : h[1]) && void 0 !== c ? c : (0, r.hex2int)(I)]
    }
}