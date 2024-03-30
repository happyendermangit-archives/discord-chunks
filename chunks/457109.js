function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        a = n("392711"),
        o = n("784184"),
        l = n("941504"),
        i = n("788366");

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    t.default = function(e) {
        var t = (0, a.flatMap)(e.history, function(e) {
            var t, n, r, a = (t = e.destination, n = 1, function(e) {
                    if (Array.isArray(e)) return e
                }(t) || function(e, t) {
                    var n, r, a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != a) {
                        var o = [],
                            l = !0,
                            i = !1;
                        try {
                            for (a = a.call(e); !(l = (n = a.next()).done) && (o.push(n.value), !t || o.length !== t); l = !0);
                        } catch (e) {
                            i = !0, r = e
                        } finally {
                            try {
                                !l && null != a.return && a.return()
                            } finally {
                                if (i) throw r
                            }
                        }
                        return o
                    }
                }(t, n) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return u(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                    }
                }(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }())[0],
                o = e.multiSelect,
                l = [null, null],
                i = Object.values(null !== (r = null == o ? void 0 : o.state) && void 0 !== r ? r : {});
            return i.length > 0 && (l[0] = i.join(", ")), "" !== a && (l[1] = a), l
        }).filter(function(e) {
            return null != e
        });
        return 0 === t.length ? null : r.createElement("div", {
            className: i.container
        }, r.createElement(o.Heading, {
            className: i.breadcrumbsHeader,
            color: "header-secondary",
            variant: "heading-sm/semibold"
        }, l.default.Messages.MOBILE_REPORTS_BREADCRUMBS_TITLE), t.map(function(e, t) {
            return r.createElement("div", {
                key: "".concat(e, "+").concat(t),
                className: i.breadcrumbContainer
            }, r.createElement("div", {
                className: i.breadcrumbDot
            }), r.createElement(o.Text, {
                variant: "text-md/normal",
                className: i.breadcrumbText
            }, e))
        }))
    }
}