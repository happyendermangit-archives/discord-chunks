function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("29570"),
        s = n("292206"),
        l = n("297098"),
        c = n("567687"),
        f = n("366817"),
        d = n("992572"),
        _ = n("118891"),
        E = n("347199");

    function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function m(e) {
        var t, n, o, m, y, I, h, O = e.channel,
            T = e.isAppDetailPresent;
        var S = (t = r.useState(""), n = 2, function(e) {
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
                    if ("string" == typeof e) return p(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            v = S[0],
            g = S[1],
            A = r.useCallback(function() {
                return g("")
            }, [g]),
            b = s.useDiscovery(O, {
                commandType: u.ApplicationCommandType.CHAT
            }, {
                placeholderCount: 0,
                limit: _.DISCOVERY_COMMANDS_QUERY_LIMIT,
                includeFrecency: !0
            }),
            N = b.commandsByActiveSection,
            R = b.sectionDescriptors,
            C = b.filterSection;
        r.useEffect(function() {
            C(_.BuiltInSectionId.FRECENCY)
        }, [C]);
        var P = null !== (h = null === (I = N[0]) || void 0 === I ? void 0 : I.data) && void 0 !== h ? h : [],
            D = R.filter(function(e) {
                return e.id !== _.BuiltInSectionId.FRECENCY && e.id !== _.BuiltInSectionId.BUILT_IN
            }),
            L = (0, l.useSortApplicationsViaFrecency)(D);
        return r.createElement("div", {
            className: i()(E.container, (o = {}, m = E.appDetailVisible, y = T, m in o ? Object.defineProperty(o, m, {
                value: y,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : o[m] = y, o))
        }, r.createElement("div", {
            className: E.searchBarContainer
        }, r.createElement(c.default, {
            placeholder: "Search Apps & Commands",
            onChange: g,
            query: v,
            onClear: A,
            size: c.default.Sizes.MEDIUM
        })), r.createElement(a.Scroller, {
            className: E.scrollableContent,
            fade: !0
        }, r.createElement(f.default, {
            channel: O,
            commands: P,
            sectionDescriptors: R
        }), r.createElement(d.default, {
            channel: O,
            applications: L
        })))
    }
}