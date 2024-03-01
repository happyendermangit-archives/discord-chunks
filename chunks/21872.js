function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PaginationTypes: function() {
            return i
        },
        PaginationController: function() {
            return l
        }
    }), n("222007"), n("424973");
    var i, r, s = n("884691"),
        a = n("917351"),
        o = n.n(a);
    (r = i || (i = {})).PAGE = "PAGE", r.GAP = "GAP", r.BACK = "BACK", r.NEXT = "NEXT";
    class l extends s.PureComponent {
        getNeighborBounds() {
            let {
                totalPageCount: e,
                maxVisiblePages: t,
                selectedPage: n
            } = this.props, i = Math.ceil(t / 2), r = Math.floor(t / 2), s = [1, e];
            s = n <= i ? [1, t] : n > e - r ? [e - t + 1, e] : [n - i + 1, n + r];
            let [a, o] = s;
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
            }, l = [], u = [];
            i > 1 && (l = [{
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
            }), r -= 2);
            let c = o.range(i, r + 1).map(e => ({
                type: "PAGE",
                key: "page-".concat(e),
                targetPage: e,
                selected: e === t,
                disabled: !1,
                navigateToPage: () => this.handleJump(e)
            }));
            return [s, ...l, ...c, ...u, a]
        }
        render() {
            let {
                totalPageCount: e,
                children: t
            } = this.props, n = this.getPageList();
            return t({
                pages: n,
                hasMultiplePages: e > 1
            })
        }
        constructor(...e) {
            super(...e), this.changePageTo = e => {
                let {
                    selectedPage: t,
                    onPageChange: n
                } = this.props;
                t !== e && null != n && n(e)
            }, this.handleForward = () => {
                this.changePageTo(Math.min(this.props.selectedPage + 1, this.props.totalPageCount))
            }, this.handleBackward = () => {
                this.changePageTo(Math.max(this.props.selectedPage - 1, 1))
            }, this.handleJump = e => {
                this.changePageTo(e)
            }
        }
    }
    l.defaultProps = {
        maxVisiblePages: 9,
        hideMaxPage: !1
    }
}