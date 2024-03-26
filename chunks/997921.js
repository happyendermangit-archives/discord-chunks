function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FileInput: function() {
            return o
        }
    }), n("222007");
    var i = n("37983"),
        s = n("884691");
    let r = "file-input",
        a = e => ({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0,
            cursor: e ? "not-allowed" : "pointer",
            fontSize: 0
        });
    class o extends s.Component {
        render() {
            let {
                disabled: e,
                tabIndex: t,
                className: n,
                name: s,
                "aria-label": o,
                "aria-hidden": l
            } = this.props;
            if (this.props.embedded) return (0, i.jsx)("div", {
                role: "button",
                style: a(e),
                className: n || r,
                tabIndex: t,
                onKeyDown: e ? void 0 : this.handleNativeKeyDown,
                onClick: e ? void 0 : this.handleNativeClick,
                "aria-disabled": e,
                "aria-label": o,
                "aria-hidden": l || void 0
            });
            {
                let u = "";
                return this.props.filters && (u = this.props.filters.map(e => e.extensions.map(e => ".".concat(e)).join(",")).join(",")), (0, i.jsx)("input", {
                    style: a(e),
                    className: n || r,
                    disabled: e,
                    type: "file",
                    tabIndex: t,
                    onMouseDown: this.handleBrowserInputMouseDown,
                    onChange: this.props.onChange,
                    multiple: this.props.multiple,
                    accept: u,
                    name: s,
                    "aria-label": o,
                    "aria-hidden": l || void 0,
                    ref: e => this._input = e
                })
            }
        }
        constructor(...e) {
            super(...e), this._input = null, this.activateUploadDialogue = () => {
                this.props.embedded ? this.handleNativeClick() : this._input && this._input.click()
            }, this.handleNativeClick = () => {
                this.props.handleNativeClick && this.props.handleNativeClick(this.props)
            }, this.handleNativeKeyDown = e => {
                (" " === e.key || "Enter" === e.key) && this.handleNativeClick()
            }, this.handleBrowserInputMouseDown = e => {
                e.currentTarget.value = null
            }
        }
    }
    o.defaultProps = {
        multiple: !1,
        disabled: !1,
        tabIndex: 0
    }
}