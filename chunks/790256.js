function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Paginator: function() {
            return I
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("608036"),
        u = n("324377"),
        s = n("556026"),
        l = n("583062"),
        c = n("717068"),
        f = n("379698"),
        d = n("241858"),
        _ = n("941504"),
        E = n("91662");

    function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function m(e, t) {
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
                if ("string" == typeof e) return p(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function y(e) {
        var t = e.page,
            n = e.totalPageCount,
            o = e.disabled,
            a = e.onPageChange,
            c = m(r.useState(!1), 2),
            f = c[0],
            d = c[1],
            _ = m(r.useState(null), 2),
            p = _[0],
            y = _[1],
            I = null != p && p >= 1 && p <= n;
        return o ? r.createElement(s.Heading, {
            key: t.key,
            className: E.gap,
            "aria-hidden": !0,
            variant: "heading-sm/semibold"
        }, "…") : f ? r.createElement(l.TextInput, {
            autoFocus: !0,
            key: t.key,
            className: E.jumpToPageInlineInput,
            size: l.TextInput.Sizes.MINI,
            value: null == p ? "" : "".concat(p),
            onChange: function(e) {
                var t = parseInt(e);
                if ("" === e || isNaN(t)) {
                    y(null);
                    return
                }
                y(t)
            },
            onBlur: function() {
                d(!1), y(null)
            },
            onKeyPress: function(e) {
                "Enter" === e.key && null != p && I && (a(p), d(!1), y(null))
            },
            disabled: o
        }) : r.createElement(u.Clickable, {
            key: t.key,
            onClick: function() {
                return d(!0)
            }
        }, r.createElement(s.Heading, {
            className: i()(E.roundButton, E.gap),
            "aria-hidden": !0,
            variant: "heading-sm/semibold"
        }, "…"))
    }

    function I(e) {
        var t = e.currentPage,
            n = e.totalCount,
            o = e.pageSize,
            s = e.maxVisiblePages,
            l = e.disablePaginationGap,
            p = e.onPageChange,
            m = e.hideMaxPage,
            I = e.className,
            h = Math.ceil(n / o);
        return r.createElement(d.PaginationController, {
            totalPageCount: h,
            selectedPage: t,
            maxVisiblePages: s,
            hideMaxPage: void 0 !== m && m,
            onPageChange: function(e) {
                null != p && p(e)
            }
        }, function(e) {
            var t = e.pages;
            return e.hasMultiplePages ? r.createElement("div", {
                className: i()(E.pageControlContainer, I)
            }, r.createElement("nav", {
                className: E.pageControl
            }, t.map(function(e) {
                var t, n, o, s, m, I, O, T, S, v, g, A, b;
                switch (e.type) {
                    case d.PaginationTypes.BACK:
                        ;
                        return n = (t = e).key, o = t.disabled, s = t.navigateToPage, r.createElement(a.Button, {
                            key: n,
                            className: E.endButton,
                            innerClassName: E.endButtonInner,
                            look: a.Button.Looks.BLANK,
                            color: a.Button.Colors.TRANSPARENT,
                            onClick: s,
                            disabled: o,
                            rel: "prev"
                        }, r.createElement(c.default, {
                            className: E.iconCaret,
                            "aria-hidden": !0
                        }), r.createElement("span", null, _.default.Messages.BACK));
                    case d.PaginationTypes.PAGE:
                        ;
                        return m = e, r.createElement(u.Clickable, {
                            key: m.key,
                            className: i()(E.roundButton, (I = {}, O = E.activeButton, T = m.selected, O in I ? Object.defineProperty(I, O, {
                                value: T,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : I[O] = T, I)),
                            onClick: m.selected ? void 0 : m.navigateToPage,
                            "aria-label": _.default.Messages.PAGINATION_PAGE_LABEL.format({
                                pageNumber: m.targetPage
                            }),
                            "aria-current": m.selected ? "page" : void 0
                        }, r.createElement("span", null, m.targetPage));
                    case d.PaginationTypes.GAP:
                        ;
                        return S = e, r.createElement(y, {
                            key: S.key,
                            page: S,
                            totalPageCount: h,
                            disabled: !!l,
                            onPageChange: p
                        });
                    case d.PaginationTypes.NEXT:
                        ;
                        return g = (v = e).key, A = v.disabled, b = v.navigateToPage, r.createElement(a.Button, {
                            key: g,
                            className: E.endButton,
                            innerClassName: E.endButtonInner,
                            look: a.Button.Looks.BLANK,
                            color: a.Button.Colors.TRANSPARENT,
                            onClick: b,
                            disabled: A,
                            rel: "next"
                        }, r.createElement("span", null, _.default.Messages.NEXT), r.createElement(f.default, {
                            className: E.iconCaret,
                            "aria-hidden": !0
                        }));
                    default:
                        return null
                }
            }))) : null
        })
    }
}