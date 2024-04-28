function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        TextAreaAutosize: function() {
            return I
        }
    });
    var r, s = n("735250"),
        a = n("470079"),
        o = n("120356"),
        l = n.n(o),
        u = n("58654"),
        d = n("84735"),
        _ = n("842648");

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let E = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "text-transform", "width", "padding-left", "padding-right", "border-width", "box-sizing"];
    class I extends(r = a.PureComponent) {
        componentDidMount() {
            Promise.resolve().then(() => this.calculateSize())
        }
        componentDidUpdate(e, t) {
            if (this.state.height !== t.height) {
                let {
                    onResize: e
                } = this.props;
                null == e || e(this.state.height)
            }
            e.value !== this.props.value && Promise.resolve().then(() => this.calculateSize())
        }
        calculateSize() {
            var e;
            let t = this._textArea;
            if (null == t) return;
            let {
                fontWidthEstimate: n,
                rows: r
            } = this.props, s = null !== (e = this.props.value) && void 0 !== e ? e : t.value;
            if (null != n && -1 === s.indexOf("\n") && s.length * n < .8 * t.offsetWidth) {
                this.setState({
                    height: void 0
                });
                return
            }
            null == i && null != document.body && (i = document.createElement("textarea"), document.body.appendChild(i));
            let {
                paddingSize: a,
                borderSize: o,
                boxSizing: l,
                sizingStyle: u
            } = this.calculateNodeStyling(t);
            i.setAttribute("style", u + ";\n  visibility:hidden;\n  overflow:hidden;\n  position:absolute;\n  z-index:-1000;\n  top:0;\n  right:0;\n"), i.value = s, null != r ? i.setAttribute("rows", "".concat(r)) : i.removeAttribute("rows");
            let d = i.scrollHeight;
            "border-box" === l ? d += o : "content-box" === l && (d -= a), this.setState({
                height: d
            })
        }
        calculateNodeStyling(e) {
            let t = window.getComputedStyle(e),
                n = (0, u.getFirstTruthyValue)(t.getPropertyValue("box-sizing"), t.getPropertyValue("-moz-box-sizing"), t.getPropertyValue("-webkit-box-sizing")),
                i = parseFloat(t.getPropertyValue("padding-bottom")) + parseFloat(t.getPropertyValue("padding-top")),
                r = parseFloat(t.getPropertyValue("border-bottom-width")) + parseFloat(t.getPropertyValue("border-top-width"));
            return {
                sizingStyle: E.map(e => "".concat(e, ":").concat(t.getPropertyValue(e))).join(";"),
                paddingSize: i,
                borderSize: r,
                boxSizing: n
            }
        }
        clear() {
            null != this._textArea && (this._textArea.value = ""), this.calculateSize()
        }
        blur() {
            let {
                _textArea: e
            } = this;
            null != e && e.blur()
        }
        focus() {
            let {
                _textArea: e
            } = this;
            null != e && e.focus()
        }
        setSelection(e, t) {
            null != this._textArea && (this._textArea.selectionStart = e, this._textArea.selectionEnd = t)
        }
        get selectionStart() {
            var e, t;
            return null !== (t = null === (e = this._textArea) || void 0 === e ? void 0 : e.selectionStart) && void 0 !== t ? t : 0
        }
        get selectionEnd() {
            var e, t;
            return null !== (t = null === (e = this._textArea) || void 0 === e ? void 0 : e.selectionEnd) && void 0 !== t ? t : 0
        }
        get value() {
            var e, t;
            return null !== (t = null === (e = this._textArea) || void 0 === e ? void 0 : e.value) && void 0 !== t ? t : ""
        }
        render() {
            let {
                style: e,
                className: t,
                ...n
            } = this.props;
            delete n.fontWidthEstimate, delete n.onResize;
            let i = {
                ...this.state,
                ...e
            };
            return (0, s.jsx)(d.FocusRing, {
                children: (0, s.jsx)("textarea", {
                    ...n,
                    className: l()(t, _.scrollbarGhostHairline),
                    ref: this.handleSetRef,
                    style: i,
                    onChange: this.handleChange
                })
            })
        }
        constructor(e) {
            super(e), c(this, "_textArea", void 0), c(this, "handleSetRef", e => {
                this._textArea = e
            }), c(this, "handleChange", e => {
                let {
                    onChange: t
                } = this.props;
                null == t || t(e), this.calculateSize()
            }), this.state = {
                height: void 0
            }
        }
    }
    c(I, "defaultProps", {
        autoFocus: !1,
        disabled: !1,
        autoCorrect: "off"
    })
}