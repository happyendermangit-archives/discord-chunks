function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        initialize: function() {
            return s
        }
    });
    var r = n("629815");

    function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function i(e) {
        return function(e) {
            if (Array.isArray(e)) return o(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return o(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var a = {},
        u = !1;

    function s(e) {
        for (var t in e) {
            var n = e[t];
            (function(e, t) {
                var n;
                t.actions
            })(t, n),
            function(e) {
                var t = null !== (u = e.actions) && void 0 !== u ? u : [];
                (e.hasStoreChangeListeners || e.loadAfterConnectionOpen) && (!t.includes("POST_CONNECTION_OPEN") && (t = i(t).concat(["POST_CONNECTION_OPEN"])), !t.includes("OVERLAY_INITIALIZE") && (t = i(t).concat(["OVERLAY_INITIALIZE"]))), e.loadRightBeforeConnectionOpen && (!t.includes("CONNECTION_OPEN") && (t = i(t).concat(["CONNECTION_OPEN"])), !t.includes("OVERLAY_INITIALIZE") && (t = i(t).concat(["OVERLAY_INITIALIZE"])));
                var n = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var u, s, l = t[Symbol.iterator](); !(n = (s = l.next()).done); n = !0) {
                        var c = s.value;
                        !(c in a) && (a[c] = []), a[c].push(e)
                    }
                } catch (e) {
                    r = !0, o = e
                } finally {
                    try {
                        !n && null != l.return && l.return()
                    } finally {
                        if (r) throw o
                    }
                }
            }(n)
        }
        r.default.addInterceptor(l)
    }

    function l(e) {
        if (("CONNECTION_OPEN" === e.type || "OVERLAY_INITIALIZE" === e.type) && (u = !0), e.type in a) {
            var t = [],
                n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, s = a[e.type][Symbol.iterator](); !(n = (i = s.next()).done); n = !0) {
                    var l = i.value;
                    !u && l.neverLoadBeforeConnectionOpen ? t.push(l) : l.inlineRequire().initialize()
                }
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    !n && null != s.return && s.return()
                } finally {
                    if (r) throw o
                }
            }
            t.length > 0 ? a[e.type] = t : delete a[e.type]
        }
        return !1
    }
}