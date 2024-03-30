function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("451962"),
        u = n("845265"),
        s = n("796847");

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    t.default = function(e) {
        var t, n, o = e.className,
            c = e.guild,
            f = e.isSelected,
            d = void 0 === f || f,
            _ = e.width,
            E = e.height,
            p = e.shouldAnimate,
            m = e.isLocked;
        var y = (t = r.useState(!1), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
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
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            I = y[0],
            h = y[1],
            O = c.getIconURL(32, (void 0 === p || p) && d),
            T = function() {
                return h(!0)
            },
            S = function() {
                return h(!1)
            };
        return r.createElement("div", {
            onFocus: T,
            onBlur: S,
            onMouseOver: T,
            onMouseLeave: S
        }, r.createElement(u.default, {
            className: i()(s.mask, o),
            mask: d || I ? u.MaskIDs.SQUIRCLE : u.MaskIDs.AVATAR_DEFAULT,
            width: void 0 === _ ? 32 : _,
            height: void 0 === E ? 32 : E
        }, null == O ? r.createElement("div", {
            className: i()(s.guildIcon, s.guildIconWithoutImage)
        }, r.createElement("div", {
            className: s.guildAcronym
        }, c.acronym)) : r.createElement("img", {
            alt: c.toString(),
            src: O,
            className: s.guildIcon
        })), void 0 !== m && m ? r.createElement("div", {
            className: s.categoryItemLockIconContainer
        }, r.createElement(a.default, {
            width: 10,
            height: 10,
            className: s.categoryItemLockIcon
        })) : null)
    }
}