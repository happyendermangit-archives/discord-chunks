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
    var i, s, r = n("884691"),
        a = n("917351"),
        o = n.n(a);
    (s = i || (i = {})).PAGE = "PAGE", s.GAP = "GAP", s.BACK = "BACK", s.NEXT = "NEXT";
    class l extends r.PureComponent {
        getNeighborBounds() {
            let {
                totalPageCount: e,
                maxVisiblePages: t,
                selectedPage: n
            } = this.props, i = Math.ceil(t / 2), s = Math.floor(t / 2), r = [1, e];
            r = n <= i ? [1, t] : n > e - s ? [e - t + 1, e] : [n - i + 1, n + s];
            let [a, o] = r;
            return [Math.max(a, 1), Math.min(o, e)]
        }
        getPageList() {
            let {
                totalPageCount: e,
                selectedPage: t,
                hideMaxPage: n
            } = this.props, [i, s] = this.getNeighborBounds(), r = {
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
            }], i += 2), s < e && (u = [{
                type: "GAP",
                key: "right-gap"
            }], !n && u.push({
                type: "PAGE",
                key: "page-".concat(e),
                targetPage: e,
                navigateToPage: () => this.handleJump(e)
            }), s -= 2);
            let d = o.range(i, s + 1).map(e => ({
                type: "PAGE",
                key: "page-".concat(e),
                targetPage: e,
                selected: e === t,
                disabled: !1,
                navigateToPage: () => this.handleJump(e)
            }));
            return [r, ...l, ...d, ...u, a]
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