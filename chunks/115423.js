function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isListItemRow: function() {
            return i
        }
    });

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function i(e) {
        return "row" === e.type
    }
    var a = function() {
        var e, t, n;

        function i() {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, i), o(this, "sectionHeight", 0), o(this, "rowHeight", 0), o(this, "footerHeight", 0), o(this, "listHeaderHeight", 0), o(this, "uniform", !1), o(this, "paddingBottom", 0), o(this, "paddingTop", 0), o(this, "sections", []), o(this, "getAnchorId", function() {})
        }
        return e = i, t = [{
            key: "mergeProps",
            value: function(e) {
                var t = e.sectionHeight,
                    n = e.rowHeight,
                    r = e.footerHeight,
                    o = e.listHeaderHeight,
                    i = e.paddingTop,
                    a = e.paddingBottom,
                    u = e.sections,
                    s = e.getAnchorId;
                this.sections = u, this.sectionHeight = t, this.rowHeight = n, this.footerHeight = r, this.listHeaderHeight = o, this.uniform = "number" == typeof n, this.paddingTop = i, this.paddingBottom = a, this.getAnchorId = null != s ? s : this.getAnchorId
            }
        }, {
            key: "getHeight",
            value: function() {
                for (var e = this.paddingTop + this.getListHeaderHeight(), t = this.sections.length, n = 0; n < t; n++) {
                    if (e += this.getHeightForSection(n), this.uniform) e += this.sections[n] * this.getHeightForRow(n, 0);
                    else
                        for (var r = 0; r < this.sections[n]; r++) e += this.getHeightForRow(n, r);
                    e += this.getHeightForFooter(n)
                }
                return e + this.paddingBottom
            }
        }, {
            key: "getHeightForSection",
            value: function(e) {
                var t = this.sectionHeight;
                return "number" == typeof t ? t : t(e)
            }
        }, {
            key: "getHeightForRow",
            value: function(e, t) {
                var n = this.rowHeight;
                return "number" == typeof n ? n : n(e, t)
            }
        }, {
            key: "getHeightForFooter",
            value: function(e) {
                var t = this.footerHeight;
                return null == t ? 0 : "number" == typeof t ? t : t(e)
            }
        }, {
            key: "getListHeaderHeight",
            value: function() {
                var e = this.listHeaderHeight;
                return null == e ? 0 : "number" == typeof e ? e : e()
            }
        }, {
            key: "compute",
            value: function(e, t) {
                var n = this.paddingTop,
                    r = n,
                    o = n,
                    i = 0,
                    a = 0,
                    u = [],
                    s = function(i) {
                        return (o = n, (n += i) < e) ? (r += i, !1) : !(o > t) && !0
                    };
                s(this.getListHeaderHeight()) && u.push({
                    type: "header",
                    section: -1,
                    offsetTop: o
                });
                for (var l = 0; l < this.sections.length; l++) {
                    var c = this.sections[l];
                    if (0 !== c) {
                        if (s(this.getHeightForSection(l)) && u.push({
                                type: "section",
                                section: l,
                                listIndex: a,
                                offsetTop: o,
                                anchorId: this.getAnchorId(l)
                            }), a += 1, this.uniform) {
                            for (var f = this.getHeightForRow(l, 0), d = 0; d < c; d++) s(f) && u.push({
                                type: "row",
                                section: l,
                                listIndex: a,
                                row: d,
                                rowIndex: i,
                                offsetTop: o,
                                anchorId: this.getAnchorId(l, d)
                            }), i += 1, a += 1
                        } else
                            for (var _ = 0; _ < c; _++) s(this.getHeightForRow(l, _)) && u.push({
                                type: "row",
                                section: l,
                                listIndex: a,
                                row: _,
                                rowIndex: i,
                                offsetTop: o,
                                anchorId: this.getAnchorId(l, _)
                            }), i += 1, a += 1;
                        s(this.getHeightForFooter(l)) && u.push({
                            type: "footer",
                            section: l,
                            offsetTop: o
                        })
                    }
                }
                return {
                    spacerTop: r,
                    totalHeight: n + this.paddingBottom,
                    items: u
                }
            }
        }, {
            key: "computeScrollPosition",
            value: function(e, t) {
                for (var n = this.paddingTop + this.getListHeaderHeight(), r = 0, o = !1; r <= e;) {
                    var i = this.sections[r];
                    if (r === e && null == t) {
                        o = !0;
                        break
                    }
                    if (0 === i) {
                        r += 1;
                        continue
                    }
                    if (n += this.getHeightForSection(r), this.uniform) {
                        var a = this.getHeightForRow(r, 0);
                        r === e && null != t ? (n += a * t, o = !0) : n += a * i
                    } else
                        for (var u = 0; u < i; u++)
                            if (r < e || r === e && null != t && u < t) n += this.getHeightForRow(r, u);
                            else if (r === e && null != t && u === t) {
                        o = !0;
                        break
                    }!o && (n += this.getHeightForFooter(r)), r += 1
                }
                return [n, null != t ? this.getHeightForRow(e, t) : this.getHeightForSection(r)]
            }
        }], r(e.prototype, t), n && r(e, n), i
    }();
    t.default = a
}