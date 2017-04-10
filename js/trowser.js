require.config({
    paths: {
        "hui-lib": "https://plugin-qbo-qa.intuitcdn.net/qbo-ui/99.0.0-pre.6988/bower_components/harmony-ui-components/dist/js/hui.min",
        "object-utils": "https://plugin-qbo-qa.intuitcdn.net/qbo-ui/99.0.0-pre.6988/bower_components/object-utils/src",
        "mustache": "https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.0.0/mustache.min",
        "text": "https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min"
    }
});

require([
    "hui-lib"
], function() {
    require([
        "hui/trowser",
        "hui/step-flow",
        "hui/modal"
    ], function() {
        document.querySelector("#step-flow-trowser").show();
        document.querySelector("#step-flow").show();
    });
});