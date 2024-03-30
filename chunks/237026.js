function(e, t, n) {
    "use strict";

    function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    n.r(t), n.d(t, {
        default: function() {
            return c
        },
        getMasonryListSectionHeaderKey: function() {
            return u
        },
        getMasonryListSectionIndex: function() {
            return s
        }
    });

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var a = function(e) {
            return "__section__".concat(e)
        },
        u = function(e) {
            return "__section_header__".concat(e)
        },
        s = function(e) {
            return parseInt(e.replace(/^__section__/, ""), 10)
        },
        l = function() {
            return 0
        },
        c = function() {
            var e, t, n;

            function s() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, s), i(this, "visibleSections", {}), i(this, "gridData", {
                    coordinates: {},
                    boundaries: []
                }), i(this, "coordsMap", {}), i(this, "columnHeights", []), i(this, "columnWidth", 0), i(this, "totalHeight", 0), i(this, "itemGrid", []), i(this, "currentRow", 0), i(this, "lastColumnIndex", 0), i(this, "needsFullCompute", !0), i(this, "bufferWidth", 0), i(this, "sections", []), i(this, "columns", 0), i(this, "itemGutter", 0), i(this, "removeEdgeItemGutters", !1), i(this, "sectionGutter", null), i(this, "padding", null), i(this, "paddingVertical", null), i(this, "paddingHorizontal", null), i(this, "dir", "ltr"), i(this, "getItemKey", function() {
                    throw Error("MasonryListComputer: getItemKey has not been implemented")
                }), i(this, "getItemHeight", function() {
                    throw Error("MasonryListComputer: getItemHeight has not been implemented")
                }), i(this, "getSectionHeight", l)
            }
            return e = s, t = [{
                key: "getPadding",
                value: function() {
                    return null != this.padding ? this.padding : this.itemGutter
                }
            }, {
                key: "getPaddingVertical",
                value: function() {
                    return null != this.paddingVertical ? this.paddingVertical : this.getPadding()
                }
            }, {
                key: "getPaddingHorizontal",
                value: function() {
                    return null != this.paddingHorizontal ? this.paddingHorizontal : this.getPadding()
                }
            }, {
                key: "getSectionGutter",
                value: function() {
                    return null != this.sectionGutter ? this.sectionGutter : this.itemGutter
                }
            }, {
                key: "mergeProps",
                value: function(e) {
                    var t = e.sections,
                        n = void 0 === t ? this.sections : t,
                        r = e.columns,
                        o = void 0 === r ? this.columns : r,
                        i = e.itemGutter,
                        a = void 0 === i ? this.itemGutter : i,
                        u = e.removeEdgeItemGutters,
                        s = void 0 === u ? this.removeEdgeItemGutters : u,
                        l = e.getItemKey,
                        c = void 0 === l ? this.getItemKey : l,
                        f = e.getItemHeight,
                        d = void 0 === f ? this.getItemHeight : f,
                        _ = e.getSectionHeight,
                        E = void 0 === _ ? this.getSectionHeight : _,
                        p = e.bufferWidth,
                        m = void 0 === p ? this.bufferWidth : p,
                        y = e.padding,
                        I = void 0 === y ? this.padding : y,
                        h = e.paddingVertical,
                        O = void 0 === h ? this.paddingVertical : h,
                        T = e.paddingHorizontal,
                        S = void 0 === T ? this.paddingHorizontal : T,
                        v = e.sectionGutter,
                        g = void 0 === v ? this.sectionGutter : v,
                        A = e.dir,
                        b = void 0 === A ? this.dir : A;
                    (this.sections !== n || this.columns !== o || this.itemGutter !== a || this.removeEdgeItemGutters !== s || this.getItemKey !== c || this.getSectionHeight !== E || this.getItemHeight !== d || this.bufferWidth !== m || this.padding !== I || this.paddingVertical !== O || this.paddingHorizontal !== S || this.sectionGutter !== g || this.dir !== b) && (this.needsFullCompute = !0, this.sections = n, this.columns = o, this.itemGutter = a, this.getItemKey = c, this.getSectionHeight = E, this.getItemHeight = d, this.bufferWidth = m, this.padding = I, this.paddingVertical = O, this.paddingHorizontal = S, this.sectionGutter = g, this.dir = b)
                }
            }, {
                key: "computeFullCoords",
                value: function() {
                    if (this.needsFullCompute) {
                        var e = this.columns,
                            t = this.getItemKey,
                            n = this.getItemHeight,
                            o = this.itemGutter,
                            s = this.getSectionHeight,
                            l = this.bufferWidth,
                            c = this.removeEdgeItemGutters,
                            f = "rtl" === this.dir ? "right" : "left";
                        this.coordsMap = {}, this.gridData = {
                            boundaries: [],
                            coordinates: {}
                        }, this.currentRow = 0, this.lastColumnIndex = 0;
                        var d = this.getPaddingHorizontal(),
                            _ = this.getPaddingVertical();
                        this.columnHeights = Array(e).fill(_), this.columnWidth = (l - 2 * d - o * (e - 1) - (c ? o : 0)) / e, this.itemGrid = [];
                        for (var E = 0; E < this.sections.length;) {
                            this.gridData.boundaries[E] = this.currentRow, this.currentRow = 0, this.lastColumnIndex = 0;
                            var p, m, y = this.sections[E],
                                I = 0,
                                h = s(E),
                                O = this.getMaxColumnHeight(this.columnHeights);
                            E > 0 && (O = O - o + this.getSectionGutter());
                            for (var T = h > 0 ? h + o : 0, S = 0; S < this.columnHeights.length; S++) this.columnHeights[S] = O + T;
                            for (; I < y;) {
                                var v, g, A, b, N, R = t(E, I);
                                if (null == R) {
                                    I++;
                                    continue
                                }
                                var C = (g = (v = this.columnHeights).reduce(function(e, t, n) {
                                        return t < e[0] ? [t, n] : e
                                    }, [v[0], 0]), A = 2, function(e) {
                                        if (Array.isArray(e)) return e
                                    }(g) || function(e, t) {
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
                                    }(g, A) || function(e, t) {
                                        if (e) {
                                            if ("string" == typeof e) return r(e, t);
                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
                                        }
                                    }(g, A) || function() {
                                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }()),
                                    P = C[0],
                                    D = C[1];
                                D < this.lastColumnIndex && this.currentRow++, this.lastColumnIndex = D;
                                var L = n(E, I, this.columnWidth),
                                    M = (i(b = {
                                        position: "absolute"
                                    }, f, this.columnWidth * D + o * (D + 1) - o), i(b, "width", this.columnWidth), i(b, "top", P - O), i(b, "height", L), b),
                                    U = {
                                        section: E,
                                        row: this.currentRow,
                                        column: D
                                    };
                                this.coordsMap[R] = M, this.gridData.coordinates[R] = U, this.columnHeights[D] = P + L + o, this.itemGrid[D] = null !== (N = this.itemGrid[D]) && void 0 !== N ? N : [], this.itemGrid[D].push(R), I++
                            }
                            h > 0 && (this.coordsMap[u(E)] = (i(p = {
                                position: "sticky"
                            }, f, 0), i(p, "width", this.columnWidth * e + o * e), i(p, "top", 0), i(p, "height", h), p)), this.coordsMap[a(E)] = (i(m = {
                                position: "absolute"
                            }, f, d), i(m, "width", this.columnWidth * e + o * (e - 1)), i(m, "top", O), i(m, "height", this.getMaxColumnHeight(this.columnHeights) - O - o), m), E++
                        }
                        this.columnHeights = this.columnHeights.map(function(e) {
                            return e - o + _
                        }), this.totalHeight = this.getMaxColumnHeight(), this.visibleSections = {}, this.needsFullCompute = !1
                    }
                }
            }, {
                key: "computeVisibleSections",
                value: function(e, t) {
                    this.computeFullCoords();
                    var n = this.getItemKey,
                        r = this.coordsMap;
                    this.visibleSections = {};
                    for (var o = 0; o < this.sections.length;) {
                        var i = this.sections[o],
                            u = a(o),
                            s = r[u];
                        if (null == s) {
                            o++;
                            continue
                        }
                        var l = s.top,
                            c = l + s.height;
                        if (l > t) break;
                        if (c < e) {
                            o++;
                            continue
                        }
                        var f = 0,
                            d = 1;
                        for (c < t && c > e && (f = i - 1, d = -1), this.visibleSections[u] = []; f >= 0 && f < i;) {
                            var _ = n(o, f),
                                E = null != _ ? r[_] : null;
                            if (null == _ || null == E) {
                                f += d;
                                continue
                            }
                            var p = E.top;
                            p + l > e - E.height && p + l < t && (-1 === d ? this.visibleSections[u].unshift([_, o, f]) : this.visibleSections[u].push([_, o, f])), f += d
                        }
                        if (l < e && c > t) break;
                        o++
                    }
                }
            }, {
                key: "getMaxColumnHeight",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.columnHeights;
                    return e.reduce(function(e, t) {
                        return Math.max(e, t)
                    }, 0)
                }
            }, {
                key: "getState",
                value: function() {
                    return {
                        coordsMap: this.coordsMap,
                        gridData: this.gridData,
                        visibleSections: this.visibleSections,
                        totalHeight: this.totalHeight
                    }
                }
            }], o(e.prototype, t), n && o(e, n), s
        }()
}