function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useChannelAutocompleteLayerPosition: function() {
            return u
        }
    });
    var r = n("470079"),
        o = n("813970"),
        i = n("209610");

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function u(e) {
        var t, n, u = e.editorHeight,
            s = e.type,
            l = e.state,
            c = e.isInPopoutExperiment,
            f = void 0 !== c && c;
        var d = (t = r.useState(void 0), n = 2, function(e) {
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
                    if ("string" == typeof e) return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            _ = d[0],
            E = d[1],
            p = null == l ? void 0 : l.query,
            m = null == l ? void 0 : l.isVisible,
            y = r.useContext(o.default).renderWindow,
            I = r.useCallback(function() {
                if (null != l && (null == p || !m)) {
                    E(void 0);
                    return
                }
                if ((null == p ? void 0 : p.type) === i.AutocompleteOptionTypes.GIFS || null != s && !f && !(null === (e = s.autocomplete) || void 0 === e ? void 0 : e.alwaysUseLayer)) {
                    E(null);
                    return
                }
                var e, t, n, r, o = y.document.getSelection(),
                    a = null != o && o.rangeCount > 0 ? o.getRangeAt(0) : null;
                if (null == a) return;
                for (var u = a.startContainer, c = a.startOffset; null != u;) {
                    if (u.nodeType !== Node.TEXT_NODE || null == u.nodeValue) {
                        E(null);
                        return
                    }
                    if ((null === (t = u.nodeValue) || void 0 === t ? void 0 : t.length) === 0) {
                        c = null !== (r = null == (u = u.previousSibling) ? void 0 : null === (n = u.nodeValue) || void 0 === n ? void 0 : n.length) && void 0 !== r ? r : 0;
                        continue
                    }
                    null != p && (c >= p.queryText.length ? c -= p.queryText.length : c = 0);
                    break
                }
                if (null != u) {
                    var d = y.document.createRange();
                    d.setStart(u, c), d.setEnd(u, c);
                    var _ = d.getBoundingClientRect();
                    (null == _ ? void 0 : _.height) !== 0 && E(null != _ ? _ : null)
                }
            }, [f, y.document, l, m, p, s]);
        return r.useEffect(function() {
            return y.document.addEventListener("selectionchange", I),
                function() {
                    return y.document.removeEventListener("selectionchange", I)
                }
        }, [y.document, I]), r.useEffect(function() {
            I()
        }, [I, u]), _
    }
}