"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledCheckO = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:100px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;left:3px;top:-1px;width:6px;height:10px;border-color:currentColor;border-width:0 2px 2px 0;border-style:solid;transform-origin:bottom left;transform:rotate(45deg)}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:100px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;left:3px;top:-1px;width:6px;height:10px;border-color:currentColor;border-width:0 2px 2px 0;border-style:solid;transform-origin:bottom left;transform:rotate(45deg)}\n"])));
exports.CheckO = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledCheckO, tslib_1.__assign({}, props, { ref: ref, "icon-role": "check-o" }))));
});
var templateObject_1;
//# sourceMappingURL=CheckO.js.map