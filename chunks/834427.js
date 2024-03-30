function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FileInput: function() {
            return u
        }
    }), n("47120");
    var i, r = n("735250"),
        s = n("470079");

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let o = "file-input",
        l = e => ({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0,
            cursor: e ? "not-allowed" : "pointer",
            fontSize: 0
        });
    class u extends(i = s.Component) {
        render() {
            let {
                disabled: e,
                tabIndex: t,
                className: n,
                name: i,
                "aria-label": s,
                "aria-hidden": a
            } = this.props;
            if (this.props.embedded) return (0, r.jsx)("div", {
                role: "button",
                style: l(e),
                className: n || o,
                tabIndex: t,
                onKeyDown: e ? void 0 : this.handleNativeKeyDown,
                onClick: e ? void 0 : this.handleNativeClick,
                "aria-disabled": e,
                "aria-label": s,
                "aria-hidden": a || void 0
            });
            {
                let u = "";
                return this.props.filters && (u = this.props.filters.map(e => e.extensions.map(e => ".".concat(e)).join(",")).join(",")), (0, r.jsx)("input", {
                    style: l(e),
                    className: n || o,
                    disabled: e,
                    type: "file",
                    tabIndex: t,
                    onMouseDown: this.handleBrowserInputMouseDown,
                    onChange: this.props.onChange,
                    multiple: this.props.multiple,
                    accept: u,
                    name: i,
                    "aria-label": s,
                    "aria-hidden": a || void 0,
                    ref: e => this._input = e
                })
            }
        }
        constructor(...e) {
            super(...e), a(this, "_input", null), a(this, "activateUploadDialogue", () => {
                this.props.embedded ? this.handleNativeClick() : this._input && this._input.click()
            }), a(this, "handleNativeClick", () => {
                this.props.handleNativeClick && this.props.handleNativeClick(this.props)
            }), a(this, "handleNativeKeyDown", e => {
                (" " === e.key || "Enter" === e.key) && this.handleNativeClick()
            }), a(this, "handleBrowserInputMouseDown", e => {
                e.currentTarget.value = null
            })
        }
    }
    a(u, "defaultProps", {
        multiple: !1,
        disabled: !1,
        tabIndex: 0
    })
}