export default class UserInfo {
    constructor({userName, userInfo}) {
        this._userName = userName;
        this._userInfo = userInfo;
    }

    getUserInfo() {
        this._userData = {}

        this._userData.name = this._userName.textContent;
        this._userData.about = this._userInfo.textContent;
        return this._userData;
    }

    setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userInfo.textContent = data.about;
    }
}