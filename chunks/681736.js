function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("424973");
    var i, l = n("872717"),
        a = n("448993"),
        s = n("981112"),
        r = n("966724"),
        o = n("980134"),
        u = n("782340");
    i = class extends s.default {
        async uploadFiles(e, t) {
            let {
                addFilesTo: n
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            super.upload({
                name: u.default.Messages.ATTACHMENT_PROCESSING
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
            let i;
            let s = [];
            this.files.forEach((e, t) => {
                let n = (0, o.getAttachmentPayload)(e, t);
                e.item.platform === r.UploadPlatform.WEB && s.push({
                    ...n
                })
            }), i = null != n && null != t ? this._addAttachmentsToPayload(t, n, s) : {
                ...t,
                attachments: s
            };
            let u = {
                    url: this._url,
                    body: i,
                    signal: e
                },
                d = "POST" === this._method ? l.HTTP.post : l.HTTP.patch;
            try {
                let e = await d(u);
                return this._handleComplete(e.body), e.body
            } catch (e) {
                var c;
                if (this._raiseEndpointErrors) throw new a.APIError(e);
                this._handleError({
                    code: null == e ? void 0 : null === (c = e.body) || void 0 === c ? void 0 : c.code,
                    body: null == e ? void 0 : e.body
                })
            }
        }
        constructor(e, t = "POST", n) {
            super(e, t, n)
        }
    }
}