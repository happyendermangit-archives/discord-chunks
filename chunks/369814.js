function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("748820");

    function s(e) {
        return {
            channelId: e,
            sessionId: (0, i.v4)()
        }
    }
    var r = new class e {
        getForumChannelSessionId(e) {
            return null == this.session && (this.session = s(e)), this.session.channelId !== e && (this.session = s(e)), this.session.sessionId
        }
    }
}