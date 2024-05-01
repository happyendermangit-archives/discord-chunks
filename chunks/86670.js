function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        tryLoadAsync: function() {
            return a
        },
        tryLoadOrResetCacheGateway: function() {
            return s
        },
        tryLoadOrResetCacheGatewayAsync: function() {
            return o
        }
    });
    var i = n("570140");
    let r = new(n("710845")).default("TryLoad");
    async function a(e) {
        try {
            return await e()
        } catch (e) {
            return r.log("database load failed.", e), null
        }
    }

    function s(e, t) {
        try {
            return t()
        } catch (t) {
            return r.log("".concat(e, ": exception thrown, resetting socket."), t, t.stack), i.default.dispatch({
                type: "RESET_SOCKET",
                args: {
                    error: t,
                    action: "tryLoadOrResetCacheGateway (".concat(e, ")"),
                    clearCache: !0
                }
            }), null
        }
    }
    async function o(e, t) {
        try {
            return await t()
        } catch (t) {
            return r.log("".concat(e, ": exception thrown, resetting socket."), t, t.stack), i.default.dispatch({
                type: "RESET_SOCKET",
                args: {
                    error: t,
                    action: "tryLoadOrResetCacheGatewayAsync (".concat(e, ")"),
                    clearCache: !0
                }
            }), null
        }
    }
}