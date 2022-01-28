export default class UserInfo {
    constructor({nameSelector, infoSelector}) {
        this._nameSelector = document.querySelector(nameSelector);
        this._infoSelector = document.querySelector(infoSelector);
    }
    getUserInfo() {
        this._userData = {};

        this._userData.name = this._nameSelector.textContent;
        this._userData.info = this._infoSelector.textContent;

        return this._userData;
    }

    setUserInfo({name, info}) {
    this._nameSelector.textContent = name;
    this._infoSelector.textContent = info;
    }
}