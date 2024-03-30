function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UploadErrorCodes: function() {
            return o
        }
    });
    var r, o, i = n("941504");

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }(r = o || (o = {}))[r.GENERAL = 0] = "GENERAL", r[r.NO_FILE = 1] = "NO_FILE", r[r.PROGRESS = 2] = "PROGRESS", r[r.UPLOAD = 3] = "UPLOAD", r[r.READ = 4] = "READ";
    var u = function() {
        var e, t, n;

        function r(e) {
            var t, n, o;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, r), t = this, o = void 0, (n = "code") in t ? Object.defineProperty(t, n, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = o, this.code = e
        }
        return e = r, t = [{
            key: "displayMessage",
            get: function() {
                switch (this.code) {
                    case 1:
                        return i.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_NO_FILE;
                    case 2:
                        return i.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_PROGRESS;
                    case 3:
                        return i.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_UPLOAD;
                    case 4:
                        return i.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_READ;
                    default:
                        return i.default.Messages.UPLOAD_DEBUG_LOG_FAILURE
                }
            }
        }], a(e.prototype, t), n && a(e, n), r
    }();
    t.default = u
}