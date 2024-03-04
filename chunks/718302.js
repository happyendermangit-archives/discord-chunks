function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return n
        }
    }), r("222007");
    var s, n, l, i = r("884691"),
        a = r("49111");
    (l = s || (s = {})).ARROW_UP = "ARROW_UP", l.ARROW_DOWN = "ARROW_DOWN", l.ARROW_LEFT = "ARROW_LEFT", l.ARROW_RIGHT = "ARROW_RIGHT";
    n = class extends i.Component {
        componentDidMount() {
            document.addEventListener("keydown", this.handleKeyDown, !0)
        }
        componentWillUnmount() {
            document.removeEventListener("keydown", this.handleKeyDown, !0)
        }
        focusNext(e) {
            let {
                getItemGrid: t,
                onFocus: r
            } = this.props, {
                focusedColumn: s,
                focusedRow: n
            } = this.state;
            if (null == e) return;
            let l = t();
            if (null == l) return;
            let i = this.getNext(l, s, n, e);
            this.setState({
                focusedColumn: i.column,
                focusedRow: i.row
            }, () => {
                let e = this.calculateFocusedItem();
                null != e && null != r && r(e)
            })
        }
        getNext(e, t, r, s) {
            let n, l, i, a;
            if (null == t || null == r) l = 0, i = 0, n = {
                column: 0,
                row: 0
            };
            else switch (l = t, i = r, s) {
                case "ARROW_UP":
                    n = {
                        column: l,
                        row: Math.max(i - 1, 0)
                    };
                    break;
                case "ARROW_DOWN":
                    n = {
                        column: l,
                        row: Math.min(i + 1, e[l].length - 1)
                    };
                    break;
                case "ARROW_LEFT":
                    n = this.wrapPosition(e, l, i, -1);
                    break;
                case "ARROW_RIGHT":
                    n = this.wrapPosition(e, l, i, 1)
            }
            return null != n && (a = e[n.column][n.row]), (null == a || null == n) && (a = e[(n = {
                column: l,
                row: i
            }).column][n.row]), {
                column: n.column,
                row: n.row,
                id: a
            }
        }
        calculateClosest(e, t) {
            let r;
            let s = this.props.getCoordsMap()[e];
            if (null == s) return;
            let n = Number.MAX_SAFE_INTEGER;
            for (let e = 0; e < t.length; e++) {
                let l = this.props.getCoordsMap()[t[e]];
                if (null == l) continue;
                let i = Math.abs(l.top - s.top);
                if (i < n) n = i, r = e;
                else break
            }
            return r
        }
        calculateFocusedItem() {
            let {
                getItemGrid: e
            } = this.props, {
                focusedRow: t,
                focusedColumn: r
            } = this.state, s = e();
            return null == s || null == r || null == t || null == s[r] || null == s[r][t] ? null : s[r][t]
        }
        render() {
            return this.props.children
        }
        constructor(...e) {
            super(...e), this.state = {
                focusedColumn: null,
                focusedRow: null
            }, this.handleKeyDown = e => {
                let {
                    onSelect: t
                } = this.props;
                switch (e.keyCode) {
                    case a.KeyboardKeys.ARROW_DOWN:
                    case a.KeyboardKeys.ARROW_UP:
                    case a.KeyboardKeys.ARROW_LEFT:
                    case a.KeyboardKeys.ARROW_RIGHT:
                        this.focusNext(function(e) {
                            switch (e) {
                                case a.KeyboardKeys.ARROW_DOWN:
                                    return "ARROW_DOWN";
                                case a.KeyboardKeys.ARROW_UP:
                                    return "ARROW_UP";
                                case a.KeyboardKeys.ARROW_LEFT:
                                    return "ARROW_LEFT";
                                case a.KeyboardKeys.ARROW_RIGHT:
                                    return "ARROW_RIGHT";
                                default:
                                    return null
                            }
                        }(e.keyCode));
                        break;
                    case a.KeyboardKeys.ENTER:
                        let r = this.calculateFocusedItem();
                        null != r && null != t && (e.preventDefault(), e.stopPropagation(), t(r))
                }
            }, this.wrapPosition = (e, t, r, s) => {
                var n;
                let l = e.length,
                    i = Math.max(r * l + t + s, 0) % l,
                    a = null !== (n = this.calculateClosest(e[t][r], e[i])) && void 0 !== n ? n : r,
                    o = 0;
                return s < 0 && i > t && (o = -1), s > 0 && i < t && (o = 1), {
                    column: i,
                    row: a + o
                }
            }
        }
    }
}