function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getFilters: function() {
            return d
        },
        processImage: function() {
            return _
        }
    }), n("47120");
    var i, r = n("735250"),
        a = n("470079"),
        s = n("53281"),
        o = n("869783"),
        l = n("689938");

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d() {
        return [{
            name: l.default.Messages.IMAGES,
            extensions: ["jpg", "jpeg", "png", "gif"]
        }]
    }

    function _(e, t, n) {
        ! function(e, t) {
            if (null != e) {
                let n = new FileReader;
                n.onload = n => {
                    var i;
                    "string" == typeof(null === (i = n.target) || void 0 === i ? void 0 : i.result) && t(n.target.result, e)
                }, n.readAsDataURL(e)
            }
        }(e, i => {
            if (e.type === o.FileTypes.MP4) return t(i, e);
            let r = new Image;
            r.src = i, r.onload = () => {
                t(i, e)
            }, r.onerror = () => {
                n()
            }
        })
    }
    class c extends(i = a.PureComponent) {
        componentDidMount() {
            this._isMounted = !0
        }
        activateUploadDialogue() {
            var e;
            null === (e = this._ref.current) || void 0 === e || e.activateUploadDialogue()
        }
        render() {
            let {
                multiple: e,
                disabled: t,
                className: n,
                tabIndex: i,
                "aria-label": a,
                filters: o
            } = this.props;
            return (0, r.jsx)(s.default, {
                ref: this._ref,
                onChange: this.handleFileChange,
                filters: null != o ? o : d(),
                multiple: e,
                disabled: t,
                className: n,
                tabIndex: i,
                "aria-label": a
            })
        }
        constructor(...e) {
            super(...e), u(this, "_ref", a.createRef()), u(this, "_isMounted", !1), u(this, "handleFileChange", e => {
                let {
                    onFileSizeError: t,
                    maxFileSizeBytes: n
                } = this.props;
                if (e.stopPropagation(), e.preventDefault(), null != e.currentTarget.files)
                    for (let i = 0; i < e.currentTarget.files.length; i++) {
                        let r = e.currentTarget.files[i];
                        if (r.size > n) {
                            null == t || t(n, r.size);
                            continue
                        }
                        _(r, this.handleFileRead, this.handleFileError)
                    }
            }), u(this, "handleFileRead", (e, t) => {
                let {
                    onChange: n
                } = this.props;
                this._isMounted && n(e, t)
            }), u(this, "handleFileError", async () => {
                let {
                    openUploadError: e
                } = await Promise.resolve().then(n.bind(n, "531643"));
                e({
                    title: l.default.Messages.PREMIUM_ALERT_ERROR_TITLE,
                    help: l.default.Messages.UNABLE_TO_PROCESS_IMAGE
                })
            })
        }
    }
    u(c, "defaultProps", {
        multiple: !0,
        tabIndex: -1,
        maxFileSizeBytes: 1 / 0
    }), t.default = c
}