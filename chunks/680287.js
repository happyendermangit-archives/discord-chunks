function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    }), n("653041");
    var i = n("544891"),
        r = n("881052"),
        s = n("687294"),
        a = n("476326"),
        o = n("861990"),
        l = n("689938");
    class u extends s.default {
        async uploadFiles(e, t) {
            let {
                addFilesTo: n
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            super.upload({
                name: l.default.Messages.ATTACHMENT_PROCESSING
            }, t, e);
            let i = new AbortController;
            try {
                if (this.files = e, this._aborted) return;
                if (this._handleStart(() => i.abort()), !await this.compressAndCheckFileSize()) return;
                this.setUploadingTextForUI(), await (0, s.stageAttachmentFiles)(this.files, !0, this._recomputeProgress.bind(this))
            } catch (e) {
                this._handleException(e)
            }
            try {
                return await this._createMessage(i.signal, t, n)
            } catch (e) {
                if (this._raiseEndpointErrors) throw e;
                this._handleException(e)
            }
        }
        async _createMessage(e, t, n) {
            let s;
            let l = [];
            this.files.forEach((e, t) => {
                let n = (0, o.getAttachmentPayload)(e, t);
                e.item.platform === a.UploadPlatform.WEB && l.push({
                    ...n
                })
            }), s = null != n && null != t ? this._addAttachmentsToPayload(t, n, l) : {
                ...t,
                attachments: l
            };
            let u = {
                    url: this._url,
                    body: s,
                    signal: e
                },
                d = "POST" === this._method ? i.HTTP.post : i.HTTP.patch;
            try {
                let e = await d(u);
                return this._handleComplete(e.body), e.body
            } catch (e) {
                var _;
                if (this._raiseEndpointErrors) throw new r.APIError(e);
                this._handleError({
                    code: null == e ? void 0 : null === (_ = e.body) || void 0 === _ ? void 0 : _.code,
                    body: null == e ? void 0 : e.body
                })
            }
        }
        constructor(e, t = "POST", n) {
            super(e, t, n)
        }
    }
}