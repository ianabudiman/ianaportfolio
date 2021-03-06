// This is autogenerated by Framer Studio


// Generated by CoffeeScript 1.8.0
(function() {
  var lookupLine, properties, _RESULT,
    __slice = [].slice;

  if (window.FramerStudio == null) {
    window.FramerStudio = {};
  }

  window.onerror = null;

  window.midiCommand = window.midiCommand || function() {};

  if (Framer.Device) {
    properties = ["deviceScale", "contentScale", "deviceType", "keyboard", "orientation", "fullScreen"];
    properties.map(function(propertyName) {
      return Framer.Device.on("change:" + propertyName, function() {
        return window._bridge("device:change");
      });
    });
  }

  _RESULT = null;

  lookupLine = function(lineNumber) {
    var char, charIndex, errorColNumber, errorLine, errorLineIndex, errorLineNumber, loc, sourceLines, _i, _len;
    sourceLines = _RESULT.js.split("\n");
    errorLineIndex = lineNumber - 1;
    errorLine = sourceLines[errorLineIndex];
    if (!errorLine) {
      return lineNumber;
    }
    errorLineNumber = 1;
    errorColNumber = 0;
    for (charIndex = _i = 0, _len = errorLine.length; _i < _len; charIndex = ++_i) {
      char = errorLine[charIndex];
      loc = _RESULT.sourceMap.sourceLocation([errorLineIndex, charIndex]);
      if (loc && loc[0] > errorLineNumber) {
        errorLineNumber = loc[0] + 1;
        errorColNumber = loc[1];
      }
    }
    console.log("lineNumber", lineNumber);
    console.log("errorLineNumber", errorLineNumber);
    return errorLineNumber;
  };

  FramerStudio.compile = function(code) {
    var e, err, errorMessage;
    console.log("FramerStudio.compile");
    window.onerror = null;
    window.onresize = null;
    try {
      _RESULT = CoffeeScript.compile(code, {
        sourceMap: true,
        filename: "generated.js"
      });
    } catch (_error) {
      e = _error;
      console.log("Compile error:", e);
      if (e instanceof SyntaxError) {
        errorMessage = e.stack;
        err = new SyntaxError(e.message);
        err.line = e.location.first_line;
        err.lineNumber = e.location.first_line;
        err.lookup = true;
        window._bridge("StudioError", {
          message: e.message,
          line: e.location.first_line,
          lineNumber: e.location.first_line,
          errorType: "compile"
        });
        throw err;
      } else {
        throw e;
      }
    }
    window.onerror = function(errorMsg, url, lineNumber) {
      var error;
      console.log.apply(console, ["Eval error:"].concat(__slice.call(arguments)));
      error = new Error(errorMsg);
      error.line = lookupLine(lineNumber);
      window._bridge("StudioError", {
        message: errorMsg,
        line: error.line,
        lineNumber: error.line,
        errorType: "eval"
      });
      throw error;
    };
    return _RESULT.js;
  };

  if (typeof window._bridge === "function") {
    window._bridge("StudioScriptLoaded");
  }

}).call(this);

window.__imported__ = window.__imported__ || {};
window.__imported__["cart-interaction/layers.json.js"] = [
  {
    "maskFrame" : null,
    "id" : "15E4B7E5-4B1B-4AC2-9B63-BE7268FB5493",
    "visible" : true,
    "children" : [
      {
        "maskFrame" : null,
        "id" : "908D551C-A687-401C-B488-B79966056654",
        "visible" : true,
        "children" : [
          {
            "maskFrame" : null,
            "id" : "ABF7872C-8A09-477B-BF06-649C2746C496",
            "visible" : true,
            "children" : [
              {
                "maskFrame" : null,
                "id" : "47922C77-1023-45D0-AB5E-7868C2996314",
                "visible" : true,
                "children" : [

                ],
                "image" : {
                  "path" : "images\/Path_205__Path_207-47922C77-1023-45D0-AB5E-7868C2996314.png",
                  "frame" : {
                    "y" : 235,
                    "x" : 498,
                    "width" : 25,
                    "height" : 26
                  }
                },
                "imageType" : "png",
                "layerFrame" : {
                  "y" : 235,
                  "x" : 498,
                  "width" : 25,
                  "height" : 26
                },
                "name" : "Path_205__Path_207"
              },
              {
                "maskFrame" : null,
                "id" : "C293DD50-DF2F-4B05-8343-03C6ABEC24F5",
                "visible" : true,
                "children" : [

                ],
                "image" : {
                  "path" : "images\/Path_205__Path_212-C293DD50-DF2F-4B05-8343-03C6ABEC24F5.png",
                  "frame" : {
                    "y" : 246,
                    "x" : 323,
                    "width" : 26,
                    "height" : 4
                  }
                },
                "imageType" : "png",
                "layerFrame" : {
                  "y" : 246,
                  "x" : 323,
                  "width" : 26,
                  "height" : 4
                },
                "name" : "Path_205__Path_212"
              }
            ],
            "image" : {
              "path" : "images\/Group-ABF7872C-8A09-477B-BF06-649C2746C496.png",
              "frame" : {
                "y" : 212,
                "x" : 300,
                "width" : 246,
                "height" : 70
              }
            },
            "imageType" : "png",
            "layerFrame" : {
              "y" : 212,
              "x" : 300,
              "width" : 246,
              "height" : 70
            },
            "name" : "Group"
          }
        ],
        "image" : {
          "path" : "images\/Group-908D551C-A687-401C-B488-B79966056654.png",
          "frame" : {
            "y" : 168,
            "x" : 102,
            "width" : 648,
            "height" : 161
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 168,
          "x" : 102,
          "width" : 648,
          "height" : 161
        },
        "name" : "Group"
      },
      {
        "maskFrame" : {
          "y" : -100,
          "x" : -100,
          "width" : 950,
          "height" : 1533
        },
        "id" : "22837363-A2A0-443E-ADED-3707CAED257C",
        "visible" : true,
        "children" : [

        ],
        "image" : {
          "path" : "images\/Bitmap-22837363-A2A0-443E-ADED-3707CAED257C.png",
          "frame" : {
            "y" : 0,
            "x" : 0,
            "width" : 750,
            "height" : 1333
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 0,
          "x" : 0,
          "width" : 750,
          "height" : 1333
        },
        "name" : "Bitmap"
      }
    ],
    "image" : {
      "path" : "images\/Portrait-15E4B7E5-4B1B-4AC2-9B63-BE7268FB5493.png",
      "frame" : {
        "y" : 0,
        "x" : 0,
        "width" : 750,
        "height" : 1334
      }
    },
    "imageType" : "png",
    "layerFrame" : {
      "y" : 0,
      "x" : 0,
      "width" : 750,
      "height" : 1334
    },
    "name" : "Portrait"
  }
]
window.Framer.Defaults.DeviceView = {
  "deviceScale" : -1,
  "orientation" : 0,
  "contentScale" : 1,
  "deviceType" : "iphone-6-silver"
};

window.FramerStudioInfo = {
  "deviceImagesUrl" : "file:\/\/\/Users\/ianaredbeacon\/Downloads\/FramerClass\/Framer%20Studio.app\/Contents\/Resources\/DeviceImages\/"
};

Framer.Device = new Framer.DeviceView();
Framer.Device.setupContext();