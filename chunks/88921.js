function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Modal: function() {
            return c
        }
    });
    var r = n("470079"),
        o = n("97613"),
        i = n.n(o),
        a = n("67381"),
        u = n("35228"),
        s = n("147391");

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    n.es(s, t);

    function c(e) {
        var t, n, o = e.renderModal,
            s = e.onCloseRequest,
            c = e.onCloseCallback;
        var f = (t = r.useState(function() {
                return i()()
            }), n = 1, function(e) {
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
            }())[0],
            d = (0, u.useModalContext)();
        r.useLayoutEffect(function() {
            return (0, a.openModal)(o, {
                    modalKey: f,
                    onCloseRequest: s,
                    onCloseCallback: c
                }, d),
                function() {
                    (0, a.closeModal)(f, d)
                }
        }, []);
        var _ = r.useRef(!0);
        return r.useLayoutEffect(function() {
            !_.current && (0, a.updateModal)(f, o, s, c, d), _.current = !1
        }, [o, s]), null
    }
}