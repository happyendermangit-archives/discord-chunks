function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("153832");

    function r(e) {
        return {
            channelId: e,
            sessionId: (0, i.v4)()
        }
    }
    t.default = new class e {
        getForumChannelSessionId(e) {
            return null == this.session && (this.session = r(e)), this.session.channelId !== e && (this.session = r(e)), this.session.sessionId
        }
        constructor() {
            var e, t, n;
            e = this, n = void 0, (t = "session") in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        }
    }
}