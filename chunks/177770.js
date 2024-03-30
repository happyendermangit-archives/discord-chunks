function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        },
        useSelectedDismissibleContent: function() {
            return f
        }
    });
    var r = n("470079"),
        o = n("37295"),
        i = n("391083"),
        a = n("360636"),
        u = n("662520"),
        s = n("348201");

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function c(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
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
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return l(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function f(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            l = (0, o.useStateFromStores)([i.default], function() {
                return !!__OVERLAY__ && i.default.isInstanceUILocked()
            }),
            f = c((0, u.useGetDismissibleContent)(e, t, l), 2),
            d = f[0],
            _ = f[1],
            E = !n && null != d && !a.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(d);
        return r.useEffect(function() {
            return function() {
                E && _(s.ContentDismissActionType.AUTO_DISMISS)
            }
        }, [E, _]), [d, _]
    }

    function d(e) {
        var t = e.contentTypes,
            n = e.children,
            o = c(f(t, e.groupName, e.bypassAutoDismiss), 2),
            i = o[0],
            a = o[1];
        return r.createElement(r.Fragment, null, n({
            visibleContent: i,
            markAsDismissed: a
        }))
    }
}