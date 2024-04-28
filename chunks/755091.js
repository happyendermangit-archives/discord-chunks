function(e, t, n) {
    "use strict";

    function r(e) {
        return e && "object" == typeof e && "default" in e ? e.default : e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(n("229195")),
        a = n("372542"),
        o = n("699581"),
        s = n("179237"),
        u = r(n("865481")),
        c = n("560656"),
        l = n("698091"),
        d = r(n("44035")),
        f = /^--/,
        p = {},
        h = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        m = ["Webkit", "Ms", "Moz", "O"];
    h = Object.keys(h).reduce(function(e, t) {
        return m.forEach(function(n) {
            var r;
            return e[n + (r = t).charAt(0).toUpperCase() + r.substring(1)] = e[t]
        }), e
    }, h);
    var g = /^(matrix|translate|scale|rotate|skew)/,
        _ = /^(translate)/,
        b = /^(rotate|skew)/,
        v = function(e, t) {
            return l.is.num(e) && 0 !== e ? e + t : e
        },
        y = function e(t, n) {
            return l.is.arr(t) ? t.every(function(t) {
                return e(t, n)
            }) : l.is.num(t) ? t === n : parseFloat(t) === n
        },
        E = function(e) {
            function t(t) {
                var n = t.x,
                    r = t.y,
                    a = t.z,
                    o = i(t, ["x", "y", "z"]),
                    s = [],
                    u = [];
                return (n || r || a) && (s.push([n || 0, r || 0, a || 0]), u.push(function(e) {
                    return ["translate3d(" + e.map(function(e) {
                        return v(e, "px")
                    }).join(",") + ")", y(e, 0)]
                })), l.each(o, function(e, t) {
                    if ("transform" === t) s.push([e || ""]), u.push(function(e) {
                        return [e, "" === e]
                    });
                    else if (g.test(t)) {
                        if (delete o[t], l.is.und(e)) return;
                        var n = _.test(t) ? "px" : b.test(t) ? "deg" : "";
                        s.push(l.toArray(e)), u.push("rotate3d" === t ? function(e) {
                            var t = e[0],
                                r = e[1],
                                i = e[2],
                                a = e[3];
                            return ["rotate3d(" + t + "," + r + "," + i + "," + v(a, n) + ")", y(a, 0)]
                        } : function(e) {
                            return [t + "(" + e.map(function(e) {
                                return v(e, n)
                            }).join(",") + ")", y(e, t.startsWith("scale") ? 1 : 0)]
                        })
                    }
                }), s.length && (o.transform = new S(s, u)), e.call(this, o) || this
            }
            return d(t, e), t
        }(c.AnimatedObject),
        S = function(e) {
            function t(t, n) {
                var r;
                return (r = e.call(this) || this).inputs = t, r.transforms = n, r._value = null, r._children = new Set, r
            }
            d(t, e);
            var n = t.prototype;
            return n.get = function() {
                return this._value || (this._value = this._get())
            }, n._get = function() {
                var e = this,
                    t = "",
                    n = !0;
                return l.each(this.inputs, function(r, i) {
                    var a = l.getFluidValue(r[0]),
                        o = e.transforms[i](l.is.arr(a) ? a : r.map(l.getFluidValue)),
                        s = o[0],
                        u = o[1];
                    t += " " + s, n = n && u
                }), n ? "none" : t
            }, n.addChild = function(e) {
                var t = this;
                !this._children.size && l.each(this.inputs, function(e) {
                    return l.each(e, function(e) {
                        var n = l.getFluidConfig(e);
                        n && n.addChild(t)
                    })
                }), this._children.add(e)
            }, n.removeChild = function(e) {
                var t = this;
                this._children.delete(e), !this._children.size && l.each(this.inputs, function(e) {
                    return l.each(e, function(e) {
                        var n = l.getFluidConfig(e);
                        n && n.removeChild(t)
                    })
                })
            }, n.onParentChange = function(e) {
                "change" == e.type && (this._value = null), l.each(this._children, function(t) {
                    t.onParentChange(e)
                })
            }, t
        }(l.FluidValue);
    a.Globals.assign({
        colorNames: u,
        createStringInterpolator: s.createStringInterpolator,
        batchedUpdates: o.unstable_batchedUpdates
    });
    var x = c.createHost(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
        applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            var n = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
                r = t.style,
                a = t.children,
                o = t.scrollTop,
                s = t.scrollLeft,
                u = i(t, ["style", "children", "scrollTop", "scrollLeft"]),
                c = Object.values(u),
                d = Object.keys(u).map(function(t) {
                    return n || e.hasAttribute(t) ? t : p[t] || (p[t] = t.replace(/([A-Z])/g, function(e) {
                        return "-" + e.toLowerCase()
                    }))
                });
            l.Globals.frameLoop.onWrite(function() {
                for (var t in void 0 !== a && (e.textContent = a), r)
                    if (r.hasOwnProperty(t)) {
                        var n, i, u = (n = t, null == (i = r[t]) || "boolean" == typeof i || "" === i ? "" : "number" != typeof i || 0 === i || f.test(n) || h.hasOwnProperty(n) && h[n] ? ("" + i).trim() : i + "px");
                        "float" === t ? t = "cssFloat" : f.test(t) ? e.style.setProperty(t, u) : e.style[t] = u
                    } d.forEach(function(t, n) {
                    e.setAttribute(t, c[n])
                }), void 0 !== o && (e.scrollTop = o), void 0 !== s && (e.scrollLeft = s)
            })
        },
        createAnimatedStyle: function(e) {
            return new E(e)
        },
        getComponentProps: function(e) {
            return e.scrollTop, e.scrollLeft, i(e, ["scrollTop", "scrollLeft"])
        }
    }).animated;
    Object.keys(a).forEach(function(e) {
        "default" !== e && Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
                return a[e]
            }
        })
    }), t.a = x, t.animated = x
}