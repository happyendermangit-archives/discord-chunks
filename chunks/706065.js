function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return i
        }
    }), E("222007");
    var t = E("95410"),
        o = E("689988");
    let n = "formGuidelinesStorageKey";
    class r extends o.default {
        _initialize() {
            let e = t.default.get(n);
            null != e && (this.seenForumGuidelines = new Set(e))
        }
        _terminate() {
            t.default.set(n, this.seenForumGuidelines)
        }
        markAsSeen(e) {
            this.seenForumGuidelines.add(e), t.default.set(n, this.seenForumGuidelines)
        }
        hasSeen(e) {
            return this.seenForumGuidelines.has(e)
        }
        constructor(...e) {
            super(...e), this.seenForumGuidelines = new Set
        }
    }
    var i = new r
}