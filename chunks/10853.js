function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isNotAutomodEmbed: function() {
            return i
        }
    });
    var s = n("246111");
    let i = e => {
        let {
            type: t
        } = e;
        return t !== s.MessageEmbedTypes.AUTO_MODERATION_MESSAGE && t !== s.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
    }
}