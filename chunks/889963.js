function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PaginationController: function() {
            return d
        },
        PaginationTypes: function() {
            return i
        }
    }), n("47120"), n("653041");
    var i, r, s, a = n("470079"),
        o = n("392711"),
        l = n.n(o);

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(s = i || (i = {})).PAGE = "PAGE", s.GAP = "GAP", s.BACK = "BACK", s.NEXT = "NEXT";
    class d extends(r = a.PureComponent) {
        getNeighborBounds() {
            let {
                totalPageCount: e,
                maxVisiblePages: t,
                selectedPage: n
            } = this.props, i = Math.ceil(t / 2), r = Math.floor(t / 2), s = [1, e], [a, o] = s = n <= i ? [1, t] : n > e - r ? [e - t + 1, e] : [n - i + 1, n + r];
            return [Math.max(a, 1), Math.min(o, e)]
        }
        getPageList() {
            let {
                totalPageCount: e,
                selectedPage: t,
                hideMaxPage: n
            } = this.props, [i, r] = this.getNeighborBounds(), s = {
                type: "BACK",
                key: "back",
                disabled: 1 === t,
                selected: !1,
                navigateToPage: this.handleBackward
            }, a = {
                type: "NEXT",
                key: "next",
                disabled: t === e,
                selected: !1,
                navigateToPage: this.handleForward
            }, o = [], u = [];
            return i > 1 && (o = [{
                type: "PAGE",
                key: "page-1",
                targetPage: 1,
                navigateToPage: () => this.handleJump(1)
            }, {
                type: "GAP",
                key: "left-gap"
            }], i += 2), r < e && (u = [{
                type: "GAP",
                key: "right-gap"
            }], !n && u.push({
                type: "PAGE",
                key: "page-".concat(e),
                targetPage: e,
                navigateToPage: () => this.handleJump(e)
            }), r -= 2), [s, ...o, ...l().range(i, r + 1).map(e => ({
                type: "PAGE",
                key: "page-".concat(e),
                targetPage: e,
                selected: e === t,
                disabled: !1,
                navigateToPage: () => this.handleJump(e)
            })), ...u, a]
        }
        render() {
            let {
                totalPageCount: e,
                children: t
            } = this.props;
            return t({
                pages: this.getPageList(),
                hasMultiplePages: e > 1
            })
        }
        constructor(...e) {
            super(...e), u(this, "changePageTo", e => {
                let {
                    selectedPage: t,
                    onPageChange: n
                } = this.props;
                t !== e && null != n && n(e)
            }), u(this, "handleForward", () => {
                this.changePageTo(Math.min(this.props.selectedPage + 1, this.props.totalPageCount))
            }), u(this, "handleBackward", () => {
                this.changePageTo(Math.max(this.props.selectedPage - 1, 1))
            }), u(this, "handleJump", e => {
                this.changePageTo(e)
            })
        }
    }
    u(d, "defaultProps", {
        maxVisiblePages: 9,
        hideMaxPage: !1
    })
}