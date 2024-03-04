function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        cleanupTempFiles: function() {
            return a
        }
    });
    var t = E("811022"),
        o = E("49671"),
        n = E("697218"),
        r = E("147746");

    function a() {
        var e;
        (null === o.default || void 0 === o.default ? void 0 : null === (e = o.default.fileManager) || void 0 === e ? void 0 : e.cleanupTempFiles) != null && setTimeout(() => void I(), 1e4)
    }
    let i = new t.default("tempFiles");
    async function I() {
        var e;
        if ((null === o.default || void 0 === o.default ? void 0 : null === (e = o.default.fileManager) || void 0 === e ? void 0 : e.cleanupTempFiles) != null) try {
            let e = await o.default.fileManager.cleanupTempFiles();
            if ((null == e ? void 0 : e.callscopeLogFiles) != null && e.callscopeLogFiles.length > 0) {
                let _ = Math.floor(1e3 * Math.random()).toString(),
                    E = n.default.getCurrentUser();
                (null == E ? void 0 : E.isStaff()) && (_ = E.id), i.log("Uploading ".concat(e.callscopeLogFiles.length, " callscope logs as user ").concat(_)), await (0, r.uploadCallscopeLogFiles)(_, e.callscopeLogFiles)
            }
        } catch (e) {
            i.error("Exception ".concat(null == e ? void 0 : e.message), e)
        }
    }
}