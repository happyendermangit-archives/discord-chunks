function(e, t, n) {
    "use strict";
    n.r(t), n("653041");
    var i = n("735250"),
        r = n("470079"),
        s = n("834427"),
        a = n("579806"),
        o = n("403182"),
        l = n("358085"),
        u = n("861990");

    function d(e) {
        let t = ["openFile"];
        e.multiple && t.push("multiSelections");
        let n = e.filters;
        a.default.fileManager.openFiles({
            properties: t,
            filters: n
        }, u.MAX_TOTAL_ATTACHMENT_SIZE).then(t => {
            let n = t.map(e => o.transformNativeFile(e));
            null != n && e.onChange({
                stopPropagation: () => null,
                preventDefault: () => null,
                currentTarget: {
                    files: n
                }
            })
        }).catch(t => {
            e.onChange({
                stopPropagation: () => null,
                preventDefault: () => null,
                currentTarget: {
                    files: null,
                    err: t
                }
            })
        })
    }
    class _ extends r.Component {
        activateUploadDialogue() {
            if (null != this._ref) return this._ref.activateUploadDialogue()
        }
        setRef(e) {
            this._ref = e
        }
        render() {
            return (0, i.jsx)(s.FileInput, {
                ref: this.setRef,
                handleNativeClick: d,
                embedded: (0, l.isDesktop)(),
                ...this.props
            })
        }
        constructor(e) {
            var t, n, i;
            super(e), t = this, n = "_ref", i = r.createRef(), n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i, this.setRef = this.setRef.bind(this)
        }
    }
    t.default = _
}