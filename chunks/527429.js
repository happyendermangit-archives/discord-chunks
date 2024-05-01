function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    }), n("47120");
    var i, r, s = n("470079"),
        a = n("981631");

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(r = i || (i = {})).ARROW_UP = "ARROW_UP", r.ARROW_DOWN = "ARROW_DOWN", r.ARROW_LEFT = "ARROW_LEFT", r.ARROW_RIGHT = "ARROW_RIGHT";
    class l extends s.Component {
        componentDidMount() {
            document.addEventListener("keydown", this.handleKeyDown, !0)
        }
        componentWillUnmount() {
            document.removeEventListener("keydown", this.handleKeyDown, !0)
        }
        focusNext(e) {
            let {
                getItemGrid: t,
                onFocus: n
            } = this.props, {
                focusedColumn: i,
                focusedRow: r
            } = this.state;
            if (null == e) return;
            let s = t();
            if (null == s) return;
            let a = this.getNext(s, i, r, e);
            this.setState({
                focusedColumn: a.column,
                focusedRow: a.row
            }, () => {
                let e = this.calculateFocusedItem();
                null != e && null != n && n(e)
            })
        }
        getNext(e, t, n, i) {
            let r, s, a, o;
            if (null == t || null == n) s = 0, a = 0, r = {
                column: 0,
                row: 0
            };
            else switch (s = t, a = n, i) {
                case "ARROW_UP":
                    r = {
                        column: s,
                        row: Math.max(a - 1, 0)
                    };
                    break;
                case "ARROW_DOWN":
                    r = {
                        column: s,
                        row: Math.min(a + 1, e[s].length - 1)
                    };
                    break;
                case "ARROW_LEFT":
                    r = this.wrapPosition(e, s, a, -1);
                    break;
                case "ARROW_RIGHT":
                    r = this.wrapPosition(e, s, a, 1)
            }
            return null != r && (o = e[r.column][r.row]), (null == o || null == r) && (o = e[(r = {
                column: s,
                row: a
            }).column][r.row]), {
                column: r.column,
                row: r.row,
                id: o
            }
        }
        calculateClosest(e, t) {
            let n;
            let i = this.props.getCoordsMap()[e];
            if (null == i) return;
            let r = Number.MAX_SAFE_INTEGER;
            for (let e = 0; e < t.length; e++) {
                let s = this.props.getCoordsMap()[t[e]];
                if (null == s) continue;
                let a = Math.abs(s.top - i.top);
                if (a < r) r = a, n = e;
                else break
            }
            return n
        }
        calculateFocusedItem() {
            let {
                getItemGrid: e
            } = this.props, {
                focusedRow: t,
                focusedColumn: n
            } = this.state, i = e();
            return null == i || null == n || null == t || null == i[n] || null == i[n][t] ? null : i[n][t]
        }
        render() {
            return this.props.children
        }
        constructor(...e) {
            super(...e), o(this, "state", {
                focusedColumn: null,
                focusedRow: null
            }), o(this, "handleKeyDown", e => {
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
                        let n = this.calculateFocusedItem();
                        null != n && null != t && (e.preventDefault(), e.stopPropagation(), t(n))
                }
            }), o(this, "wrapPosition", (e, t, n, i) => {
                var r;
                let s = e.length,
                    a = Math.max(n * s + t + i, 0) % s,
                    o = null !== (r = this.calculateClosest(e[t][n], e[a])) && void 0 !== r ? r : n,
                    l = 0;
                return i < 0 && a > t && (l = -1), i > 0 && a < t && (l = 1), {
                    column: a,
                    row: o + l
                }
            })
        }
    }
}