function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("153832");

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function i(e) {
        return {
            channelId: e,
            sessionId: (0, r.v4)()
        }
    }
    var a = function() {
        var e, t, n;

        function r() {
            var e, t, n;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, r), e = this, n = void 0, (t = "session") in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        }
        return e = r, t = [{
            key: "getForumChannelSessionId",
            value: function(e) {
                return null == this.session && (this.session = i(e)), this.session.channelId !== e && (this.session = i(e)), this.session.sessionId
            }
        }], o(e.prototype, t), n && o(e, n), r
    }();
    t.default = new a
}