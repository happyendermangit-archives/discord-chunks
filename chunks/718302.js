function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return n
        }
    }), s("222007");
    var r, n, l, i = s("884691"),
        a = s("49111");
    (l = r || (r = {})).ARROW_UP = "ARROW_UP", l.ARROW_DOWN = "ARROW_DOWN", l.ARROW_LEFT = "ARROW_LEFT", l.ARROW_RIGHT = "ARROW_RIGHT";
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
                onFocus: s
            } = this.props, {
                focusedColumn: r,
                focusedRow: n
            } = this.state;
            if (null == e) return;
            let l = t();
            if (null == l) return;
            let i = this.getNext(l, r, n, e);
            this.setState({
                focusedColumn: i.column,
                focusedRow: i.row
            }, () => {
                let e = this.calculateFocusedItem();
                null != e && null != s && s(e)
            })
        }
        getNext(e, t, s, r) {
            let n, l, i, a;
            if (null == t || null == s) l = 0, i = 0, n = {
                column: 0,
                row: 0
            };
            else switch (l = t, i = s, r) {
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
            let s;
            let r = this.props.getCoordsMap()[e];
            if (null == r) return;
            let n = Number.MAX_SAFE_INTEGER;
            for (let e = 0; e < t.length; e++) {
                let l = this.props.getCoordsMap()[t[e]];
                if (null == l) continue;
                let i = Math.abs(l.top - r.top);
                if (i < n) n = i, s = e;
                else break
            }
            return s
        }
        calculateFocusedItem() {
            let {
                getItemGrid: e
            } = this.props, {
                focusedRow: t,
                focusedColumn: s
            } = this.state, r = e();
            return null == r || null == s || null == t || null == r[s] || null == r[s][t] ? null : r[s][t]
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
                        let s = this.calculateFocusedItem();
                        null != s && null != t && (e.preventDefault(), e.stopPropagation(), t(s))
                }
            }, this.wrapPosition = (e, t, s, r) => {
                var n;
                let l = e.length,
                    i = Math.max(s * l + t + r, 0) % l,
                    a = null !== (n = this.calculateClosest(e[t][s], e[i])) && void 0 !== n ? n : s,
                    o = 0;
                return r < 0 && i > t && (o = -1), r > 0 && i < t && (o = 1), {
                    column: i,
                    row: a + o
                }
            }
        }
    }
}