function(e, t, n) {
    "use strict";

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    n.r(t), n.d(t, {
        default: function() {
            return l
        },
        getMasonryListSectionHeaderKey: function() {
            return a
        },
        getMasonryListSectionIndex: function() {
            return s
        }
    }), n("757143"), n("724458"), n("47120"), n("653041"), n("733860"), n("411104");
    let r = e => "__section__".concat(e),
        a = e => "__section_header__".concat(e),
        s = e => parseInt(e.replace(/^__section__/, ""), 10),
        o = () => 0;
    class l {
        getPadding() {
            return null != this.padding ? this.padding : this.itemGutter
        }
        getPaddingVertical() {
            return null != this.paddingVertical ? this.paddingVertical : this.getPadding()
        }
        getPaddingHorizontal() {
            return null != this.paddingHorizontal ? this.paddingHorizontal : this.getPadding()
        }
        getSectionGutter() {
            return null != this.sectionGutter ? this.sectionGutter : this.itemGutter
        }
        mergeProps(e) {
            let {
                sections: t = this.sections,
                columns: n = this.columns,
                itemGutter: i = this.itemGutter,
                removeEdgeItemGutters: r = this.removeEdgeItemGutters,
                getItemKey: a = this.getItemKey,
                getItemHeight: s = this.getItemHeight,
                getSectionHeight: o = this.getSectionHeight,
                bufferWidth: l = this.bufferWidth,
                padding: u = this.padding,
                paddingVertical: d = this.paddingVertical,
                paddingHorizontal: _ = this.paddingHorizontal,
                sectionGutter: c = this.sectionGutter,
                dir: E = this.dir
            } = e;
            (this.sections !== t || this.columns !== n || this.itemGutter !== i || this.removeEdgeItemGutters !== r || this.getItemKey !== a || this.getSectionHeight !== o || this.getItemHeight !== s || this.bufferWidth !== l || this.padding !== u || this.paddingVertical !== d || this.paddingHorizontal !== _ || this.sectionGutter !== c || this.dir !== E) && (this.needsFullCompute = !0, this.sections = t, this.columns = n, this.itemGutter = i, this.getItemKey = a, this.getSectionHeight = o, this.getItemHeight = s, this.bufferWidth = l, this.padding = u, this.paddingVertical = d, this.paddingHorizontal = _, this.sectionGutter = c, this.dir = E)
        }
        computeFullCoords() {
            if (!this.needsFullCompute) return;
            let {
                columns: e,
                getItemKey: t,
                getItemHeight: n,
                itemGutter: i,
                getSectionHeight: s,
                bufferWidth: o,
                removeEdgeItemGutters: l
            } = this, u = "rtl" === this.dir ? "right" : "left";
            this.coordsMap = {}, this.gridData = {
                boundaries: [],
                coordinates: {}
            }, this.currentRow = 0, this.lastColumnIndex = 0;
            let d = this.getPaddingHorizontal(),
                _ = this.getPaddingVertical();
            this.columnHeights = Array(e).fill(_), this.columnWidth = (o - 2 * d - i * (e - 1) - (l ? i : 0)) / e, this.itemGrid = [];
            let c = 0;
            for (; c < this.sections.length;) {
                this.gridData.boundaries[c] = this.currentRow, this.currentRow = 0, this.lastColumnIndex = 0;
                let o = this.sections[c],
                    l = 0,
                    _ = s(c),
                    T = this.getMaxColumnHeight(this.columnHeights);
                c > 0 && (T = T - i + this.getSectionGutter());
                let f = _ > 0 ? _ + i : 0;
                for (let e = 0; e < this.columnHeights.length; e++) this.columnHeights[e] = T + f;
                for (; l < o;) {
                    var E, I;
                    let e = t(c, l);
                    if (null == e) {
                        l++;
                        continue
                    }
                    let [r, a] = (I = this.columnHeights).reduce((e, t, n) => t < e[0] ? [t, n] : e, [I[0], 0]);
                    a < this.lastColumnIndex && this.currentRow++, this.lastColumnIndex = a;
                    let s = n(c, l, this.columnWidth),
                        o = {
                            position: "absolute",
                            [u]: this.columnWidth * a + i * (a + 1) - i,
                            width: this.columnWidth,
                            top: r - T,
                            height: s
                        },
                        d = {
                            section: c,
                            row: this.currentRow,
                            column: a
                        };
                    this.coordsMap[e] = o, this.gridData.coordinates[e] = d, this.columnHeights[a] = r + s + i, this.itemGrid[a] = null !== (E = this.itemGrid[a]) && void 0 !== E ? E : [], this.itemGrid[a].push(e), l++
                }
                _ > 0 && (this.coordsMap[a(c)] = {
                    position: "sticky",
                    [u]: 0,
                    width: this.columnWidth * e + i * e,
                    top: 0,
                    height: _
                }), this.coordsMap[r(c)] = {
                    position: "absolute",
                    [u]: d,
                    width: this.columnWidth * e + i * (e - 1),
                    top: T,
                    height: this.getMaxColumnHeight(this.columnHeights) - T - i
                }, c++
            }
            this.columnHeights = this.columnHeights.map(e => e - i + _), this.totalHeight = this.getMaxColumnHeight(), this.visibleSections = {}, this.needsFullCompute = !1
        }
        computeVisibleSections(e, t) {
            this.computeFullCoords();
            let {
                getItemKey: n,
                coordsMap: i
            } = this;
            this.visibleSections = {};
            let a = 0;
            for (; a < this.sections.length;) {
                let s = this.sections[a],
                    o = r(a),
                    l = i[o];
                if (null == l) {
                    a++;
                    continue
                }
                let {
                    top: u
                } = l, d = u + l.height;
                if (u > t) break;
                if (d < e) {
                    a++;
                    continue
                }
                let _ = 0,
                    c = 1;
                for (d < t && d > e && (_ = s - 1, c = -1), this.visibleSections[o] = []; _ >= 0 && _ < s;) {
                    let r = n(a, _),
                        s = null != r ? i[r] : null;
                    if (null == r || null == s) {
                        _ += c;
                        continue
                    }
                    let {
                        top: l,
                        height: d
                    } = s;
                    l + u > e - d && l + u < t && (-1 === c ? this.visibleSections[o].unshift([r, a, _]) : this.visibleSections[o].push([r, a, _])), _ += c
                }
                if (u < e && d > t) break;
                a++
            }
        }
        getMaxColumnHeight() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.columnHeights;
            return e.reduce((e, t) => Math.max(e, t), 0)
        }
        getState() {
            return {
                coordsMap: this.coordsMap,
                gridData: this.gridData,
                visibleSections: this.visibleSections,
                totalHeight: this.totalHeight
            }
        }
        constructor() {
            i(this, "visibleSections", {}), i(this, "gridData", {
                coordinates: {},
                boundaries: []
            }), i(this, "coordsMap", {}), i(this, "columnHeights", []), i(this, "columnWidth", 0), i(this, "totalHeight", 0), i(this, "itemGrid", []), i(this, "currentRow", 0), i(this, "lastColumnIndex", 0), i(this, "needsFullCompute", !0), i(this, "bufferWidth", 0), i(this, "sections", []), i(this, "columns", 0), i(this, "itemGutter", 0), i(this, "removeEdgeItemGutters", !1), i(this, "sectionGutter", null), i(this, "padding", null), i(this, "paddingVertical", null), i(this, "paddingHorizontal", null), i(this, "dir", "ltr"), i(this, "getItemKey", () => {
                throw Error("MasonryListComputer: getItemKey has not been implemented")
            }), i(this, "getItemHeight", () => {
                throw Error("MasonryListComputer: getItemHeight has not been implemented")
            }), i(this, "getSectionHeight", o)
        }
    }
}