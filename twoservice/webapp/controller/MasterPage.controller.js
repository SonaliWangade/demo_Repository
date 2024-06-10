sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
var that;
        return Controller.extend("com.ibspl.twoservice.controller.MasterPage", {
            onInit: function () {
                that = this;
			    that.oDataModel = that.getOwnerComponent().getModel("XSODATA");
                this._readReportView();
            },
            _readReportView: function () {
                var context = this;
                var myJSONModel1 = new sap.ui.model.json.JSONModel();
                that.oDataModel.callFunction(
                    "/EMP_TIMESHEET_ENTRY", {
                        method:"GET",
                        success:function(oData,response){
                            debugger
                            console.log(oData);
                            myJSONModel1.setData(oData);
                            context.getView().setModel(myJSONModel1, "headerModel");
                            
                        },
                        error:function(oError)
                        {
    debugger
                        }
                    }
                );
              },
        });
    });
